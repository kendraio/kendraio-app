import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

  // here we are trying to find a way to put all error msgs in one place.

@Component({
  selector: 'formly-object-type',
  template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <p *ngIf="to.description">{{ to.description }}</p>
    <div class="error matstuff" role="alert" *ngIf="showError">
      <formly-validation-message [field]="field"></formly-validation-message>
     </div>  
  
    <div
    class="content" 
    fxLayout.sm="column"
    fxLayout.xs="column"
    fxLayout="row" 
     fxLayoutGap="30px"
    fxLayoutAlign="space-between center"
  >
    <formly-field *ngFor="let f of field.fieldGroup" fxFlexFill [field]="f" fxFlex="100"  fxFlex.sm="100"></formly-field>

    </div>


  `,
})
export class FormGroupTypeComponent extends FieldType {

    defaultOptions = {
        defaultValue: {},

    };
}

