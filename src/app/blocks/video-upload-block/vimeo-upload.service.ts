import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, interval } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import * as tus from 'tus-js-client';
import { uploadFiles } from './video-upload-block.component';



@Injectable({
  providedIn: 'root'
})
export class VimeoUploadService {

  str: number;
  private percentage = new BehaviorSubject(null);
  private allComplete = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) {
    // interval(200)
    // .subscribe(res =>  this.percentage.next(res));
    this.percentage.next(0)
  }

  private api = 'https://api.vimeo.com/me/videos'; // TODO: SUGGESTION: get end point from central 'lookup table' via an endpoint service do not allow  user to edit.
  // private accessToken = '4f84c2818123b9fd56ff6cf06cbd6926';

  private accessToken = JSON.parse(localStorage.getItem('vimeo.variables.access_token')); // TODO: needs flexibility

  // TODO: access tokens may change location ?? localstorage to memory to server??
  // SUGGEST: provide accessToken service
  // eg [
  //     {
  //      ref: 'ruy8728rg',
  //      provider: 'vimeo',
  //      location: 'localhost',
  //      name: 'vimeo.variables.access_token'
  //     },
  //     {
  //      provider: 'youtube',
  //      location: 'kendraio.proxy.now/youtube/access_token'
  //     }
  // ]



  createVideo(file: File): Observable<any> {
    const body = {
      name: file.name,
      upload: {
        approach: 'tus',
        size: file.size
      }
    };
    console.log(file);
    const header: HttpHeaders = new HttpHeaders()
      .set('Authorization', 'bearer ' + this.accessToken)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/vnd.vimeo.*+json;version=3.4');
    return this.http.post(this.api, body, {
      headers: header,
      observe: 'response'
    });
  }

  getValue(): Observable<any> {
    return this.percentage.asObservable();
  }
  getSuccess(): Observable<boolean> {
    return this.allComplete.asObservable();
  }



  public tusUpload(
    file: uploadFiles,
    i: number,
    videoArray: uploadFiles[],
    uploadArray: tus.Upload[],
    success: any,
  ): tus.Upload {
    // i = i + 1;
    const upload = new tus.Upload(file.video, {
      uploadUrl: file.uploadURI,
      endpoint: file.uploadURI,
      retryDelays: [0, 1000, 3000, 5000],
      onError: error => {
        console.log('Failed: ' + file.video.name + error);
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        this.percentage.next(((bytesUploaded / bytesTotal) * 100).toFixed(2));
        console.log(
          'file: ' + i + ' of ' + (videoArray.length) + ':',
          bytesUploaded,
          bytesTotal,
          this.percentage.value + '%'
        );
      },
      onSuccess: () => {
        console.log('Download ' + file.video.name + ' from ' + upload.url);
        if (i < videoArray.length - 1) {
          uploadArray[i + 1].start();
        } else {
          success();
          console.log('Videos uploaded successfully');
          this.allComplete.next(true);
        }
      }
    });
    return upload;
  }




}
