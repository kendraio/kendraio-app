import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SchemaRepositoryService } from '../../services/schema-repository.service';

@Component({
  selector: 'app-add-new-node-dialog',
  templateUrl: './add-new-node-dialog.component.html',
  styleUrls: ['./add-new-node-dialog.component.scss']
})
export class AddNewNodeDialogComponent implements OnInit {

  labelField;

  constructor(
    public dialogRef: MatDialogRef<AddNewNodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly schemaService: SchemaRepositoryService
  ) {

  }

  ngOnInit() {
    this.labelField = this.schemaService.getLabelFieldForSchema(this.data['type']);
  }

  closeDialog(labelValue) {
    this.dialogRef.close({ [this.labelField['id']]: labelValue });
  }
}
