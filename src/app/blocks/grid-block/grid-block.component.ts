import { Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { clone, get, has, isArray, isObject } from 'lodash-es';
import { search } from 'jmespath';
import { WorkflowCellRendererComponent } from '../../components/workflow-cell-renderer/workflow-cell-renderer.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { ConnectionStatusRendererComponent } from '../../components/connection-status-renderer/connection-status-renderer.component';
import { SharedStateService } from 'src/app/services/shared-state.service';

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
  firstRowHeaders = false; // use the first row as the headers

  frameworkComponents = {
    workflowRenderer: WorkflowCellRendererComponent,
    connectionStatusRenderer: ConnectionStatusRendererComponent,
  };

  constructor(
    private readonly zone: NgZone,
    private stateService: SharedStateService
  ) {
    stateService.state$.subscribe(state => { setTimeout(() =>{this.setEnabled()}) });
   }

  ngOnInit() {    
    this.passThrough = get(this.config, 'passThrough', false);
    this.firstRowHeaders = get(this.config, 'firstRowHeaders', false);
  }

  ngOnChanges(changes) {    
    this.updateOutputDisplay();
    if (this.passThrough) this.output.emit(this.model)
  }

  updateOutputDisplay() {
    let defaultCols = [];
    if (isArray(this.model) && this.model.length > 0) {      
      defaultCols = Object.keys(this.model[0]).map((key) => {
          let column = { headerName: key, field: key };
          if (this.firstRowHeaders) column.headerName = this.model[0][key];
          return column;
        }        
      )      
    }
    let workingModel = this.model ? clone(this.model) : []; // create a local clone of the data - to allow us to modify data only for display
    if (this.firstRowHeaders && workingModel.length >0) workingModel.shift(); // remove first row from the working model
    this.columnDefs = this.preprocessColumnDefinition(get(this.config, 'columnDefs', defaultCols));
    this.gridOptions = clone(get(this.config, 'gridOptions', {}));    
    this.defaultColDef = has(this.gridOptions, 'defaultColDef') ? this.config.gridOptions.defaultColDef : this.defaultColDef;
    this.rowData = isArray(workingModel) ? workingModel : get(this.model, 'result', []);
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
      ...has(item, 'valueGetter') ? {
        valueGetter: ({ data }) => {          
          try {
            return mappingUtility(data, item['valueGetter']);
          } catch (e) {
            return e.message;
          }
        }
      } : {},
      ...has(item, 'valueFormatter') ? {
        valueFormatter: (params) => {          
          try {
            return mappingUtility(params, item['valueFormatter']);
          } catch (e) {
            return e.message;
          }
        }
      } : {},
      ...has(item, 'cellRendererParams')
        ? { cellRendererParams: { ...item.cellRendererParams, context: this.context } }
        : {}
    }));
  }

  onSelectionChanged(e) {    
    const selectedRows = e.api.getSelectedRows();    
    this.output.emit(clone(selectedRows));
  }

}
