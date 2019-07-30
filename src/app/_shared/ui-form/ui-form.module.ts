import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TextMaskModule } from 'angular2-text-mask';
// import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


import { PanelWrapperComponent,
// ErrorWrapperComponent,
// AnimationWrapperComponent
} from './wrappers';



// import { RepeatSectionComponent } from './types/repeat-section.component';
import * as types from './types/';

import { config } from './config';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatNativeDateModule } from '@angular/material/core';
// import { AppMaterialModule } from './app/app-material/app-material.module';
import { FormlyFieldTypeahead } from './types/typeahead.component';

import { NgSelectModule } from '@ng-select/ng-select';
// import { SharedModule } from '../shared.module';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import {
  MatButtonToggleModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatListModule,
  MatSelectModule,
  MatSliderModule,
  MatButtonModule,
  MatCard,
  MatCardModule
  // MatNativeDateModule
} from '@angular/material';
// import { ContentEditableFormDirective } from '../directives/editable-content';
// import { KendraioFormComponent } from './kendraio-form/kendraio-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    TextMaskModule,

    // AppMaterialModule,
    NgSelectModule,
    // SharedModule
    // FormlyBootstrapModule,
    FormlyMaterialModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    // MatNativeDateModule,
    FormlyMatDatepickerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule ,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    NgSelectModule,
    MatCardModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule
  ],
  declarations: [
    PanelWrapperComponent,
    // ErrorWrapperComponent,
    // AnimationWrapperComponent,
    // RepeatSectionComponent,
    types.FormlyFieldInputMoney,
    types.FormlyFieldInputPercentage,
    FormlyFieldTypeahead,
    types.FormlyFieldVideoViewer,
    types.SelectTagsComponent,
    types.FieldInputVisibilityComponent,
    types.FieldInputPlaylistComponent,
    types.FieldCountriesComponent
    // ContentEditableFormDirective
    // KendraioFormComponent

  ]
})
export class UiFormModule {}
