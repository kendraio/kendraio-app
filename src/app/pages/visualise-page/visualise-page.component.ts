import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-visualise-page',
  templateUrl: './visualise-page.component.html',
  styleUrls: ['./visualise-page.component.scss']
})
export class VisualisePageComponent implements OnInit {

  constructor(
    private readonly pageTitle: PageTitleService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Visualise');
  }

}
