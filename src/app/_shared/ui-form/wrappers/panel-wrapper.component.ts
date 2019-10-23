import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <div class="card my-5">
      <div class="card-header">{{ to.label }}</div>
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `
})
export class PanelWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: true }) fieldComponent: ViewContainerRef;
}
