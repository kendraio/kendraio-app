import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DynamicFormControlComponent, DynamicFormLayout,
  DynamicFormControlCustomEvent,
  DynamicFormLayoutService, DynamicFormValidationService, DynamicInputModel } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { PasswordInputComponent } from '../../password-input.component';

@Component({
  selector: 'app-dynamic-password-input',
  templateUrl: './dynamic-password-input.component.html',
  styleUrls: ['./dynamic-password-input.component.scss']
})
export class DynamicPasswordInputComponent  extends DynamicFormControlComponent {

  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: DynamicInputModel;

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();

  @ViewChild(PasswordInputComponent, { static: true }) passwordInputComponent: PasswordInputComponent;

  constructor(protected layoutService: DynamicFormLayoutService,
              protected validationService: DynamicFormValidationService) {

      super(layoutService, validationService);
  }
}
