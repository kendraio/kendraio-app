import { Component, OnInit } from '@angular/core';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';

import { FormsModule, FormGroup, FormArray, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MY_FORM_MODEL } from '../_shared/forms/formModel';

@Component({
  selector: 'app-music-recordings-edit',
  templateUrl: './music-recordings-edit.component.html',
  styleUrls: ['./music-recordings-edit.component.scss']
})
export class MusicRecordingsEditComponent implements OnInit {
  formModel: DynamicFormModel = MY_FORM_MODEL;
formGroup: FormGroup;

constructor(private formService: DynamicFormService) {}

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}


