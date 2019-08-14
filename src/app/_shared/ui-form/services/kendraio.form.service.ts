import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
// import { Field } from '../helpers/fields';
// import { DEFAULT_FORM } from '../schemas/default.form';
// import { LOGIN_FORM } from '../schemas/login.form';
// import { FORMS_VALUES } from '../schemas';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { FULLNAME, EMAIL, TYPEAHEAD } from '../schemas/form-elements';
import { Observable, from, forkJoin, throwError } from 'rxjs';
import { FORM_APIS } from '../api-config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KendraioFormService {

  constructor(
    private http: HttpClient,
    private formlyJsonschema: FormlyJsonschema
  ) { }

  getFormData(groupId, formId): Observable<any> {
    return forkJoin([this.getUI(groupId, formId), this.getSchema(groupId, formId)]);
  }

  getUI(groupId: string, formId: string): Observable<any> {
    const url = FORM_APIS[groupId][formId].uiSchema;

    // TODO: fetch remote form config if not found in FORM_APIS

    return this.http.get(url)
      .pipe(catchError(this.errorHandler));
  }

  getSchema(groupId: string, formId: string): Observable<any> {
    const url = FORM_APIS[groupId][formId].jsonSchema;
    return this.http.get<FormlyFieldConfig[]>(url);
  }

  toFieldConfig(schema) {
    return this.formlyJsonschema.toFieldConfig(schema);
  }

  uiMapper(formlyConfig, jsonSchema, uiSchema) {
    console.log(jsonSchema);
    let i = 0;
    try {
      if (Object.keys(uiSchema).length) {
        Object.keys(jsonSchema.properties).forEach(function (key) {
          Object.keys(uiSchema).forEach(function (uiKey) {
            if (uiKey === key) {
              //  jsonSchema.properties.bandArtist.type = uiSchema.bandArtist['ui:type'];
              formlyConfig['fieldGroup'][i]['templateOptions']['disabled'] = uiSchema[key]['ui:disabled'];
              formlyConfig['fieldGroup'][i]['templateOptions']['placeholder'] = uiSchema[key]['ui:placeholder'];
              formlyConfig['fieldGroup'][i]['templateOptions']['required'] = uiSchema[key]['ui:required'];
              formlyConfig['fieldGroup'][i]['templateOptions']['readonly'] = uiSchema[key]['ui:readonly'];
              formlyConfig['fieldGroup'][i].expressionProperties = {};
              
              
            }
          });
          i++;
        });
      }

      return formlyConfig;
    } catch (e) {

    }

  }

  // Moved from my-youtube component
  uiTypeMapper(uiSchema: any, jsonSchema: any) {
    try {
      Object.keys(uiSchema).forEach(function (uiKey) {
        Object.keys(jsonSchema.properties).forEach(function (schemaKey) {
          if ((uiKey === schemaKey) && uiSchema[uiKey]['ui:type']) {
            jsonSchema.properties[schemaKey].type = uiSchema[uiKey]['ui:type'];
          } else {
            // Variable is assigned to itself?
            jsonSchema.properties[schemaKey].type = jsonSchema.properties[schemaKey].type;
          }
        });
        // i++;
      });
    } catch (e) {
    }
    // return i;
  }

  jsonMapper(jsonSchema, uiSchema) {
    let i = 0;
    try {

      Object.keys(uiSchema).forEach(function (key) {
        Object.keys(jsonSchema.properties).forEach(function (uiKey) {
          if (uiKey === key) {
            jsonSchema.properties[i].type = uiSchema.bandArtist['ui:type'];

          }
        });
        i++;
      });
      return jsonSchema;
    } catch (e) {

    }

  }

  errorHandler(error: HttpErrorResponse) { // added HttpInterceptor so maybe dont need this
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend http returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something naughty happened; please try again later.');

  }

  // public getFormById(id: string, disabled = false, data?: object) {
  //   const ob = FORMS_VALUES(disabled, data)[id];
  //   console.log(ob)
  //   return ob;
  // }

  // public getJSONFormById(id: string, disabled = false, data: any = {}) {
  //   const frm = this.generateCleanJsonConfiguration(FORMS_VALUES(disabled, data)[id]);
  //   return  frm;
  // }

  // private generateCleanJsonConfiguration(clone: object[]) {  // use this to create JSON config ??? maybe??
  //   return JSON.parse(JSON.stringify(clone));
  // }

  // getYoutubeData() {
  //   return this.http.get<FormlyFieldConfig[]>('assets/fake-data/you-tube-api.json');
  // }

  // getYoutubeFields() {

  //   const mappedFields = [
  //     { 'field': 'FULLNAME', 'enabled': false },
  //     { 'field': 'EMAIL', 'enabled': false },
  //   ];

  //   const myFields = [
  //     // FULLNAME(false, data['fullname']),
  //     // EMAIL(false, data['email']),
  //   ];

  //   mappedFields.forEach(v => {
  //     const fname = v.field;


  //     //  myFields.push(

  //         console.log(v[fname](false, {
  //           'id': 'YOUTUBE',
  //           'fullname': 'Bernie Winters',
  //           'email': 'bernie@heaven.com'
  //       }));

  //       //  [fname](false, data['fullname'])


  //    //   );


  //   });

  // }



}
