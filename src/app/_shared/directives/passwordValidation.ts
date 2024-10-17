import {
  AbstractControl,
  UntypedFormControl,
  ValidationErrors,
} from '@angular/forms';
export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirmPassword').setErrors({ MatchPassword: true });
      //  AC.get('password').setErrors( {MatchPassword: true} );
    } else {
      return null;
    }
  }
}

export function matchPasswords(control: UntypedFormControl): {
  [s: string]: boolean;
} {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password.value !== confirmPassword.value) {
    return {
      noMatchingPasswords: true,
    };
  } else {
    return null;
  }
}

export interface ValidationResult {
  [key: string]: boolean;
}

export class PasswordStrength {
  public static strong(control: UntypedFormControl): ValidationResult {
    const isStrong =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9]).{8,24}?$/g.test(
        control.value
      );
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const hasSpecial = /[!+_#\-&$£*]/.test(control.value);
    const isGoodLength = /.{8,30}/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && isGoodLength;
    if (!valid) {
      // return what´s not valid
      return { strong: true };
    }
    return null;
  }
}

export function PasswordStrength2(
  control: AbstractControl
): ValidationErrors | null {
  // public static strong(control: FormControl): ValidationResult {
  const isStrong =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9]).{8,24}?$/g.test(
      control.value
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
        PasswordStrong: true,
        msg: 'bongo',
      }
    : null;
  // }
}
