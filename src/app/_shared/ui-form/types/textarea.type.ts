import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInput } from '@angular/material/input';

/** Error when invalid control is dirty, touched, or submitted.
 * this is an attempt to allow custom error msgs
 *
*/
// export class errorStateMatcher implements ErrorStateMatcher {  // do not remove maybe use later!
//     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//       const isSubmitted = form && form.submitted;
//       return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//     }
//   }

@Component({
  template: `



  <mat-form-field  class="block-comment-container">

                  <textarea matInput
                            [id]="id"
                            [formControl]="formControl"
                            [cols]="cols"
                            [rows]="rows"
                            [placeholder]="placeholderOrLabel"
                            [cdkTextareaAutosize]="autosize"
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
              {{formControl?.value?.length}}/{{maxLength}}
              </mat-hint>

    </mat-form-field>
  `
})

export class TextareaComponent extends FieldType<any> {
//   defaultOptions = {
//     hideExpression: () => true,
//     // defaultValue: {},
//      // validators: {
//      //   validation: ['PasswordStrengthValidation'],
//      // },
//  };

//   @ViewChild(MatInput) formFieldControl: MatInput;
  get autosize(): boolean { return this.to.autosize || false; }
  get cols(): number { return this.to.cols || 50; }
  get rows(): number { return this.to.rows || 8; }
  get maxLength(): number { return this.to.maxLength || 15000; }
  // In the absense of a placeholder, may use JSON schema label (title key), see below:
  get placeholderOrLabel(): string {return this.to.placeholder ||  this.to.label; }
  get description(): string {return this.to.description; }
  get test(): string {return this.formControl.getError('maxLength'); }
  
}

// Form blocks have may labels may be defined like this:
`{
  "type": "form",
    "jsonSchema": {
    "type": "object",
      "properties": {
      "data": {
        "type": "string",
          "title": "label title" // This is the label
      }
    }
  },
  "uiSchema": {
    "data": {
      "ui:widget": "kendraio-textarea",
        "ui:labelProp": "label text",
          //"ui:placeholder": "uiplaceholder", // this is used instead of labels
          "ui:rows": 10
    }
  }
}`