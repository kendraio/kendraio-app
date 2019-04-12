import { Injectable } from '@angular/core';
import { RouteData } from 'src/app/_models/classes/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PageTitleService } from 'src/app/services/page-title.service';
import { MatDialog, MAT_DIALOG_DATA, MatButton } from '@angular/material';

import { TestDataService } from 'src/app/services/test-data.service';
import { GridOptions } from 'ag-grid-community';
import { HelpTextService } from '../services/help-text.service';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export abstract class BaseComponent {
  routeData: RouteData;
  gridOptions: GridOptions;
  pageHelp = [];

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected readonly pageTitle: PageTitleService,
    protected dialog: MatDialog,
    protected readonly testData: TestDataService,
    protected help: HelpTextService,
  ) { 
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   distinctUntilChanged(),
    //   map(event => console.log(this.route))
    // );
    this.routeData = this.route.snapshot.data;
    this.pageTitle.setTitle(this.routeData.pageTitle);   
  //  this.pageHelp = this.help.getHelpTextForSection('assets');
  }

  getHelpText(page: string, itemRef: string) {

    // this.pageHelp =  this.help.getHelpTextForSection(this.routeData.breadcrumb) || [];

    // if (this.pageHelp.length) {
    //   const v = this.pageHelp[0].items.filter(f => f.ref === itemRef)[0].text;
    //   console.log(v);
    //   return v;
    // }
  }

}
