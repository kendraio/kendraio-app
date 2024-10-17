import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-field-input-hidden',
  template: `
    <mat-form-field [hidden]="true">
      <mat-label> {{ to.label }} </mat-label>
      <input matInput [formControl]="formControl" [formlyAttributes]="field" />
    </mat-form-field>
  `,
})
export class FieldHiddenComponent extends FieldType {}
