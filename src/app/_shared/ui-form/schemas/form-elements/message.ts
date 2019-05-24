import { Field } from '../../helpers/fields';

export const MESSAGE = (disabled) => ({
  ...Field.textarea(
    'message',
    {
      label: 'Message',
      placeholder: 'Enter a message',
      rows: 5,
      required: true,
      disabled: disabled
    }
  )
});
