import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { MatGridListModule } from '@angular/material';

@Component({
  selector: 'app-assets-page',
  templateUrl: './assets-page.component.html',
  styleUrls: ['./assets-page.component.scss']
})
export class AssetsPageComponent implements OnInit {

  constructor(
    private readonly pageTitle: PageTitleService,
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('My Assets');
  }

}
