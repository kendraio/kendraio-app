import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-data-select-dialog',
  templateUrl: './form-data-select-dialog.component.html',
  styleUrls: ['./form-data-select-dialog.component.scss']
})
export class FormDataSelectDialogComponent implements OnInit {

  selectedID;

  constructor(
    public dialogRef: MatDialogRef<FormDataSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

  loadData() {
    this.dialogRef.close({
      id: this.selectedID
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
