import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, defer, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

export interface ServiceWorkerStatus {
  readonly lastModified: Date | null;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerInfoService {
  private readonly isBrowser: boolean;
  private readonly statusInternal$: Observable<ServiceWorkerStatus>;

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.statusInternal$ = defer(() => this.isBrowser ? this.requestStatus() : of({ lastModified: null })).pipe(
      shareReplay(1)
    );
  }

  get status$(): Observable<ServiceWorkerStatus> {
    return this.statusInternal$;
  }

  private requestStatus(): Observable<ServiceWorkerStatus> {
    return this.requestManifestTimestamp().pipe(
      map(timestamp => ({ lastModified: timestamp })),
      catchError(() => of({ lastModified: null }))
    );
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
      }),
      catchError(() => of(null))
    );
  }
}
