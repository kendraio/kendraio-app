import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../services/page-title.service';
import { MatGridListModule } from '@angular/material';
import { from, ObservableInput } from 'rxjs';
import { TestDataService } from '../services/test-data.service';
import { HelpTextService } from '../_shared/services/help-text.service';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '../_models/classes/common';
import { AppConfigService } from '../_shared/services/config.service';


@Component({
  selector: 'app-assets-page',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  routeData: RouteData;
  dummyData: ObservableInput<any>;
  dummyData2;
  data$;
  entityCounts: any = {};
  pageHelp = [];
  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private readonly pageTitle: PageTitleService,
    private readonly testData: TestDataService,
    public help: HelpTextService,
    public config: AppConfigService,
    
  ) { 
    this.routeData = this.route.snapshot.data;
    this.pageTitle.setTitle(this.routeData.pageTitle[this.config.locale]);   
  }

  ngOnInit() {
 //   this.pageTitle.setTitle('Assets');  
  //  this.getHelpTextForPage('assets')   
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

  getHelpTextForPage(itemRef: string) {

    // this.pageHelp =  this.help.getHelpTextForSection(itemRef) || [];

    // if (this.pageHelp.length) {
    //   const v = this.pageHelp[0].items.filter(f => f.ref === itemRef)[0].text;
    //   console.log(v);
    //   return v;
    // }
  }


  // askHelp(itemRef: string) {

  //   //this.pageHelp =  this.help.getHelpTextForSection('assets') || [];

  //   if (this.pageHelp.length) {
  //     const v = this.pageHelp[0].items.filter(f => f.ref === itemRef)[0].text;
  //     console.log(v);
  //     return v;
  //   }
  // }




}
