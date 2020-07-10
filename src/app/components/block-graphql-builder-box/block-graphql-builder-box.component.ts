import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {get} from 'lodash-es';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-block-graphql-builder-box',
  templateUrl: './block-graphql-builder-box.component.html',
  styleUrls: ['./block-graphql-builder-box.component.scss']
})
export class BlockGraphqlBuilderBoxComponent implements OnInit {

  editorOptions = {
    baseUrl: 'blocks-builder',
    theme: 'vs',
    language: 'graphql',
    minimap: {
      enabled: false
    },
    lineNumbers: 'off',
    scrollBeyondLastLine: false,
    automaticLayout: true
  };
  editorOptionsJson = {
    baseUrl: 'blocks-builder',
    theme: 'vs',
    language: 'json',
    minimap: {
      enabled: false
    },
    lineNumbers: 'off',
    scrollBeyondLastLine: false,
    automaticLayout: true
  };

  @Input() block;
  @Output() updateBlock = new EventEmitter();
  queryModel = '';
  variablesModel = '';
  headerModel = '';
  endpointFormControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.queryModel = get(this.block, 'query', '');
    this.variablesModel = JSON.stringify(get(this.block, 'variables', {}), null, 2);
    this.headerModel = JSON.stringify(get(this.block, 'headers', {}), null, 2);
    this.endpointFormControl.setValue(get(this.block, 'endpoint', ''));
  }

  getUpdatedModel() {
    return {
      ...this.block,
      query: this.queryModel,
      endpoint: this.endpointFormControl.value,
      variables: JSON.parse(this.variablesModel || '{}'),
      headers: JSON.parse(this.headerModel || '{}'),
    };
  }
}
