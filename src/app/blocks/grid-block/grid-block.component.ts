import {Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {clone, get, has, isArray, isObject} from 'lodash-es';
import {search} from 'jmespath';
import {WorkflowCellRendererComponent} from '../../components/workflow-cell-renderer/workflow-cell-renderer.component';
import {mappingUtility} from '../mapping-block/mapping-util';
import {ConnectionStatusRendererComponent} from '../../components/connection-status-renderer/connection-status-renderer.component';

@Component({
  selector: 'app-grid-block',
  templateUrl: './grid-block.component.html',
  styleUrls: ['./grid-block.component.scss']
})
export class GridBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @ViewChild('modelOutput') modelOutput: ElementRef;

  @Output() output = new EventEmitter();

  @ViewChild('gridAngular') gridAngular;

  defaultColDef = {
    resizable: true
  };
  columnDefs = [];
  rowData = [];
  gridOptions = {};
  passThrough = false; // set true to transparently pass through any data model changes

  frameworkComponents = {
    workflowRenderer: WorkflowCellRendererComponent,
    connectionStatusRenderer: ConnectionStatusRendererComponent,
  };

  constructor(
    private readonly zone: NgZone
  ) { }

  ngOnInit() {
    // console.log('init');
   // if (isObject(this.config.gridOptions.defaultColDef)) {
    // this.defaultColDef = isObject(this.config.gridOptions.defaultColDef) ? this.config.gridOptions.defaultColDef : {resizable: true};
  // }
    this.passThrough = get(this.config, 'passThrough', false);
  }

  ngOnChanges(changes) {
    // console.log({ changes });
    // console.log(get(changes, 'model.previousValue', []).map(({ enabled }) => enabled));
    // console.log(get(changes, 'model.currentValue', []).map(({ enabled }) => enabled));
    this.updateOutputDisplay();
    if (this.passThrough) this.output.emit(this.model)
  }

  updateOutputDisplay() {
    const defaultCols = isArray(this.model) && this.model.length > 0
      ? Object.keys(this.model[0]).map(key => ({ headerName: key, field: key }))
      : [];
    this.columnDefs = this.preprocessColumnDefinition(get(this.config, 'columnDefs', defaultCols));
    this.gridOptions = clone(get(this.config, 'gridOptions', {}));

    // this.defaultColDef =  isObject(this.config.gridOptions.defaultColDef) ? this.config.gridOptions.defaultColDef : {resizable: true};
    this.defaultColDef = has(this.gridOptions, 'defaultColDef') ? this.config.gridOptions.defaultColDef : this.defaultColDef;

    this.rowData = isArray(this.model) ? this.model : get(this.model, 'result', []);
    if (!!this.gridAngular && get(this.config, 'sizeColumnsToFit', true)) {
      setTimeout(() => {
        this.zone.run(() => {
          this.gridAngular.api.sizeColumnsToFit();
        });
      }, 40);
    }

  }

  preprocessColumnDefinition(def: Array<any>) {
    return def.map(item => ({
      ...item,
      ...has(item, 'valueGetter') ? { valueGetter: ({ data }) => {
          // console.log({ data, item });
          try {
            return mappingUtility(data, item['valueGetter']);
          } catch (e) {
            return e.message;
          }
        }} : {},
      ...has(item, 'valueFormatter') ? { valueFormatter: (params) => {
        // console.log(params);
          try {
            return mappingUtility(params, item['valueFormatter']);
          } catch (e) {
            return e.message;
          }
        }} : {},
      ...has(item, 'cellRendererParams')
        ? { cellRendererParams: { ...item.cellRendererParams, context: this.context }}
        : {}
    }));
  }

  onSelectionChanged(e) {
    // console.log({ e });
    const selectedRows = e.api.getSelectedRows();
     // console.log({ selectedRows });
    this.output.emit(clone(selectedRows));
  }

}
