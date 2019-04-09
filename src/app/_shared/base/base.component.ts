import { Injectable } from '@angular/core';
import { RouteData } from 'src/app/_models/classes/common';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'src/app/services/page-title.service';
import { MatDialog, MAT_DIALOG_DATA, MatButton } from '@angular/material';

import { TestDataService } from 'src/app/services/test-data.service';
import { GridOptions } from 'ag-grid-community';

@Injectable()
export abstract class BaseComponent {
  routeData: RouteData;
  gridOptions: GridOptions;

  constructor(
    protected route: ActivatedRoute,
    protected readonly pageTitle: PageTitleService,
    protected dialog: MatDialog,
    protected readonly testData: TestDataService,
  ) { 
    this.routeData = this.route.snapshot.data;
    this.pageTitle.setTitle(this.routeData.pageTitle);   
  }



}
