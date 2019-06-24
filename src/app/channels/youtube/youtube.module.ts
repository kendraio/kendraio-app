import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../_shared/shared.module';

import { FormlyModule } from '@ngx-formly/core';

import { YoutubeRoutingModule } from './youtube-routing.module';

import { UiFormModule } from '../../_shared/ui-form/ui-form.module';

import { MyYoutubeComponent } from './my-youtube/my-youtube.component';
import { YoutubeIndexComponent } from './youtube-index/youtube-index.component';

@NgModule({
  declarations: [MyYoutubeComponent, YoutubeIndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
    FormlyModule.forRoot({
    }),
    UiFormModule
  ],
  exports: [
    UiFormModule
  ]
})
export class YoutubeModule { }
