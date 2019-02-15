import { Component, OnInit } from '@angular/core';
import {TestDataService} from '../../services/test-data.service';
import {Subject} from 'rxjs';
import {switchMap, tap, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-test-api-page',
  templateUrl: './test-api-page.component.html',
  styleUrls: ['./test-api-page.component.scss']
})
export class TestApiPageComponent implements OnInit {

  entityTypes$;

  selectedType;
  entityList$;

  selectedEntity$;

  listAll$;

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
  }

  changeEntityType(type) {
    this.selectedType = type;
    this.entityList$.next(type);
  }

  changeEntity(id) {
    this.selectedEntity$.next(id);
  }

  listAll() {
    this.listAll$.next(this.selectedType);
  }

}
