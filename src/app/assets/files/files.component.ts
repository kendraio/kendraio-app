import { Component, OnInit, Inject } from '@angular/core';
// import { TestDataService } from 'src/app/_shared/services/test-api.service';
import { switchMap, tap, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FileEditComponent } from './file-edit/file-edit.component';
import { BaseComponent } from 'src/app/_shared/base/base.component';


@Component({
  selector: 'app-index',
  templateUrl: './files.component.html',
  styles: [` 
  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}
  `],
})
export class FilesComponent extends BaseComponent  implements OnInit {
  entityTypes$;
  selectedType;
  entityList$;
  selectedEntity$;
  listAll$;
  showSpinner: boolean;
  allItems: any[]; // TODO:  should be IFile[]
  // constructor(
  //   private readonly testData: TestDataService,
  //   public dialog: MatDialog,
  //   private readonly pageTitle: PageTitleService,
  //   private route: ActivatedRoute,

  // ) {
  //   this.routeData = this.route.snapshot.data; 
  // }

  ngOnInit() {
    this.listAll();
    // this.pageTitle.setTitle(this.routeData.pageTitle);   
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
    let dialogRef = this.dialog.open(FileEditComponent, {
      data: ev,
      width: '80%',
      panelClass: 'formFieldWidth380'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  listAll() {

    this.testData.listAll('file').pipe(
      tap(() => this.showSpinner = true),
      // delay(500)
    )
      .subscribe(res => {
        this.allItems = res;
        this.showSpinner = false;
      }) ;
  }

}


