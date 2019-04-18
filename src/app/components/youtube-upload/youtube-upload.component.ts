import { Component, OnInit } from '@angular/core';
import {YoutubeDataService} from '../../services/youtube-data.service';

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
  styleUrls: ['./youtube-upload.component.scss']
})
export class YoutubeUploadComponent implements OnInit {

  categories$;
  checked = true; // is private video?

  constructor(
    private readonly yt: YoutubeDataService
  ) { }

  ngOnInit() {
    this.categories$ = this.yt.getCategories();
  }

  uploadFile() {

  }
}
