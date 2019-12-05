import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {BehaviorSubject, from, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {
  googleapis = 'https://www.googleapis.com/youtube/v3/';  // TODO: should be this.apiService.google.youtube
  categoryCache;

  _error = new BehaviorSubject<null|string>(null);
  error$ = this._error.asObservable();

  _progress = new BehaviorSubject<number>(0);
  progress$ = this._progress.asObservable();

  constructor(
    private readonly auth: AuthService,
    private readonly http: HttpClient
  ) { }

  getAllProfileData() {
    return new Promise((resolve, reject) => {
      this.auth.getProfile((err, profile) => {
        if (err) {
          reject(err);
          return;
        }
        // console.log({ profile });
        resolve(profile);
      });
    });
  }

  getProfileData(provider = 'google-oauth2') {
    return new Promise((resolve, reject) => {
      this.auth.getProfile((err, profile) => {
        if (err) {
          reject(err);
          return;
        }
        // console.log({ profile });
        const ytProfile = (profile['identities'] || [])
          .find(item => item['provider'] === provider);
        resolve(ytProfile);
      });
    });
  }

  getAccessToken() {
    return from(this.getProfileData('google-oauth2')).pipe(
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
  getMyPlaylists() {
    return this.getAccessToken().pipe(
      switchMap(access_token => {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlists', {
          params: {
            part: 'snippet,id,contentDetails,status',
            mine: 'true',
            maxResults: '50'
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


  // Adding a video to a playlist
  // Now that we've created a playlist, let's add a video to it. This request adds a video to the beginning of the playlist ('position': 0).
  
  // POST {base_URL}/playlistItems?part=snippet
  //   Request body:
  //   {
  //     'snippet': {
  //       'playlistId': '{PLAYLIST_ID}', 
  //       'resourceId': {
  //           'kind': 'youtube#video',
  //           'videoId': '{VIDEO_ID}'
  //         }
  //      'position': 0
  //       }
  //    }

 

  addVideoToPlaylist(playlistId: string, videoId: string) {
    return this.getAccessToken().pipe(
      switchMap(access_token => {
        return this.http.post(this.googleapis + '/playlistItems', 
        {
          'snippet': {
            'playlistId': playlistId,
            'position': 0,
            'resourceId': {
              'kind': 'youtube#video',
              'videoId': videoId
            }
          },
          'status': {
            'privacyStatus': 'private'
          }
        }, {
          params: {
            part: 'snippet,status',
            uploadType: 'resumable'
          },
          headers: {
            'Authorization': `Bearer ${access_token}`
          },
          observe: 'response'
        }
        
        ).pipe(
          catchError(err => {
            this._error.next(err.message);
            return of({});
          })
        );
      })
    );
  }

  uploadVideo({ title, description, category, file, isPrivate}) {
    console.log({ title, description, category, file, isPrivate});
    const url = 'https://www.googleapis.com/upload/youtube/v3/videos';
    this.getAccessToken().pipe(
      switchMap(access_token => {
        return this.http.post(url, {
          snippet: {
            title,
            description,
            categoryId: category
          },
          status: {
            // TODO: Always private for testing
            privacyStatus: isPrivate ? 'private' : 'private'
          }
        }, {
          params: {
            part: 'snippet,status',
            uploadType: 'resumable'
          },
          headers: {
            'Authorization': `Bearer ${access_token}`
          },
          observe: 'response'
        }).pipe(
          catchError(err => {
            this._error.next(err.message);
            return of(null);
          }),
          tap(console.log),
          switchMap(({ headers }) => {
            const [ location ] = headers.getAll('location');
            return this.http.put(location, (file as File), {
              headers: {
                'Authorization': `Bearer ${access_token}`
              },
              observe: 'events',
              reportProgress: true
            }).pipe(
              catchError(err => {
                this._error.next(err.message);
                return of(null);
              }),
              tap(console.log),
              tap((event) => {
                switch (event.type) {
                  case HttpEventType.UploadProgress:
                    const progress = Math.round(100 * event.loaded / event.total);
                    this._progress.next(progress);
                    return { status: 'progress', message: progress };
                  case HttpEventType.Response:
                    return event.body;
                  default:
                    return `Unhandled event: ${event.type}`;
                }
              })
            );
          })
        );
      }),
    ).subscribe();
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
        }).pipe(
          catchError(err => {
            this._error.next(err.message);
            return of({ items: [] });
          })
        );
      }),
      map(({ items }) => (items || []).map(({ id, snippet: { title }}) => ({ id, title }))),
      tap(categories => {
        this.categoryCache = categories;
      })
    );
  }

}
