import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Authorization } from './authorization.service';
import { AuthService } from '../../../services/auth.service';
import { map } from 'rxjs/operators';
import { ContextDataService } from '../../../services/context-data.service';

import { YoutubeDataService } from 'src/app/services/youtube-data.service';

interface YoutubeApiServiceOptions {
    url?: string;
    http?: HttpClient;
    idKey?: string;
    //   authService?: Authorization;
    authService?: AuthService;
    config?: any;
    authorize?: boolean;
}


const defaultParams = {
    part: 'snippet,contentDetails',
    key: '',  // environment.youtube.API_KEY,
    maxResults: '50',
    pageToken: ''
};

//TODO: consider each api should have own class and interface???

export class YoutubeApiService {

    url: string;
    http: HttpClient;
    idKey: string;
    authorize = false;
    isSearching = false;
    params: HttpParams;
    nextPageToken: string;   // todo need to handle youtube paging

    constructor(options: any,
        private yt: YoutubeDataService,
        // private readonly contextData: ContextDataService,
        private authService?: AuthService,

    ) {
        this.resetConfig();
        if (authService) {
            this.authorize = true;
        }
        if (options) {
            this.url = options.url;
            this.http = options.http;
            // this.idKey = options.idKey || '';
            if (options.config) {
                this.setConfig(options.config);
            }
        }
    }



    setConfig(options) {
        this.params = Object.keys(options).reduce((params, option) => {
            return params.set(option, options[option]);
        }, this.params);
    }


    public hasToken(): boolean {
        return true;
        //  return this.authService  && this.authService.accessToken.length > 0;
    }

    resetConfig() {
        this.params = new HttpParams({ fromObject: defaultParams });
    }

    getList() {
        this.isSearching = true;
        const options = {
            params: this.params,
            headers: this.createHeaders()
        };




        return this.http.get(this.url, options);
    }

    list(id) {
        if (this.idKey) {
            this.setConfig({ [this.idKey]: id });
            // this.params[this.idKey] = id;
        }

        this.isSearching = true;
        const options = {
            params: this.params,
            headers: this.createHeaders()
        };
        return this.http.get(this.url, options).pipe(
            map((response: any) => {
                this.nextPageToken = response.nextPageToken;
                this.isSearching = false;
                return response;
            })
        );
    }


// TODO handle youtube paging
    fetchNextPage() {
        if (!this.isSearching) {
            // this.params['pageToken'] = this.nextPageToken;
            this.setPageToken(this.nextPageToken);
        }
    }

    resetPageToken() {
        // this.params['pageToken'] = '';
        this.setPageToken('');
    }

    setPageToken(pageToken) {
        this.setConfig({ pageToken });
    }

    deletePageToken() {
        this.params = this.params.delete('pageToken');
    }

    createHeaders() {
let accessToken;


const profilePromise = (1 === 1) ?  this.yt.getProfileData(null) :  this.yt.getProfileData(null);
profilePromise.then(value => {
    accessToken = value;

}).catch(err => {
//   this.isLoading = false;
//   this.hasError = true;
//   this.errorMessage = err.message;
});


// this.authService.getProfile();

// getAccessToken() {
//     return from(this.yt.getProfileData('google-oauth2')).pipe(
//       catchError(err => {
//         this._error.next(err.message);
//         return of({});
//       }),
//       map(({ access_token }: any) => access_token)
//     );
//   }


// accessToken =   this.yt.getProfileData();
// .subscribe(response => {
//         accessToken = response;
//         });

        // tslint:disable-next-line: max-line-length
        // const accessToken = this.context.googleAuth.access_token; // 'ya29.ImWyB_mvZ1Xw3t1pcY0qPLN8QeYUbN4r4nl9Wq_1Cv8rr3gt233Sp1E5VF4VdLA5x1bfmJvEzayTpItlQmxxYYBDP9luRKLvZHha7iQPnUrAFjSdxugxlYuS1cdL78q4zI1321nOvQ';
        // this.authService && this.authService.accessToken;
        const headers = {};
        //  if (accessToken && this.authorize) {
        headers['Authorization'] = `Bearer ${accessToken}`;
        //  }
        return headers;
    }
}
