import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Pages from './index';

const routes: Routes = [
  { path: '', component: Pages.WorksComponent },
  { path: 'edit/:id', component: Pages.EditComponent },
  { path: 'detail/:id', component: Pages.DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicWorksRoutingModule { }
