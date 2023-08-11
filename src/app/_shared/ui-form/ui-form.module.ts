import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CheckBoxWrapperComponent, PanelWrapperComponent,} from './wrappers';

import * as types from './types/';

import {ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormlyFieldFileComponent} from './types/file-type.component';
import {FormlyModule} from '@ngx-formly/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MaskitoModule} from '@maskito/angular';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgSelectModule,
    FormlyMaterialModule,
    MatButtonToggleModule,
    MatIconModule,
    FormlyMatDatepickerModule,
    NgxMaterialTimepickerModule,
    FormlyModule.forChild(),
    MatCardModule,
    MatInputModule,
    MaskitoModule,
    MatRadioModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatIconModule,
    NgSelectModule,
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
