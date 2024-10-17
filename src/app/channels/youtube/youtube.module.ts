import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../_shared/shared.module';

import { FormlyModule } from '@ngx-formly/core';

import { YoutubeRoutingModule } from './youtube-routing.module';

import { UiFormModule } from '../../_shared/ui-form/ui-form.module';

import { MyYoutubeComponent } from './my-youtube/my-youtube.component';
import { YoutubeIndexComponent } from './youtube-index/youtube-index.component';
import { KendraioFormComponent } from 'src/app/_shared/ui-form/kendraio-form/kendraio-form.component';

@NgModule({
  declarations: [
    MyYoutubeComponent,
    YoutubeIndexComponent,
    KendraioFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
    FormlyModule.forRoot({}),
    UiFormModule,
  ],
  exports: [UiFormModule],
})
export class YoutubeModule {}
