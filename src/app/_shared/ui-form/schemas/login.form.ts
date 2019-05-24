import { Field } from '../helpers/fields';
import { USERNAME, EMAIL, PASSWORD, PASSWORDCONFIRM, MONEY_INPUT } from './form-elements';

export const LOGIN_FORM = (disabled = false, hidden = false) => ({
  id: 'LOGIN',
  template: [
    {
      key: 'password',
      validators: {
        fieldMatch: {
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
        PASSWORDCONFIRM(disabled),
        MONEY_INPUT(disabled, hidden)
      ] 
    }
  ]
});
