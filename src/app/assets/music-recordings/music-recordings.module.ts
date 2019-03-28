import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from 'src/app/app-material/app-material.module';

import { MatGridListModule, MatCardModule , MatButtonModule } from '@angular/material';

import { MusicRecordingsRoutingModule } from './music-recordings-routing.module';
import { IndexComponent, MusicRecordingsEditComponent, MusicRecordingsDetailComponent} from './';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import {AgGridModule} from 'ag-grid-angular';

// import {DialogDataExampleDialog} from './index/music-recordings-index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { SendClaimsComponent } from '../claims/send-claims/send-claims.component';

import {SharedModule} from 'src/app/_shared/shared.module';
import { RegisterRecordingComponent } from './register-new-recording/register-recording.component';
// import { ButtonRendererComponent } from './button-renderer.component';

@NgModule({
  declarations: [
    IndexComponent, 
    MusicRecordingsEditComponent, 
    MusicRecordingsDetailComponent,
    RegisterRecordingComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MusicRecordingsRoutingModule,
    MatButtonModule,
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
    RegisterRecordingComponent
   ]
})
export class MusicRecordingsModule { }
