import { Component, OnInit, Inject } from '@angular/core';
import { DynamicFormModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material';
import { RELEASE_REGISTER_FORM_MODEL } from '../_shared/forms/registerNewRelease';

@Component({
  selector: 'app-register-new-release',
  templateUrl: './register-new-release.component.html',
  styleUrls: ['./register-new-release.component.scss']
})
export class RegisterNewReleaseComponent implements OnInit {
  formModel: DynamicFormModel = RELEASE_REGISTER_FORM_MODEL;
  formGroup: FormGroup;
  //formLayout: DynamicFormLayout = WORKS_FORM_LAYOUT;
  formLayout = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formService: DynamicFormService
    ) {}

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
