import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { AdaptersService } from '../../services/adapters.service';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  adapters$;
  get enabled() { return this.adapters.enabledAdapters; }
  uploadStatus = {};
  uploadEnabled = {};

  isUploading = false;

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly adapters: AdaptersService,
    private readonly snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Upload');
    this.adapters$ = this.adapters.adapters$;
    this.uploadEnabled = { ...this.adapters.enabledAdapters };
  }

  doUpload() {
    if (Object.keys(this.uploadEnabled).filter(key => this.uploadEnabled[key]).length === 0) {
      return;
    }
    Object.keys(this.uploadEnabled).forEach(key => {
      this.uploadStatus[key] = 0;
    });
    forkJoin(Object.keys(this.uploadEnabled)
        .filter(key => this.uploadEnabled[key])
        .map(key => interval(Math.random() * 30).pipe(
          tap(() => this.uploadStatus[key] += 1),
          take(100)
        ))).subscribe(() => {
          const message = 'Upload complete';
          this.snackBar.open(message, 'OK', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.isUploading = false;
    });
    this.isUploading = true;
  }
}
