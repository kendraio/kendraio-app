
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
import { PasswordStrength } from 'src/app/_shared/directives/passwordValidation';



export const LOGIN_FORM_MODEL = [


    new DynamicInputModel({
        id: 'password',
        maxLength: 25,
        minLength: 3,
        placeholder: 'Password',
        validators: {
            required: true,           
            PasswordStrength: 'strong'
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),

    new DynamicInputModel({
        id: 'confirmPassword',
        maxLength: 50,
        placeholder: 'Confirm Password',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        },
        additional: {
            color: 'accent'
        }
    }),

    new DynamicInputModel({

        id: 'ISRC',
        placeholder: 'ISRC',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is Required'
        }
    }),


];
