import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/state';
import { AppActions } from '../../app/state/app/actions';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { interval } from 'rxjs/observable/interval';
import { take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {

  @ViewChild('fileInput') fileInput: ElementRef;

  uploadServices = [
    { name: 'SoundCloud', enabled: true, progress: 0 },
    { name: 'Apple Music', enabled: true, progress: 0 },
    { name: 'YouTube', enabled: true, progress: 0 },
    { name: 'Spotify', enabled: true, progress: 0 },
    { name: 'Tidal', enabled: true, progress: 0 },
    { name: 'Bandcamp', enabled: true, progress: 0 },
    { name: 'MixCloud', enabled: true, progress: 0 },
    { name: 'Musicoin', enabled: true, progress: 0 },
    { name: 'Resonate', enabled: true, progress: 0 },
  ];
  uploading = false;

  constructor(public navCtrl: NavController,
              private store: Store<AppState>) {
  }

  pickFile() {
    this.fileInput.nativeElement.click();
  }

  fileChange(files: FileList) {
    if (files.length > 0) {
      const file = files[0];
      // this.store.dispatch(NodesActions.loadFile({ file, adapterId: this.adapter }));
      this.store.dispatch(AppActions.goHome({}));
    }
  }
  doUpload() {
    this.uploading = true;
    forkJoin(this.uploadServices.map((service, i) => {
      return interval((Math.random() * 30)).pipe(
        tap(() => this.uploadServices[i].progress += 0.01),
        take(100),
      );
    })).subscribe(console.log);
  }
  toggleChange(i) {
    this.uploadServices[i].enabled = !this.uploadServices[i].enabled;
  }
}
