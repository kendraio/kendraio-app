import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/_shared/services/test-api.service';
import { switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IMusicRelease } from 'src/app/_models/classes/musicRelease';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    entityTypes$;
    selectedType;
    entityList$;
    selectedEntity$;
    listAll$;
  showSpinner: boolean;
  allItems: IMusicRelease[];
  
    constructor(
      private readonly testData: TestDataService
    ) { }
  
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
                 this.allItems = res;
        this.showSpinner = false;
      })
      ;
      // this.listAll$.next('music-recording');
    }

}
