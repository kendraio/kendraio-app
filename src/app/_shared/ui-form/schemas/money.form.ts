import { PERCENTAGE_INPUT, MONEY_INPUT } from './form-elements';

export const MONEY_FORM = (disabled = false) => ({
  id: 'MONEY',
  template: [
    {
      key: 'money',
      wrappers: ['error-on-top'],
      templateOptions: {
        label: 'Test a few numbers'
      },
      fieldGroup: [
        MONEY_INPUT(disabled),
        PERCENTAGE_INPUT(disabled)
      ]
    }
  ]
});
