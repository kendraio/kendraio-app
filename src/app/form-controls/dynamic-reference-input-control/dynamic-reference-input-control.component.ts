import {Component, EventEmitter, Inject, Input, OnInit, Optional, Output, ViewChild} from '@angular/core';
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
import {
  ErrorStateMatcher,
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
  MAT_LABEL_GLOBAL_OPTIONS, MAT_RIPPLE_GLOBAL_OPTIONS,
  MatAutocompleteDefaultOptions,
  RippleGlobalOptions,
  LabelOptions
} from '@angular/material';

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
              protected validationService: DynamicFormValidationService,

  @Inject(ErrorStateMatcher) public errorStateMatcher: ErrorStateMatcher,
  @Inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS) public AUTOCOMPLETE_OPTIONS: MatAutocompleteDefaultOptions,
  @Inject(MAT_LABEL_GLOBAL_OPTIONS) @Optional() public LABEL_OPTIONS: LabelOptions,
  @Inject(MAT_RIPPLE_GLOBAL_OPTIONS) @Optional() public RIPPLE_OPTIONS: RippleGlobalOptions
  ) {

    super(layoutService, validationService);
  }

  ngOnInit() {
  }

}
