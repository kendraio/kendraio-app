import { Field } from '../helpers/fields';
import { FULLNAME, EMAIL, MESSAGE, TYPEAHEAD } from './form-elements';

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
        TYPEAHEAD(disabled),
        MESSAGE(disabled)
      ]
    }
  ]
});
