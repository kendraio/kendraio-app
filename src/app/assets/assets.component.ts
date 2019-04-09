import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../services/page-title.service';
import { MatGridListModule } from '@angular/material';
import { from, ObservableInput } from 'rxjs';
import { TestDataService } from '../services/test-data.service';


@Component({
  selector: 'app-assets-page',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  dummyData: ObservableInput<any>;
  dummyData2;
  data$;
  entityCounts: any = {};
  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly testData: TestDataService,
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Assets');    
    this.dummyData = from([{
      datasets: [{
        data: [20, 40, 30, 10]
      }],
      labels: [
        'CDs',
        'MP3s',
        'Vynyl',
        'Cassette'
      ]
    }]);
    this.dummyData2 = from([{
      datasets: [{
        data: [40, 10, 30, 20]
      }],
      labels: [
        'PPL',
        'PRS',
        'MCPR',
        'PRS India'
      ]
    }]);


this.testData.getEntityCounts()
.subscribe(res => {
  this.entityCounts  = res;
}) ;




  }

}
