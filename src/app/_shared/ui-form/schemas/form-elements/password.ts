import { Field } from '../../helpers/fields';

export const PASSWORD = (disabled) => ({
  ...Field.password(
    'password',

    {
      label: 'Password',
      placeholder: 'Enter your password',
      required: true,
      disabled: disabled,
    },

    {
      validators: {
        validation: ['PasswordStrengthValidation'],
      },

      hooks: {
        onInit: (form: any, field: any) => {
          form.formControl.statusChanges.subscribe((status) => {
            // this.options.formState.isRefValid =
            //   console.log(field.formControl.valid);
            //  console.log(form.controls.password.valid);
          });
        },
      },
    }
  ),
});
