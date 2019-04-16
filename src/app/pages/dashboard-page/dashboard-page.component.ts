import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { Router } from '@angular/router';
// import { DatabaseService } from '../../services/database.service';
import { take } from 'rxjs/operators';
import { now } from 'lodash-es';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  data = [];
  TODAY = Date.now();
  // navigator: Navigator;

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly router: Router,
    // private readonly navigator: Navigator,
    // private readonly database: DatabaseService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Dashboard');
    // this.database.listKeys().pipe(take(1)).subscribe(keys => this.data = keys as any);
    // const userLang = this.navigator.language;
//  console.log(userLang);
  }

  addContent() {
    this.router.navigate(['/import']);
  }

  onDeleted() {
    // this.data = this.database.listKeys();
    // this.database.listKeys().pipe(take(1)).subscribe(keys => this.data = keys as any);
  }
}
