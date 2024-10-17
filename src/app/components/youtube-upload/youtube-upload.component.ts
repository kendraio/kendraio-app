import { Component, OnInit } from '@angular/core';
import { YoutubeDataService } from '../../services/youtube-data.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

/*
{
  "snippet": {
    "categoryId": "22",
    "description": "Description of uploaded video.",
    "title": "Test video upload."
  },
  "status": {
    "privacyStatus": "private"
  }
}
 */

@Component({
  selector: 'app-youtube-upload',
  templateUrl: './youtube-upload.component.html',
  styleUrls: ['./youtube-upload.component.scss'],
})
export class YoutubeUploadComponent implements OnInit {
  form: UntypedFormGroup;

  categories$;
  progress$;

  isUploading = false;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly yt: YoutubeDataService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      file: [null, [Validators.required]],
      privacySetting: ['unlisted', [Validators.required]],
    });
    this.categories$ = this.yt.getCategories();
    this.progress$ = this.yt.progress$;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }

  uploadFile() {
    this.isUploading = true;
    this.yt.uploadVideo(this.form.getRawValue());
  }
}
