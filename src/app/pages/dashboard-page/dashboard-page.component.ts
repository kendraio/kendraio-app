import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { Router } from '@angular/router';
// import { DatabaseService } from '../../services/database.service';
import { take } from 'rxjs/operators';
import { now } from 'lodash-es';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  data = [];
  TODAY = Date.now();
  transViaService = '';
  // navigator: Navigator;

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly router: Router,
    public translate: TranslateService
    // private readonly navigator: Navigator,
    // private readonly database: DatabaseService
  ) {
    this.pageTitle.setTitle('Dashboard');
    // translate.addLangs(['en', 'fr', 'de', 'pt', 'it', 'ru', 'ja', 'es']);
    // translate.setDefaultLang('en');

    // const browserLang = translate.getBrowserLang();
    // console.log(browserLang);
    // translate.use(browserLang.match(/en|fr|de|pt|it|ru|ja|es/) ? browserLang : 'en');


    // this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
    //   this.translate.get('dashboard').subscribe(value => {
    //     this.pageTitle.setTitle(value);
    //     // titleService.setTitle(value);
    //     this.transViaService = value;
    //     console.log(value);
    //   });
    // });

     // onLangChange;.subscribe((event: LangChangeEvent) => {
  //  console.log()
  // });

  // onTranslationChange.subscribe((event: TranslationChangeEvent) => {
  //   // do something
  // });



  }

  ngOnInit() {
   
  }

  addContent() {
    this.router.navigate(['/import']);
  }

  onDeleted() {
    // this.data = this.database.listKeys();
    // this.database.listKeys().pipe(take(1)).subscribe(keys => this.data = keys as any);
  }

  
}
