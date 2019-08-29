import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EDITOR_OPTIONS} from './editor-options';

@Component({
  selector: 'app-block-builder-box',
  templateUrl: './block-builder-box.component.html',
  styleUrls: ['./block-builder-box.component.scss']
})
export class BlockBuilderBoxComponent implements OnInit {

  editorOptions = EDITOR_OPTIONS;

  @Input() block;
  blockModel = '';

  @Output() updateBlock = new EventEmitter();
  @Output() deleteBlock = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.blockModel = JSON.stringify(this.block, null, 4);
  }

  _updateBlock() {
    this.updateBlock.emit(this.getUpdatedModel());
  }

  getUpdatedModel() {
    return JSON.parse(this.blockModel);
  }
}
