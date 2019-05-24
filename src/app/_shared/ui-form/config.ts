import {
    maxlengthValidationMessage,
    maxValidationMessage,
    minlengthValidationMessage,
    minValidationMessage,
    passwordMatchValidationMessage,
    maximumNumValidationMessage
  } from './helpers/validations-messages';

  import { maximumNumValidation, passwordMatchValidation } from './helpers/validators';
  import { PanelWrapperComponent, AnimationWrapperComponent, ErrorWrapperComponent } from './wrappers';
  import { RepeatSectionComponent } from './types/repeat-section.component';
  import { FormlyFieldInputMoney } from './types/money.component';
  import { FormlyFieldInputPercentage } from './types/percentage.component';
  import { ConfigOption } from '@ngx-formly/core';
  
  export const config: ConfigOption = {
    validationMessages: [
      { name: 'required', message: 'err 12 This field is required' },
      { name: 'minlength', message: minlengthValidationMessage },
      { name: 'maxlength', message: maxlengthValidationMessage },
      { name: 'min', message: minValidationMessage },
      { name: 'max', message: maxValidationMessage },
      { name: 'passwordMatchValidation', message: passwordMatchValidationMessage },
      { name: 'maximumNumValidation', message: maximumNumValidationMessage }
    ],
    wrappers: [
      { name: 'panel', component: PanelWrapperComponent },
      { name: 'error-on-top', component: ErrorWrapperComponent },
      { name: 'slideInOut', component: AnimationWrapperComponent }
    ],
    types: [
      { name: 'repeat', component: RepeatSectionComponent },
      { name: 'money', component: FormlyFieldInputMoney },
      { name: 'percentage', component: FormlyFieldInputPercentage }
    ],
    validators: [
      { name: 'maximumNumValidation', validation: maximumNumValidation },
      { name: 'passwordMatchValidation', validation: passwordMatchValidation }
    ]
  };
