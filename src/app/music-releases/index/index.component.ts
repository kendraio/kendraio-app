import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/_shared/services/test-api.service';
import { switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IMusicRelease } from 'src/app/_models/classes/musicRelease';
import { GridOptions } from 'ag-grid-community';
import { PageTitleService } from 'src/app/services/page-title.service';
import { MatDialog } from '@angular/material';
import { MusicReleasesEditComponent } from '../music-releases-edit/music-releases-edit.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  gridOptions: GridOptions;
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
    this.listAll();
  }

  ngOnInit() {
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
}
editBtnCellRenderer(params) {
  const btn = '<button type="button" class="btn btn-primary btn-sm">Edit</button>';
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
          panelClass : 'formFieldWidth380'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }

  listAll() {

    this.listAll$ = this.testData.listAll('music-release').pipe(
      tap(() => this.showSpinner = true),
    )
      .subscribe(res => {
        // this.allItems = res;
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
          {
            headerName: 'Title',
            field: 'Title'
          },
          {
            headerName: 'Artist',
            field: 'Artist'
          },
          {
            headerName: 'Date',
            field: 'Date'
          },
          {
            headerName: 'Owner',
            field: 'Owner'
          },
          {
            headerName: 'Type',
            field: 'Type'
          },
          {
            headerName: 'Format',
            field: 'Format'
          },
          {
            headerName: 'Catalogue Number',
            field: 'Catalogue Number'
          },
          {
            headerName: 'Barcode',
            field: 'Barcode'
          },
          {
            headerName: 'Number of tracks',
            field: 'Number of tracks'
          },
          {
            headerName: 'Distribution',
            field: 'Distribution'
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
            headerName: 'Actions',
            field: 'Actions'
          }

        ];
        this.gridOptions.rowData = res;
        this.showSpinner = false;
      })
      ;

    // this.listAll$.next('music-recording');
  }

}
