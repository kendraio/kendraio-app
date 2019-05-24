import { Field } from '../helpers/fields';
import { EMAIL, COUNTRIES, MESSAGE, FNAME, LNAME } from './form-elements';

export const USERDETAILS_FORM = (disabled = false) => ({
  id: 'USERDETAILS',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'User Details'
      },
      fieldGroup: [
        FNAME(true),
        LNAME(disabled),
        EMAIL(disabled),
      ]
    }
  ]
});
