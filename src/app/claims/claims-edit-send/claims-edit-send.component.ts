import { Component, OnInit, Inject, AfterContentInit } from '@angular/core';
import { DynamicFormModel, DynamicFormService, DynamicFormLayout } from '@ng-dynamic-forms/core';

import { FormsModule, FormGroup, FormArray, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MY_CLAIMS_FORM_MODEL } from '../_shared/forms/formModel';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CLAIMS_FORM_LAYOUT } from '../claims-edit/form.layout';

@Component({
  selector: 'app-claims-edit-send',
  templateUrl: './claims-edit-send.component.html',
  styleUrls: ['./claims-edit-send.component.scss']
})
export class ClaimsEditSendComponent implements OnInit, AfterContentInit {
  formModel: DynamicFormModel = MY_CLAIMS_FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = CLAIMS_FORM_LAYOUT;
  rowCount: number;
  rowCurrent: number;
  claim: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formService: DynamicFormService
  ) {
    this.rowCurrent = 0;
   }

  ngOnInit() {
    //this.formGroup = this.formService.createFormGroup(this.formModel);
    this.rowCount = this.data.length;
    this.claim = this.data;
   // this.formGroup.patchValue(this.data[0]);

  //  this.formGroup.get('comments').patchValue('boo');
  }
  ngAfterContentInit() {
    this.claim = this.data[0];
  }


  goToNextRow() {
    if (this.rowCurrent < this.rowCount - 1) {
      this.claim = this.data[this.rowCurrent + 1];
      this.rowCurrent++;
    }
  }

  goToPrevRow() {
    if (this.rowCurrent > 0 ) {
      this.claim = this.data[this.rowCurrent - 1];
      this.rowCurrent--;
    }
  }


}
