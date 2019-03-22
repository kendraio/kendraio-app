import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './index';

const routes: Routes = [
  { path: '', 
  component: pages.IndexComponent,
  children: [
    { path: 'tasks', component: pages.TasksComponent },
    { path: 'list', component: pages.ListComponent },
  ] 
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicReleasesRoutingModule { }
