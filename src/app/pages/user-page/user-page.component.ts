import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(
    private readonly pageTitle: PageTitleService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('User settings');
  }
}
