import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  data = [];

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly router: Router,
    private readonly database: DatabaseService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Dashboard');
    this.data = this.database.listKeys();
  }

  addContent() {
    this.router.navigate(['/import']);
  }

  onDeleted() {
    this.data = this.database.listKeys();
  }
}
