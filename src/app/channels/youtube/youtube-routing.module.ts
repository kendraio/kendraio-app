import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './';

const routes: Routes = [
  {
    path: '',
    component: pages.YoutubeIndexComponent,
    data: {
      breadcrumb: '',
      menuLabel: ''
    }
  },
  {
    path: 'myyoutube',
    component: pages.MyYoutubeComponent,
    data: {
      breadcrumb: 'My YouTube',
      menuLabel: 'My YouTube'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
