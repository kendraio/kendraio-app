import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloomenRoutingModule } from './bloomen-routing.module';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../_shared/shared.module';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    BloomenRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class BloomenModule { }
