import { Component, OnInit, Inject } from '@angular/core';
import { DynamicFormModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material';
import { WORKS_FORM_MODEL } from '../_shared/forms/formModel';
import { WORKS_FORM_LAYOUT } from './form.layout';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formModel: DynamicFormModel = WORKS_FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = WORKS_FORM_LAYOUT;

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
