import {Component, Inject, OnInit} from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {clone} from 'lodash-es';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-edit-workflow-metadata-dialog',
  templateUrl: './edit-workflow-metadata-dialog.component.html',
  styleUrls: ['./edit-workflow-metadata-dialog.component.scss']
})
export class EditWorkflowMetadataDialogComponent implements OnInit {

  form: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  get tags() {
    return (this.form.get('tags') as FormArray);
  }

  constructor(
    public dialogRef: MatDialogRef<EditWorkflowMetadataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      id: [''],
      adapterName: [''],
      tags: this.fb.array([]),
    });
    this.form.patchValue(this.data);
    (<string[]>this.data.tags).forEach(tag => this.tags.push(this.fb.control(tag)));
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push(this.fb.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tags.getRawValue().indexOf(tag);

    if (index >= 0) {
      this.tags.removeAt(index);
    }
  }

  onSave() {
    this.dialogRef.close(clone(this.form.getRawValue()));
  }

  onCancel() {
    this.dialogRef.close();
  }
}
