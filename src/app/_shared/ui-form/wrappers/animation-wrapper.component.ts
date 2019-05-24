import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { Animations } from '../../animations';



@Component({
    selector: 'formly-wrapper-animation',
    template: `
      <div [@openClose]="field.hide ? 'open' : 'closed'">
        <ng-container #fieldComponent></ng-container>
      </div>
    `,
    animations: [Animations.kendraAnimations],
  })
  export class AnimationWrapperComponent extends FieldWrapper {
    @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
  }
