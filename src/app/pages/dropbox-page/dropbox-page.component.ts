import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dropbox-page',
  templateUrl: './dropbox-page.component.html',
  styleUrls: ['./dropbox-page.component.scss'],
})
export class DropboxPageComponent implements OnInit {
  files$;
  accessToken;

  showSync = false;

  constructor(
    private readonly auth: AuthService,
    private readonly http: HttpClient,
    private readonly zone: NgZone
  ) {}

  ngOnInit() {
    this.showSync = false;
    const idp = this.auth.getIdentity('dropbox');
    if (!!idp && idp.access_token) {
      const { access_token } = idp;
      this.accessToken = access_token;
      const headers = { authorization: `Bearer ${access_token}` };
      const url = `https://api.dropboxapi.com/2/files/list_folder`;
      const body = {
        path: '/uploads',
      };
      this.files$ = this.http.post(url, body, { headers });
    }
    setTimeout(() => {
      this.zone.run(() => {
        this.showSync = true;
      });
    }, 1000);
  }

  onDownload(f) {
    const path = f.id;
    const headers = {
      Authorization: `Bearer ${this.accessToken}`,
    };
    const url = 'https://api.dropboxapi.com/2/files/get_temporary_link';
    this.http.post<any>(url, { path }, { headers }).subscribe(({ link }) => {
      window.open(link);
    });
  }

  onDelete(f) {
    const url = 'https://api.dropboxapi.com/2/files/delete_v2';
    const path = f.id;
    const headers = {
      Authorization: `Bearer ${this.accessToken}`,
    };
    this.http.post<any>(url, { path }, { headers }).subscribe(() => {
      this.ngOnInit();
    });
  }

  onFilePick(event) {
    const file = event.target.files[0] as File;
    if (file) {
      const path = `/uploads/${file.name}`;
      const headers = {
        'Dropbox-API-Arg': JSON.stringify({ path }),
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/octet-stream',
      };
      const url = 'https://content.dropboxapi.com/2/files/upload';
      this.http.post(url, file, { headers }).subscribe(() => {
        this.ngOnInit();
      });
    }
  }

  onSyncRequest() {
    this.auth.getProfile(() => {
      this.ngOnInit();
    });
  }
}
