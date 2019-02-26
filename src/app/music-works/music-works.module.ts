import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicWorksRoutingModule } from './music-works-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [IndexComponent, EditComponent, DetailComponent],
  imports: [
    CommonModule,
    MusicWorksRoutingModule
  ]
})
export class MusicWorksModule { }
