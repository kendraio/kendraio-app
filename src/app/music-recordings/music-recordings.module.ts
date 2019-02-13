import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { MusicRecordingsRoutingModule } from './music-recordings-routing.module';
import { IndexComponent } from './index/index.component';
import { MusicRecordingsEditComponent } from './music-recordings-edit/music-recordings-edit.component';
import { MusicRecordingsDetailComponent } from './music-recordings-detail/music-recordings-detail.component';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

@NgModule({
  declarations: [IndexComponent, MusicRecordingsEditComponent, MusicRecordingsDetailComponent],
  imports: [
    CommonModule,
    MusicRecordingsRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        DynamicFormsMaterialUIModule
  ]
})
export class MusicRecordingsModule { }
