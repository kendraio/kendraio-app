import { AbstractControl, ValidationErrors } from "@angular/forms";

export function maximumNumValidation(control, type) {
  const value = control.value;

  if (value) {
    const unMasked = parseInt(value.replace(/\D/g, ""), 10);

    if (unMasked > 10000) {
      return { maximumNumValidation: "" };
    }
  }

  return null;
}

export function passwordMatchValidation(control, type) {
  const value = control.value;
  // const value2 = control.root.password.value;
  return { passwordMatchValidation: "test msg: 1" };
  // return value === value2
  //   // avoid displaying the message error when values are empty
  //   || (!value || !value2);
  // const value2 = control2.value;
  return null;
}

export function PasswordStrengthValidation(control: AbstractControl, type) {
  // public static strong(control: FormControl): ValidationResult {
  const isStrong =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9]).{8,24}?$/g.test(
      control.value,
    );
  const hasNumber = /\d/.test(control.value);
  const hasUpper = /[A-Z]/.test(control.value);
  const hasLower = /[a-z]/.test(control.value);
  const hasSpecial = /[!+_#\-&$£*]/.test(control.value);
  const isGoodLength = /.{8,30}/.test(control.value);
  const valid = hasNumber && hasUpper && hasLower && isGoodLength;
  const hasError = !valid;

  return hasError
    ? {
        PasswordStrengthValidation: true,
      }
    : null;
  // }
}

// export function PasswordStrengthValidation(control, type) {
//   const value = control.value;

//   if (value) {
//     const unMasked = parseInt(value.replace(/\D/g, ''), 10);

//     if (unMasked > 10000) {
//       return { PasswordStrengthValidation: '' };
//     }
//   }

//   return null;
// }
