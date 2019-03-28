import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './index';

const routes: Routes = [
  {
    path: '',
    component: pages.ContactsComponent,
    children: [
      { path: 'people', component: pages.PeopleComponent },
      { path: 'organisations', component: pages.OrganisationsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
