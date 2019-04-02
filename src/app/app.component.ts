import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
  <app-breadcrumb></app-breadcrumb>
  <router-outlet></router-outlet>`
})
export class AppComponent {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
