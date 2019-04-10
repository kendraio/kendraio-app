import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuItem } from './_models/classes/common';
import {MENUITEMS } from './_shared/components/menu/menu.component';
import { Router } from '@angular/router';
import { PageTitleService } from './services/page-title.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

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

  constructor(
    public auth: AuthService,
    private readonly router: Router,
    private readonly title: PageTitleService,
    private titleService: Title
    ) {
    auth.handleAuthentication();
    this.menuItems = MENUITEMS;
    this.dataSource.data = MENUITEMS;
    this.pageTitle$ = this.title.pageTitle$;

  }

  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    this.pageTitle$ = this.title.pageTitle$;
  }
}
