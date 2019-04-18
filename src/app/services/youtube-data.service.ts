import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {from, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  categoryCache;

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
        // console.log(err);
        return of({});
      }),
      map(({ access_token }) => access_token)
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
        });
      })
    );
  }

  getCategories() {
    if (!!this.categoryCache) {
      return this.categoryCache;
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
