import { Injectable } from '@angular/core';

/**
 * Audiotarky integration for Kendraio Player.
 *
 * Issue #169 asks for two things:
 *  - retrieve artist/track metadata from Audiotarky's API using a Kendraio Flow, and
 *  - play Audiotarky tracks in Kendraio Player alongside the existing DSP tracks.
 *
 * Audiotarky's public API is a set of JSON indexes under
 * `https://www.audiotarky.com/$`.  A track index response looks like:
 *
 * {
 *   "pagination": { "next_page": "https://www.audiotarky.com/$/tracks/page/2/index.json" },
 *   "artists": [
 *     {
 *       "display_artist": "A Sol Mechanic x Handbook",
 *       "display_title": "All Along",
 *       "url": "https://www.audiotarky.com/$/.../track.audiotarky.mp3",
 *       "api": "https://www.audiotarky.com/$/artists/a-sol-mechanic-x-handbook/index.json",
 *       "payment_pointer": "$ilp.uphold.com/xnhGQ7QDrRrw"
 *     }
 *   ]
 * }
 *
 * The audio-player-block plays `data.url`, and the web-money block defaults to
 * `data.paymentPointer`.  This module keeps that contract by normalising the
 * Audiotarky payload (including the legacy `artists` array name) into player
 * tracks carrying both snake_case and camelCase payment pointer keys.
 */

export const AUDIOTARKY_API_BASE_URL = 'https://www.audiotarky.com/$';
export const AUDIOTARKY_MAX_PAGE_NUMBER = 1000000;

export type AudiotarkyErrorCode =
  | 'INVALID_INPUT'
  | 'EMPTY_INPUT'
  | 'INVALID_TRACK'
  | 'INVALID_RESPONSE'
  | 'UNAUTHORIZED'
  | 'NOT_FOUND'
  | 'RATE_LIMITED'
  | 'HTTP_ERROR'
  | 'NETWORK_ERROR';

/**
 * Typed error raised by every public Audiotarky helper.  Callers (including
 * Kendraio Flow error branches) can branch on `error.code` instead of parsing
 * messages, and malformed input never escapes as an unhandled TypeError.
 */
export class AudiotarkyError extends Error {
  readonly code: AudiotarkyErrorCode;
  readonly details?: any;

  constructor(code: AudiotarkyErrorCode, message: string, details?: any) {
    super(message);
    this.name = 'AudiotarkyError';
    this.code = code;
    this.details = details;
    // Required when targeting ES5/ES2015; harmless on ES2022 and keeps
    // `instanceof AudiotarkyError` working in transpiled test environments.
    Object.setPrototypeOf(this, AudiotarkyError.prototype);
  }
}

export interface AudiotarkyTrackInput {
  [key: string]: any;
}

export interface AudiotarkyPlayerTrack {
  id: string;
  display_artist: string;
  display_title: string;
  url: string;
  api: string | null;
  payment_pointer: string | null;
  paymentPointer: string | null;
  source: 'audiotarky';
}

export interface Dsp1PlayerTrack {
  id: string;
  display_artist: string;
  display_title: string;
  url: string;
  api: string | null;
  payment_pointer: string | null;
  paymentPointer: string | null;
  source: 'dsp1';
}

export type PlayerTrack = AudiotarkyPlayerTrack | Dsp1PlayerTrack;

export type AudiotarkyResourceKind = 'artists' | 'albums' | 'tracks' | 'artist' | 'album' | 'track';

export interface AudiotarkyResource {
  kind: AudiotarkyResourceKind;
  artist?: string;
  album?: string;
  track?: string;
  page?: number;
}

export interface NormalizeAudiotarkyOptions {
  /** Skip malformed individual tracks instead of failing the whole page. */
  skipInvalid?: boolean;
}

export interface AudiotarkyTracksPage {
  url: string;
  payload: any;
  tracks: AudiotarkyPlayerTrack[];
  nextPage: string | null;
}

export interface AudiotarkyCatalogResult {
  tracks: AudiotarkyPlayerTrack[];
  nextPage: string | null;
  payload: any;
}

export interface AudiotarkyCatalogLoaderOptions {
  /** Cache lifetime in milliseconds.  The interval is half-open: [loadedAt, loadedAt + ttlMs). */
  ttlMs?: number;
  /** Injectable clock used by tests. */
  now?: () => number;
}

export type AudiotarkyFetcher = (url: string) => Promise<any> | any;

function isRecord(value: any): value is Record<string, any> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function firstNonEmptyString(...values: any[]): string | null {
  for (const value of values) {
    if (typeof value === 'string' && value.trim().length > 0) {
      return value.trim();
    }
  }
  return null;
}

function requiredInputString(value: any, field: string): string {
  const result = firstNonEmptyString(value);
  if (result === null) {
    throw new AudiotarkyError('INVALID_INPUT', `${field} is required and must be a non-empty string`);
  }
  return result;
}

function requiredTrackString(value: any, field: string, index: number): string {
  const result = firstNonEmptyString(value);
  if (result === null) {
    throw new AudiotarkyError('INVALID_TRACK', `Audiotarky track at index ${index} is missing ${field}`);
  }
  return result;
}

function parseHttpUrl(value: string, field: string, code: AudiotarkyErrorCode): URL {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch (error) {
    throw new AudiotarkyError(code, `${field} must be an absolute http(s) URL, received: ${value}`);
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new AudiotarkyError(code, `${field} must use http(s), received: ${value}`);
  }
  return parsed;
}

function normalizeBaseUrl(value: string): string {
  const base = requiredInputString(value, 'Audiotarky base URL');
  parseHttpUrl(base, 'Audiotarky base URL', 'INVALID_INPUT');
  return base.replace(/\/+$/, '');
}

function pathSegment(value: any, field: string): string {
  const segment = requiredInputString(value, field);
  if (segment === '.' || segment === '..' || segment.includes('/') || segment.includes('\\')) {
    throw new AudiotarkyError('INVALID_INPUT', `${field} must be a single path segment`);
  }
  return encodeURIComponent(segment);
}

function normalizePageNumber(page: any): number | null {
  if (page === undefined || page === null) {
    return null;
  }
  if (!Number.isInteger(page) || page < 1 || page > AUDIOTARKY_MAX_PAGE_NUMBER) {
    throw new AudiotarkyError(
      'INVALID_INPUT',
      `page must be an integer between 1 and ${AUDIOTARKY_MAX_PAGE_NUMBER}`
    );
  }
  return page;
}

function stableTrackId(url: string): string {
  // Small deterministic FNV-1a hash so player track ids are stable across loads
  // without pulling in a non-deterministic uuid dependency.
  let hash = 0x811c9dc5;
  for (let i = 0; i < url.length; i++) {
    hash ^= url.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return `audiotarky-${(hash >>> 0).toString(16)}`;
}

function canonicalTrackUrl(url: string): string {
  return parseHttpUrl(url, 'url', 'INVALID_TRACK').href;
}
/**
 * Normalise one Audiotarky track (or an already-normalised player track) into
 * the shape consumed by Kendraio Player and the Web Monetization block.
 */
export function normalizeAudiotarkyTrack(raw: any, index = 0): AudiotarkyPlayerTrack {
  if (!isRecord(raw)) {
    throw new AudiotarkyError('INVALID_TRACK', `Audiotarky track at index ${index} must be an object`);
  }

  // Audiotarky detail responses may nest artist data; index responses do not.
  const artistSource = isRecord(raw.artist) ? raw.artist : {};
  const albumSource = isRecord(raw.album) ? raw.album : {};
  const audioSource = isRecord(raw.audio) ? raw.audio : {};

  const displayArtist = requiredTrackString(
    firstNonEmptyString(
      raw.display_artist,
      raw.displayArtist,
      raw.artist_name,
      raw.artistName,
      artistSource.display_artist,
      artistSource.displayArtist,
      artistSource.name,
      raw.artist
    ),
    'display_artist',
    index
  );
  const displayTitle = requiredTrackString(
    firstNonEmptyString(
      raw.display_title,
      raw.displayTitle,
      raw.title,
      raw.name,
      raw.track_name,
      raw.trackName
    ),
    'display_title',
    index
  );
  const rawUrl = requiredTrackString(
    firstNonEmptyString(
      raw.url,
      raw.audio_url,
      raw.audioUrl,
      raw.stream_url,
      raw.streamUrl,
      audioSource.url
    ),
    'url',
    index
  );
  const url = parseHttpUrl(rawUrl, 'url', 'INVALID_TRACK').href;

  const rawApi = firstNonEmptyString(
    raw.api,
    raw.api_url,
    raw.apiUrl,
    raw.details_url,
    raw.detailsUrl,
    artistSource.api
  );
  const api = rawApi === null ? null : parseHttpUrl(rawApi, 'api', 'INVALID_TRACK').href;

  const rawPaymentPointer = firstNonEmptyString(
    raw.payment_pointer,
    raw.paymentPointer,
    artistSource.payment_pointer,
    artistSource.paymentPointer,
    albumSource.payment_pointer,
    albumSource.paymentPointer,
    isRecord(raw.user) ? raw.user.payment_pointer : undefined,
    isRecord(raw.user) ? raw.user.paymentPointer : undefined
  );
  const paymentPointer = rawPaymentPointer === null ? null : rawPaymentPointer;

  return {
    id: firstNonEmptyString(raw.id, raw.uuid, raw.track_id, raw.trackId) || stableTrackId(url),
    display_artist: displayArtist,
    display_title: displayTitle,
    url,
    api,
    payment_pointer: paymentPointer,
    // The audio player's companion web-money block reads data.paymentPointer.
    paymentPointer,
    source: 'audiotarky'
  };
}
/**
 * Normalise a DSP1 / GraphQL track so Audiotarky and DSP1 entries can share a
 * single player queue.  The GraphQL query in issue #169 uses
 * `display_artist`, `display_title`, `id`, `user_id` and `user.payment_pointer`.
 */
export function normalizeDsp1Track(raw: any, index = 0): Dsp1PlayerTrack {
  if (!isRecord(raw)) {
    throw new AudiotarkyError('INVALID_TRACK', `DSP1 track at index ${index} must be an object`);
  }

  const userSource = isRecord(raw.user) ? raw.user : {};
  const displayArtist = requiredTrackString(
    firstNonEmptyString(raw.display_artist, raw.displayArtist, raw.artist, userSource.display_artist, userSource.name),
    'display_artist',
    index
  );
  const displayTitle = requiredTrackString(
    firstNonEmptyString(raw.display_title, raw.displayTitle, raw.title, raw.name),
    'display_title',
    index
  );
  const rawUrl = requiredTrackString(
    firstNonEmptyString(raw.url, raw.audio_url, raw.audioUrl, raw.stream_url, raw.streamUrl),
    'url',
    index
  );
  const url = parseHttpUrl(rawUrl, 'url', 'INVALID_TRACK').href;

  const rawApi = firstNonEmptyString(raw.api, raw.api_url, raw.apiUrl);
  const api = rawApi === null ? null : parseHttpUrl(rawApi, 'api', 'INVALID_TRACK').href;
  const rawPaymentPointer = firstNonEmptyString(
    raw.payment_pointer,
    raw.paymentPointer,
    userSource.payment_pointer,
    userSource.paymentPointer
  );
  const paymentPointer = rawPaymentPointer === null ? null : rawPaymentPointer;

  return {
    id: firstNonEmptyString(raw.id, raw.uuid) || stableTrackId(url),
    display_artist: displayArtist,
    display_title: displayTitle,
    url,
    api,
    payment_pointer: paymentPointer,
    paymentPointer,
    source: 'dsp1'
  };
}
function getAudiotarkyTrackList(payload: any): any[] | null {
  if (Array.isArray(payload)) {
    return payload;
  }
  if (!isRecord(payload)) {
    return null;
  }

  const directKeys = ['tracks', 'artists', 'items', 'results'];
  for (const key of directKeys) {
    if (Array.isArray(payload[key])) {
      return payload[key];
    }
  }

  for (const key of ['data', 'page']) {
    const nested = payload[key];
    if (Array.isArray(nested)) {
      return nested;
    }
    if (isRecord(nested)) {
      for (const nestedKey of directKeys) {
        if (Array.isArray(nested[nestedKey])) {
          return nested[nestedKey];
        }
      }
    }
  }

  for (const key of ['artist', 'album']) {
    const nested = payload[key];
    if (isRecord(nested)) {
      if (Array.isArray(nested.tracks)) {
        return nested.tracks;
      }
      if (Array.isArray(nested.artists)) {
        return nested.artists;
      }
    }
  }

  if (isRecord(payload.track)) {
    return [payload.track];
  }

  return null;
}

/**
 * Map an Audiotarky index/detail payload to a list of player tracks.  Both the
 * historical `artists` array name and the newer `tracks` array name are
 * accepted.  Invalid pages are rejected with a typed AudiotarkyError.
 */
export function normalizeAudiotarkyTracks(
  payload: any,
  options: NormalizeAudiotarkyOptions = {}
): AudiotarkyPlayerTrack[] {
  if (payload === null || payload === undefined) {
    throw new AudiotarkyError('INVALID_INPUT', 'Audiotarky payload is required');
  }
  const normalizeOptions = options === null || options === undefined ? {} : options;

  const list = getAudiotarkyTrackList(payload);
  if (list === null) {
    if (isRecord(payload) && Object.keys(payload).length === 0) {
      throw new AudiotarkyError('EMPTY_INPUT', 'Audiotarky payload is empty');
    }
    throw new AudiotarkyError(
      'INVALID_RESPONSE',
      'Audiotarky payload does not contain an artists or tracks array'
    );
  }
  if (list.length === 0) {
    throw new AudiotarkyError('EMPTY_INPUT', 'Audiotarky payload contains no tracks');
  }

  const tracks: AudiotarkyPlayerTrack[] = [];
  const invalid: string[] = [];
  const skipInvalid = normalizeOptions.skipInvalid === true;

  list.forEach((item, index) => {
    try {
      tracks.push(normalizeAudiotarkyTrack(item, index));
    } catch (error) {
      if (!skipInvalid) {
        invalid.push(error instanceof AudiotarkyError ? error.message : String(error));
      }
    }
  });

  if (invalid.length > 0) {
    throw new AudiotarkyError(
      'INVALID_TRACK',
      `Invalid Audiotarky track data: ${invalid.join('; ')}`,
      { invalid }
    );
  }
  if (tracks.length === 0) {
    throw new AudiotarkyError('EMPTY_INPUT', 'Audiotarky payload contains no playable tracks');
  }

  return tracks;
}
/**
 * Return the next page URL from an Audiotarky pagination object.  A missing or
 * blank `next_page` means this is the last page and returns null.
 */
export function extractAudiotarkyNextPage(payload: any): string | null {
  if (payload === null || payload === undefined) {
    throw new AudiotarkyError('INVALID_INPUT', 'Audiotarky payload is required');
  }
  if (!isRecord(payload)) {
    return null;
  }

  const pagination = isRecord(payload.pagination) ? payload.pagination : {};
  const rawNext =
    pagination.next_page !== undefined
      ? pagination.next_page
      : pagination.nextPage !== undefined
        ? pagination.nextPage
        : payload.next_page !== undefined
          ? payload.next_page
          : payload.nextPage;

  if (rawNext === undefined || rawNext === null) {
    return null;
  }
  if (typeof rawNext !== 'string') {
    throw new AudiotarkyError('INVALID_RESPONSE', 'pagination.next_page must be a string or null');
  }
  const nextPage = rawNext.trim();
  if (nextPage.length === 0) {
    return null;
  }
  return parseHttpUrl(nextPage, 'pagination.next_page', 'INVALID_RESPONSE').href;
}
/**
 * Build an Audiotarky API URL.  Slugs are encoded one path segment at a time;
 * page numbers are validated strictly and page 1 is the unparameterised index.
 */
export function buildAudiotarkyUrl(
  resource: AudiotarkyResource,
  baseUrl: string = AUDIOTARKY_API_BASE_URL
): string {
  if (!isRecord(resource)) {
    throw new AudiotarkyError('INVALID_INPUT', 'Audiotarky resource descriptor is required');
  }
  const base = normalizeBaseUrl(baseUrl);
  const kind = resource.kind;

  switch (kind) {
    case 'artists':
      return `${base}/artists/index.json`;
    case 'albums':
      return `${base}/albums/index.json`;
    case 'tracks': {
      const page = normalizePageNumber(resource.page);
      return page !== null && page > 1
        ? `${base}/tracks/page/${page}/index.json`
        : `${base}/tracks/index.json`;
    }
    case 'artist':
      if (resource.page !== undefined && resource.page !== null) {
        throw new AudiotarkyError('INVALID_INPUT', 'page is only supported for track discovery');
      }
      return `${base}/artists/${pathSegment(resource.artist, 'artist')}/index.json`;
    case 'album':
      if (resource.page !== undefined && resource.page !== null) {
        throw new AudiotarkyError('INVALID_INPUT', 'page is only supported for track discovery');
      }
      return `${base}/artists/${pathSegment(resource.artist, 'artist')}/${pathSegment(
        resource.album,
        'album'
      )}/index.json`;
    case 'track':
      if (resource.page !== undefined && resource.page !== null) {
        throw new AudiotarkyError('INVALID_INPUT', 'page is only supported for track discovery');
      }
      return `${base}/artists/${pathSegment(resource.artist, 'artist')}/${pathSegment(
        resource.album,
        'album'
      )}/${pathSegment(resource.track, 'track')}/index.json`;
    default:
      throw new AudiotarkyError('INVALID_INPUT', `Unsupported Audiotarky resource kind: ${kind}`);
  }
}
function defaultAudiotarkyFetcher(): AudiotarkyFetcher {
  if (typeof fetch !== 'function') {
    throw new AudiotarkyError('INVALID_INPUT', 'No fetch implementation is available');
  }
  return (url: string) =>
    fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
}

async function readAudiotarkyResponse(response: any): Promise<any> {
  if (!response || typeof response !== 'object') {
    throw new AudiotarkyError('INVALID_RESPONSE', 'Audiotarky response was not a valid response object');
  }

  const status = typeof response.status === 'number' ? response.status : 0;
  if (status === 401 || status === 403) {
    throw new AudiotarkyError(
      'UNAUTHORIZED',
      `Audiotarky request was refused with status ${status}`,
      { status }
    );
  }
  if (status === 404) {
    throw new AudiotarkyError('NOT_FOUND', 'Audiotarky resource was not found', { status });
  }
  if (status === 429) {
    throw new AudiotarkyError('RATE_LIMITED', 'Audiotarky rate limit exceeded', { status });
  }
  if (response.ok === false || status >= 400) {
    throw new AudiotarkyError(
      'HTTP_ERROR',
      `Audiotarky request failed with status ${status || 'unknown'}`,
      { status }
    );
  }

  let payload: any;
  if (typeof response.json === 'function') {
    try {
      payload = await response.json();
    } catch (error) {
      throw new AudiotarkyError('INVALID_RESPONSE', 'Audiotarky response was not valid JSON');
    }
  } else if (Object.prototype.hasOwnProperty.call(response, 'payload')) {
    payload = response.payload;
  } else if (Object.prototype.hasOwnProperty.call(response, 'body')) {
    if (typeof response.body !== 'string') {
      payload = response.body;
    } else {
      try {
        payload = JSON.parse(response.body);
      } catch (error) {
        throw new AudiotarkyError('INVALID_RESPONSE', 'Audiotarky response body was not valid JSON');
      }
    }
  } else {
    throw new AudiotarkyError('INVALID_RESPONSE', 'Audiotarky response did not contain JSON data');
  }

  if (payload === null || payload === undefined) {
    throw new AudiotarkyError('INVALID_RESPONSE', 'Audiotarky response contained no data');
  }
  return payload;
}
/**
 * Fetch and parse one Audiotarky JSON document.  CORS is enforced by
 * Audiotarky, so Kendraio Flows should pair this with the http-block
 * `useProxy` option when running in a browser without CORS headers.
 */
export async function fetchAudiotarkyJson(
  url: string,
  fetcher: AudiotarkyFetcher = defaultAudiotarkyFetcher()
): Promise<any> {
  const target = requiredInputString(url, 'Audiotarky URL');
  const requestUrl = parseHttpUrl(target, 'Audiotarky URL', 'INVALID_INPUT').href;
  if (typeof fetcher !== 'function') {
    throw new AudiotarkyError('INVALID_INPUT', 'A fetch implementation is required');
  }

  let response: any;
  try {
    response = await Promise.resolve(fetcher(requestUrl));
  } catch (error) {
    if (error instanceof AudiotarkyError) {
      throw error;
    }
    const message = error instanceof Error ? error.message : String(error);
    throw new AudiotarkyError('NETWORK_ERROR', `Audiotarky request failed: ${message}`);
  }

  return readAudiotarkyResponse(response);
}

/**
 * Resolve one Audiotarky resource and normalise it into player tracks.
 */
export async function fetchAudiotarkyTracks(
  resource: AudiotarkyResource,
  fetcher?: AudiotarkyFetcher
): Promise<AudiotarkyTracksPage> {
  const url = buildAudiotarkyUrl(resource);
  const payload = await fetchAudiotarkyJson(url, fetcher);
  return {
    url,
    payload,
    tracks: normalizeAudiotarkyTracks(payload),
    nextPage: extractAudiotarkyNextPage(payload)
  };
}
/**
 * Select a page of tracks using half-open [offset, offset + limit) semantics.
 * offset is zero-based; limit is optional and, when supplied, must be >= 1.
 */
export function selectAudiotarkyTracks<T>(tracks: T[], offset: number = 0, limit?: number): T[] {
  if (!Array.isArray(tracks)) {
    throw new AudiotarkyError('INVALID_INPUT', 'tracks must be an array');
  }
  if (!Number.isInteger(offset) || offset < 0) {
    throw new AudiotarkyError('INVALID_INPUT', 'offset must be a non-negative integer');
  }
  if (limit === undefined || limit === null) {
    return tracks.slice(offset);
  }
  if (!Number.isInteger(limit) || limit < 1) {
    throw new AudiotarkyError('INVALID_INPUT', 'limit must be a positive integer');
  }
  return tracks.slice(offset, offset + limit);
}

/**
 * Cache freshness uses a half-open interval [loadedAt, loadedAt + ttlMs).
 * Exactly at the expiry instant the cache is stale (returns false).
 */
export function isAudiotarkyCacheFresh(loadedAt: number, ttlMs: number, now: number): boolean {
  if (!Number.isFinite(loadedAt) || loadedAt < 0) {
    throw new AudiotarkyError('INVALID_INPUT', 'loadedAt must be a finite non-negative timestamp');
  }
  if (!Number.isFinite(ttlMs) || ttlMs <= 0) {
    throw new AudiotarkyError('INVALID_INPUT', 'ttlMs must be a positive finite number');
  }
  if (!Number.isFinite(now) || now < 0) {
    throw new AudiotarkyError('INVALID_INPUT', 'now must be a finite non-negative timestamp');
  }
  return now >= loadedAt && now < loadedAt + ttlMs;
}

/**
 * Merge existing DSP1 tracks and Audiotarky tracks into one player queue.
 * The first occurrence of a canonical URL wins, so concurrent loaders cannot
 * enqueue the same payable track twice (zero double-spend / double-play).
 */
export function mergePlayerTracks(dsp1Tracks: any, audiotarkyTracks: any): PlayerTrack[] {
  if (!Array.isArray(dsp1Tracks)) {
    throw new AudiotarkyError('INVALID_INPUT', 'dsp1Tracks must be an array');
  }
  if (!Array.isArray(audiotarkyTracks)) {
    throw new AudiotarkyError('INVALID_INPUT', 'audiotarkyTracks must be an array');
  }

  const merged: PlayerTrack[] = [];
  const seen = new Set<string>();
  const append = (track: PlayerTrack) => {
    const key = canonicalTrackUrl(track.url);
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    merged.push(track);
  };

  dsp1Tracks.forEach((track, index) => append(normalizeDsp1Track(track, index)));
  audiotarkyTracks.forEach((track, index) => append(normalizeAudiotarkyTrack(track, index)));
  return merged;
}
/**
 * Concurrency-safe catalogue loader.  Simultaneous `load()` calls share one
 * in-flight request; `invalidate()` bumps a generation so a slower, older
 * response can never overwrite a newer catalogue.
 */
export class AudiotarkyCatalogLoader {
  private cache: (AudiotarkyCatalogResult & { loadedAt: number }) | null = null;
  private inFlight: Promise<AudiotarkyCatalogResult> | null = null;
  private generation = 0;
  private readonly ttlMs: number;
  private readonly now: () => number;

  constructor(
    private readonly loadTracks: () => Promise<AudiotarkyCatalogResult> | AudiotarkyCatalogResult,
    options: AudiotarkyCatalogLoaderOptions = {}
  ) {
    if (typeof loadTracks !== 'function') {
      throw new AudiotarkyError('INVALID_INPUT', 'loadTracks must be a function');
    }
    const loaderOptions = options === null || options === undefined ? {} : options;
    const ttlMs = loaderOptions.ttlMs === undefined ? DEFAULT_CACHE_TTL_MS : loaderOptions.ttlMs;
    if (!Number.isFinite(ttlMs) || ttlMs <= 0) {
      throw new AudiotarkyError('INVALID_INPUT', 'ttlMs must be a positive finite number');
    }
    const now = loaderOptions.now === undefined ? Date.now : loaderOptions.now;
    if (typeof now !== 'function') {
      throw new AudiotarkyError('INVALID_INPUT', 'now must be a function');
    }
    this.ttlMs = ttlMs;
    this.now = now;
  }

  getCached(): AudiotarkyCatalogResult | null {
    return this.cache;
  }

  async load(force: boolean = false): Promise<AudiotarkyCatalogResult> {
    const now = this.now();
    if (!force && this.cache && isAudiotarkyCacheFresh(this.cache.loadedAt, this.ttlMs, now)) {
      return this.cache;
    }
    if (this.inFlight) {
      return this.inFlight;
    }

    const generation = this.generation;
    const inFlight = (async () => {
      const result = await this.loadTracks();
      if (!isRecord(result) || !Array.isArray(result.tracks)) {
        throw new AudiotarkyError('INVALID_RESPONSE', 'Audiotarky catalogue result must include a tracks array');
      }
      if (generation === this.generation) {
        this.cache = { ...result, loadedAt: this.now() };
      }
      return result;
    })();

    this.inFlight = inFlight;
    try {
      return await inFlight;
    } finally {
      if (this.inFlight === inFlight) {
        this.inFlight = null;
      }
    }
  }

  invalidate(): void {
    this.generation += 1;
    this.cache = null;
    this.inFlight = null;
  }
}
/**
 * Injectable facade for Kendraio Flows and Angular components.  The pure
 * functions above remain directly importable and are what the unit tests use.
 */
@Injectable({
  providedIn: 'root'
})
export class AudiotarkyService {
  readonly baseUrl = AUDIOTARKY_API_BASE_URL;

  buildUrl(resource: AudiotarkyResource): string {
    return buildAudiotarkyUrl(resource, this.baseUrl);
  }

  normalizeTracks(payload: any, options?: NormalizeAudiotarkyOptions): AudiotarkyPlayerTrack[] {
    return normalizeAudiotarkyTracks(payload, options);
  }

  nextPage(payload: any): string | null {
    return extractAudiotarkyNextPage(payload);
  }

  fetchTracks(resource: AudiotarkyResource, fetcher?: AudiotarkyFetcher): Promise<AudiotarkyTracksPage> {
    return fetchAudiotarkyTracks(resource, fetcher);
  }

  mergeWithDsp1(dsp1Tracks: any, audiotarkyTracks: any): PlayerTrack[] {
    return mergePlayerTracks(dsp1Tracks, audiotarkyTracks);
  }
}
const DEFAULT_CACHE_TTL_MS = 60 * 1000;