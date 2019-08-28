import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput, ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted.
 * this is an attempt to allow custom error msgs
 *
*/
// export class errorStateMatcher implements ErrorStateMatcher {
//     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//       const isSubmitted = form && form.submitted;
//       return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//     }
//   }

@Component({
  template: `
  <mat-form-field>
    <textarea matInput
              [id]="id"
              [formControl]="formControl"
              [cols]="cols"
              [rows]="rows"
              [placeholder]="placeholder"
              [matTextareaAutosize]="autosize"
    >
    </textarea>


    <mat-hint>{{description}}  rows={{rows}} cols={{cols}}</mat-hint>
    <mat-error *ngIf="formControl.hasError('required')">
      This is <strong>required</strong>
    </mat-error>
    </mat-form-field>
  `
})

export class TextareaComponent extends FieldType {
//   @ViewChild(MatInput) formFieldControl: MatInput;
  get autosize(): boolean { return this.to.autosize || false; }
  get cols(): number { return this.to.cols || 50; }
  get rows(): number { return this.to.rows || 8; }
  get placeholder(): string {return this.to.placeholder ||  this.to.label; }
  get description(): string {return this.to.description; }

}
