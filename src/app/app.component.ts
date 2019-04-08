import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuItem } from './_models/classes/common';
import {MENUITEMS } from './_shared/components/menu/menu.component';
import { Router } from '@angular/router';
import { PageTitleService } from './services/page-title.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

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

  constructor(
    public auth: AuthService,
    private readonly router: Router,
    private readonly title: PageTitleService,
    private titleService: Title
    ) {
    auth.handleAuthentication();
    this.menuItems = MENUITEMS;
    this.pageTitle$ = this.title.pageTitle$;

  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    this.pageTitle$ = this.title.pageTitle$;
  }
}
