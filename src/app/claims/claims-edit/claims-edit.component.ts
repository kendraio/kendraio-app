import { Component, OnInit, Inject } from '@angular/core';
import { DynamicFormModel, DynamicFormService, DynamicFormLayout } from '@ng-dynamic-forms/core';

import { FormsModule, FormGroup, FormArray, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MY_CLAIMS_FORM_MODEL } from '../_shared/forms/formModel';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CLAIMS_FORM_LAYOUT } from './form.layout';

@Component({
  selector: 'app-claims-edit',
  templateUrl: './claims-edit.component.html',
  styleUrls: ['./claims-edit.component.scss']
})
export class ClaimsEditComponent implements OnInit {
  formModel: DynamicFormModel = MY_CLAIMS_FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = CLAIMS_FORM_LAYOUT;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formService: DynamicFormService
  ) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formGroup.patchValue(this.data);
  }

  onBlur($event) {
    console.log(`Material blur event on: ${$event.model.id}: `, $event);
  }

  onChange($event) {
    console.log(`Material change event on: ${$event.model.id}: `, $event);
  }

  onFocus($event) {
    console.log(`Material focus event on: ${$event.model.id}: `, $event);
  }

  onMatEvent($event) {
    console.log(`Material ${$event.type} event on: ${$event.model.id}: `, $event);
  }
}
