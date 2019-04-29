import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {BehaviorSubject, from, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  categoryCache;
  _error = new BehaviorSubject<null|string>(null);
  error$ = this._error.asObservable();

  constructor(
    private readonly auth: AuthService,
    private readonly http: HttpClient
  ) { }

  getProfileData() {
    return new Promise((resolve, reject) => {
      this.auth.getProfile((err, profile) => {
        if (err) {
          reject(err);
          return;
        }
        const ytProfile = (profile['identities'] || [])
          .find(item => item['provider'] === 'google-oauth2');
        resolve(ytProfile);
      });
    });
  }

  getAccessToken() {
    return from(this.getProfileData()).pipe(
      catchError(err => {
        this._error.next(err.message);
        return of({});
      }),
      map(({ access_token }: any) => access_token)
    );
  }

  getVideos() {
    return this.getAccessToken().pipe(
      switchMap(access_token => {
        return this.http.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            forMine: 'true',
            type: 'video'
          },
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        }).pipe(
          catchError(err => {
            this._error.next(err.message);
            return of({});
          })
        );
      })
    );
  }

  getCategories() {
    if (!!this.categoryCache) {
      return of(this.categoryCache);
    }
    const url = 'https://www.googleapis.com/youtube/v3/videoCategories';
    return this.getAccessToken().pipe(
      switchMap(access_token => {
        return this.http.get<any>(url, {
          params: {
            part: 'snippet',
            regionCode: 'gb'
          },
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        });
      }),
      map(({ items }) => (items || []).map(({ id, snippet: { title }}) => ({ id, title }))),
      tap(categories => {
        this.categoryCache = categories;
      })
    );
  }

}
