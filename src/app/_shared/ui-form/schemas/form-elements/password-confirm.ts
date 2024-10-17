import { Field } from '../../helpers/fields';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export const PASSWORDCONFIRM = (disabled) => ({
  ...Field.password(
    'passwordconfirm',
    {
      label: 'Confirm Password',
      placeholder: 'Re-Enter your password',
      required: true,
      disabled: disabled,
    },
    {
      hooks: {
        onInit: (field: any) => {
          field.form.controls.password.statusChanges.subscribe((status) => {
            field.templateOptions.disabled = status === 'INVALID'; // TODO: maybe we user formState here !?
          });
        },
      },
    }
  ),
});
