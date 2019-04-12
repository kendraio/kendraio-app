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
import {DynamicMaterialInputComponent} from '@ng-dynamic-forms/ui-material';

@Component({
  selector: 'app-dynamic-reference-input-control',
  templateUrl: './dynamic-reference-input-control.component.html',
  styleUrls: ['./dynamic-reference-input-control.component.scss']
})
export class DynamicReferenceInputControlComponent extends DynamicMaterialInputComponent {


}
