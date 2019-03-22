import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from '../tasks/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component:  TasksComponent
    // children: [
    //   { path: 'tas', component: pages.PeopleComponent },
    //   { path: 'organisations', component: pages.OrganisationsComponent },
    // ]  
  }
  
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
