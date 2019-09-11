import { Component, ViewChild, OnInit } from '@angular/core';
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
  <mat-form-field  appearance="outline">

    <textarea matInput
              [id]="id"
              [formControl]="formControl"
              [cols]="cols"
              [rows]="rows"
              [placeholder]="placeholder"
              [matTextareaAutosize]="autosize"
    >
    </textarea>



    <mat-hint>{{description}}</mat-hint>

    <!--
    <mat-error *ngIf="formControl.hasError('required')">
      This is <strong>required</strong>
    </mat-error>
    -->

    <mat-error>
    <formly-validation-message [field]="field"></formly-validation-message>
  </mat-error>

<mat-hint align="end">
{{formControl.value.length}}
/
{{to.maxLength}}
</mat-hint>



    </mat-form-field>
  `
})

export class TextareaComponent extends FieldType implements OnInit {


//   defaultOptions = {
//    // defaultValue: {},
//     // validators: {
//     //   validation: ['PasswordStrengthValidation'],
//     // },
// };

constructor() {  super();
  // this.to.minLength = 3;
}
ngOnInit() {
  // this.field.hideExpression = 1 === 2;
  // this.field.templateOptions.minLength = 2;
}





//   @ViewChild(MatInput) formFieldControl: MatInput;
  get autosize(): boolean { return this.to.autosize || false; }
  get cols(): number { return this.to.cols || 50; }
  get rows(): number { return this.to.rows || 8; }
  get placeholder(): string {return this.to.placeholder ||  this.to.label; }
  get description(): string {return this.to.description; }
  get test(): string {return this.formControl.getError('maxLength'); }

}
