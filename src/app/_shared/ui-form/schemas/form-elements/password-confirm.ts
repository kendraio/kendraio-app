import { Field } from '../../helpers/fields';

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
     hideExpression: (model) => !model.password,
        expressionProperties: {
          'templateOptions.disabled': '!model.password',
        },
      },

    
  )
});
