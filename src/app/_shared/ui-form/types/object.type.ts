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

    <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
  `,
})
export class ObjectTypeComponent extends FieldType {
  defaultOptions = {
    defaultValue: {},
  };
}
