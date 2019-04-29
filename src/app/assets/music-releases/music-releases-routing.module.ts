import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './index';

const routes: Routes = [
  { path: '', 
  component: pages.ReleasesComponent,
  data: {
     breadcrumb: ''
  },
  children: [
    { path: 'tasks', component: pages.TasksComponent,
  data: {
    breadcrumb: 'Tasks'
  }

  
  },
    { path: 'list', component: pages.ListComponent,
    data: {
      breadcrumb: 'List'
    }
  },
  ] 
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicReleasesRoutingModule { }
