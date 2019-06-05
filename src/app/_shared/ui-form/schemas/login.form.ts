import { Field } from '../helpers/fields';
import { USERNAME, EMAIL, PASSWORD, PASSWORDCONFIRM, MONEY_INPUT, TYPEAHEAD } from './form-elements';
import { FormlyFormOptions } from '@ngx-formly/core';





export const LOGIN_FORM = (disabled = false, hidden = false) => ({

  // options: FormlyFormOptions = {
  //   formState: {
  //     formModel: this.model,
  //     isRefValid: false,
  //   },
  // },

  id: 'LOGIN',
  template: [
    {
      key: 'password',
      validators: {
        fieldMatch: { // TODO: refactor in validators.ts
          expression: (control) => {
            const value = control.value;
            const boo = value.passwordconfirm === value.password || (!value.passwordconfirm || !value.password);
            return boo;
          },
          message: 'Passwords do not Match',
          errorPath: 'passwordconfirm',
        },
      },
      wrappers: ['panel'],
      templateOptions: {
        label: 'Login Form',
      },
  

      fieldGroup: [
        USERNAME(disabled),
        EMAIL(disabled),
        PASSWORD(disabled),
        PASSWORDCONFIRM(true),
        MONEY_INPUT(disabled, hidden),
        TYPEAHEAD(disabled),
      ] 
    }
  ]
});
