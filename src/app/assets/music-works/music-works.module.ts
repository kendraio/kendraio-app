import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicWorksRoutingModule } from './music-works-routing.module';
import { WorksComponent } from './works.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './add-new/register.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [
    WorksComponent, 
    EditComponent, 
    DetailComponent
  , RegisterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MusicWorksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsMaterialUIModule,
    AppMaterialModule,
    AgGridModule.withComponents(
      []
  ),
  FlexLayoutModule
  ],
  entryComponents: [   
    RegisterComponent
   ]
})
export class MusicWorksModule { }
