import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ServiceWorkerStatus {
  readonly lastModified: Date | null;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerInfoService {
  status: ServiceWorkerStatus = { lastModified: null };
  updateAvailable = false;

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    if (isPlatformBrowser(platformId)) {
      (async () => {
        try {
          this.status = await this.fetchManifestTimestamp(false).toPromise();
          
          if (this.status.lastModified) {
            const latest = await this.fetchManifestTimestamp(true).toPromise();
            this.updateAvailable = latest.lastModified > this.status.lastModified;
          }
        } catch (error) {
          console.error('Failed to fetch or parse service worker manifest timestamp from /ngsw.json:', error);
          this.status = { lastModified: null };
          this.updateAvailable = false;
        }
      })();
    }
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
          throw new Error(`Invalid or missing timestamp in service worker manifest (${url}). Expected a number, got: ${typeof timestamp}`);
        }
        const date = new Date(timestamp);
        if (Number.isNaN(date.getTime())) {
          throw new Error(`Invalid timestamp value in service worker manifest (${url}). Timestamp ${timestamp} cannot be converted to a valid date.`);
        }
        return { lastModified: date };
      }),
      catchError(error => {
        console.error('Error fetching service worker manifest timestamp:', error);
        return of({ lastModified: null });
      })
    );
  }
}

