import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, defer, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';

export interface ServiceWorkerStatus {
  readonly lastModified: Date | null;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerInfoService {
  readonly status$: Observable<ServiceWorkerStatus>;
  readonly updateAvailable$: Observable<boolean>;

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    const isBrowser = isPlatformBrowser(platformId);
    
    this.status$ = defer(() => 
      isBrowser ? this.fetchManifestTimestamp(false) : of({ lastModified: null })
    ).pipe(shareReplay(1));
    
    this.updateAvailable$ = this.status$.pipe(
      switchMap(status => {
        if (!status.lastModified) return of(false);
        return this.fetchManifestTimestamp(true).pipe(
          map(latest => latest.lastModified ? latest.lastModified > status.lastModified : false),
          catchError(() => of(false))
        );
      }),
      shareReplay(1)
    );
  }

  private fetchManifestTimestamp(bypassCache: boolean): Observable<ServiceWorkerStatus> {
    const headers = bypassCache
      ? new HttpHeaders({
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'ngsw-bypass': 'true'
        })
      : undefined;

    const url = bypassCache ? '/ngsw.json?ngsw-bypass=true' : '/ngsw.json';

    return this.http.get<{ timestamp?: number }>(url, { headers }).pipe(
      map(manifest => {
        const timestamp = manifest?.timestamp;
        if (typeof timestamp !== 'number' || !Number.isFinite(timestamp)) {
          return { lastModified: null };
        }
        const date = new Date(timestamp);
        return { lastModified: Number.isNaN(date.getTime()) ? null : date };
      }),
      catchError(() => of({ lastModified: null }))
    );
  }
}

