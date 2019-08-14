import {
  maxlengthValidationMessage,
  maxValidationMessage,
  minlengthValidationMessage,
  minValidationMessage,
  passwordMatchValidationMessage,
  maximumNumValidationMessage,
  PasswordStrengthValidationMessage,
  patternMatchMessage
} from './helpers/validations-messages';

import { maximumNumValidation, passwordMatchValidation, PasswordStrengthValidation } from './helpers/validators';
import {
  PanelWrapperComponent,
  // AnimationWrapperComponent, ErrorWrapperComponent
} from './wrappers';
// import { RepeatSectionComponent } from './types/repeat-section.component';
// import { FormlyFieldInputMoney } from './types/money.component';
import { KendraFieldInputPercentage } from './types/percentage.component';
import { ConfigOption } from '@ngx-formly/core';

import * as types from './types';
import {FormlyImageInputComponent} from '../../form-controls/formly-image-input/formly-image-input.component';

export const config: ConfigOption = {
  validationMessages: [
    { name: 'required', message: 'err 12: This field is required' },
    { name: 'pattern', message: patternMatchMessage },
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
    // { name: 'error-on-top', component: ErrorWrapperComponent },
    // { name: 'slideInOut', component: AnimationWrapperComponent }
  ],
  types: [
    // { name: 'repeat', component: RepeatSectionComponent },
    { name: 'array', component: types.ArrayTypeComponent },
    { name: 'videoviewer', component: types.FormlyFieldVideoViewer },
    { name: 'visibility', component: types.FieldInputVisibilityComponent },
    { name: 'playlist', component: types.FieldInputPlaylistComponent },
    { name: 'tags', component: types.SelectTagsComponent },
    { name: 'countries', component: types.FieldCountriesComponent },
    { name: 'image', component: FormlyImageInputComponent },
    {
      name: 'money', component: types.FormlyFieldInputMoney,
      defaultOptions: {
        expressionProperties: {},
        defaultValue: 5903,
        templateOptions: {
          placeholder: 'hello',
          disabled: false,
        },
      },
    },
    {
      name: 'percentage', component: KendraFieldInputPercentage,
      defaultOptions: {
        expressionProperties: {},
        defaultValue: 0,
        templateOptions: {
          placeholder: 'hello',
          disabled: false,
        },
      },
    },
    { name: 'typeahead', component: types.KendraFieldTypeahead },
    {
      name: 'number',
      extends: 'input',
      defaultOptions: {
        templateOptions: {
          type: 'number',
        },
      },
    },
    {
      name: 'date',
      extends: 'input',
      defaultOptions: {
        templateOptions: {
          type: 'date',
        },
      },
    },
    {
      name: 'integer',
      extends: 'input',
      // defaultOptions: {
      //   templateOptions: {
      //     type: 'email',
      //   },
      // },
    },
    { name: 'string', extends: 'input' },
    // { name: 'object', extends: 'formly-group' },
    { name: 'object', component: types.ObjectTypeComponent },
    { name: 'boolean', extends: 'checkbox' },
    // { name: 'array', component: ArrayTypeComponent },
    { name: 'enum', extends: 'select' },
    {
      name: 'multiselect', component: types.KendraFieldSelect,
      defaultOptions: {
        templateOptions: {
          multiple: true,
          placeholder: 'Select Option',
          options: [ ]
        }
      }

    },
    {
      name: 'kselect', component: types.KendraFieldSelect,
      defaultOptions: {
        templateOptions: {
          multiple: false,
          placeholder: 'Select Option',
          options: []
        }
      }

    }
  ],
  validators: [
    { name: 'maximumNumValidation', validation: maximumNumValidation },
    { name: 'passwordMatchValidation', validation: passwordMatchValidation },
    { name: 'PasswordStrengthValidation', validation: PasswordStrengthValidation }
  ]
};






