import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get, isArray, isObject} from 'lodash-es';
import {MatDialog} from '@angular/material';
import {BlocksDialogComponent} from '../../dialogs/blocks-dialog/blocks-dialog.component';

@Component({
  selector: 'app-dialog-block',
  templateUrl: './dialog-block.component.html',
  styleUrls: ['./dialog-block.component.scss']
})
export class DialogBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
    const dialogRef = this.dialog.open(BlocksDialogComponent, {
      // TODO: Add other dialog options to config
      data: {
        blocks: get(this.config, 'blocks', []),
        model: this.model
      }
    });
    dialogRef.afterClosed().subscribe(value => {
      // TODO: replace this shallow copy code with _.clone() or similar
      this.output.emit(isArray(value) ? [ ...value ] : isObject(value) ? { ...value } : value);
    });
  }
}