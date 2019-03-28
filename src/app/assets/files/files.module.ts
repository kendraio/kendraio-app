import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';


import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent, FileDetailsComponent, FileEditComponent } from '.';



@NgModule({
  declarations: [FilesComponent, FileDetailsComponent, FileEditComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsMaterialUIModule,
    AppMaterialModule,
    AgGridModule.withComponents(
      []
  ),
  FlexLayoutModule
  ],
  exports: [
    FilesComponent
  ],
  bootstrap: [FilesComponent]
})
export class FilesModule { }
