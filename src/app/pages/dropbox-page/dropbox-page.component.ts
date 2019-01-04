import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { head } from 'lodash-es';

@Component({
  selector: 'app-dropbox-page',
  templateUrl: './dropbox-page.component.html',
  styleUrls: ['./dropbox-page.component.scss']
})
export class DropboxPageComponent implements OnInit {

  files$;
  accessToken;

  constructor(
    private readonly auth: AuthService,
    private readonly http: HttpClient
  ) { }

  ngOnInit() {
    const idp = this.auth.getIdentity('dropbox');
    if (!!idp && idp.access_token) {
      const { access_token } = idp;
      this.accessToken = access_token;
      const headers = { authorization: `Bearer ${access_token}`};
      const url = `https://api.dropboxapi.com/2/files/list_folder`;
      const body = {
        path: '/uploads'
      };
      this.files$ = this.http.post(url, body, { headers });
    }
  }

  onFilePick(event) {
    const file = event.target.files[0] as File;
    if (file) {
      const path = `/uploads/${file.name}`;
      const headers = {
        'Dropbox-API-Arg': JSON.stringify({ path }),
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/octet-stream'
      };
      const url = 'https://content.dropboxapi.com/2/files/upload';
      this.http.post(url, file, { headers }).subscribe(console.log);
    }
  }

  onSyncRequest() {
    this.auth.getProfile(() => {
      this.ngOnInit();
    });
  }

}

/*
curl -X POST  \
    --header "Authorization: Bearer
    --header "Content-Type: application/json" \
    --data "{\"path\": \"/Homework/math\",\"recursive\": false,\"include_media_info\":
    false,\"include_deleted\": false,\"include_has_explicit_shared_members\":
     false,\"include_mounted_folders\": true}"


     curl -X POST https://content.dropboxapi.com/2/files/upload \
    --header "Authorization: Bearer
    --header "Dropbox-API-Arg: {\"path\": \"/Homework/math/Matrices.txt\",
    \"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}" \
    --header "Content-Type: application/octet-stream" \
    --data-binary @local_file.txt
 */
