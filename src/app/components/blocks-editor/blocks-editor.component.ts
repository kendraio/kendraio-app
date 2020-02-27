import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddBlockDialogComponent} from '../../dialogs/add-block-dialog/add-block-dialog.component';
import {MatDialog} from '@angular/material';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {clone} from 'lodash-es';

@Component({
  selector: 'app-blocks-editor',
  templateUrl: './blocks-editor.component.html',
  styleUrls: ['./blocks-editor.component.scss']
})
export class BlocksEditorComponent implements OnInit {

  @Input() blocks = [];
  @Output() blockUpdate = new EventEmitter();

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  blocksChanged() {
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
      width: '460px'
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
