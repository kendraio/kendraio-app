import { Component, OnInit, Inject } from '@angular/core';
import { DynamicFormModel, DynamicFormService, DynamicFormLayout } from '@ng-dynamic-forms/core';

import { FormsModule, FormGroup, FormArray, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MUSIC_RELEASES_FORM_MODEL } from '../_shared/forms/formModel';
import { LabelOptions, MAT_LABEL_GLOBAL_OPTIONS, MatDatepicker, MatInput } from '@angular/material';
import { FORM_LAYOUT } from '../_shared/forms/form.layout';
import { MatDialog, MAT_DIALOG_DATA, MatButton } from '@angular/material';

@Component({
  selector: 'app-music-releases-edit',
  templateUrl: './music-releases-edit.component.html',
  styles : [` 
  dynamic-material-form[fxLayoutAlign] { padding:10px; padding-left: 25px;}
  `],
})
export class MusicReleasesEditComponent implements OnInit {
formModel: DynamicFormModel = MUSIC_RELEASES_FORM_MODEL;
formGroup: FormGroup;
formLayout: DynamicFormLayout = FORM_LAYOUT;

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
