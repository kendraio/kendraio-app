import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import * as matComponents from '../_shared/components';
import { AgGridModule } from 'ag-grid-angular';
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
    FormsModule,
    ReactiveFormsModule,
    UiFormModule,
    NgSelectModule,
    FormlyModule.forChild()
  ],
  declarations: [
    matComponents.MatInputComponent,
    matComponents.MatButtonComponent,
    BreadcrumbComponent,
    HelpTextBtnDirective,
    PasswordInputComponent,
  ],
  exports: [
  MatMenuModule,
  FormsModule,
  ReactiveFormsModule,
  FlexModule,
  FlexLayoutModule,
  MatListModule,
  BreadcrumbComponent,

  MatTreeModule,
  HelpTextBtnDirective,
  UiFormModule,
  NgSelectModule,
TranslateModule
  ],
  providers: [
    DatePipe,
    LowerCasePipe,
    HelpTextService,
    {provide: NG_VALIDATORS , useValue: PasswordStrength2, multi: true},
    {provide: NG_VALIDATORS , useValue: matchPasswords, multi: true},
  ]
})
export class SharedModule {}
