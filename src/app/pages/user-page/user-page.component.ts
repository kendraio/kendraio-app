import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly auth: AuthService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('User settings');
  }

  onLogin() {
    this.auth.login();
  }

  onLogout() {
    this.auth.logout();
  }
}
