import {Component, NgZone, OnInit} from '@angular/core';
import {JSON_EDITOR_OPTIONS} from './json-editor-options';
import {KQL_EDITOR_OPTIONS} from './kql-editor-options';
import {NgxEditorModel} from 'ngx-monaco-editor';
import {mappingUtility} from '../../blocks/mapping-block/mapping-util';
import { HttpClient } from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import {camelCase, get, sortBy, set} from 'lodash-es';
import {WorkflowService} from '../../services/workflow.service';
import {SaveWorkflowDialogComponent} from '../../dialogs/save-workflow-dialog/save-workflow-dialog.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-kql-builder',
  templateUrl: './kql-builder.component.html',
  styleUrls: ['./kql-builder.component.scss']
})
export class KqlBuilderComponent implements OnInit {

  jsonEditorOptions = JSON_EDITOR_OPTIONS;
  kqlEditorOptions = KQL_EDITOR_OPTIONS;

  dataInTxt = JSON.stringify({
    'employees': {
      'jd101': {
        'firstname': 'Jane',
        'surname': 'Doe',
        'department': 'IT',
        'manager': 'kp102'
      },
      'kp102': {
        'firstname': 'Kitty',
        'surname': 'Pride',
        'department': 'IT',
        'manager': 'jh104'
      },
      'cx103': {
        'firstname': 'Charles',
        'surname': 'Xavier',
        'department': 'Management'
      },
      'jh104': {
        'firstname': 'James',
        'surname': 'Howlett',
        'department': 'Security',
        'manager': 'cx103'
      }
    }
  }, null, 2);
  dataInModel: NgxEditorModel;

  dataOut = {};

  queryTxt = 'data';
  queryModel: NgxEditorModel;

  errorMessage = '';

  flows = [];
  selectedFlow;
  blockOptions = [];
  blockLimit = '0';
  blockExec = [];
  startModels;
  context = {};
  flowConfig = {};

  selectedBlock = {};
  selectedBlockType = '';

  constructor(
    private readonly http: HttpClient,
    private readonly zone: NgZone,
    private readonly dialog: MatDialog,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getFlows();
    this.updateDataInModel();
    this.createDummyContext();
  }

  async createDummyContext() {
    this.route.queryParams.pipe(
      take(1)
    ).subscribe(queryParams => {
      this.context = {...this.context, queryParams};
    });
  }

  async getFlows() {
    const url = 'https://app.kendra.io/api';
    this.flows = await this.http.get<any[]>(url)
      .pipe(
        map(x => sortBy(x, 'title'))
      )
      .toPromise();
  }

  runMapping() {
    this.errorMessage = '';
    try {
      const data = JSON.parse(this.dataInTxt);
      this.dataOut = mappingUtility({data, context: this.context }, this.queryTxt);
    } catch (e) {
      this.errorMessage = e.message;
    }
  }

  async updateBlockOptions(v) {
    this.blockOptions = [];
    this.blockLimit = '0';
    const {adapterName, workflowId} = this.flows[+v];
    const {blocks, ...flowConfig} = await this.http.get<any>(`https://app.kendra.io/api/${adapterName}/${workflowId}`)
      .toPromise();
    this.blockOptions = blocks;
    this.flowConfig = flowConfig;
    this.context = {
      app: {adapterName, workflowId}
    };
    await this.createDummyContext();
  }

  runBlocks() {
    setTimeout(() => {
      this.zone.run(() => {
        this.selectedBlock = this.blockOptions[parseInt(this.blockLimit, 10)];
        this.selectedBlockType = get(this.selectedBlock, 'type', '');
        if (this.selectedBlockType === 'mapping') {
          this.queryTxt = get(this.selectedBlock, 'mapping', 'data');
          this.blockExec = this.blockOptions.slice(0, parseInt(this.blockLimit, 10));
          this.startModels = this.blockExec.map(() => ({}));
        } else {
          this.blockExec = this.blockOptions.slice(0, 1 + parseInt(this.blockLimit, 10));
          this.startModels = this.blockExec.map(() => ({}));
        }
      });
    }, 100);
  }

  saveBlocks() {
    // console.log(this.blockOptions);
    // const prevMapping = get(this.selectedBlock, 'mapping', 'data');
    set(this.blockOptions[parseInt(this.blockLimit, 10)], 'mapping', this.queryTxt);
    const dialogRef = this.dialog.open(SaveWorkflowDialogComponent, {
      disableClose: true,
      data: {...this.flowConfig, blocks: this.blockOptions}
    });
    dialogRef.afterClosed().subscribe(values => {
      if (!!values) {
        console.log('workflow saved', {values});
      }
    });

  }

  loadNewData(v) {
    if (!v) {
      return;
    }
    // console.log(v);
    setTimeout(() => {
      this.zone.run(() => {
        this.dataInTxt = JSON.stringify(v, null, 2);
        this.updateDataInModel();
      });
    }, 30);
    // This timeout should not be needed but there's an ExpressionChangedAfterItHasBeenCheckedError
    // in here somewhere that I can't track down.
  }

  dataInModelChange() {
    // console.log(this);
  }

  updateDataInModel() {
    this.dataInModel = {
      value: this.dataInTxt,
      language: 'json',
      uri: 'a:dataModel.json'
    };
  }
}
