import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloomenRoutingModule } from './bloomen-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    BloomenRoutingModule
  ]
})
export class BloomenModule { }
