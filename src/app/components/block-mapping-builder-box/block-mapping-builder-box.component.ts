import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {get} from 'lodash-es';
import { FormControl } from '@angular/forms';

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
  blockTitleFormControl = new FormControl(); 
  blockCommentFormControl = new FormControl(); 



  constructor() { }

  ngOnInit() {
    this.mappingModel = get(this.block, 'mapping', '');
    this.blockTitleFormControl.setValue(get(this.block, 'blockTitle', ''));
    this.blockCommentFormControl.setValue(get(this.block, 'blockComment', ''));
  }

  getUpdatedModel() {
    return {
      ...this.block,
      mapping: this.mappingModel,
      blockTitle: this.blockTitleFormControl.value,
      blockComment: this.blockCommentFormControl.value,
    };
  }
}
