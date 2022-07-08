import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { PanelWrapperComponent, CheckBoxWrapperComponent,
} from './wrappers';

import * as types from './types/';

import { MatNativeDateModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {  MatCardModule } from '@angular/material/card';
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
import {FormlyModule} from '@ngx-formly/core';


@NgModule({
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    FlexLayoutModule,
    NgSelectModule,
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
    FormlyMatDatepickerModule,
    NgxMaterialTimepickerModule,
    FormlyModule.forChild()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
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
    types.FormlyFieldInputMoney,
    types.KendraFieldInputPercentage,
    types.FormlyFieldVideoViewer,
    types.FormlyFieldVideoViewer2,
    types.FormlyFieldVideoViewerDM,
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
    FormlyFieldFileComponent,
    types.MultiSchemaTypeComponent
  ]
})
export class UiFormModule {}
