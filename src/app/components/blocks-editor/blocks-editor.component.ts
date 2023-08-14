import {Component, EventEmitter, Input, OnInit, OnChanges, Output} from '@angular/core';
import {AddBlockDialogComponent} from '../../dialogs/add-block-dialog/add-block-dialog.component';
import {BLOCK_TYPES} from '../../dialogs/add-block-dialog/block-types';
import { MatDialog } from '@angular/material/dialog';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {clone} from 'lodash-es';


const _blockIcons = {};
const _blockTypes = {};
BLOCK_TYPES.forEach(element => _blockIcons[element.type]=element.icon||'?');

BLOCK_TYPES.forEach(element => _blockTypes[element.type]=element);
@Component({
  selector: 'app-blocks-editor',
  templateUrl: './blocks-editor.component.html',
  styleUrls: ['./blocks-editor.component.scss']
})
export class BlocksEditorComponent implements OnInit, OnChanges {

  @Input() blocks = [];
  @Input() blockIcons = _blockIcons;
  @Input() blockTypes = _blockTypes;
  @Output() blockUpdate = new EventEmitter();

  blockTitles = [];

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.generateTitles();
  }

  generateTitles(){
    this.blocks.forEach((block, i) => {
      this.blockTitles[i] = block.blockComment ? block.blockComment.split("\n")[0]: '';
    });
  }

  blocksChanged() {
    this.generateTitles();
    this.blockUpdate.emit(clone(this.blocks));
  }

  onDeleteBlock(i) {
    this.blocks.splice(i, 1);
    this.blocksChanged();
  }

  drop(event) {
    moveItemInArray(this.blocks, event.previousIndex, event.currentIndex);
    this.blocksChanged();
  }

  onUpdateBlock(i, c) {
    this.blocks = [...this.blocks.slice(0, i), c.getUpdatedModel(), ...this.blocks.slice(i + 1)];
    this.blocksChanged();
  }

  addBlock() {
    const dialogRef = this.dialog.open(AddBlockDialogComponent, {
      width: '65vw'
    });
    dialogRef.afterClosed().subscribe(newBlock => {
      if (!!newBlock) {
        // TODO: use immutable data for efficiency/structural sharing
        this.blocks = [...this.blocks, newBlock];
        this.blocksChanged();
      }
    });
  }
}
