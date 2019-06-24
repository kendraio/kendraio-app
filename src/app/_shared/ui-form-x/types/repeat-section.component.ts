import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-group
        class="formly-repeat-section__group"
        [model]="model[i]"
        [field]="field"
        [options]="options"
        [form]="formControl">
        <i class="fa fa-trash formly-repeat-section__icon" 
           (click)="remove(i)"></i>
      </formly-group>
    </div>
    <div class="formly-repeat-section__action" 
         (click)="add()">
      {{field.fieldArray.templateOptions.btnText}}
    </div>
  `,
  styleUrls: ['./repeat-section.component.scss']
})
export class RepeatSectionComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
