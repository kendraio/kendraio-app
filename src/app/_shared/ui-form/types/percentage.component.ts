import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input-percentage',
  template: `
  <mat-form-field>
  <mat-label>  {{ to.label }} </mat-label>
     <input matInput type="text"  [maskito]="{mask: limitToHundred}" [formControl]="formControl" [formlyAttributes]="field">
     <mat-error></mat-error>
     <mat-hint> {{ to.description }} </mat-hint>
   </mat-form-field>
 `
})
export class KendraFieldInputPercentage extends FieldType {
  public limitToHundred(rawValue) {
    const value = parseInt(rawValue, 10);

    if (value < 100) {
      if (value < 10) {
        return [/\d/, ' %'];
      } else return [/\d/, /\d/, ' %'];
    } else {
      return ['100 %'];
    }
  }
}
