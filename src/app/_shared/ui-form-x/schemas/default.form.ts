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
        FULLNAME(false, 'Stan laurel'),
        EMAIL(disabled, 'boo3@boo.com'),
        TYPEAHEAD(disabled),
        MESSAGE(disabled)
      ]
    }
  ]
});
