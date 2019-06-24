import { Field } from '../../helpers/fields';

let startTyping = true;

export const FULLNAME = (disabled, defaultValue) => {
  const templateOptions = {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
    disabled: disabled
  };
  return {
    ...Field.input(
      'name',
      {
        ...templateOptions
      },
      {
        defaultValue: defaultValue
      }
    )
  };
};

export const USERNAME = (disabled) => {
  const templateOptions = {
    label: 'User Name',
    placeholder: 'Enter a unique Username',
    required: true,
    disabled: disabled
  };
  return {
    ...Field.input(
      'username',
      {
        ...templateOptions
      }
    )
  };
};

export const FNAME = (disabled) => {
  const templateOptions = {
    label: 'First Name',
    placeholder: 'Enter your first name',
    required: true,
    disabled: disabled
  };
  return {
    ...Field.input(
      'fname',
      {
        ...templateOptions
      }
    )
  };
};

export const LNAME = (disabled) => {
  const templateOptions = {
    label: 'Last Name',
    placeholder: 'Enter your last name',
    required: true,
    disabled: disabled
  };
  return {
    ...Field.input(
      'lname',
      {
        ...templateOptions
      }
    )
  };
};
