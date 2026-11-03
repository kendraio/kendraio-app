import {
  AUDIOTARKY_API_BASE_URL,
  AUDIOTARKY_MAX_PAGE_NUMBER,
  AudiotarkyCatalogLoader,
  AudiotarkyError,
  buildAudiotarkyUrl,
  extractAudiotarkyNextPage,
  fetchAudiotarkyJson,
  fetchAudiotarkyTracks,
  isAudiotarkyCacheFresh,
  mergePlayerTracks,
  normalizeAudiotarkyTrack,
  normalizeAudiotarkyTracks,
  normalizeDsp1Track,
  selectAudiotarkyTracks
} from './audiotarky.service';

// Payload shape copied from the Audiotarky API examples in issue #169.
const TRACK_ALL_ALONG = {
  display_artist: 'A Sol Mechanic x Handbook',
  display_title: 'All Along',
  url:
    'https://www.audiotarky.com/$/a-sol-mechanic-x-handbook/mindfulness/all-along/9ff2920a18a1f97929d5e602765d5a1b.audiotarky.mp3',
  api: 'https://www.audiotarky.com/$/artists/a-sol-mechanic-x-handbook/index.json',
  payment_pointer: '$ilp.uphold.com/xnhGQ7QDrRrw'
};

const TRACK_AGREER = {
  display_artist: 'Actual Bird',
  display_title: 'The Agreer',
  url:
    'https://www.audiotarky.com/$/actual-bird/the-agreer/the-agreer/1bb33df2c64bcec6267f20f9157bcd99.audiotarky.mp3',
  payment_pointer: '$ilp.uphold.com/JUrGh2M7aBK4'
};

const TRACK_MTN = {
  display_artist: 'Alice Psychic',
  display_title: 'Mountain Landscape [BAM005]',
  url:
    'https://www.audiotarky.com/$/alice-psychic/mountain-landscape/mountain-landscape-bam005/26334d99d425c7c185b315a8adcb8213.audiotarky.mp3',
  payment_pointer: null
};

const NEXT_PAGE = 'https://www.audiotarky.com/$/tracks/page/2/index.json';

const ISSUE_169_PAGE = {
  pagination: {
    current_page: 'https://www.audiotarky.com/$/tracks/index.json',
    page_number: 1,
    total_pages: 2,
    previous_page: null,
    next_page: NEXT_PAGE
  },
  artists: [TRACK_ALL_ALONG, TRACK_AGREER, TRACK_MTN]
};

const LAST_PAGE = {
  pagination: {
    page_number: 2,
    total_pages: 2,
    previous_page: 'https://www.audiotarky.com/$/tracks/index.json',
    next_page: null
  },
  tracks: [TRACK_AGREER]
};

const DSP1_TRACK = {
  id: 'dsp1-track-1',
  display_artist: 'DSP1 Artist',
  display_title: 'DSP1 Track',
  url: 'https://dsp1.example/tracks/1.mp3',
  user: { payment_pointer: '$ilp.uphold.com/DSP1Pointer' }
};

function jsonFetcher(payload: any, status = 200) {
  return (url: string) => {
    capturedUrls.push(url);
    return Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: async () => payload
    });
  };
}

let capturedUrls: string[] = [];

function statusFetcher(status: number) {
  return (url: string) => {
    capturedUrls.push(url);
    return Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: async () => ({})
    });
  };
}

async function captureError(action: () => any): Promise<AudiotarkyError> {
  try {
    await action();
  } catch (error) {
    return error as AudiotarkyError;
  }
  throw new Error('Expected an AudiotarkyError but no error was thrown');
}

function expectErrorCode(error: AudiotarkyError, code: string) {
  expect(error instanceof AudiotarkyError).toBeTrue();
  expect(error.code).toBe(code);
}

describe('Audiotarky Player integration (issue #169)', () => {
  beforeEach(() => {
    capturedUrls = [];
  });

  describe('happy path', () => {
    it('normalizes the issue #169 Audiotarky page into playable player tracks', () => {
      const tracks = normalizeAudiotarkyTracks(ISSUE_169_PAGE);

      expect(tracks.length).toBe(3);
      expect(tracks[0]).toEqual(
        jasmine.objectContaining({
          display_artist: TRACK_ALL_ALONG.display_artist,
          display_title: TRACK_ALL_ALONG.display_title,
          url: TRACK_ALL_ALONG.url,
          api: TRACK_ALL_ALONG.api,
          payment_pointer: TRACK_ALL_ALONG.payment_pointer,
          paymentPointer: TRACK_ALL_ALONG.payment_pointer,
          source: 'audiotarky'
        })
      );
      // audio-player-block plays data.url; every track must expose it.
      expect(tracks.every(track => !!track.url)).toBeTrue();
      expect(tracks[2].payment_pointer).toBeNull();
      expect(tracks[2].paymentPointer).toBeNull();
    });

    it('extracts pagination.next_page and returns null on the last page', () => {
      expect(extractAudiotarkyNextPage(ISSUE_169_PAGE)).toBe(NEXT_PAGE);
      expect(extractAudiotarkyNextPage(LAST_PAGE)).toBeNull();
    });

    it('builds Audiotarky discovery and detail URLs', () => {
      expect(buildAudiotarkyUrl({ kind: 'artists' })).toBe(`${AUDIOTARKY_API_BASE_URL}/artists/index.json`);
      expect(buildAudiotarkyUrl({ kind: 'albums' })).toBe(`${AUDIOTARKY_API_BASE_URL}/albums/index.json`);
      expect(buildAudiotarkyUrl({ kind: 'tracks' })).toBe(`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`);
      expect(buildAudiotarkyUrl({ kind: 'tracks', page: 2 })).toBe(
        `${AUDIOTARKY_API_BASE_URL}/tracks/page/2/index.json`
      );
      expect(buildAudiotarkyUrl({ kind: 'artist', artist: 'chris-foster' })).toBe(
        `${AUDIOTARKY_API_BASE_URL}/artists/chris-foster/index.json`
      );
      expect(buildAudiotarkyUrl({ kind: 'album', artist: 'chris-foster', album: 'hadelin' })).toBe(
        `${AUDIOTARKY_API_BASE_URL}/artists/chris-foster/hadelin/index.json`
      );
      expect(
        buildAudiotarkyUrl({
          kind: 'track',
          artist: 'chris-foster',
          album: 'hadelin',
          track: 'the-seeds-of-love'
        })
      ).toBe(`${AUDIOTARKY_API_BASE_URL}/artists/chris-foster/hadelin/the-seeds-of-love/index.json`);
    });

    it('fetches and normalizes a page through the fetch helper', async () => {
      const page = await fetchAudiotarkyTracks({ kind: 'tracks' }, jsonFetcher(ISSUE_169_PAGE));

      expect(capturedUrls).toEqual([`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`]);
      expect(page.tracks.length).toBe(3);
      expect(page.nextPage).toBe(NEXT_PAGE);
      expect(page.payload).toBe(ISSUE_169_PAGE);
    });
  });
});

describe('Audiotarky null and empty input handling', () => {
  beforeEach(() => {
    capturedUrls = [];
  });

  it('rejects null and undefined payloads with an explicit typed error', async () => {
    for (const value of [null, undefined]) {
      const error = await captureError(() => normalizeAudiotarkyTracks(value));
      expectErrorCode(error, 'INVALID_INPUT');
      expect(error.message).toContain('payload is required');
    }
  });

  it('rejects null arguments across every public helper without a TypeError', async () => {
    expectErrorCode(await captureError(() => normalizeAudiotarkyTrack(null)), 'INVALID_TRACK');
    expectErrorCode(await captureError(() => normalizeDsp1Track(null)), 'INVALID_TRACK');
    expectErrorCode(await captureError(() => extractAudiotarkyNextPage(null)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => buildAudiotarkyUrl(null as any)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => selectAudiotarkyTracks(null as any)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => mergePlayerTracks(null, [])), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => mergePlayerTracks([], null)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => fetchAudiotarkyJson(null as any, jsonFetcher(ISSUE_169_PAGE))), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => fetchAudiotarkyJson('https://example.com/x', null as any)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => isAudiotarkyCacheFresh(null as any, 1000, 0)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => new AudiotarkyCatalogLoader(null as any)), 'INVALID_INPUT');

    // Optional argument containers may be null without causing a TypeError.
    expect(normalizeAudiotarkyTracks(ISSUE_169_PAGE, null as any).length).toBe(3);
    expect(new AudiotarkyCatalogLoader(async () => ({ tracks: [], nextPage: null, payload: {} }), null as any)).toBeTruthy();
  });

  it('rejects empty payloads, empty collections and whitespace-only fields', async () => {
    expectErrorCode(await captureError(() => normalizeAudiotarkyTracks({})), 'EMPTY_INPUT');
    expectErrorCode(await captureError(() => normalizeAudiotarkyTracks({ artists: [] })), 'EMPTY_INPUT');
    expectErrorCode(await captureError(() => normalizeAudiotarkyTracks({ tracks: [] })), 'EMPTY_INPUT');

    const whitespaceOnly = await captureError(() =>
      normalizeAudiotarkyTracks({
        artists: [{ display_artist: '   ', display_title: '', url: '   ' }]
      })
    );
    expectErrorCode(whitespaceOnly, 'INVALID_TRACK');
    expect(whitespaceOnly.message).toContain('display_artist');

    expectErrorCode(await captureError(() => buildAudiotarkyUrl({ kind: 'artist', artist: '   ' })), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => buildAudiotarkyUrl({ kind: 'tracks', page: 0 })), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => fetchAudiotarkyJson('   ', jsonFetcher(ISSUE_169_PAGE))), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => selectAudiotarkyTracks([], 0, 0)), 'INVALID_INPUT');
  });

  it('treats a blank next_page as the last page rather than corrupting state', () => {
    expect(extractAudiotarkyNextPage({ pagination: { next_page: '' } })).toBeNull();
    expect(extractAudiotarkyNextPage({ pagination: { next_page: '   ' } })).toBeNull();
    expect(extractAudiotarkyNextPage({ pagination: {} })).toBeNull();
  });

  it('can skip malformed individual tracks on a partially bad page', () => {
    const tracks = normalizeAudiotarkyTracks(
      { artists: [TRACK_ALL_ALONG, { display_artist: 'Broken', display_title: 'No URL' }, TRACK_AGREER] },
      { skipInvalid: true }
    );
    expect(tracks.length).toBe(2);
    expect(tracks.map(track => track.display_title)).toEqual(['All Along', 'The Agreer']);
  });
});
describe('Audiotarky boundary handling', () => {
  it('selects tracks using strict half-open [offset, offset + limit) bounds', async () => {
    const tracks = ['a', 'b', 'c'];

    expect(selectAudiotarkyTracks(tracks, 0, 3)).toEqual(['a', 'b', 'c']);
    expect(selectAudiotarkyTracks(tracks, 0, 1)).toEqual(['a']);
    expect(selectAudiotarkyTracks(tracks, 1, 2)).toEqual(['b', 'c']);
    expect(selectAudiotarkyTracks(tracks, 2, 1)).toEqual(['c']);
    expect(selectAudiotarkyTracks(tracks, 3, 1)).toEqual([]);
    expect(selectAudiotarkyTracks(tracks, 4, 1)).toEqual([]);
    expect(selectAudiotarkyTracks(tracks, 0)).toEqual(['a', 'b', 'c']);

    expectErrorCode(await captureError(() => selectAudiotarkyTracks(tracks, -1, 1)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => selectAudiotarkyTracks(tracks, 1.5, 1)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => selectAudiotarkyTracks(tracks, 0, -1)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => selectAudiotarkyTracks(tracks, 0, 1.5)), 'INVALID_INPUT');
  });

  it('accepts page 1 and the exact maximum page, rejecting one beyond the boundary', async () => {
    expect(buildAudiotarkyUrl({ kind: 'tracks', page: 1 })).toBe(`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`);
    expect(buildAudiotarkyUrl({ kind: 'tracks', page: AUDIOTARKY_MAX_PAGE_NUMBER })).toBe(
      `${AUDIOTARKY_API_BASE_URL}/tracks/page/${AUDIOTARKY_MAX_PAGE_NUMBER}/index.json`
    );
    expectErrorCode(
      await captureError(() => buildAudiotarkyUrl({ kind: 'tracks', page: AUDIOTARKY_MAX_PAGE_NUMBER + 1 })),
      'INVALID_INPUT'
    );
    expectErrorCode(await captureError(() => buildAudiotarkyUrl({ kind: 'tracks', page: -1 })), 'INVALID_INPUT');
  });

  it('evaluates cache freshness strictly at the half-open interval boundary', async () => {
    expect(isAudiotarkyCacheFresh(1000, 100, 999)).toBeFalse();
    expect(isAudiotarkyCacheFresh(1000, 100, 1000)).toBeTrue();
    expect(isAudiotarkyCacheFresh(1000, 100, 1099)).toBeTrue();
    expect(isAudiotarkyCacheFresh(1000, 100, 1100)).toBeFalse();
    expect(isAudiotarkyCacheFresh(1000, 100, 1200)).toBeFalse();

    expectErrorCode(await captureError(() => isAudiotarkyCacheFresh(1000, 0, 1000)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => isAudiotarkyCacheFresh(-1, 100, 1000)), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => isAudiotarkyCacheFresh(1000, 100, -1)), 'INVALID_INPUT');
  });
});
describe('Audiotarky negative and malformed input handling', () => {
  beforeEach(() => {
    capturedUrls = [];
  });

  it('refuses unauthorized, forbidden, missing and rate-limited responses with typed codes', async () => {
    for (const status of [401, 403]) {
      const error = await captureError(() =>
        fetchAudiotarkyJson(`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`, statusFetcher(status))
      );
      expectErrorCode(error, 'UNAUTHORIZED');
      expect(error.details).toEqual({ status });
    }

    expectErrorCode(
      await captureError(() => fetchAudiotarkyJson(`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`, statusFetcher(404))),
      'NOT_FOUND'
    );
    expectErrorCode(
      await captureError(() => fetchAudiotarkyJson(`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`, statusFetcher(429))),
      'RATE_LIMITED'
    );
    expectErrorCode(
      await captureError(() => fetchAudiotarkyJson(`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`, statusFetcher(500))),
      'HTTP_ERROR'
    );
  });

  it('rejects malformed JSON, network failures and malformed payloads', async () => {
    const badJsonFetcher = () =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => {
          throw new SyntaxError('Unexpected token');
        }
      });
    expectErrorCode(
      await captureError(() => fetchAudiotarkyJson(`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`, badJsonFetcher)),
      'INVALID_RESPONSE'
    );

    const networkFetcher = () => {
      throw new Error('socket closed');
    };
    const networkError = await captureError(() =>
      fetchAudiotarkyJson(`${AUDIOTARKY_API_BASE_URL}/tracks/index.json`, networkFetcher)
    );
    expectErrorCode(networkError, 'NETWORK_ERROR');
    expect(networkError.message).toContain('socket closed');

    expectErrorCode(await captureError(() => normalizeAudiotarkyTracks({ status: 'ok' })), 'INVALID_RESPONSE');
    expectErrorCode(
      await captureError(() => normalizeAudiotarkyTracks({ artists: [{ display_artist: 'A', display_title: 'B' }] })),
      'INVALID_TRACK'
    );
    expectErrorCode(
      await captureError(() =>
        normalizeAudiotarkyTracks({ artists: [{ ...TRACK_ALL_ALONG, url: 'javascript:alert(1)' }] })
      ),
      'INVALID_TRACK'
    );
    expectErrorCode(
      await captureError(() => extractAudiotarkyNextPage({ pagination: { next_page: 'ftp://example.com/x' } })),
      'INVALID_RESPONSE'
    );
    expectErrorCode(
      await captureError(() => extractAudiotarkyNextPage({ pagination: { next_page: 42 } })),
      'INVALID_RESPONSE'
    );
  });

  it('rejects resource path traversal and unsupported resource types', async () => {
    expectErrorCode(await captureError(() => buildAudiotarkyUrl({ kind: 'artist', artist: '../admin' })), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => buildAudiotarkyUrl({ kind: 'artist', artist: 'a/b' })), 'INVALID_INPUT');
    expectErrorCode(await captureError(() => buildAudiotarkyUrl({ kind: 'podcast' as any })), 'INVALID_INPUT');
    expectErrorCode(
      await captureError(() => buildAudiotarkyUrl({ kind: 'artist', artist: 'ok', page: 2 })),
      'INVALID_INPUT'
    );
  });
});
describe('Audiotarky concurrency and cache atomicity', () => {
  it('coalesces simultaneous catalogue loads into one request', async () => {
    let calls = 0;
    const expectedTracks = normalizeAudiotarkyTracks(ISSUE_169_PAGE);
    const loader = new AudiotarkyCatalogLoader(
      async () => {
        calls += 1;
        await new Promise(resolve => setTimeout(resolve, 5));
        return { tracks: expectedTracks, nextPage: NEXT_PAGE, payload: ISSUE_169_PAGE };
      },
      { ttlMs: 1000, now: () => 1000 }
    );

    const results = await Promise.all([loader.load(), loader.load(), loader.load(), loader.load(), loader.load()]);

    expect(calls).toBe(1);
    expect(results.length).toBe(5);
    expect(results[0]).toBe(results[1]);
    expect(results[0].tracks.length).toBe(3);
    expect(loader.getCached()).not.toBeNull();
  });

  it('honours the cache TTL boundary and reloads exactly at expiry', async () => {
    let now = 1000;
    let calls = 0;
    const expectedTracks = normalizeAudiotarkyTracks(ISSUE_169_PAGE);
    const loader = new AudiotarkyCatalogLoader(
      async () => {
        calls += 1;
        return { tracks: expectedTracks, nextPage: null, payload: ISSUE_169_PAGE };
      },
      { ttlMs: 100, now: () => now }
    );

    await loader.load();
    now = 1099;
    await loader.load();
    expect(calls).toBe(1);

    now = 1100;
    await loader.load();
    expect(calls).toBe(2);
  });

  it('does not let a stale in-flight response overwrite a newer catalogue after invalidate', async () => {
    let calls = 0;
    let resolveOld: (value: any) => void;
    let resolveNew: (value: any) => void;
    const oldTracks = normalizeAudiotarkyTracks({ artists: [TRACK_ALL_ALONG] });
    const newTracks = normalizeAudiotarkyTracks({ artists: [TRACK_AGREER] });

    const loader = new AudiotarkyCatalogLoader(
      () => {
        calls += 1;
        return new Promise(resolve => {
          if (calls === 1) {
            resolveOld = resolve;
          } else {
            resolveNew = resolve;
          }
        });
      },
      { ttlMs: 1000, now: () => 100 }
    );

    const oldLoad = loader.load();
    loader.invalidate();
    const newLoad = loader.load();

    resolveNew({ tracks: newTracks, nextPage: null, payload: LAST_PAGE });
    await newLoad;
    resolveOld({ tracks: oldTracks, nextPage: null, payload: ISSUE_169_PAGE });
    await oldLoad;

    expect(calls).toBe(2);
    expect(loader.getCached().tracks[0].url).toBe(TRACK_AGREER.url);
  });

  it('deduplicates payable URLs so concurrent queue merges cannot double-play them', () => {
    const audiotarkyTracks = normalizeAudiotarkyTracks(ISSUE_169_PAGE);
    const duplicate = { ...audiotarkyTracks[0] };

    const merged = mergePlayerTracks([DSP1_TRACK], [...audiotarkyTracks, duplicate, audiotarkyTracks[1]]);

    expect(merged.length).toBe(4);
    const urls = merged.map(track => track.url);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls[0]).toBe(DSP1_TRACK.url);
  });
});
describe('Audiotarky defect regression', () => {
  it('regression: Audiotarky tracks are not discoverable or playable in Kendraio Player', () => {
    const audiotarkyTracks = normalizeAudiotarkyTracks(ISSUE_169_PAGE);
    const merged = mergePlayerTracks([DSP1_TRACK], audiotarkyTracks);

    // Before this fix there was no normalizer at all: Audiotarky metadata could
    // not become a player track.  These assertions prove the defect is closed.
    expect(audiotarkyTracks.length).toBe(3);
    expect(audiotarkyTracks[0].url).toBe(TRACK_ALL_ALONG.url);
    expect(audiotarkyTracks[0].paymentPointer).toBe(TRACK_ALL_ALONG.payment_pointer);
    expect(audiotarkyTracks[0].source).toBe('audiotarky');

    // Audiotarky tracks play alongside the existing DSP1 tracks.
    expect(merged.length).toBe(4);
    expect(merged.map(track => track.source)).toEqual(['dsp1', 'audiotarky', 'audiotarky', 'audiotarky']);
    expect(merged[0].url).toBe(DSP1_TRACK.url);
    expect(merged[1].url).toBe(TRACK_ALL_ALONG.url);
    expect(merged[1].paymentPointer).toBe('$ilp.uphold.com/xnhGQ7QDrRrw');

    // The pagination URL lets a Kendraio Flow continue to page 2.
    expect(extractAudiotarkyNextPage(ISSUE_169_PAGE)).toBe(NEXT_PAGE);
    expect(extractAudiotarkyNextPage(LAST_PAGE)).toBeNull();
  });
});