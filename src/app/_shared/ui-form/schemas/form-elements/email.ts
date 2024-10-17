import { Field } from '../../helpers/fields';

export const EMAIL = (disabled, data: any) => ({
  ...Field.email(
    'email',
    {
      placeholder: 'Enter your email',
      required: true,
      disabled: disabled,
    },
    {
      defaultValue: data,
    }
  ),
});

// export class TestEmail {

//   public static email() {
//   const EMAIL = (disabled, data: any) => ({
//     ...Field.email(
//       'email',
//       {
//         placeholder: 'Enter your email',
//         required: true,
//         disabled: disabled
//       },
//       {
//         defaultValue: data
//       }
//     )
//   });
// return EMAIL;
//   }

// }

export function emailx(disabled, data: any) {
  return {
    ...Field.email(
      'email',
      {
        placeholder: 'Enter your email',
        required: true,
        disabled: disabled,
      },
      {
        defaultValue: data,
      }
    ),
  };
}
