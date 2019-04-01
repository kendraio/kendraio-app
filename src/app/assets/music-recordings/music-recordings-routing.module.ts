import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from './index';

const routes: Routes = [
  { path: '', component: pages.IndexComponent, 
  data: {
    breadcrumb: ''
  } }
  // { path: 'edit/:id', component: pages.MusicRecordingsEditComponent },
  // { path: 'detail/:id', component: pages.MusicRecordingsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRecordingsRoutingModule { }
