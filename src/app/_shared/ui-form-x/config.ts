import {
    maxlengthValidationMessage,
    maxValidationMessage,
    minlengthValidationMessage,
    minValidationMessage,
    passwordMatchValidationMessage,
    maximumNumValidationMessage,
    PasswordStrengthValidationMessage
  } from './helpers/validations-messages';

  import { maximumNumValidation, passwordMatchValidation, PasswordStrengthValidation } from './helpers/validators';
  import { PanelWrapperComponent, AnimationWrapperComponent, ErrorWrapperComponent } from './wrappers';
  import { RepeatSectionComponent } from './types/repeat-section.component';
  import { FormlyFieldInputMoney } from './types/';
  import { FormlyFieldInputPercentage } from './types/percentage.component';
  import { ConfigOption } from '@ngx-formly/core';
// import { FormlyFieldTypeahead } from './types/typeahead.component';

  export const config: ConfigOption = {
    validationMessages: [
      { name: 'required', message: 'err 12: This field is required' },
      { name: 'pattern', message: 'err 13: This field is required' },
      { name: 'minlength', message: minlengthValidationMessage },
      { name: 'maxlength', message: maxlengthValidationMessage },
      { name: 'min', message: minValidationMessage },
      { name: 'max', message: maxValidationMessage },
      { name: 'passwordMatchValidation', message: passwordMatchValidationMessage },
      { name: 'maximumNumValidation', message: maximumNumValidationMessage },
      { name: 'PasswordStrengthValidation', message: PasswordStrengthValidationMessage }
    ],
    wrappers: [
      { name: 'panel', component: PanelWrapperComponent },
      { name: 'error-on-top', component: ErrorWrapperComponent },
      { name: 'slideInOut', component: AnimationWrapperComponent }
    ],
    types: [
      { name: 'repeat', component: RepeatSectionComponent },
      { name: 'money', component: FormlyFieldInputMoney },
      { name: 'percentage', component: FormlyFieldInputPercentage },
      { name: 'typeahead', component: FormlyFieldTypeahead },
      { name: 'object', extends: 'formly-group' },
      { name: 'boolean', extends: 'checkbox' },
      // { name: 'array', component: ArrayTypeComponent },
      { name: 'enum', extends: 'select' },
    ],
    validators: [
      { name: 'maximumNumValidation', validation: maximumNumValidation },
      { name: 'passwordMatchValidation', validation: passwordMatchValidation },
      { name: 'PasswordStrengthValidation', validation: PasswordStrengthValidation}
    ]
  };
