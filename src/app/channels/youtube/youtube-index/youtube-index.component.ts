import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-youtube-index",
  templateUrl: "./youtube-index.component.html",
  styleUrls: ["./youtube-index.component.scss"],
})
export class YoutubeIndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
