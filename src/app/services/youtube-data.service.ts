import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {from, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

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

  getVideos() {
    return from(this.getProfileData()).pipe(
      catchError(err => {
        // console.log(err);
        return of({});
      }),
      switchMap((user) => {
        console.log(user);
        const { access_token } = user as any;
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

}
