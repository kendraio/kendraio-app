import { Component, OnInit, Inject } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IMusicRecording } from 'src/app/_models/classes/musicRecording';

import { GridOptions } from 'ag-grid-community';
import { MatDialog, MAT_DIALOG_DATA, MatButton } from '@angular/material';
import { PageTitleService } from 'src/app/services/page-title.service';
import { MusicRecordingsEditComponent } from '../music-recordings-edit/music-recordings-edit.component';
import {TestDataService} from '../../services/test-data.service';
// import { ButtonRendererComponent } from '../button-renderer.component';



@Component({
  selector: 'app-index',
  templateUrl: './music-recordings-index.component.html',
  styles : [` 
  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}
  `],
})
export class IndexComponent implements OnInit {
  gridOptions: GridOptions;
  entityTypes$;
  selectedType;
  entityList$;
  selectedEntity$;
  listAll$;
  showSpinner: boolean;
  allItems: IMusicRecording[];


  constructor(
    private readonly testData: TestDataService,
    public dialog: MatDialog,
    private readonly pageTitle: PageTitleService,
    // buttonRenderer: ButtonRendererComponent,

  ) {
    this.listAll();
  }

  ngOnInit() {
    this.pageTitle.setTitle('Recordings');
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

  //  this.listAll();
  }

   countryCellRenderer(params) {
    const flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/gb.png'>";
    return flag + " " + params.value;
}

editBtnCellRenderer(params) {
  const btn = '<button type="button" class="btn btn-primary btn-sm">Edit</button>';
  return btn;
}

editBtnCellRendererParams() {
  const clickMe = {
    onClick: this.openDialog.bind(this),
    label: 'Click 1'
  };
  return clickMe;
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
    let dialogRef = this.dialog.open(MusicRecordingsEditComponent, {
      data: ev,
      width: '80%',
      panelClass : 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  listAll() {

    this.listAll$ = this.testData.listAll('music-recording').pipe(
      tap(() => this.showSpinner = true),
    )
      .subscribe(res => {
       // this.allItems = res;
       this.gridOptions = <GridOptions>{};
       this.gridOptions.columnDefs = [
         {
             headerName: 'Name',
             field: 'Name'        
         },
         {
             headerName: 'Artist',
             field: 'Artist'
         },
         {
          headerName: 'ISRC',
          field: 'ISRC'
      },
      {
        headerName: 'ISWC',
        field: 'ISWC'
    },
    {
      headerName: 'Date',
      field: 'Date'
  },
  {
    headerName: 'Country',
    field: 'Country'
},
{
  headerName: 'Owner',
  field: 'Owner'
},
{
  headerName: 'Collective',
  field: 'Collective'
},
{
  headerName: 'Submitted to',
  field: 'Submitted to'
},
{
  headerName: 'Status',
  field: 'Status'
}
   
     ];
        this.gridOptions.rowData = res;
        this.showSpinner = false;
      })
      ;
 
    // this.listAll$.next('music-recording');
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: '../modal.html',
})
export class DialogDataExampleDialog {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }
}
