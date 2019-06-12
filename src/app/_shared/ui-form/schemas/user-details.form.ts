import { Field } from '../helpers/fields';
import * as el from './form-elements';

export const USERDETAILS_FORM = (disabled = false) => (
  {
  id: 'USERDETAILS',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'User Details'
      },
      fieldGroup: [
        el.FNAME(true),
        el.LNAME(disabled),
        el.EMAIL(disabled, 'boo@boo.com'),
      ]
    }
  ]
}
);
