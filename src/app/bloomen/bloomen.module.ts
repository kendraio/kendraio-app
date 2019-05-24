import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloomenRoutingModule } from './bloomen-routing.module';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../_shared/shared.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { NG_VALIDATORS } from '@angular/forms';
import { PasswordStrength } from '../_shared/directives/passwordValidation';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BloomenRoutingModule,
    SharedModule,
    AppMaterialModule
  ],
  providers: [
 
]
})
export class BloomenModule { }
