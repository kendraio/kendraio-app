import { Component, OnInit } from "@angular/core";
import { PageTitleService } from "../../services/page-title.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"],
})
export class UserPageComponent implements OnInit {
  profile: any;

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly auth: AuthService,
  ) {}

  ngOnInit() {
    this.pageTitle.setTitle("User settings");
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      try {
        this.auth.getProfile((err, _profile) => {
          this.profile = _profile;
        });
      } catch (e) {
        // There was an error fetching profile
        this.profile = {};
      }
    }
  }

  linkAccount() {
    this.auth.linkAccount();
  }

  onLogin() {
    this.auth.login();
  }

  loginGoogle() {
    this.auth.login({
      connection: "google-oauth2",
      accessType: "offline",
      approvalPrompt: "force",
    });
  }

  onLogout() {
    this.auth.logout();
  }
}
