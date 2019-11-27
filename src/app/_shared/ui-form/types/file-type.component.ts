import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-file',
  template: `
    <input type="file" [formControl]="formControl" [formlyAttributes]="field">
  `,
})
export class FormlyFieldFileComponent extends FieldType {}
