import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { PeopleComponent } from './people/people.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from '../_shared/shared.module';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [PeopleComponent, OrganisationsComponent, ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    AppMaterialModule
  ],
  exports: [
    SharedModule
  ],
})
export class ContactsModule { }
