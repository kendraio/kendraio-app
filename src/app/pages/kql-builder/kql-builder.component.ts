import {Component, NgZone, OnInit} from '@angular/core';
import {JSON_EDITOR_OPTIONS} from './json-editor-options';
import {KQL_EDITOR_OPTIONS} from './kql-editor-options';
import {NgxEditorModel} from 'ngx-monaco-editor';
import {mappingUtility} from '../../blocks/mapping-block/mapping-util';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {sortBy} from 'lodash-es';

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

  constructor(
    private readonly http: HttpClient,
    private readonly zone: NgZone
  ) {
  }

  ngOnInit() {
    this.getFlows();
    this.updateDataInModel();
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
      this.dataOut = mappingUtility({data}, this.queryTxt);
    } catch (e) {
      this.errorMessage = e.message;
    }
  }

  async updateBlockOptions(v) {
    this.blockOptions = [];
    this.blockLimit = '0';
    const {adapterName, workflowId} = this.flows[+v];
    const {blocks} = await this.http.get<any>(`https://app.kendra.io/api/${adapterName}/${workflowId}`)
      .toPromise();
    this.blockOptions = blocks;
    this.context = {
      app: { adapterName, workflowId }
    };
  }

  runBlocks() {
    setTimeout(() => {
      this.zone.run(() => {
        this.blockExec = this.blockOptions.slice(0, 1 + parseInt(this.blockLimit, 10));
        this.startModels = this.blockExec.map(() => ({}));
      });
    }, 100);
  }

  loadNewData(v) {
    if (!v) {
      return;
    }
    // console.log(v);
    this.zone.run(() => {
      this.dataInTxt = JSON.stringify(v, null, 2);
      this.updateDataInModel();
    });
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
