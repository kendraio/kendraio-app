import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

interface NgswManifest {
  timestamp?: number;
}

@Injectable({
  providedIn: 'root'
})
export class BuildInfoService {
  private readonly buildDateInternal$: Observable<Date | null>;

  constructor(private readonly http: HttpClient) {
    this.buildDateInternal$ = this.http.get<NgswManifest>('/ngsw.json').pipe(
      map((manifest) => (manifest?.timestamp ? new Date(manifest.timestamp) : null)),
      catchError((error) => {
        console.warn('Unable to load build timestamp from ngsw.json', error);
        return of(null);
      }),
      shareReplay(1)
    );
  }

  get buildDate$(): Observable<Date | null> {
    return this.buildDateInternal$;
  }
}
