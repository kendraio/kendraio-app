import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicWorksRoutingModule } from './music-works-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './add-new/register.component';

@NgModule({
  declarations: [
    IndexComponent, 
    EditComponent, 
    DetailComponent
  , RegisterComponent
  ],
  imports: [
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
