import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/_shared/services/test-api.service';
import { switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IMusicRelease } from 'src/app/_models/classes/musicRelease';
import { GridOptions } from 'ag-grid-community';

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
    private readonly testData: TestDataService
  ) { 
    this.listAll();
  }

  ngOnInit() {
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

  changeEntityType(type) {
    this.selectedType = type;
    this.entityList$.next(type);
  }

  changeEntity(id) {
    this.selectedEntity$.next(id);
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
