import {Component, Inject, NgZone, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {get} from 'lodash-es';

@Component({
  selector: 'app-blocks-dialog',
  templateUrl: './blocks-dialog.component.html',
  styleUrls: ['./blocks-dialog.component.scss']
})
export class BlocksDialogComponent implements OnInit {

  blocks = [];
  models = [];
  context = {};

  constructor(
    public dialogRef: MatDialogRef<BlocksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly zone: NgZone
  ) { }

  ngOnInit() {
    this.blocks = get(this.data, 'blocks', []);
    this.models = [get(this.data, 'model', {})];
    this.context = get(this.data, 'context', {});
  }

  onWorkflowComplete(value) {
    // console.log('workflow complete', { value });
    setTimeout(() => {
      this.zone.run(() => {
        this.dialogRef.close(value);
      });
    }, 0);
  }
}
