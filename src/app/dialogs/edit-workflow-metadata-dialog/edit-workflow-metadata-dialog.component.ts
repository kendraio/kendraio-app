import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {clone} from 'lodash-es';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-workflow-metadata-dialog',
  templateUrl: './edit-workflow-metadata-dialog.component.html',
  styleUrls: ['./edit-workflow-metadata-dialog.component.scss']
})
export class EditWorkflowMetadataDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditWorkflowMetadataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      id: [''],
      adapterName: ['']
    });
    this.form.patchValue(this.data);
  }

  onSave() {
    this.dialogRef.close(clone(this.form.getRawValue()));
  }

  onCancel() {
    this.dialogRef.close();
  }
}
