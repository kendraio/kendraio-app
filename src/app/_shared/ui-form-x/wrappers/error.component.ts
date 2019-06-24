import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-error',
  template: `
    <div class="alert alert-danger" role="alert" *ngIf="formControl.errors && formControl.errors['totalAmount']">
      // {{ formControl.errors['totalAmount'] }}
        Errors=    {{ formControl.errors[0] }}

    </div>
    <ng-container #fieldComponent></ng-container>
  `,
})
export class ErrorWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
