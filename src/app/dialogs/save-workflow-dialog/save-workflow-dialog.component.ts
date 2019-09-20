import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {has, get} from 'lodash-es';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-save-workflow-dialog',
  templateUrl: './save-workflow-dialog.component.html',
  styleUrls: ['./save-workflow-dialog.component.scss']
})
export class SaveWorkflowDialogComponent implements OnInit {

  isLoading = false;

  get hasId() {
    return !!get(this.data, 'id', false);
  }

  constructor(
    public dialogRef: MatDialogRef<SaveWorkflowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSave() {
    this.isLoading = true;
    const URL = `${environment.workflowStoreUrl}`;
    this.http.put(URL, this.data).subscribe(response => {
      this.isLoading = false;
      if (has(response, 'id')) {
        this.dialogRef.close(response);
      } else {
        this.dialogRef.close();
      }
    });
  }

  onUpdate() {
    this.isLoading = true;
    const { id } = this.data;
    const URL = `${environment.workflowStoreUrl}/${id}`;
    this.http.post(URL, this.data).subscribe(response => {
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
