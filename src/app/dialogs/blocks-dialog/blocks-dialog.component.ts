import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {get} from 'lodash-es';

@Component({
  selector: 'app-blocks-dialog',
  templateUrl: './blocks-dialog.component.html',
  styleUrls: ['./blocks-dialog.component.scss']
})
export class BlocksDialogComponent implements OnInit {

  blocks = [];
  models = [];

  constructor(
    public dialogRef: MatDialogRef<BlocksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    this.blocks = get(this.data, 'blocks', []);
    this.models = [get(this.data, 'model', {})];
  }

  terminatingBlockUpdate(value) {
    this.dialogRef.close(value);
  }

}
