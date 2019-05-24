import { Field } from '../helpers/fields';
import { FULLNAME, EMAIL, COUNTRIES, MESSAGE } from './form-elements';

export const DEFAULT_FORM = (disabled = false) => ({
  id: 'DEFAULT',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'Formly'
      },
      fieldGroup: [
        FULLNAME(false),
        EMAIL(disabled),
        COUNTRIES(disabled),
        MESSAGE(disabled)
      ]
    }
  ]
});
