import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {get} from 'lodash-es';

@Component({
  selector: 'app-workflow-cell-renderer',
  templateUrl: './workflow-cell-renderer.component.html',
  styleUrls: ['./workflow-cell-renderer.component.scss']
})
export class WorkflowCellRendererComponent implements OnInit, ICellRendererAngularComp {

  blocks = [];
  data;
  context = {};

  constructor() { }

  ngOnInit() {
  }

  agInit(params: ICellRendererParams): void {
    // console.log('agInit', { params });
    this.blocks = get(params, 'colDef.blocks', []);
    this.context = get(params, 'colDef.context', {});
    this.data = get(params, 'data');
  }

  refresh(params: any): boolean {
    // console.log('refresh', { params });
    return false;
  }

  onWorkflowComplete(event) {
    // console.log('workflow complete', { event });
  }

}
