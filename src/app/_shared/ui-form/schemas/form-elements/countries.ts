import { Field } from '../../../ui-form/helpers/fields';

export const COUNTRIES = (disabled) => ({
  ...Field.field(
    'select',
    'country',
    {
      label: 'Country',
      placeholder: 'Select a country',
      options: [
        { label: 'Un Kngdm', value: 'UK' },
        { label: 'United States of America', value: 'USA' },
        { label: 'Greece', value: 'GR' },
      ],
      required: true,
      disabled: disabled,
    },
    { defaultValue: 'UK' }
  ),
});
