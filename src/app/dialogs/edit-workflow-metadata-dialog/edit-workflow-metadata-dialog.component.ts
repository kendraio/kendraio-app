import { Component, Inject, OnInit } from "@angular/core";
import { MatLegacyChipInputEvent as MatChipInputEvent } from "@angular/material/legacy-chips";
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
} from "@angular/material/legacy-dialog";
import { clone } from "lodash-es";
import {
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: "app-edit-workflow-metadata-dialog",
  templateUrl: "./edit-workflow-metadata-dialog.component.html",
  styleUrls: ["./edit-workflow-metadata-dialog.component.scss"],
})
export class EditWorkflowMetadataDialogComponent implements OnInit {
  form: UntypedFormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  get tags() {
    return this.form.get("tags") as UntypedFormArray;
  }

  constructor(
    public dialogRef: MatDialogRef<EditWorkflowMetadataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly fb: UntypedFormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      id: [""],
      adapterName: [""],
      tags: this.fb.array([]),
    });
    this.form.patchValue(this.data);
    (<string[]>this.data.tags).forEach((tag) =>
      this.tags.push(this.fb.control(tag)),
    );
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || "").trim()) {
      this.tags.push(this.fb.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = "";
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
