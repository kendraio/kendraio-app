import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import { AppMaterialModule } from '../app-material/app-material.module';

import { MusicReleasesRoutingModule } from './music-releases-routing.module';
import { IndexComponent } from './index/index.component';
import { MusicReleasesEditComponent } from './music-releases-edit/music-releases-edit.component';
import { MusicReleasesDetailComponent } from './music-releases-detail/music-releases-detail.component';

import {AgGridModule} from 'ag-grid-angular';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../_shared/shared.module';
import { RegisterNewReleaseComponent } from './register-new-release/register-new-release.component';
import { PublishComponent } from './publish/publish.component';
import { RegisterComponent } from './register/register.component';
// import { MatInputComponent } from '../_shared/components';
//  import { MatInputComponent } from "./mat-input.component";




@NgModule({
  declarations: [
    IndexComponent, 
    MusicReleasesEditComponent, 
    MusicReleasesDetailComponent, 
    RegisterNewReleaseComponent, PublishComponent, RegisterComponent

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
