import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { DynamicFormModel, DynamicFormService, DynamicFormLayout } from '@ng-dynamic-forms/core';

import { FormsModule, FormGroup, FormArray, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MY_CLAIMS_FORM_MODEL } from '../formModel';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CLAIMS_FORM_LAYOUT } from './form.layout';
@Component({
  selector: 'app-edit-send-form',
  templateUrl: './edit-send-form.component.html',
  styleUrls: ['./edit-send-form.component.scss']
})
export class EditSendFormComponent implements OnInit, OnChanges {
  @Input() 
  data: any;
  
  formModel: DynamicFormModel = MY_CLAIMS_FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = CLAIMS_FORM_LAYOUT;

  constructor(
    private formService: DynamicFormService
  ) { 

  }



  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formGroup.patchValue(this.data);
    // this.formGroup.get('comments').patchValue('booly');
    // this.formGroup.get('claim.details').patchValue(this.data);
   this.formGroup.addControl('details', new FormControl(''));
   this.formGroup.get('details').patchValue(this.data);
    
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.formGroup) {
    this.formGroup.get('details').patchValue(this.data);
  }
  }

//   ngDoCheck(): void {
//     //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
//     //Add 'implements DoCheck' to the class.
// alert('checks');
//   }



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
