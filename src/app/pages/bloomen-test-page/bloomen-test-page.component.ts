import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {TestImportDialogComponent} from '../../dialogs/test-import-dialog/test-import-dialog.component';
import {PageTitleService} from '../../services/page-title.service';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';
import {omit} from 'lodash-es';

const BLOOMEN_URL = 'https://bloomen.herokuapp.com'; // no trailing slash

@Component({
  selector: 'app-bloomen-test-page',
  templateUrl: './bloomen-test-page.component.html',
  styleUrls: ['./bloomen-test-page.component.scss']
})
export class BloomenTestPageComponent implements OnInit {

  keys = {
    Publisher: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
      'eyJ1c2VyIjp7InJvbGUiOiJwdWJsaXNoZXIiLCJyZXB1dGF0aW9uIjp7InBvc2l0aXZlI' +
      'jowLCJuZWdhdGl2ZSI6MH0sInNldHRpbmdzIjp7ImF0dHJpYnV0aW9uIjp0cnVlfSwia3l' +
      'jIjp7ImFkZHJlc3MiOiIiLCJwaG9uZSI6IiIsImZpcnN0bmFtZSI6IiIsImxhc3RuYW1lIj' +
      'oiIiwiaWQxIjoiIiwiaWQyIjoiIiwic3RhdHVzIjowLCJyZXZpZXdlZEJ5IjoiIn0sIl9pZC' +
      'I6IjViYjQ5MDI5NGRkN2ExMmNhYzQxYTU3NSIsInVzZXJuYW1lIjoicHVibGlzaGVyIiwiaGF' +
      'zaCI6IjUyYWRlZDE2NTM2MDM1MmEwZjU4NTc1NzFkOTZkNjhmIiwiZW1haWwiOiJwdWJsaXNoZ' +
      'XJAYXRjLmdyIiwib3JnYW5pc2F0aW9uIjoiQVRDIiwiY3JlYXRlZEF0VVRDIjoiMjAxOC0xMC0w' +
      'M1QwOTo0NzoyMS4zMDlaIiwiX192IjowLCJvcmciOm51bGwsImlkIjoiNWJiNDkwMjk0ZGQ3YTEy' +
      'Y2FjNDFhNTc1In0sImlhdCI6MTU1MDU4MTk0Nn0.jxCWK2avRtvmuh0rdeg8z0iu1sG4JaBfkI_gZDNx1Co',
    Photographer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
      'eyJ1c2VyIjp7InJvbGUiOiJwaG90b2dyYXBoZXIiLCJyZXB1dGF0aW9uIjp7InBvc2l0aX' +
      'ZlIjo3LCJuZWdhdGl2ZSI6MH0sInNldHRpbmdzIjp7ImF0dHJpYnV0aW9uIjp0cnVlfSwia' +
      '3ljIjp7ImFkZHJlc3MiOiIiLCJwaG9uZSI6IiIsImZpcnN0bmFtZSI6IiIsImxhc3RuYW1lI' +
      'joiIiwiaWQxIjoiIiwiaWQyIjoiIiwic3RhdHVzIjowLCJyZXZpZXdlZEJ5IjoiIn0sIl9pZC' +
      'I6IjViYjM1ZmE2ZWIwNDMxMWE1YzYwNjA0MCIsInVzZXJuYW1lIjoicGhvdG9ncmFwaGVyIiwi' +
      'aGFzaCI6ImFiNWIwMzgxN2NhYTAxYzRhMmEwZWFkY2ZlNjQ4NjljIiwiZW1haWwiOiJwaG90b2d' +
      'yYXBoZXJAdGVzdC5jb20iLCJvcmdhbmlzYXRpb24iOiJwaG90b2dyYXBoZXIiLCJjcmVhdGVkQXR' +
      'VVEMiOiIyMDE4LTEwLTAyVDEyOjA4OjA2LjEyMloiLCJfX3YiOjB9LCJpYXQiOjE1NTA1MDM2NTR9' +
      '.LThaEsPkrDkvlvKMw276PHlEsl430yNDAPATFi9sNw8'
  };

  activeUser = 'Publisher';

  userInfo$;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly pageTitle: PageTitleService,
    private readonly dialog: MatDialog
  ) {
    this.pageTitle.setTitle('Bloomen API');
  }

  ngOnInit() {
  }

  login() {
    console.log(`Login as ${this.activeUser}`);
    this.userInfo$ = this.http.get(`${BLOOMEN_URL}/me`, {
      headers: { Authorization: `Bearer ${this.keys[this.activeUser]}` }
    }).pipe(tap(console.log));
  }

  importUsers() {
    this.http.get(`${BLOOMEN_URL}/users/kyc`, {
      headers: { Authorization: `Bearer ${this.keys[this.activeUser]}` }
    }).pipe(tap(console.log))
      .subscribe(users => {
        if (users) {
          const type = 'bloomen_User';
          const records = users.map(user => {
            return {
              ...omit(user, ['__v', '_id']),
            };
          });
          this.doImport({ type, records });
        }
      });
  }

  importPhotos() {
    this.http.get(`${BLOOMEN_URL}/photos`, {
      headers: { Authorization: `Bearer ${this.keys[this.activeUser]}` }
    }).pipe(tap(console.log))
      .subscribe(photos => {
        if (photos) {
          const type = 'bloomen_Photo';
          const records = photos.map(photo => {
            return {
              ...omit(photo, ['__v', '_id']),
              url: photo['url'] ? photo.url.replace('http://', 'https://') : ''
            };
          });
          this.doImport({ type, records });
        }
      });
  }

  doImport(content) {
    const dialogRef = this.dialog.open(TestImportDialogComponent, {
      disableClose: true,
      data: {content}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/docs']);
    });
  }
}
