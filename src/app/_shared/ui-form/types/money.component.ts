import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';


@Component({
  selector: 'formly-field-input-money',
  template: `

     <mat-form-field appearance="standard" style="width:100%">
     <mat-label>  {{ to.label }} </mat-label>
     <input matInput type="text"  
     [textMask]="{mask: numberMask}" 
     [formControl]="formControl" 
     [formlyAttributes]="field">
     <mat-error>OOPS</mat-error>
     <mat-hint></mat-hint>
   </mat-form-field>


 `,
})
// tslint:disable-next-line: component-class-suffix
export class FormlyFieldInputMoney extends FieldType {
  public numberMask = createNumberMask({
    prefix: '£ ',
    allowDecimal: true
  });
}

