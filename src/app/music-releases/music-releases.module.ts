import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicReleasesRoutingModule } from './music-releases-routing.module';
import { IndexComponent } from './index/index.component';
import { MusicReleasesEditComponent } from './music-releases-edit/music-releases-edit.component';
import { MusicReleasesDetailComponent } from './music-releases-detail/music-releases-detail.component';

@NgModule({
  declarations: [IndexComponent, MusicReleasesEditComponent, MusicReleasesDetailComponent],
  imports: [
    CommonModule,
    MusicReleasesRoutingModule
  ]
})
export class MusicReleasesModule { }
