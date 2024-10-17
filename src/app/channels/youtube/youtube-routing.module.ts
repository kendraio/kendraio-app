import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './';

const routes: Routes = [
  {
    path: '',
    component: pages.YoutubeIndexComponent,
    data: {
      breadcrumb: '',
      menuLabel: '',
    },
  },
  {
    path: 'myyoutube',
    component: pages.MyYoutubeComponent,
    data: {
      breadcrumb: 'My YouTube',
      menuLabel: 'My YouTube',
    },
  },
  {
    path: 'basic',
    component: pages.MyYoutubeComponent,
    data: {
      breadcrumb: 'YouTube',
      menuLabel: 'Basic Form',
    },
  },
  {
    path: 'advanced',
    component: pages.MyYoutubeComponent,
    data: {
      breadcrumb: 'My YouTube',
      menuLabel: 'Advanced Form',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
