import {
  requiredValidationMessage,
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
  CheckBoxWrapperComponent

  // AnimationWrapperComponent, ErrorWrapperComponent
} from './wrappers';
// import { RepeatSectionComponent } from './types/repeat-section.component';
// import { FormlyFieldInputMoney } from './types/money.component';
import { KendraFieldInputPercentage } from './types/percentage.component';
import { ConfigOption, FormlyFieldConfig } from '@ngx-formly/core';

import * as types from './types';
import {FormlyImageInputComponent} from '../../form-controls/formly-image-input/formly-image-input.component';
import {FormlyAudioInputComponent} from '../../form-controls/formly-audio-input/formly-audio-input.component';
import {FormlyRemoteImageInputComponent} from '../../form-controls/formly-remote-image-input/formly-remote-image-input.component';
import {FormlyBlocksInputComponent} from '../../form-controls/formly-blocks-input/formly-blocks-input.component';
import {FormlyWorkflowFieldComponent} from '../../form-controls/formly-workflow-field/formly-workflow-field.component';
import {FormlyCardListComponent} from '../../form-controls/formly-card-list/formly-card-list.component';
import {FormlyTableWidgetComponent} from '../../form-controls/formly-table-widget/formly-table-widget.component';
import {FormlyFieldFileComponent} from './types/file-type.component';
import {FormlyFileInputComponent} from '../../form-controls/formly-file-input/formly-file-input.component';
import {FormlyPaginatedWidgetComponent} from '../../form-controls/formly-paginated-widget/formly-paginated-widget.component';
import {ReadonlyInputComponent} from '../../form-controls/readonly-input/readonly-input.component';

export const config: ConfigOption = {
  validationMessages: [
    { name: 'required', message: requiredValidationMessage},
    { name: 'pattern', message: patternMatchMessage },
    { name: 'minLength', message: minlengthValidationMessage },
    { name: 'maxLength', message: maxlengthValidationMessage },
    { name: 'min', message: minValidationMessage },
    { name: 'max', message: maxValidationMessage },
    { name: 'passwordMatchValidation', message: passwordMatchValidationMessage },
    { name: 'maximumNumValidation', message: maximumNumValidationMessage },
    { name: 'PasswordStrengthValidation', message: PasswordStrengthValidationMessage }
  ],
  wrappers: [
    { name: 'panel', component: PanelWrapperComponent },
    { name: 'checkbox', component: CheckBoxWrapperComponent },
    // { name: 'error-on-top', component: ErrorWrapperComponent },
    // { name: 'slideInOut', component: AnimationWrapperComponent }
  ],
  types: [
    // { name: 'repeat', component: RepeatSectionComponent },
    { name: 'array', component: types.ArrayTypeComponent },
    { name: 'videoviewer', component: types.FormlyFieldVideoViewer },
    { name: 'videoviewer2', component: types.FormlyFieldVideoViewer2 },
    // TODO: there should only be one vid viewer that accoms all players
    { name: 'videoviewerDM', component: types.FormlyFieldVideoViewerDM },  // TODO: temp player refactor and delete ...see above
     { name: 'thumbnailviewer', component: types.ThumbnailViewerComponent },
    { name: 'visibility', component: types.FieldInputVisibilityComponent },
    { name: 'playlist', component: types.FieldInputPlaylistComponent },
    { name: 'tags', component: types.SelectTagsComponent },
    { name: 'countries', component: types.FieldCountriesComponent },
    { name: 'image', component: FormlyImageInputComponent },
    { name: 'audio', component: FormlyAudioInputComponent },
    { name: 'remote-image', component: FormlyRemoteImageInputComponent },
    { name: 'blocks', component: FormlyBlocksInputComponent },
    { name: 'workflow', component: FormlyWorkflowFieldComponent },
    { name: 'cards', component: FormlyCardListComponent },
    { name: 'table', component: FormlyTableWidgetComponent },
    { name: 'paginated', component: FormlyPaginatedWidgetComponent },
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
    {
      name: 'k-password',
      component: types.FieldInputPasswordComponent,
      defaultOptions: {
        templateOptions: {
          type: 'password',
        },
        validators: {
          // validation: ['PasswordStrengthValidation'],
        },
      },
    },
    {
      name: 'kendraio-password',
      component: types.FieldInputPasswordComponent,
      defaultOptions: {
        templateOptions: {
          type: 'password',
        },
        validators: {
          // validation: ['PasswordStrengthValidation'],
        },
      },
    },
    {
      name: 'password',
      extends: 'input',
      defaultOptions: {
        templateOptions: {
          type: 'password',
        },
        validators: {
        },
      },
    },
    {
      name: 'readonly',
      // extends: 'input',
      // defaultOptions: {
      //   templateOptions: {
      //     disabled: true,
      //   },
      // },
      component: ReadonlyInputComponent
    },
    {
      name: 'hidden',
      component: types.FieldHiddenComponent
    },
    {
      name: 'kendraio-hidden',
      component: types.FieldHiddenComponent
    },
    { name: 'string', extends: 'input' },
    // { name: 'object', extends: 'formly-group' },
    { name: 'object', component: types.ObjectTypeComponent },
    { name: 'multischema', component: types.MultiSchemaTypeComponent },
    { name: 'formgroup', component: types.FormGroupTypeComponent },

    { name: 'boolean', extends: 'checkbox',
    defaultOptions: {
      wrappers: ['checkbox']
    }
  },

    // { name: 'array', component: ArrayTypeComponent },
    { name: 'enum', extends: 'select' },
    { name: 'textarea', component: types.TextareaComponent},
    { name: 'kendraio-textarea', component: types.TextareaComponent},
    { name: 'k-image', component: types.ImageViewerComponent},
    { name: 'kendraio-image', component: types.ImageViewerComponent},
    { name: 'null', component: types.NullTypeComponent},

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
      name: 'k-select', component: types.KendraFieldSelect,
      defaultOptions: {
        wrappers: ['panel'],
        templateOptions: {
          multiple: false,
          placeholder: 'Select Option',
          options: []
        }
      }

    },
    {
      name: 'kendraio-select', component: types.KendraFieldSelect,
      defaultOptions: {
        wrappers: ['panel'],
        templateOptions: {
          multiple: false,
          placeholder: 'Select Option',
          options: []
        }
      }

    },
    {
      name: 'k-timepicker', component: types.TimePickerComponent
    },
    {
      name: 'kendraio-timepicker', component: types.TimePickerComponent
    },
    {
      name: 'timepicker', component: types.TimePickerComponent
    },
    {
      name: 'file',
      component: FormlyFileInputComponent
      // component: FormlyFieldFileComponent,
      // wrappers: ['form-field']
    },
  ],
  validators: [
    { name: 'maximumNumValidation', validation: maximumNumValidation },
    { name: 'passwordMatchValidation', validation: passwordMatchValidation },
    { name: 'PasswordStrengthValidation', validation: PasswordStrengthValidation }
  ]
};






