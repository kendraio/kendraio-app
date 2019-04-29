import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { IMusicRecording } from 'src/app/_models/classes/musicRecording';
import { MusicRecordingsEditComponent } from './music-recordings-edit/music-recordings-edit.component';
import { SendClaimsComponent } from 'src/app/claims/send-claims/send-claims.component';
import { Animations } from '../../_shared/animations';
import { RegisterRecordingComponent } from './register-new-recording/register-recording.component';
import { BaseComponent } from 'src/app/_shared/base/base.component';

import { switchMap, tap, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { MatInputComponent, MatButtonComponent } from 'src/app/_shared/components';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-index',
  templateUrl: './music-recordings.component.html',
  styles: [` 
  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}
  `],
  animations: [Animations.pageAni]
})

export class IndexComponent extends BaseComponent implements OnInit {
  entityTypes$;
  selectedType;
  entityList$;
  selectedEntity$;
  listAll$;
  showSpinner: boolean;
  allItems: IMusicRecording[];
  private gridApi;
  private gridColumnApi;
  claimsToSend: Array<any>;
  newRecordings: any[] = [];


  ngOnInit() {    
    this.gridOptions = {
      onGridReady: () => {
        //   this.gridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 48,
      frameworkComponents: {
        inputRenderer: MatInputComponent,
        thing: MatButtonComponent
      }
    };
    // this.getHelpText('recordings');
    this.listAll();
    this.claimsToSend = [];  
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
  }

  countryCellRenderer(params) {
    const flag = '<img border=\'0\' width=\'15\' height=\'10\' style=\'margin-bottom: 2px\' src=\'https://www.ag-grid.com/images/flags/gb.png\'>';
    return flag + ' ' + params.value;
  }

  editBtnCellRenderer(params) {
    const btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
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
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openAddNewDialog(ev?: any): void {
    let dialogRef = this.dialog.open(RegisterRecordingComponent, {
      data: 'ev',
      width: '80%',
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'cancel') {
        this.addItemToGrid(result);
      }
    });
  }

  addItemToGrid(result: any): any {
    this.newRecordings.push(result)
  }

  onSelectionChanged(ev) {
    this.gridApi = ev.api;

    const selectedRows = this.gridApi.getSelectedRows();
    let selectedRowsString = '';
    let theRow;
    selectedRows.forEach(function (selectedRow, index) {
      if (index > 5) {
        return;
      }
      if (index !== 0) {
        selectedRowsString += ', ';
      }
      selectedRowsString += selectedRow.Name;
      theRow = selectedRow;
    });
    this.claimsToSend = [];
    selectedRows.forEach(i => {

      this.claimsToSend.push(
        {
          'name': i.Name,
          'artist': i.Artist,
          'collective': i.Collective,
          'owner': i.Owner,
          'status': 'Not Sent'
        });
    });


    if (selectedRows.length >= 6) {
      selectedRowsString += ' - and ' + (selectedRows.length - 6) + ' others';
    }
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;

  }

  sendToClaim(ev: any): void {
    const data = { section: 'recordings', data: this.claimsToSend };
    const dialogRef = this.dialog.open(SendClaimsComponent, {
      data: data,
      width: '80%',
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  listAll() {
    this.testData.listAll('music-recording').pipe(
      tap(() => this.showSpinner = true),
      // delay(500) // fake loading
    )
      .subscribe(res => {
        this.allItems = res;
        this.showSpinner = false;
      });

  }

}



// @Component({
//   selector: 'app-test-import-dialog',
//   template: `
//   <pre> {{ data | json }}</pre> 
//   <div mat-dialog-actions class="align-right">
//     <button mat-button mat-dialog-close="cancel">Cancel</button>
//     <button mat-button [mat-dialog-close]="data.Name">Send All</button>
//   </div>
//   `
// })
// export class TestSendClaimsComponent implements OnInit {
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//    // private formService: DynamicFormService
//   ) { }

//   ngOnInit() {

//   }

// }
