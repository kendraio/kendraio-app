
import {
    DynamicCheckboxModel,
    DynamicDatePickerModel,
    DynamicFormGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicSwitchModel,
    DynamicTextAreaModel
} from '@ng-dynamic-forms/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
// import { PasswordStrength } from 'src/app/_shared/directives/passwordValidation';
// import { PasswordStrength } from 'src/app/_shared/directives/passwordValidation';


//  export const passwordStrength: string = '222'



//    let passwordField: DynamicInputModel;



    //  this.passwordField =  new DynamicInputModel({
    //     id: 'password',
    //     maxLength: 25,
    //     minLength: 8,   
    //     placeholder: 'Password',
    //     validators: {
    //         required: null,                
    //         PasswordStrength2: null
    //     },
    //     errorMessages: {
    //         required: '{{ id }} baddy',
    //         PasswordStrength2: '{{ id }} is too weak'
    //     }
    // });



    // this.confirmPasswordField =   new DynamicInputModel({
    //     id: 'confirmPassword',
    //     maxLength: 50,
    //     placeholder: 'Confirm Password',
    //     validators: {
    //         required: null
    //     },
    //     errorMessages: {
    //         required: 'Field is required'
    //     },
    //     additional: {
    //         color: 'accent'
    //     }
    // });

//     export class BillyBongo  {
//         dangerousUrl: any;
//         trustedUrl: any;

//     constructor(private sanitizer: DomSanitizer) {
//         // javascript: URLs are dangerous if attacker controlled.
//         // Angular sanitizes them in data binding, but you can
//         // explicitly tell Angular to trust this value:
//         this.dangerousUrl = 'javascript:alert("Hi there")';
//         this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
// const boo =  '<mat-icon>visibility</mat-icon>';
//     }
//     export const this.trustedUrl;
// }

export const LOGIN_FORM_MODEL = [
  
    new DynamicInputModel({
        id: 'username', 
        label: 'Email/Username',
        maxLength: 25,
        minLength: 5,   
        placeholder: 'Enter Email/Username',
        suffix: 'booboo',
        validators: {
            required: null,                
        },
        errorMessages: {
            required: '{{ label }} is required',
        }
    }),

new DynamicFormGroupModel({
        id: 'passwordSetterGroup',
        legend: 'Set your password',
        group: [
  
            new DynamicInputModel({
                id: 'password',
                maxLength: 25,
                minLength: 8,   
                placeholder: 'Password',
                validators: {
                    required: null,                
                    PasswordStrength2: null
                },
                errorMessages: {
                    required: '{{ id }} is required',
                    PasswordStrong: 'Your {{ placeholder }} {{PasswordStrength2.PasswordStrong}} is too weak {{msg}}'
                }
            }),
          new DynamicInputModel({
            id: 'confirmPassword',
            maxLength: 50,
            placeholder: 'Confirm Password',
            disabled: true,
            validators: {
                required: null
            },
            errorMessages: {
                required: 'Field is required'
            },
            additional: {
                color: 'accent'
            }
        })
        ],
        validators: {
           matchPasswords: null, 
            // validators: null
        },
        errorMessages: {
         noMatchingPasswords: 'Passwords do not match',
        }
      })




];
