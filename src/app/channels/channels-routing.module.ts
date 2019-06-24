import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './';

const routes: Routes = [
  {
    path: '',
    component: pages.ChannelsComponent,
    data: {
      breadcrumb: '',
      menuLabel: ''
    },
    children: [
      {
        path: 'youtube',
        loadChildren: './youtube/youtube.module#YoutubeModule',
        data: {
          pageTitle: {'en-US': 'My YouTube'},
          breadcrumb: { 'en-US': 'My YouTube'},
          menuLabel: 'My YouTube'

        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
