import { Field } from '../../helpers/fields';

export const PASSWORD = (disabled) => ({
  ...Field.password(
    'password',
    {
      label: 'Password',
      placeholder: 'Enter your password',
      required: true,
      disabled: disabled
    }
  )
});
