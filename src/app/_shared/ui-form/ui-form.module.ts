import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TextMaskModule } from 'angular2-text-mask';
// import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';



import { PanelWrapperComponent, CheckBoxWrapperComponent,
// ErrorWrapperComponent,
// AnimationWrapperComponent
} from './wrappers';

// import { RepeatSectionComponent } from './types/repeat-section.component';
import * as types from './types/';

import { config } from './config';
// import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatNativeDateModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
// import { AppMaterialModule } from './app/app-material/app-material.module';
// import { FormlyFieldTypeahead } from './types/typeahead.component';

import { NgSelectModule } from '@ng-select/ng-select';
// import { SharedModule } from '../shared.module';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCard, MatCardModule
// MatNativeDateModule
 } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormlyFieldFileComponent} from './types/file-type.component';

// import { ContentEditableFormDirective } from '../directives/editable-content';
// import { KendraioFormComponent } from './kendraio-form/kendraio-form.component';


@NgModule({
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    TextMaskModule,
    FlexLayoutModule,

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
    FormlyMatDatepickerModule,
    NgxMaterialTimepickerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    // FormlyMaterialModule ,
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
    FormlyMatDatepickerModule,
    NgxMaterialTimepickerModule
  ],
  declarations: [
    PanelWrapperComponent,
    CheckBoxWrapperComponent,
    // ErrorWrapperComponent,
    // AnimationWrapperComponent,
    // RepeatSectionComponent,
    types.FormlyFieldInputMoney,
    types.KendraFieldInputPercentage,
    // FormlyFieldTypeahead,
    types.FormlyFieldVideoViewer,
    types.FormlyFieldVideoViewer2,
    types.SelectTagsComponent,
    types.FieldInputVisibilityComponent,
    types.FieldInputPlaylistComponent,
    types.FieldCountriesComponent,
    types.ArrayTypeComponent,
    types.KendraFieldTypeahead,
    types.ObjectTypeComponent,
    types.FormGroupTypeComponent,
    types.KendraFieldSelect,
    types.TextareaComponent,
    types.ThumbnailViewerComponent,
    types.FieldHiddenComponent,
    types.FieldInputPasswordComponent,
    types.TimePickerComponent,
    types.ImageViewerComponent,
    types.NullTypeComponent,
    // ContentEditableFormDirective
    // KendraioFormComponent
    FormlyFieldFileComponent
  ]
})
export class UiFormModule {}
