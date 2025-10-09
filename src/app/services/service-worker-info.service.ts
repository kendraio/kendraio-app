import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, defer, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';

export interface ServiceWorkerStatus {
  readonly lastModified: Date | null;
  readonly supported: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerInfoService {
  private readonly refreshTrigger$ = new BehaviorSubject<void>(undefined);
  private readonly isBrowser: boolean;
  private readonly statusInternal$: Observable<ServiceWorkerStatus>;

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.statusInternal$ = this.refreshTrigger$.pipe(
      switchMap(() => this.isBrowser ? this.requestStatus() : of({ lastModified: null, supported: false })),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  get status$(): Observable<ServiceWorkerStatus> {
    return this.statusInternal$;
  }

  refresh(): void {
    if (this.isBrowser) {
      this.refreshTrigger$.next();
    }
  }

  async reset(): Promise<void> {
    if (!this.isBrowser) {
      return;
    }

    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }

    if ('caches' in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((key) => caches.delete(key)));
    }

    this.refresh();

    if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
      window.location.reload();
    }
  }

  private requestStatus(): Observable<ServiceWorkerStatus> {
    return defer(() => this.http.request<void>('HEAD', '/ngsw-worker.js', { observe: 'response' })).pipe(
      switchMap((response: HttpResponse<void>) => {
        const lastModified = this.extractLastModified(response);

        if (lastModified) {
          return of({
            lastModified,
            supported: true
          });
        }

        return this.requestManifestTimestamp().pipe(
          map((manifestTimestamp) => ({
            lastModified: manifestTimestamp,
            supported: true
          })),
          catchError((manifestError) => {
            console.warn('Unable to load service worker manifest metadata', manifestError);
            return of({
              lastModified: null,
              supported: true
            });
          })
        );
      }),
      catchError((error) => {
        console.warn('Unable to load service worker metadata', error);
        const supported = 'serviceWorker' in navigator;

        if (!supported) {
          return of({ lastModified: null, supported: false });
        }

        return this.requestManifestTimestamp().pipe(
          map((manifestTimestamp) => ({
            lastModified: manifestTimestamp,
            supported
          })),
          catchError((manifestError) => {
            console.warn('Unable to load service worker manifest metadata after service worker request failed', manifestError);
            return of({ lastModified: null, supported });
          })
        );
      })
    );
  }

  private extractLastModified(response: HttpResponse<void>): Date | null {
    const lastModifiedHeader = response.headers.get('last-modified');

    if (!lastModifiedHeader) {
      return null;
    }

    const timestamp = Date.parse(lastModifiedHeader);
    return Number.isNaN(timestamp) ? null : new Date(timestamp);
  }

  private requestManifestTimestamp(): Observable<Date | null> {
    return this.http.get<{ timestamp?: number }>('/ngsw.json').pipe(
      map((manifest) => {
        const { timestamp } = manifest ?? {};

        if (typeof timestamp !== 'number' || !Number.isFinite(timestamp)) {
          return null;
        }

        const manifestDate = new Date(timestamp);
        return Number.isNaN(manifestDate.getTime()) ? null : manifestDate;
      })
    );
  }
}
