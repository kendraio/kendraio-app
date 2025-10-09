import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageTitleService } from './services/page-title.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HelpTextService } from './_shared/services/help-text.service';
import { LOCALE_ID } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Animations } from './_shared/animations';
import { CoreEventHandlersService } from './services/core-event-handlers.service';
import { ServiceWorkerInfoService, ServiceWorkerStatus } from './services/service-worker-info.service';

@Component({
  animations: [Animations.kendraAnimations],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pageTitle$: Observable<{ title: string, isWorkflow: boolean }>;
  isAppLayout$: Observable<boolean>;
  transViaService = '';

  notificationCount = '';
  serviceWorkerStatus$: Observable<ServiceWorkerStatus>;

  constructor(
    private readonly coreEventHandlers: CoreEventHandlersService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly title: PageTitleService,
    private readonly help: HelpTextService,
    private titleService: Title,
    @Inject(LOCALE_ID) public locale: string,
    public translate: TranslateService,
    private readonly serviceWorkerInfo: ServiceWorkerInfoService
  ) {
    this.pageTitle$ = this.title.pageTitle$;
    this.isAppLayout$ = this.title.isApp$;
    this.serviceWorkerStatus$ = this.serviceWorkerInfo.status$;
    const browserLang = translate.getBrowserLang();
    translate.addLangs(['en', 'fr', 'de', 'pt', 'it', 'ru', 'ja', 'es', 'el']);
    translate.setDefaultLang('fr');


    translate.use(browserLang.match(/en|fr|de|pt|it|ru|ja|es|el/) ? browserLang : 'fr');


    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.translate.get('dashboard').subscribe(value => {
        titleService.setTitle(value);
        this.transViaService = value;
      });
    });
  }

  onRefresh() {
    this.title.onRefresh();
  }



  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    this.pageTitle$ = this.title.pageTitle$;
  }

  public toggleAppMode() {
    this.title.disableAppLayout();
  }
}
