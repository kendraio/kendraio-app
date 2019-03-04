import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';

import { MatGridListModule, MatCardModule } from '@angular/material';

import { MusicRecordingsRoutingModule } from './music-recordings-routing.module';
import { IndexComponent, MusicRecordingsEditComponent, MusicRecordingsDetailComponent} from './';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import {AgGridModule} from 'ag-grid-angular';

// import {DialogDataExampleDialog} from './index/music-recordings-index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SendClaimsComponent } from '../claims/send-claims/send-claims.component';
// import { ButtonRendererComponent } from './button-renderer.component';

@NgModule({
  declarations: [
    IndexComponent, 
    MusicRecordingsEditComponent, 
    MusicRecordingsDetailComponent,
    SendClaimsComponent
    // DialogDataExampleDialog,
    // ButtonRendererComponent
  ],
  imports: [
    CommonModule,
    MusicRecordingsRoutingModule,
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
    // TestSendClaimsComponent 
    SendClaimsComponent
  ]
})
export class MusicRecordingsModule { }
