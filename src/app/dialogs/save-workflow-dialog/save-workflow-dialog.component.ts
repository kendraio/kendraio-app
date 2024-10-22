import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {has, get} from 'lodash-es';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-save-workflow-dialog',
  templateUrl: './save-workflow-dialog.component.html',
  styleUrls: ['./save-workflow-dialog.component.scss']
})
export class SaveWorkflowDialogComponent implements OnInit {

  isLoading = false;
  isLoggedIn = false;
  idToken = '';

  get hasId() {
    return !!get(this.data, 'id', false);
  }

  constructor(
    public dialogRef: MatDialogRef<SaveWorkflowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly http: HttpClient
  ) { }

  ngOnInit() {
    // TODO: The adapterName is not always updated, so for now check both possibilities
    const idToken = localStorage.getItem('kendraio.variables.idToken');
    if (idToken) {
      this.isLoggedIn = true;
      this.idToken = JSON.parse(idToken);
      return;
    }
    const idToken2 = localStorage.getItem('UNKNOWN.variables.idToken');
    if (idToken2) {
      this.isLoggedIn = true;
      this.idToken = JSON.parse(idToken2);
    }
    const idToken3 = localStorage.getItem('workflowCloud.variables.idToken');
    if (idToken3) {
      this.isLoggedIn = true;
      this.idToken = JSON.parse(idToken3);
    }
  }

  onSave() {
    this.isLoading = true;
    const URL = `${environment.workflowStoreUrl}`;
    const headers = new HttpHeaders().append('authorization', `Bearer ${this.idToken}`);
    this.http.put(URL, this.data, { headers }).subscribe(response => {
      this.isLoading = false;
      if (has(response, 'id')) {
        this.dialogRef.close(response);
      } else {
        this.dialogRef.close();
      }
    });
  }

  onUpdate() {
    // console.log(this.data);
    this.isLoading = true;
    const { id, adapterName } = this.data;
    const URL = `${environment.workflowStoreUrl}/${adapterName}/${id}`;
    const headers = new HttpHeaders().append('authorization', `Bearer ${this.idToken}`);
    this.http.post(URL, this.data, { headers }).subscribe(response => {
      this.isLoading = false;
      if (get(response, 'status') === 'ok') {
        this.dialogRef.close(response);
      } else {
        this.dialogRef.close();
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
