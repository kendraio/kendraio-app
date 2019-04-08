import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuItem } from './_models/classes/common';
import {MENUITEMS } from './_shared/components/menu/menu.component';

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

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
    this.menuItems = MENUITEMS;

  }
}
