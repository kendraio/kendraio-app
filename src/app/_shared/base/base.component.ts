import { Injectable } from '@angular/core';
import { RouteData } from 'src/app/_models/classes/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PageTitleService } from 'src/app/services/page-title.service';
import { MatLegacyButton as MatButton } from '@angular/material/legacy-button';
import { MatLegacyDialog as MatDialog, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

import { TestDataService } from 'src/app/services/test-data.service';
import { GridOptions } from 'ag-grid-community';
import { HelpTextService } from '../services/help-text.service';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { AppConfigService } from '../services/config.service';
import { TranslateService } from '@ngx-translate/core';

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
    protected config: AppConfigService,
    protected translate: TranslateService
  ) { 
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   distinctUntilChanged(),
    //   map(event => console.log(this.route))
    // );
    this.routeData = this.route.snapshot.data;
    this.pageTitle.setTitle(this.routeData.pageTitle[this.config.locale]);   
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
