import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {has, get, findIndex} from 'lodash-es';
import {environment} from '../../../environments/environment';
import {LocalDatabaseService} from '../../services/local-database.service';
import {WorkflowRepoService} from '../../services/workflow-repo.service';
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
    private localData: LocalDatabaseService,
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

  saveToAdapter() {
    const { id, adapterName } = this.data;
        
    this.localData['workflows'].where('[adapterName+workflowId]').equals([adapterName || 'UNKNOWN', id]).count().then(
      (count) => {
    
      if (count === 0) {
        this.localData['workflows'].add({ adapterName: adapterName, id: id, blocks: this.data.blocks, title: this.data.title, workflowId: id, modified: true });      
        this.dialogRef.close();
      } else {
      this.localData['workflows']
        .where('[adapterName+workflowId]')
        .equals([adapterName || 'UNKNOWN', id])
        .modify({ blocks: this.data.blocks, title: this.data.title, workflowId: id, modified: true })
        .then(() => {
          this.localData['adapters'].get(adapterName).then(adapter => {
            const workflow = get(adapter, 'workflow', []);
            const workflowIndex = findIndex(workflow, ({ workflowId }) => workflowId === id);
            if (workflowIndex !== -1) {
              workflow[workflowIndex] = { ...workflow[workflowIndex], title: this.data.title, modified: true };
            }
            this.localData['adapters'].update(adapterName, { ...adapter, workflow, modified: true }).then(() => {
              this.dialogRef.close();
            });
          });
        })
        .catch(error => {
          console.log({ error })        
        });
      }
      }
    );
  }
  

  onCancel() {
    this.dialogRef.close();
  }

 
}
