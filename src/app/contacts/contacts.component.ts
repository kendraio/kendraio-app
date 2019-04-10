import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../services/test-data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  entityCounts: any = {};
  constructor(
    private readonly testData: TestDataService,
  ) { }

  ngOnInit() {
  this.testData.getEntityCounts()
.subscribe(res => {
  this.entityCounts  = res;
}) ;
  }
}
