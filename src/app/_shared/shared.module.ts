
import { NgModule, Type } from '@angular/core';
import { CommonModule, LowerCasePipe, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validator } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatCardModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatButtonModule,
  MatMenuModule, MatDialogModule, MatTooltipModule, MatListModule, MatTreeModule
} from '@angular/material';

import * as matComponents from '../_shared/components';
import { AgGridModule } from 'ag-grid-angular';
import { SendClaimsComponent } from 'src/app/claims/send-claims/send-claims.component';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { ClaimsEditComponent } from '../claims/claims-edit/claims-edit.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HelpTextService } from './services/help-text.service';
import { HelpTextBtnDirective } from './directives/help-text-btn.directive';
import { TranslateModule } from '@ngx-translate/core';
import { PasswordStrength, PasswordStrength2, matchPasswords } from './directives/passwordValidation';
import { DYNAMIC_VALIDATORS, ValidatorFactory, DYNAMIC_FORM_CONTROL_MAP_FN, DynamicFormControlModel, DynamicFormControl, 
  DynamicInputControlModel, 
  DynamicInputModel, 
  DynamicSelectModel} from '@ng-dynamic-forms/core';
import { PasswordInputComponent } from './form-controls/password-input/password-input.component';
import { DynamicPasswordInputComponent } from './form-controls/password-input/dynamic/dynamic-password-input/dynamic-password-input.component';
import { DEBUG_DYNAMIC_FORM_CONTROL_TYPE } from '../form-controls/debug-form-model';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AccountLoginFormComponent } from '../bloomen/users/_shared';
import { UiFormModule } from './ui-form/ui-form.module';
import { UsersComponent } from '../bloomen/users/users.component';
// import { BaseComponent } from './base/base.component';
// import { MenuComponent } from './components/menu/menu.component';
// import { MenuItemComponent } from './components/menu/menu-item.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ClaimsEditSendComponent } from '../claims/claims-edit-send/claims-edit-send.component';

export function minlengthValidationMessage(err, field) {
  return `what the.. ${field.templateOptions.minLength} characters`;
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule,
    MatTreeModule,
    AgGridModule.withComponents(
      [
        matComponents.MatInputComponent,
        matComponents.MatButtonComponent
      ]
    ),
    FlexModule, FlexLayoutModule,
    DynamicFormsMaterialUIModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      // validationMessages: 
      // [
      //   // { name: 'required', message: 'This field is required' },
      //   // { name: 'minlength', message: minlengthValidationMessage },
      // ],
    }),
    UiFormModule
    // BrowserAnimationsModule
    // FormlyMaterialModule,
    // FormlyModule.forRoot({
    //   validationMessages: [
    //     { name: 'required', message: 'This field is required' },
    //     { name: 'minlength', message: minlengthValidationMessage },
    //   ],
    // }),
  ],
  declarations: [
    matComponents.MatInputComponent,
    matComponents.MatButtonComponent,
    SendClaimsComponent,
    ClaimsEditComponent,
    BreadcrumbComponent,
    HelpTextBtnDirective,
    PasswordInputComponent,
    DynamicPasswordInputComponent,
    // AccountLoginFormComponent
    // BaseComponent,
    // MenuComponent,
    // MenuItemComponent,
    // ClaimsEditSendComponent
    UsersComponent
  ],
  exports: [
  //  matComponents.MatInputComponent,
  MatMenuModule,
  SendClaimsComponent,
  DynamicFormsMaterialUIModule,
  FormsModule,
  ReactiveFormsModule,
  FlexModule,
  FlexLayoutModule,
  ClaimsEditComponent,
  // ClaimsEditSendComponent,
  MatListModule,
  BreadcrumbComponent,
  MatTreeModule,
  HelpTextBtnDirective,
  UsersComponent,
  UiFormModule,
// BrowserAnimationsModule
TranslateModule
  ],
  providers: [
    DatePipe,
    LowerCasePipe,
    HelpTextService,
    {provide: NG_VALIDATORS , useValue: PasswordStrength2, multi: true},
    {provide: NG_VALIDATORS , useValue: matchPasswords, multi: true},

    {
      provide: DYNAMIC_FORM_CONTROL_MAP_FN,
      useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null  => {
  
        switch (model.type) {
  
          case DynamicInputModel.toString():
          return DynamicPasswordInputComponent;
  
          }
       }
    }


  //   {
  //     provide: DYNAMIC_VALIDATORS,
  //     useValue: new Map<string, Validator | ValidatorFactory>([
  //         ['myCustomValidator', myCustomValidator]
  //     ])
  // }
  ],
  entryComponents: [   
    SendClaimsComponent,
    ClaimsEditComponent,
    DynamicPasswordInputComponent
    // ClaimsEditSendComponent //may move this to claims module
   ]
})
export class SharedModule {}
