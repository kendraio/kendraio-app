import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-tagger-test-page',
  templateUrl: './image-tagger-test-page.component.html',
  styleUrls: ['./image-tagger-test-page.component.scss']
})
export class ImageTaggerTestPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTagsChange(event) {
    console.log({ event });
  }
}
