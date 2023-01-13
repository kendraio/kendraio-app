import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EDITOR_OPTIONS} from './editor-options';
import {BLOCK_TYPES} from '../../dialogs/add-block-dialog/block-types';
import { find, get, unset, clone } from 'lodash-es';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-block-builder-box',
  templateUrl: './block-builder-box.component.html',
  styleUrls: ['./block-builder-box.component.scss']
})
export class BlockBuilderBoxComponent implements OnInit {

  editorOptions = EDITOR_OPTIONS;

  blockTypes = BLOCK_TYPES;

  blockTypeConfig;
  hasEditor = false;

  @Input() block;
  blockModel = '';  
  blockCommentFormControl = new UntypedFormControl(); 
  blockTitle = '';

  @Output() updateBlock = new EventEmitter();
  @Output() deleteBlock = new EventEmitter();

  jsonMode;

  constructor() { }

  ngOnInit() {    
    this.blockCommentFormControl.setValue(get(this.block, 'blockComment', ''));    
    let block = clone(this.block);      
    unset(block,"blockComment");    
    this.blockModel = JSON.stringify(block, null, 4);
    this.blockTypeConfig = find(BLOCK_TYPES, ({ type }) => this.block.type === type);
    this.hasEditor = get(this.blockTypeConfig, 'hasEditor', false);

    
    // this.jsonMode = {
      // value: this.blockModel,
      // language: 'json',
      // uri: 'a:blockModel.json'
    // };
  }

  _updateBlock() {
    this.updateBlock.emit(this.getUpdatedModel());
  }

  getUpdatedModel() {
    let block = JSON.parse(this.blockModel);
    return {
      ...block,            
      blockComment: this.blockCommentFormControl.value,      
    };

  }

  onBlockUpdated(newBlock) {
    this.block = newBlock;
    this.blockModel = JSON.stringify(this.block, null, 4);
    // this.jsonMode = {
    //   value: this.blockModel,
    //   language: 'json',
    //   uri: 'a:blockModel.json'
    // };
  }
  
   
  initEditor() {
  }
}
