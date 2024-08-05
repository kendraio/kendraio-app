import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe, DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
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
