import { Component, OnInit, ViewChild } from '@angular/core';

import { GridOptions, GridApi } from 'ag-grid-community';
import { MatDialog, MAT_DIALOG_DATA, MatButton } from '@angular/material';
import { tap, switchMap, delay } from 'rxjs/operators';
// import { delay } from 'q';
import { ClaimsEditComponent } from '../claims-edit/claims-edit.component';
import { ClaimsService } from 'src/app/_shared/services/claims.service';
import { Subject } from 'rxjs';
import { ClaimsEditSendComponent } from '../claims-edit-send/claims-edit-send.component';
import { timingSafeEqual } from 'crypto';
import { Animations } from '../../_shared/animations';
import { PageTitleService } from 'src/app/services/page-title.service';
import { RouteData } from 'src/app/_models/classes/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss'],
  animations: [Animations.pageAni]
})
export class IndexComponent implements OnInit {
  gridOptions: GridOptions;
  claimsToSend: Array<any>;
  listAllOutBox: Array<any>;
  listAllInBox: Array<any>;
  releasesAllOutBox: Array<any>;
  releasesInBox: Array<any>;
  showSpinner: boolean;
  allItems: any[];
  private gridApi;
  private gridColumnApi;
  routeData: RouteData;
  subTitle: string;


  @ViewChild('inBoxGrid') inBoxGrid;
  @ViewChild('releasesNotSentGrid') releasesNotSentGrid;
  @ViewChild('releasesSentGrid') releasesSentGrid;
  showSpinner2: boolean;

  constructor(
    public dialog: MatDialog,
    private claimsService: ClaimsService,
    private pageTitle: PageTitleService,
    private route: ActivatedRoute,
  ) {
    this.routeData = this.route.snapshot.data;
    this.listAll();
    // this.pageTitle = this.routeData['pageTitle'] || 'Assets Management';
    this.subTitle = this.routeData['subTitle'];
  }

  ngOnInit() {
    this.pageTitle.setTitle(this.routeData.pageTitle);    
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

  openEditSend(ev: any, section?: string): void {
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
if (section === 'releases') {
  this.releasesInBox = result;
} else {
  this.listAllInBox = result;
}
       
        this.deleteSelectedRows('');
        this.showSpinner2 = true;
        setTimeout(() => {
          this.updateInBoxItems(section);
        }, 2500);
      });
  }


  updateInBoxItems(section?: string) {
    const itemsToUpdate = []; 
    this.showSpinner2 = false;
    if (section === 'releases') {
      this.releasesSentGrid.api.forEachNodeAfterFilterAndSort(function (rowNode, index) {
        const data = rowNode.data;
        data.status = 'Sent!...';
        itemsToUpdate.push(data);  
      });
      this.releasesSentGrid.api.updateRowData({ update: itemsToUpdate });
    } else {
      this.inBoxGrid.api.forEachNodeAfterFilterAndSort(function (rowNode, index) {
        const data = rowNode.data;
        data.status = 'Sent!...';
        itemsToUpdate.push(data);  
      });
      this.inBoxGrid.api.updateRowData({ update: itemsToUpdate });
    }
  }


  withdrawClaims(section?: string) {
    let itemsToUpdate = [];
    this.showSpinner2 = false;
    if (section === 'releases') {
      this.releasesSentGrid.api.forEachNodeAfterFilterAndSort(function (rowNode, index) {
        const data = rowNode.data;
        data.status = 'Withdrawn';
        itemsToUpdate.push(data);  
      });
      this.releasesSentGrid.api.updateRowData({ update: itemsToUpdate });
    } else {
      itemsToUpdate =  this.inBoxGrid.api.getSelectedRows();
      itemsToUpdate.forEach(function (rowNode, index) {
        const datax = rowNode;
        datax.status = 'Withdrawn...';
      });

      this.showSpinner2 = true;
      setTimeout(() => {
        const res = this.inBoxGrid.api.updateRowData({ update: itemsToUpdate });
        this.showSpinner2 = false;
      }, 2500);

  
    }
  }




  editBtnCellRenderer(params) {
    const btn = '<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>';
    return btn;
  }

  listAll() {
    this.listAllOutBox = JSON.parse(localStorage.getItem('recordings'));
    this.releasesAllOutBox = JSON.parse(localStorage.getItem('releases'));
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

  editSendReleasesClaims(ev: any) {
    const selectedData = this.releasesNotSentGrid.api.getSelectedRows();
  this.openEditSend(selectedData, 'releases');
    this.updateReleasesClaimsStatus(selectedData)
  }





  deleteSelectedRows(str: any) {
    const selectedData = this.gridApi.getSelectedRows();
    const res = this.gridApi.updateRowData({ remove: selectedData });
  }


  updateClaimsStatus(itemsToUpdate) {
    itemsToUpdate.forEach(function (rowNode, index) {
      const datax = rowNode;
      datax.status = 'Sending...';
    });
    const res = this.gridApi.updateRowData({ update: itemsToUpdate });
  }

  updateReleasesClaimsStatus(itemsToUpdate) {
    itemsToUpdate.forEach(function (rowNode, index) {
      const datax = rowNode;
      datax.status = 'Sending...';
    });
    const res = this.releasesNotSentGrid.api.updateRowData({ update: itemsToUpdate });
  }



}
