import { PERCENTAGE_INPUT, MONEY_INPUT } from './form-elements';

export const MONEY_FORM = (disabled = false, hidden = false) => ({
  id: 'MONEY',
  template: [
    {
      key: 'money',
      wrappers: ['error-on-top'],
      templateOptions: {
        label: 'Test a few numbers'
      },
      fieldGroup: [
        MONEY_INPUT(disabled, hidden),
        PERCENTAGE_INPUT(disabled)
      ]
    }
  ]
});
