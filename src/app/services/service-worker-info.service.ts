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
  private readonly isBrowser: boolean;
  private readonly statusInternal$: Observable<ServiceWorkerStatus>;
  private readonly updateAvailableInternal$: Observable<boolean>;

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.statusInternal$ = defer(() => this.isBrowser ? this.requestStatus() : of({ lastModified: null })).pipe(
      shareReplay(1)
    );
    this.updateAvailableInternal$ = this.statusInternal$.pipe(
      switchMap(status => {
        if (!status.lastModified) return of(false);
        return this.requestLatestManifestTimestamp().pipe(
          map(latest => latest ? latest > status.lastModified : false),
          catchError(() => of(false))
        );
      }),
      shareReplay(1)
    );
  }

  get status$(): Observable<ServiceWorkerStatus> {
    return this.statusInternal$;
  }

  get updateAvailable$(): Observable<boolean> {
    return this.updateAvailableInternal$;
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

  private requestLatestManifestTimestamp(): Observable<Date | null> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    });
    return this.http.get<{ timestamp?: number }>('/ngsw.json', { headers }).pipe(
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
