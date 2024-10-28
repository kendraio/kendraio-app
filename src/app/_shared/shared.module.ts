import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe, DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';

import * as matComponents from '../_shared/components';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HelpTextService } from './services/help-text.service';
import { HelpTextBtnDirective } from './directives/help-text-btn.directive';
import { TranslateModule } from '@ngx-translate/core';
import { PasswordStrength2, matchPasswords } from './directives/passwordValidation';
import { PasswordInputComponent } from './form-controls/password-input/password-input.component';
import { FormlyModule } from '@ngx-formly/core';
import { UiFormModule } from './ui-form/ui-form.module';

import { NgSelectModule } from '@ng-select/ng-select';

export function minlengthValidationMessage(err: any, field: { templateOptions: { minLength: any; }; }) {
  return `what the.. ${field.templateOptions.minLength} characters`;
}

@NgModule({ declarations: [
    matComponents.MatInputComponent,
    matComponents.MatButtonComponent,
    BreadcrumbComponent,
    HelpTextBtnDirective,
    PasswordInputComponent,
  ],
  exports: [
  FormsModule,
  ReactiveFormsModule,
  FlexModule,
  FlexLayoutModule,
  BreadcrumbComponent,

  MatTreeModule,
  HelpTextBtnDirective,
  UiFormModule,
  NgSelectModule,
TranslateModule
    ], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTreeModule,
        FlexModule, FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        UiFormModule,
        NgSelectModule,
        FormlyModule.forChild(), MatCardModule, MatInputModule], providers: [
    DatePipe,
    LowerCasePipe,
    HelpTextService,
    {provide: NG_VALIDATORS , useValue: PasswordStrength2, multi: true},
    {provide: NG_VALIDATORS , useValue: matchPasswords, multi: true},
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class SharedModule {}
