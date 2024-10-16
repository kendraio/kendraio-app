import { Field } from "../../../ui-form/helpers/fields";

export const MONEY_INPUT = (disable, hidden) => ({
  ...Field.field(
    "money",
    "money-value",
    {
      disabled: disable,
      label: "TEST Mask",
    },
    {
      validators: {
        validation: ["maximumNumValidation"],
      },
    },
  ),
});

// export const EMAIL = (disabled) => ({
//   ...Field.email(
//     'email',
//     {
//       placeholder: 'Enter your email',
//       required: true,
//       disabled: disabled
//     }
//   )
// });
