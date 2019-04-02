import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './index';

const routes: Routes = [
  {
    path: '',
    component: pages.ContactsComponent,
    data: {
      breadcrumb: ''
    },
    children: [
      { path: 'people', component: pages.PeopleComponent,  
      data: {
        breadcrumb: 'People'
      } },
      { path: 'organisations', component: pages.OrganisationsComponent,
      data: {
        breadcrumb: 'Organisations'
      } 
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
