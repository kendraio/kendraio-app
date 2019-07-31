import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-clip-dialog',
  templateUrl: './edit-clip-dialog.component.html',
  styleUrls: ['./edit-clip-dialog.component.scss']
})
export class EditClipDialogComponent implements OnInit {

  form: FormGroup;

  rightsGroups = [
    'Composition',
    'Recording',
    'Performance',
    'Design'
  ];

  constructor(
    private readonly fb: FormBuilder,
    public dialogRef: MatDialogRef<EditClipDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      right: [''],
      role: [''],
      contributor: [''],
      start: [0],
      end: [100]
    });
    this.form.patchValue(this.data.clip);
  }

  submitDialog() {
    this.dialogRef.close(this.form.getRawValue());
  }
}
