import {has} from 'lodash-es';

export function requiredValidationMessage(err, field) {
  if (has(field, 'templateOptions.errMessage.required')) {
    return `${field.templateOptions.errMessage.required}`;
  } else {
    return `"${field.templateOptions.label}" is required!`;
  }
}

export function minlengthValidationMessage(err, field) {
  // field.templateOptions.maxLength = 7; // we can def TO. here!
  if (has(field, 'templateOptions.errMessage.minLength')) {
    return `${field.templateOptions.errMessage.minLength}`;
  } else {
    return ` ${err} "${field.templateOptions.label}" Should have at least ${field.templateOptions.minLength} characters`;
  }
}

export function maxlengthValidationMessage(err, field) {
  if (has(field, 'templateOptions.errMessage.maxLength')) {
    return `${field.templateOptions.errMessage.maxLength}`;
  } else {
    return `This value should be less than ${field.templateOptions.maxLength} characters`;
  }

}

export function patternMatchMessage(err, field) {
  if (field.templateOptions.errMessage.pattern) {
    return `${field.templateOptions.errMessage.pattern}`;
  } else {
    return `This value needs to match the following pattern  ${field.templateOptions.pattern}`;
  }
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
