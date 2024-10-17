import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { clone, get, has, isArray, isObject, toPairs } from 'lodash-es';
import { search } from 'jmespath';
import { WorkflowCellRendererComponent } from '../../components/workflow-cell-renderer/workflow-cell-renderer.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { ConnectionStatusRendererComponent } from '../../components/connection-status-renderer/connection-status-renderer.component';
import { SharedStateService } from 'src/app/services/shared-state.service';

@Component({
  selector: 'app-grid-block',
  templateUrl: './grid-block.component.html',
  styleUrls: ['./grid-block.component.scss'],
})
export class GridBlockComponent implements OnInit, OnChanges {
  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @ViewChild('modelOutput') modelOutput: ElementRef;

  @Output() output = new EventEmitter();

  @ViewChild('gridAngular') gridAngular;

  defaultColDef = {
    resizable: true,
  };
  columnDefs = [];
  rowData = [];
  gridOptions = {};
  passThrough = false; // set true to transparently pass through any data model changes
  firstRowHeaders = false; // use the first row as the headers
  enabled = true;
  enabledGetter = null;
  valueGetter = null;

  frameworkComponents = {
    workflowRenderer: WorkflowCellRendererComponent,
    connectionStatusRenderer: ConnectionStatusRendererComponent,
  };

  constructor(
    private readonly zone: NgZone,
    private stateService: SharedStateService
  ) {
    stateService.state$.subscribe({
      next: (result: any) => this.handleStateChange(),
      error: () => {},
    });
  }

  ngOnInit() {
    this.passThrough = get(this.config, 'passThrough', false);
    this.firstRowHeaders = get(this.config, 'firstRowHeaders', false);
    this.valueGetter = get(this.config, 'valueGetter', null);
    this.enabledGetter = get(this.config, 'enabledGetter', null);
    this.setEnabled();
  }

  ngOnChanges(changes) {
    this.updateOutputDisplay();
    if (!!this.gridAngular && get(this.config, 'sizeColumnsToFit', true)) {
      setTimeout(() => {
        this.zone.run(() => {
          /** I've attempted a number of approaches to this, but this is the only reliable one. 
           * I cannot seem to properly detect whether or not the api object exists. gridAngular exists. Api is an object and it's not null. 
           * But, when the sizeColumnsToFit runs, it's gone.
            try..catch seems to be the safest bet. */
          try {
            this.gridAngular.api.sizeColumnsToFit();
          } catch (e) {
            console.log(e);
          }
        });
      }, 40);
    }
    if (this.passThrough) this.output.emit(this.model);
  }

  handleStateChange() {
    setTimeout(() => {
      this.setEnabled();
      if (this.valueGetter) {
        this.updateOutputDisplay();
      }
    });
  }

  setEnabled() {
    if (this.enabledGetter !== null) {
      this.enabled = mappingUtility(
        {
          data: this.model,
          context: this.context,
          state: this.stateService.state,
        },
        this.enabledGetter
      );
    }
  }

  updateOutputDisplay() {
    let defaultCols = [];
    let workingModel = [];
    if (this.valueGetter) {
      workingModel = mappingUtility(
        {
          data: this.model,
          context: this.context,
          state: this.stateService.state,
        },
        this.valueGetter
      );
      if (!isArray(workingModel)) {
        // make sure that we have a compatible array if we retrieved an object
        workingModel = toPairs(workingModel);
      }
    } else {
      workingModel = this.model ? clone(this.model) : []; // create a local clone of the data - to allow us to modify data only for display
    }
    if (isArray(workingModel) && workingModel.length > 0) {
      defaultCols = Object.keys(workingModel[0]).map((key) => {
        let column = { headerName: key, field: key };
        if (this.firstRowHeaders) column.headerName = workingModel[0][key];
        return column;
      });
    }

    if (this.firstRowHeaders && workingModel.length > 0) workingModel.shift(); // remove first row from the working model
    this.columnDefs = this.preprocessColumnDefinition(
      get(this.config, 'columnDefs', defaultCols)
    );
    this.gridOptions = clone(get(this.config, 'gridOptions', {}));
    this.defaultColDef = has(this.gridOptions, 'defaultColDef')
      ? this.config.gridOptions.defaultColDef
      : this.defaultColDef;
    this.rowData = isArray(workingModel)
      ? workingModel
      : get(workingModel, 'result', []);
  }

  preprocessColumnDefinition(def: Array<any>) {
    return def.map((item) => ({
      ...item,
      ...(has(item, 'valueGetter')
        ? {
            valueGetter: ({ data }) => {
              try {
                return mappingUtility(data, item['valueGetter']);
              } catch (e) {
                return e.message;
              }
            },
          }
        : {}),
      ...(has(item, 'valueFormatter')
        ? {
            valueFormatter: (params) => {
              try {
                return mappingUtility(params, item['valueFormatter']);
              } catch (e) {
                return e.message;
              }
            },
          }
        : {}),
      ...(has(item, 'cellRendererParams')
        ? {
            cellRendererParams: {
              ...item.cellRendererParams,
              context: this.context,
            },
          }
        : {}),
    }));
  }

  onSelectionChanged(e) {
    const selectedRows = e.api.getSelectedRows();
    this.output.emit(clone(selectedRows));
  }
}
