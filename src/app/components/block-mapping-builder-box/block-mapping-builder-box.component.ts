import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {get} from 'lodash-es';

@Component({
  selector: 'app-block-mapping-builder-box',
  templateUrl: './block-mapping-builder-box.component.html',
  styleUrls: ['./block-mapping-builder-box.component.scss']
})
export class BlockMappingBuilderBoxComponent implements OnInit {

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

  @Input() block;
  @Output() updateBlock = new EventEmitter();
  mappingModel = '';

  constructor() { }

  ngOnInit() {
    this.mappingModel = get(this.block, 'mapping', '');
  }

  getUpdatedModel() {
    return {
      ...this.block,
      mapping: this.mappingModel,
    };
  }
}
