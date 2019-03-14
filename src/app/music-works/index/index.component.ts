import { Component, OnInit } from '@angular/core';
import { switchMap, tap, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IMusicRelease } from 'src/app/_models/classes/musicRelease';
import { GridOptions } from 'ag-grid-community';
import { PageTitleService } from 'src/app/services/page-title.service';
import { MatDialog } from '@angular/material';

import {EditComponent} from '../edit/edit.component';

import { TestDataService } from '../../services/test-data.service';
import { RegisterComponent } from '../add-new/register.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [` 
  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}
  `],
})
export class IndexComponent implements OnInit {
  public gridOptions: GridOptions;
  entityTypes$;
  selectedType;
  entityList$;
  selectedEntity$;
  listAll$;
  showSpinner: boolean;
  allItems: IMusicRelease[];

  constructor(
    private readonly testData: TestDataService,
    private readonly pageTitle: PageTitleService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {

    this.pageTitle.setTitle('Works');
    this.entityTypes$ = this.testData.listEntityTypes();

    this.entityList$ = new Subject<string>().pipe(
      switchMap(type => this.testData.listEntities(type))
    );
    this.selectedEntity$ = new Subject<number>().pipe(
      switchMap(id => this.testData.getEntity(this.selectedType, id))
    );
    this.listAll$ = new Subject<string>().pipe(
      switchMap(type => this.testData.listAll(type))
    );

    this.listAll();
  }

  countryCellRenderer(params) {
    const flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/gb.png'>";
    return flag + " " + params.value;
  }
  editBtnCellRenderer(params) {
    const btn = '<button type="button" class="btn btn-primary btn-sm">Amend</button>';
    return btn;
  }

  changeEntityType(type) {
    this.selectedType = type;
    this.entityList$.next(type);
  }

  changeEntity(id) {
    this.selectedEntity$.next(id);
  }
  onCellClicked(ev: any) {
    if (ev.colDef.headerName === 'Actions') {
      this.openDialog(ev.data);
    }
  }

  openDialog(ev: any): void {
    let dialogRef = this.dialog.open(EditComponent, {
      data: ev,
      width: '80%',
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openAddNewDialog(ev: any): void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      data: 'ev',
      width: '80%',
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  listAll() {

    this.testData.listAll('music-work').pipe(
      tap(() => this.showSpinner = true),
      // delay(500)
    )
      .subscribe(res => {
        this.allItems = res;
        this.showSpinner = false;
      });

  }

}
