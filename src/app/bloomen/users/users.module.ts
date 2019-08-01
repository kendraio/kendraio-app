import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
// import { ValidationService } from 'src/app/_shared/services/validation.service';
import { AccountFormComponent, AccountLoginFormComponent } from './_shared';
import { SharedModule, minlengthValidationMessage } from 'src/app/_shared/shared.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ListComponent } from './list/list.component';
import { PasswordStrength } from 'src/app/_shared/directives/passwordValidation';
import { NG_VALIDATORS } from '@angular/forms';
// import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { UsersComponent } from './users.component';
import { UiFormModule } from '../../_shared/ui-form/ui-form.module';
// import { UsersComponent } from './users.component';


@NgModule({
  declarations: [RegisterUserComponent, AccountFormComponent, AccountLoginFormComponent, ListComponent
    ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    AppMaterialModule,
    // FormlyMaterialModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
      ],
    }),

  ],
  exports: [
    AccountFormComponent,
    AccountLoginFormComponent
  ],
  providers: [
    // ValidationService,
    {provide: NG_VALIDATORS, useValue: PasswordStrength, multi: true}
  ]
})
export class UsersModule { }
