import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import {BLOCK_TYPES} from './block-types';
import {get} from 'lodash-es';

@Component({
  selector: 'app-add-block-dialog',
  templateUrl: './add-block-dialog.component.html',
  styleUrls: ['./add-block-dialog.component.scss']
})
export class AddBlockDialogComponent implements OnInit {

  blockTypes = BLOCK_TYPES.filter(def => !(def.deprecated));

  selectedBlockType;

  constructor(
    public dialogRef: MatDialogRef<AddBlockDialogComponent>
  ) { }

  ngOnInit() {
  }

  setBlockType(b) {
    this.selectedBlockType = b;
  }

  addBlock() {
    this.dialogRef.close(get(this.selectedBlockType, 'defaultConfig'));
  }

  cancel() {
    this.dialogRef.close();
  }
}
