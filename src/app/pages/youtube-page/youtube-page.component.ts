import { Component, OnInit } from '@angular/core';
import { YoutubeDataService } from '../../services/youtube-data.service';

@Component({
  selector: 'app-youtube-page',
  templateUrl: './youtube-page.component.html',
  styleUrls: ['./youtube-page.component.scss'],
})
export class YoutubePageComponent implements OnInit {
  data$;
  error$;

  constructor(private readonly yt: YoutubeDataService) {}

  ngOnInit() {
    this.error$ = this.yt.error$;
    this.data$ = this.yt.getVideos();
  }
}
