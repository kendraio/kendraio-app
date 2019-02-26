import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './index';

const routes: Routes = [
  { path: '', component: pages.IndexComponent },
  { path: 'edit/:id', component: pages.MusicReleasesEditComponent },
  { path: 'detail/:id', component: pages.MusicReleasesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicReleasesRoutingModule { }
