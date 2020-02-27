import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-layout',
  templateUrl: './editor-layout.component.html',
  styleUrls: ['./editor-layout.component.scss']
})
export class EditorLayoutComponent implements OnInit {

  showConfig = false;

  constructor() { }

  ngOnInit() {
  }

  toggleConfig() {
    this.showConfig = !this.showConfig;
  }

}
