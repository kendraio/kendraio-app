import { Component, OnInit } from '@angular/core';
import { DynamicFormModel, DynamicFormService, DynamicFormLayout } from '@ng-dynamic-forms/core';

import { FormsModule, FormGroup, FormArray, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MUSIC_RELEASES_FORM_MODEL } from '../_shared/forms/formModel';
import { LabelOptions, MAT_LABEL_GLOBAL_OPTIONS, MatDatepicker, MatInput } from '@angular/material';
import { FORM_LAYOUT } from '../_shared/forms/form.layout';

@Component({
  selector: 'app-music-releases-edit',
  templateUrl: './music-releases-edit.component.html',
  styleUrls: ['./music-releases-edit.component.scss']
})
export class MusicReleasesEditComponent implements OnInit {
  formModel: DynamicFormModel = MUSIC_RELEASES_FORM_MODEL;
formGroup: FormGroup;
formLayout: DynamicFormLayout = FORM_LAYOUT;

  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
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