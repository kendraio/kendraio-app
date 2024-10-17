import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { clone, get, isArray, isObject } from 'lodash-es';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { BlocksDialogComponent } from '../../dialogs/blocks-dialog/blocks-dialog.component';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.scss'],
})
export class ButtonBlockComponent implements OnInit, OnChanges {
  // TODO: deprecate in favour of actions block

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  label = '';

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    this.label = get(this.config, 'label', 'Submit');
  }

  onSubmit() {
    const dialogRef = this.dialog.open(BlocksDialogComponent, {
      // TODO: Add other dialog options to config
      data: {
        blocks: get(this.config, 'blocks', []),
        model: this.model,
      },
    });
    dialogRef.afterClosed().subscribe((value) => {
      this.output.emit(clone(value));
    });
  }
}
