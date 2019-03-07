import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {
  DynamicFormControlComponent,
  DynamicFormControlCustomEvent,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormValidationService,
  DynamicInputModel
} from '@ng-dynamic-forms/core';

import {ImageInputControlComponent} from '../image-input-control/image-input-control.component';
import {ReferenceFormModel} from '../reference-form-model';

@Component({
  selector: 'app-dynamic-reference-input-control',
  templateUrl: './dynamic-reference-input-control.component.html',
  styleUrls: ['./dynamic-reference-input-control.component.scss']
})
export class DynamicReferenceInputControlComponent extends DynamicFormControlComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: ReferenceFormModel /* corresponding DynamicFormControlModel */;

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();

  @ViewChild(ImageInputControlComponent) imageInputControlComponent: ImageInputControlComponent;


  constructor(protected layoutService: DynamicFormLayoutService,
              protected validationService: DynamicFormValidationService) {

    super(layoutService, validationService);
  }

  ngOnInit() {
  }

}
