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
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss']
})
export class YoutubePageComponent implements OnInit {

  data$;

  constructor(
    private readonly yt: YoutubeDataService
  ) { }

  ngOnInit() {
    this.data$ = this.yt.getVideos();
  }

}
