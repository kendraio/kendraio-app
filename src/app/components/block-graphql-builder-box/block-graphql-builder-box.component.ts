import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { get } from 'lodash-es';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-block-graphql-builder-box',
  templateUrl: './block-graphql-builder-box.component.html',
  styleUrls: ['./block-graphql-builder-box.component.scss'],
})
export class BlockGraphqlBuilderBoxComponent implements OnInit {
  editorOptions = {
    baseUrl: 'blocks-builder',
    theme: 'vs',
    language: 'graphql',
    minimap: {
      enabled: false,
    },
    lineNumbers: 'off',
    scrollBeyondLastLine: false,
    automaticLayout: true,
  };
  editorOptionsJson = {
    baseUrl: 'blocks-builder',
    theme: 'vs',
    language: 'json',
    minimap: {
      enabled: false,
    },
    lineNumbers: 'off',
    scrollBeyondLastLine: false,
    automaticLayout: true,
  };

  @Input() block;
  @Output() updateBlock = new EventEmitter();
  queryModel = '';
  variablesModel = '';
  headerModel = '';
  allowEmpty = false;
  allowFirst = false;
  endpointFormControl = new UntypedFormControl();

  constructor() {}

  ngOnInit() {
    this.queryModel = get(this.block, 'query', '');
    this.variablesModel = JSON.stringify(
      get(this.block, 'variables', {}),
      null,
      2
    );
    this.headerModel = JSON.stringify(get(this.block, 'headers', {}), null, 2);
    this.allowEmpty = get(this.block, 'allowEmpty', false);
    this.allowFirst = get(this.block, 'allowEmpty', false);
    this.endpointFormControl.setValue(get(this.block, 'endpoint', ''));
  }

  getUpdatedModel() {
    return {
      ...this.block,
      query: this.queryModel,
      endpoint: this.endpointFormControl.value,
      variables: JSON.parse(this.variablesModel || '{}'),
      headers: JSON.parse(this.headerModel || '{}'),
      allowFirst: this.allowFirst,
      allowEmpty: this.allowEmpty,
    };
  }
}
