import { Component, Inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuItem } from './_models/classes/common';
import {MENUITEMS } from './_shared/components/menu/menu.component';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { PageTitleService } from './services/page-title.service';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { HelpTextService } from './_shared/services/help-text.service';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { LOCALE_ID } from '@angular/core';
import { LangChangeEvent, TranslateService, TranslationChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // `
  // booya
  // <app-breadcrumb></app-breadcrumb>
  // <router-outlet></router-outlet>
  // <app-main-menu></app-main-menu>
  // `
})
export class AppComponent {
  menuItems: MenuItem[];
  pageTitle$: Observable<string>;
  treeControl = new NestedTreeControl<MenuItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuItem>();
  sub: Subscription;
  today = Date.now();
  transViaService = '';

  constructor(
    public auth: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly title: PageTitleService,
    private readonly help: HelpTextService,
    private titleService: Title,
    @Inject(LOCALE_ID) public locale: string,
    public translate: TranslateService
    ) {
    auth.handleAuthentication();
    this.menuItems = MENUITEMS;
    this.dataSource.data = MENUITEMS;
    this.pageTitle$ = this.title.pageTitle$;
    translate.addLangs(['en', 'fr', 'de', 'pt', 'it', 'ru', 'ja', 'es', 'el']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    console.log(browserLang);
    translate.use(browserLang.match(/en|fr|de|pt|it|ru|ja|es|el/) ? browserLang : 'en');


    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.translate.get('dashboard').subscribe(value => {
     //   this.pageTitle.setTitle(value);
         titleService.setTitle(value);
        this.transViaService = value;
        console.log(value);
      });
    });


    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   distinctUntilChanged(),
    // //  map(event => console.log(this.route.snapshot))
    // ).subscribe(
    //   eventx => {
    //     console.log(this.route.snapshot);
    //     if (eventx instanceof NavigationEnd) {
    //      console.log('navEnd1');
    //     }
    //   }
    // );

    // this.sub = this.router.events.subscribe(
    //   event => {
    //     console.log('this.route.snapshot');
    //     if (event instanceof NavigationEnd) {
    //      console.log('navEnd');
    //     }
    //   }
    
    // );


  }

  // onLangChange;.subscribe((event: LangChangeEvent) => {
  //  console.log()
  // });

  // onTranslationChange.subscribe((event: TranslationChangeEvent) => {
  //   // do something
  // });

  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    this.pageTitle$ = this.title.pageTitle$;
  }
}
