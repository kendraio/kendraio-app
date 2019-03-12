import { Component, OnInit } from '@angular/core';
import { switchMap, tap, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IMusicRelease } from 'src/app/_models/classes/musicRelease';
import { GridOptions } from 'ag-grid-community';
import { PageTitleService } from 'src/app/services/page-title.service';
import { MatDialog } from '@angular/material';
import { MusicReleasesEditComponent } from '../music-releases-edit/music-releases-edit.component';
import { TestDataService } from '../../services/test-data.service';
import { MatInputComponent, MatButtonComponent } from 'src/app/_shared/components';
import { Animations } from '../../_shared/animations';

import { SendClaimsComponent } from 'src/app/claims/send-claims/send-claims.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [` 
  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}
  `],
  animations: [Animations.pageAni]
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
  private gridApi;
  private gridColumnApi;
  claimsToSend: Array<any>;
 


  constructor(
    private readonly testData: TestDataService,
    private readonly pageTitle: PageTitleService,
    public dialog: MatDialog,
  ) {
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
       //   this.gridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 48,
      frameworkComponents: {
          inputRenderer: MatInputComponent,
          thing: MatButtonComponent
      }
  };

  }

  ngOnInit() {
    this.claimsToSend = [];
    this.pageTitle.setTitle('Releases');
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
    // return this.thing;
  }

  editBtnCellRenderer(params) {
    const btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
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
    let dialogRef = this.dialog.open(MusicReleasesEditComponent, {
      data: ev,
      width: '80%',
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSelectionChanged(ev) {
    this.gridApi = ev.api;

    const selectedRows = this.gridApi.getSelectedRows();
    let selectedRowsString = '';
    let theRow;
    selectedRows.forEach(function(selectedRow, index) {
      if (index > 5) {
        return;
      }
      if (index !== 0) {
        selectedRowsString += ', ';
      
      }
      selectedRowsString += selectedRow.Title;
      theRow = selectedRow; 
    });
    this.claimsToSend = [];
    selectedRows.forEach(i=>{ 
     
      this.claimsToSend.push(
      {
       'name': i.Title,
       'artist': i.Artist,
       'collective': i.Collective,
       'owner': i.Owner,
       'date': i.Date,
       'status': 'Not Sent'
      });
   });


    if (selectedRows.length >= 6) {
      selectedRowsString += ' - and ' + (selectedRows.length - 6) + ' others';
    }
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
  
  }

sendToClaim(ev: any): void {
  const data = {section: 'releases', data: this.claimsToSend };
  const dialogRef = this.dialog.open(SendClaimsComponent, {
    data: data,
    width: '80%',
    panelClass: 'formFieldWidth380', 
    
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

  listAll() {

    this.testData.listAll('music-release').pipe(
      tap(() => this.showSpinner = true),
      // delay(500)
    )
      .subscribe(res => {
        this.allItems = res;
        this.showSpinner = false;
      });

  }

}
