import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './index';

const routes: Routes = [
  {
    path: '',
    component: pages.ContactsComponent,
    data: {
      breadcrumb: '',
      menuLabel: 'Contacts XXX'
    },
    children: [
      { path: 'people', component: pages.PeopleComponent,  
      data: {
        breadcrumb: {'de': 'Menschen' , 'fr': '', 'en-US': 'contacts.people'},
        menuLabel: 'Contacts/People'
      } },
      { path: 'organisations', component: pages.OrganisationsComponent,
      data: {
        breadcrumb: {'de': 'Organisationen' , 'fr': '', 'en-US': 'contacts.organisations'},
        menuLabel: 'Contacts/Organisations'
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
