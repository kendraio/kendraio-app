import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import { AppMaterialModule } from '../../app-material/app-material.module';

import { MusicReleasesRoutingModule } from './music-releases-routing.module';
import { IndexComponent, 
  MusicReleasesEditComponent,
   MusicReleasesDetailComponent, 
   RegisterNewReleaseComponent,
   PublishComponent,
   RegisterComponent,
   TasksComponent,
  ListComponent
  } from './';

import {AgGridModule} from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../_shared/shared.module';



@NgModule({
  declarations: [
    IndexComponent, 
    MusicReleasesEditComponent, 
    MusicReleasesDetailComponent, 
    RegisterNewReleaseComponent, 
    PublishComponent, RegisterComponent, 
    TasksComponent, 
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MusicReleasesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsMaterialUIModule,
    AppMaterialModule,
    AgGridModule.withComponents(
      [
        // MatInputComponent
      ]
  ),
  FlexLayoutModule,

  // .withConfig({
  //   useColumnBasisZero: false,
  //   printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
  // }),
  ],
  exports: [
    SharedModule,
    PublishComponent, RegisterComponent
  ],
  
  entryComponents: [   
    RegisterNewReleaseComponent,
    PublishComponent,
    RegisterComponent
    
   ]
})
export class MusicReleasesModule { }
