import { Field } from '../../helpers/fields';

export const EMAIL = (disabled) => ({
  ...Field.email(
    'email',
    {
      placeholder: 'Enter your email',
      required: true,
      disabled: disabled
    }
  )
});
