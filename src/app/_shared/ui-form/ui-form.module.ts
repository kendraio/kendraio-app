import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TextMaskModule } from 'angular2-text-mask';

import { PanelWrapperComponent, ErrorWrapperComponent, AnimationWrapperComponent } from './wrappers';



import { RepeatSectionComponent } from './types/repeat-section.component';
import { FormlyFieldInputMoney } from './types/money.component';
import { FormlyFieldInputPercentage } from './types/percentage.component';


import { config } from './config';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
// import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    TextMaskModule,
    AppMaterialModule
    // SharedModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule  ],
  declarations: [
    PanelWrapperComponent,
    ErrorWrapperComponent,
    AnimationWrapperComponent,
    RepeatSectionComponent,
    FormlyFieldInputMoney,
    FormlyFieldInputPercentage
  ]
})
export class UiFormModule {}