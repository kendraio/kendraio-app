import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-load-workflow-dialog',
  templateUrl: './load-workflow-dialog.component.html',
  styleUrls: ['./load-workflow-dialog.component.scss']
})
export class LoadWorkflowDialogComponent implements OnInit {

  configs$;
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<LoadWorkflowDialogComponent>,
    private readonly http: HttpClient
  ) { }

  ngOnInit() {
    const URL = `${environment.workflowStoreUrl}`;
    this.configs$ = this.http.get(URL);
  }


  onLoad(id) {
    this.isLoading = true;
    const URL = `${environment.workflowStoreUrl}/${id}`;
    this.http.get(URL).subscribe(response => {
      this.isLoading = false;
      this.dialogRef.close(response);
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
