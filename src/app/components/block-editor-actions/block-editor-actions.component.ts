import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {clone, get, set} from 'lodash-es';

@Component({
  selector: 'app-block-editor-actions',
  templateUrl: './block-editor-actions.component.html',
  styleUrls: ['./block-editor-actions.component.scss']
})
export class BlockEditorActionsComponent implements OnInit {

  @Input() block;
  @Output() blockUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addButton() {
    const buttons = get(this.block, 'buttons', []);
    buttons.push({ label: 'Action', blocks: [] });
    this.blockUpdated.emit({ ...this.block, buttons });
  }

  labelChanged(i, value) {
    set(this.block, `buttons[${i}].label`, value);
    this.blockUpdated.emit(clone(this.block));
  }

  onBlockUpdate(i, value) {
    set(this.block, `buttons[${i}].blocks`, value);
    this.blockUpdated.emit(clone(this.block));
  }

  removeButton(i) {
    this.block.buttons.splice(i, 1);
    this.blockUpdated.emit(clone(this.block));
  }

  colorChange(i, value) {
    set(this.block, `buttons[${i}].color`, value);
    this.blockUpdated.emit(clone(this.block));
  }
}
