import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Field } from '../helpers/fields';
import { DEFAULT_FORM } from '../schemas/default.form';
import { LOGIN_FORM } from '../schemas/login.form';
import { FORMS_VALUES } from '../schemas';

@Injectable({
  providedIn: 'root'
})
export class FormlyService {

  constructor() { }
  public getDefaultForm(): FormlyFieldConfig[] {
    return LOGIN_FORM().template;
  }

  public getFormById(id: string, disabled = false) {
    return FORMS_VALUES(disabled)[id];
  }

  private generateCleanJsonConfiguration(clone: object[]) {
    return JSON.parse(JSON.stringify(clone));
  }

}
