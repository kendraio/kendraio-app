import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ValidationService } from 'src/app/_shared/services/validation.service';
import { AccountFormComponent, AccountLoginFormComponent } from './_shared';
// import { UsersComponent } from './users.component';

@NgModule({
  declarations: [RegisterUserComponent, AccountFormComponent, AccountLoginFormComponent, 
    ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    AccountFormComponent,
    AccountLoginFormComponent
  ],
  providers: [
    ValidationService
  ]
})
export class UsersModule { }
