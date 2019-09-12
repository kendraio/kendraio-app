import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-checkbox-wrapper-panel',
  template: `
  <section class="checkbox-section">

        <ng-container #fieldComponent></ng-container>
  <section>
  `
})
export class CheckBoxWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: true }) fieldComponent: ViewContainerRef;
}
