import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-field-ng-select',
  template: `
    <ng-select
      ngSelectMat
      [items]="to.options"
      [bindLabel]="labelProp"
      [bindValue]="valueProp"
      [multiple]="isMultiSelect"
      [placeholder]="to.placeholder"
      [addTag]="addTag"
      [formControl]="formControl"
    >
    </ng-select>
    <mat-hint *ngIf="isMultiSelect"
      >You may select more that one option</mat-hint
    >
  `,
})
export class KendraFieldSelect extends FieldType {
  get addTag(): boolean {
    return this.to.addTag || false;
  }
  get isMultiSelect(): boolean {
    return this.to.isMultiSelect || false;
  }
  get labelProp(): string {
    return this.to.labelProp || 'name';
  }
  get valueProp(): string {
    return this.to.valueProp || 'id';
  }
  get groupProp(): string {
    return this.to.groupProp || 'group';
  }

  // TODO:
  // add grouping
  // add custom header/footer
  // better Mat formatting
}
