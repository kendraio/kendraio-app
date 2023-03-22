import {Component, Inject, OnInit} from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

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
