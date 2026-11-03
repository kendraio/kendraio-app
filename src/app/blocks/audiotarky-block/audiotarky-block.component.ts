import { Component } from '@angular/core';
import { get } from 'lodash-es';
import { BaseBlockComponent } from '../base-block/base-block.component';
import {
  AudiotarkyError,
  AudiotarkyResource,
  buildAudiotarkyUrl,
  extractAudiotarkyNextPage,
  fetchAudiotarkyJson,
  normalizeAudiotarkyTracks
} from '../../services/audiotarky.service';

const DEFAULT_PROXY_URL = 'https://proxy.kendra.io/';

/**
 * Kendraio Flow block that retrieves Audiotarky artist/album/track metadata and
 * emits player-ready tracks (the audio-player-block plays `data.url`).
 *
 * Audiotarky's API does not always send CORS headers, so `useProxy: true`
 * sends the request through the Kendraio CORS proxy using the same
 * `Target-URL` convention as the existing http-block.
 */
@Component({
  selector: 'app-audiotarky-block',
  templateUrl: './audiotarky-block.component.html',
  styleUrls: ['./audiotarky-block.component.scss']
})
export class AudiotarkyBlockComponent extends BaseBlockComponent {
  resource: AudiotarkyResource = { kind: 'tracks' };
  useProxy = false;
  proxyUrl = DEFAULT_PROXY_URL;

  tracks = [];
  nextPage: string | null = null;
  isLoading = false;
  hasError = false;
  errorCode = '';
  errorMessage = '';

  onConfigUpdate(config: any) {
    const resourceConfig = get(config, 'resource', {});
    const kind = get(resourceConfig, 'kind', get(config, 'kind', 'tracks'));
    this.resource = {
      kind,
      artist: get(resourceConfig, 'artist', get(config, 'artist')),
      album: get(resourceConfig, 'album', get(config, 'album')),
      track: get(resourceConfig, 'track', get(config, 'track')),
      page: get(resourceConfig, 'page', get(config, 'page'))
    };
    this.useProxy = get(config, 'useProxy', false);
    this.proxyUrl = get(config, 'proxyUrl', DEFAULT_PROXY_URL);
  }

  async onData(data: any, firstChange: boolean) {
    this.isLoading = true;
    this.hasError = false;
    this.errorCode = '';
    this.errorMessage = '';
    this.tracks = [];
    this.nextPage = null;

    try {
      const targetUrl = buildAudiotarkyUrl(this.resource);
      const requestUrl = this.useProxy ? this.proxyUrl : targetUrl;
      const headers: Record<string, string> = { Accept: 'application/json' };
      if (this.useProxy) {
        headers['Target-URL'] = targetUrl;
      }

      const payload = await fetchAudiotarkyJson(requestUrl, (url: string) =>
        fetch(url, { method: 'GET', headers })
      );

      this.tracks = normalizeAudiotarkyTracks(payload);
      this.nextPage = extractAudiotarkyNextPage(payload);
      this.output.emit(this.tracks);
    } catch (error) {
      this.hasError = true;
      this.errorCode = error instanceof AudiotarkyError ? error.code : 'UNKNOWN';
      this.errorMessage = error instanceof Error ? error.message : String(error);
    } finally {
      this.isLoading = false;
    }
  }
}