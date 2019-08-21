import { FormlyFieldConfig } from '@ngx-formly/core';

// all FE error msgs live here, at some point we'll integate ngx-translate


export function minlengthValidationMessage(err, field) {
    return `Should have at least ${field.templateOptions.minLength} characters`;
  }

  export function maxlengthValidationMessage(err, field) {
    return `This value should be less than ${field.templateOptions.maxLength} characters`;
  }

  export function patternMatchMessage(err, field: FormlyFieldConfig) {
    return `This value needs to match the following pattern  ${field.templateOptions.pattern}`;
  }

  export function minValidationMessage(err, field) {
    return `This value should be more than ${field.templateOptions.min}`;
  }

  export function maxValidationMessage(err, field) {
    return `This value should be less than ${field.templateOptions.max}`;
  }

  export function passwordMatchValidationMessage(err, field) {
    return `err:1 Passwords dont match`;
  }

  export function PasswordStrengthValidationMessage(err, field) {
    return `Password is too weak please...`;
  }

  export function maximumNumValidationMessage(err, field) {
    return `wrong wrong wrong`;
  }
