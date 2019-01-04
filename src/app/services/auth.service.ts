import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile: any;

  auth0;

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) {
    const authConfig = {
      ...environment.auth0,
      redirectUri: `${window.location.origin}/callback`,
      responseType: 'token id_token',
      scope: 'openid email profile read:current_user read:user_idp_tokens update:current_user_identities'
    };
    this.auth0 = new auth0.WebAuth(authConfig);
  }

  public login(): void {
    this.auth0.authorize();
  }

  public linkAccount() {
    localStorage.setItem('auth-linking', 'linking');
    this.auth0.authorize();
  }


  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.log({ authResult });
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';

        const isLinking = localStorage.getItem('auth-linking');
        if (isLinking) {
          localStorage.removeItem('auth-linking');
          this.linkAccountResult(authResult);
        } else {
          this.setSession(authResult);
        }

        this.router.navigate(['/user']);
      } else if (err) {
        this.router.navigate(['/user']);
        console.log(err);
      }
    });
  }

  private linkAccountResult(authResult) {
    const { idToken } = authResult;
    const firstIdToken = localStorage.getItem('id_token');
    const accessToken = localStorage.getItem('access_token');
    const auth0Manage = new auth0.Management({
      ...environment.auth0,
      token: firstIdToken
    });
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        const { sub } = profile;
        // const userId = sub.split('|')[1];
        // console.log({ profile });
        auth0Manage.linkUser(sub, idToken, console.log);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    if (!!this.userProfile && this.userProfile.identities) {
      cb(null, this.userProfile);
      return;
    }

    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }
    const self = this;

    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        const { sub } = profile;
        // const idToken = localStorage.getItem('id_token');
        const url = 'https://kendraio-auth0-proxy-qq0te0iza.now.sh/';
        const body = {
          userId: sub
        };
        const headers = {
          'authorization': `Bearer ${accessToken}`
        };
        this.http.post(url, body, { headers }).subscribe(userProfile => {
          this.userProfile = userProfile;
          cb(null, userProfile);
        });
      }
    });
  }

  getIdentity(provider: string) {
    if (!this.userProfile || !this.userProfile.identities) {
      return null;
    }
    return this.userProfile.identities.find(idp => idp.provider === provider);
  }
}
