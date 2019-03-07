import { Component, OnInit } from '@angular/core';

import { GridOptions } from 'ag-grid-community';
import { MatDialog, MAT_DIALOG_DATA, MatButton } from '@angular/material';
import { tap, switchMap, delay } from 'rxjs/operators';
// import { delay } from 'q';
import { ClaimsEditComponent } from '../claims-edit/claims-edit.component';
import { ClaimsService } from 'src/app/_shared/services/claims.service';
import { Subject } from 'rxjs';
import { ClaimsEditSendComponent } from '../claims-edit-send/claims-edit-send.component';


@Component({
  selector: 'app-index',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class IndexComponent implements OnInit {
  gridOptions: GridOptions;
  claimsToSend: Array<any>;
  listAll$;
  showSpinner: boolean;
  allItems: any[];
  private gridApi;
  private gridColumnApi;

  constructor(
    public dialog: MatDialog,
    private claimsService: ClaimsService,

  ) {
    this.listAll();
   }

  ngOnInit() {


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
      selectedRowsString += selectedRow.name;
      theRow = selectedRow; 
    });
    this.claimsToSend = [];
    selectedRows.forEach(i => { 
     
      this.claimsToSend.push(
      {
       'name': i.name,
       'artist': i.artist,
       'collective': i.collective,
       'owner': i.owner
      });
   });


    if (selectedRows.length >= 6) {
      selectedRowsString += ' - and ' + (selectedRows.length - 6) + ' others';
    }
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
  
  }

  openDialog(ev: any): void {
    let dialogRef = this.dialog.open(ClaimsEditComponent, {
      data: ev,
      width: '80%',
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditSend(ev: any): void {
    let dialogRef = this.dialog.open(ClaimsEditSendComponent, {
      data: ev,
      width: '80%',
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().pipe(
        tap(() => this.showSpinner = true),
        delay(1000) // fake loading
      )
    .subscribe(result => {
      this.showSpinner = false;
      console.log(result);
     // this.animal = result;
      this.deleteSelectedRows();

    });
  }







  editBtnCellRenderer(params) {
    const btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
    return btn;
  }

  listAll() {
    this.listAll$ = JSON.parse(localStorage.getItem('myClaims'));



    // this.listAll$ = new Subject<string>().pipe(
    //   switchMap(type => this.claimsService.getUnsentClaims())
    // );



    // this.claimsService.getUnsentClaims().pipe(
    //   tap(() => this.showSpinner = true),
    //   delay(500) // fake loading
    // )
    //   .subscribe(res => {
    //     this.allItems = res;
    //     this.showSpinner = false;
    //   });

  }
  sendToClaim(ev: any) {

  }

  onCellClicked(ev: any) {
    if (ev.colDef.headerName === 'Actions') {
      this.openDialog(ev.data);
    }
  }

  editSendClaims(ev: any) {
    const selectedData = this.gridApi.getSelectedRows();
    this.openEditSend(selectedData);


      this.updateClaimsStatus(selectedData)


  }

  deleteSelectedRows() {
    const selectedData = this.gridApi.getSelectedRows();
    const res = this.gridApi.updateRowData({ remove: selectedData });
  }


  updateClaimsStatus(itemsToUpdate) {
  //  const itemsToUpdate = [];
  itemsToUpdate.forEach(function(rowNode, index) {
    
      const datax = rowNode;
      datax.status = 'Sending...';
   //  itemsToUpdate.push(datax);
    });
    const res = this.gridApi.updateRowData({ update: itemsToUpdate });
   // this.openEditSend(res);

  }



}
