import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import moment from 'moment';

@Component({
  selector: 'app-connection-status-renderer',
  templateUrl: './connection-status-renderer.component.html',
  styleUrls: ['./connection-status-renderer.component.scss']
})
export class ConnectionStatusRendererComponent implements OnInit, ICellRendererAngularComp {

  hasDetails = false;
  updated = '';

  constructor() { }

  ngOnInit() {
  }

  agInit(params: ICellRendererParams): void {
    const { data: { workflowId, adapterName } } = params;
    const key = `connect__${adapterName}__${workflowId}`;
    this.hasDetails = !!localStorage.getItem(key);
    if (this.hasDetails) {
      try {
        console.log(localStorage.getItem(`${key}__updated`));
        this.updated = moment(localStorage.getItem(`${key}__updated`)).calendar();
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  refresh(params: any): boolean {
    return false;
  }

}
