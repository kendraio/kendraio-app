import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-workflow-cell-renderer',
  templateUrl: './workflow-cell-renderer.component.html',
  styleUrls: ['./workflow-cell-renderer.component.scss']
})
export class WorkflowCellRendererComponent implements OnInit, ICellRendererAngularComp {

  constructor() { }

  ngOnInit() {
  }

  agInit(params: ICellRendererParams): void {
    console.log('agInit', { params });
  }

  refresh(params: any): boolean {
    console.log('refresh', { params });
    return false;
  }


}
