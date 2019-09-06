import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get, isArray, isObject} from 'lodash-es';
import {MatDialog} from '@angular/material';
import {BlocksDialogComponent} from '../../dialogs/blocks-dialog/blocks-dialog.component';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.scss']
})
export class ButtonBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  label = '';

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    this.label = get(this.config, 'label', 'Submit');
    console.log(this.config);
  }

  onSubmit() {
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
