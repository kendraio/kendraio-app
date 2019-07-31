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
import { MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocompleteDefaultOptions } from '@angular/material/autocomplete';
import { ErrorStateMatcher, MAT_LABEL_GLOBAL_OPTIONS, MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions, LabelOptions } from '@angular/material/core';
import {DynamicMaterialInputComponent} from '@ng-dynamic-forms/ui-material';

@Component({
  selector: 'app-dynamic-reference-input-control',
  templateUrl: './dynamic-reference-input-control.component.html',
  styleUrls: ['./dynamic-reference-input-control.component.scss']
})
export class DynamicReferenceInputControlComponent extends DynamicMaterialInputComponent {


}
