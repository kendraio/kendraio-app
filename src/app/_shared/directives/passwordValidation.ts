import {AbstractControl, FormControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if(password !== confirmPassword) {
            AC.get('confirmPassword').setErrors( {MatchPassword: true} );
          //  AC.get('password').setErrors( {MatchPassword: true} );
        } else {
            return null
        }
    }
}

// import { FormControl } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordStrength {

    public static strong(control: FormControl): ValidationResult {
        const isStrong = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!+_#\-&$£*])(?=.*[0-9]).{8,24}?$/g.test(control.value);
        const hasNumber = /\d/.test(control.value);
        const hasUpper = /[A-Z]/.test(control.value);
        const hasLower = /[a-z]/.test(control.value);
        const hasSpecial = /[!+_#\-&$£*]/.test(control.value);
        const isGoodLength = /.{8,30}/.test(control.value);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        // && hasSpecial
        const valid = hasNumber && hasUpper && hasLower && isGoodLength;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }
}
