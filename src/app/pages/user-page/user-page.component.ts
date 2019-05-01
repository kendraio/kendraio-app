import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { AuthService } from '../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  profile: any;

  form: FormGroup;

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly auth: AuthService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      ipi: ['']
    });
    this.pageTitle.setTitle('User settings');
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      try {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
        });
      } catch (e) {
        // There was an error fetching profile
        this.profile = {};
      }
    }
    const profile = JSON.parse(localStorage.getItem('kendraio-user-profile'));
    if (!!profile) {
      this.form.patchValue(profile);
    }
  }

  linkAccount() {
    this.auth.linkAccount();
  }

  onLogin() {
    this.auth.login();
  }

  onLogout() {
    this.auth.logout();
  }

  saveProfile() {
    localStorage.setItem('kendraio-user-profile', JSON.stringify(this.form.getRawValue()));
  }
}
