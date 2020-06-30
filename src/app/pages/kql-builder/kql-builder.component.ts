import {Component, OnInit} from '@angular/core';
import {JSON_EDITOR_OPTIONS} from './json-editor-options';
import {KQL_EDITOR_OPTIONS} from './kql-editor-options';
import {NgxEditorModel} from 'ngx-monaco-editor';
import {mappingUtility} from '../../blocks/mapping-block/mapping-util';

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

  constructor() {
  }

  ngOnInit() {
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

}
