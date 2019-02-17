import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';

import { MatGridListModule, MatCardModule } from '@angular/material';

import { MusicRecordingsRoutingModule } from './music-recordings-routing.module';
import { IndexComponent } from './index/index.component';
import { MusicRecordingsEditComponent } from './music-recordings-edit/music-recordings-edit.component';
import { MusicRecordingsDetailComponent } from './music-recordings-detail/music-recordings-detail.component';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [
    IndexComponent, 
    MusicRecordingsEditComponent, 
    MusicRecordingsDetailComponent],
  imports: [
    CommonModule,
    MusicRecordingsRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        DynamicFormsMaterialUIModule,
        AppMaterialModule,
        AgGridModule.withComponents(
          []
      )
  ]
})
export class MusicRecordingsModule { }
