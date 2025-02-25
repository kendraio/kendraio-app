import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
// import { Field } from '../helpers/fields';
// import { DEFAULT_FORM } from '../schemas/default.form';
// import { LOGIN_FORM } from '../schemas/login.form';
// import { FORMS_VALUES } from '../schemas';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import { FULLNAME, EMAIL, TYPEAHEAD } from '../schemas/form-elements';
import { Observable, from, forkJoin, throwError, of } from 'rxjs';
import { FORM_APIS, REFDATA_APIS } from '../api-config';
import { catchError, map, tap } from 'rxjs/operators';
import { get, set, has, findIndex, isObject } from 'lodash-es';
import { AdaptersService } from '../../../services/adapters.service';
import { IfStmt } from '@angular/compiler';
import { ConfigOption } from '@ngx-formly/core';

const ADAPTER_PREFIX = 'https://kendraio.github.io/kendraio-adapter/';

@Injectable({
  providedIn: 'root'
})
export class KendraioFormService {

  constructor(
    private http: HttpClient,
    private formlyJsonschema: FormlyJsonschema,
    private adapters: AdaptersService,
    // private config: ConfigOption
  ) { }

  getFormData(groupId, formId): Observable<any> {
    return forkJoin([this.getUI(groupId, formId), this.getSchema(groupId, formId)]);
  }

  getUI(groupId: string, formId: string): Observable<any> {
    // console.log(this.adapters.getAdapterSync(groupId));
    // TODO: fetch remote form config if not found in FORM_APIS
    // TODO: This working but is not very robust
    // TODO: FETCH FORM CONFIG NEEDS TO BE ASYNC
    const url = has(FORM_APIS, `${groupId}.${formId}.uiSchema`)
      ? FORM_APIS[groupId][formId].uiSchema
      : ADAPTER_PREFIX + get(this.adapters.getAdapterSync(groupId), `adapter.forms.${formId}.uiSchema`, '');

    return this.http.get(url).pipe(catchError(() => of({})));
  }

  getJSONSchema(_adapter, _formId) {
    const ob = this.getFormData(_adapter, _formId).pipe(
      map(([uiSchema, jsonSchema]) => ({ uiSchema, jsonSchema })),
    );
    return ob;
  }

  getJSONSchemaForm(_adapter, _formId) {
    const ob = this.getFormData(_adapter, _formId).pipe(
      map(([uiSchema, jsonSchema]) => ({ uiSchema, jsonSchema })),
      map(({ uiSchema, jsonSchema }) => this.jsonSchemaToFieldConfig({ uiSchema, jsonSchema })),
      map(({ fields, uiSchema }) => this.uiWidgetTypeMapper({ fields, uiSchema })),
      map((fields) => [fields])
    );
    return ob;
  }

  schemasToFieldConfig(jsonSchema, uiSchema) {
    const { fields } = this.jsonSchemaToFieldConfig({ uiSchema, jsonSchema });
    const ob = [
      this.uiWidgetTypeMapper({ fields, uiSchema })
    ];
    return ob;
  }

  /**
   * Private function used by getJSONSchemaForm to convert the configs fetched
   * from Adapters into the format used by Formly for field config
   *
   * @param uiSchema UI config specific to this form
   * @param jsonSchema JSON representation of data model
   */
  private jsonSchemaToFieldConfig({ uiSchema, jsonSchema }) {
    const formConfig = this.toFieldConfig(jsonSchema);
    const fields = this.uiMapper(formConfig, jsonSchema, uiSchema);
    return { fields, uiSchema };
  }

  /**
   * Private function used by getJSONSchemaForm to map the widget types
   * for fields with custom widgets defined in UI Schema
   *
   * TODO: Refactor to ensure this is a pure function
   *
   * @param fields Formly Field Config
   * @param uiSchema UI config specific to this form
   */
  private uiWidgetTypeMapper({ fields, uiSchema }) {
    // Utility function to find the array index of field from a fieldGroup based on key
    const getFieldIndexFromGroup = (obj, _key) => {
      return findIndex(get(obj, 'fieldGroup', []), ({ key }) => key === _key);
    };

    const fieldIndexExists = fieldIndex => fieldIndex !== -1;

    return Object.keys(uiSchema).reduce((_fields, uiKey) => {
      const fieldIndex = getFieldIndexFromGroup(_fields, uiKey);
      if (fieldIndexExists(fieldIndex)) {
        // Map simple top level widget types
        if (has(uiSchema, `${uiKey}.ui:widget`)) {
          const newWidgetType = get(uiSchema, `${uiKey}.ui:widget`, '');
          set(_fields, `fieldGroup[${fieldIndex}].type`, newWidgetType);
          // TODO: Don't do this here!!!!!!
          const { items, ...subSchema } = get(uiSchema, uiKey);
          set(_fields, `fieldGroup[${fieldIndex}].templateOptions.uiSchema`, subSchema);
        }
        // Recursively map arrays
        if (has(uiSchema, `${uiKey}.items`)) {
          const oldArray = get(_fields, `fieldGroup[${fieldIndex}].fieldArray`, {});
          const subSchema = get(uiSchema, `${uiKey}.items`);
          const newArray = this.uiWidgetTypeMapper({ fields: oldArray, uiSchema: subSchema });
          if (has(subSchema, 'ui:widget')) {
            set(newArray, 'type', get(subSchema, 'ui:widget'));
            // TODO: Don't do this here!!!!!!
            const { items, ...newSubSchema } = subSchema;
            set(newArray, 'templateOptions.uiSchema', newSubSchema);
          }
          set(_fields, `fieldGroup[${fieldIndex}]`,
            { ...get(_fields, `fieldGroup[${fieldIndex}]`), fieldArray: newArray });
        }
        // Nested objects
        if (uiKey !== 'items' && isObject(get(uiSchema, uiKey))) {
          const oldObj = get(_fields, `fieldGroup[${fieldIndex}]`, {});
          const subSchema = get(uiSchema, `${uiKey}`);
          const newObj = this.uiWidgetTypeMapper({ fields: oldObj, uiSchema: subSchema });
          // TODO: Don't do this here!!!!!!
          const { items, ...newSubSchema } = subSchema;
          set(newObj, 'templateOptions.uiSchema', newSubSchema);
          set(_fields, `fieldGroup[${fieldIndex}]`, { ...oldObj, ...newObj });
        }
      }
      return _fields;
    }, fields);
  }

  getSchema(groupId: string, formId: string): Observable<any> {
    // TODO: This is not very robust
    // TODO: FETCH FORM CONFIG NEEDS TO BE ASYNC
    const url = has(FORM_APIS, `${groupId}.${formId}.uiSchema`)
      ? FORM_APIS[groupId][formId].jsonSchema
      : ADAPTER_PREFIX + get(this.adapters.getAdapterSync(groupId), `adapter.forms.${formId}.jsonSchema`, '');

    return this.http.get<FormlyFieldConfig[]>(url).pipe(catchError(() => of({})));
  }

  toFieldConfig(schema) {
    const ob = this.formlyJsonschema.toFieldConfig(schema);
    return ob;
  }

  uiMapper(formlyConfig, jsonSchema, uiSchema) {
    // formlyConfig.fieldGroup[0].type = 'datepicker';
    // formlyConfig.fieldGroup[1].type = 'datepicker';

    // console.log('fc= ');
// console.log(formlyConfig);

    let val;
    const SELECT_CONFIG: Array<any> = [];
    let i = 0;
    try {
      // TODO:  refactor
      if (Object.keys(uiSchema).length) {
 //       jsonSchema = jsonSchema.properties.items;


        Object.keys(jsonSchema.properties).forEach(function (key) {
          // Object.keys(jsonSchema.properties['items'].properties).forEach(function (key) {
          Object.keys(uiSchema).forEach(function (uiKey) {
            const TO = formlyConfig['fieldGroup'][i]['templateOptions'];

            if (key.toLowerCase() === 'formgroup') {
              const f = jsonSchema.properties[key];
              set(f, 'type', 'formgroup');
            }

// if (Object.keys(jsonSchema.properties[key]).length) {
// console.log(jsonSchema.properties[key].type);
// }

// if (jsonSchema.properties[key].type === 'object') {
//   console.log(jsonSchema.properties[key].properties);
// //  this.uiMapper(formlyConfig, jsonSchema.properties[key], uiSchema);
//   }

            if (uiKey === key) {

              switch (uiSchema[key]['ui:widget']) {

                // k-password money, datepicker, k-timepicker, videoviewer, thumbnailviewer, tags, visibility, playlist

                case 'k-textarea':
                case 'kendraio-textarea':
                  mapTextArea(TO, uiSchema, key);
                  break;

                case 'k-timepicker':
                case 'kendraio-timepicker':
                  mapTimepicker(TO, uiSchema, key);
                  break;

                case 'k-select' || 'typeahead':
                case 'kendraio-select' || 'typeahead':
                  mapKSelect(TO, uiSchema, key);
                  const ref = get(uiSchema, `${key}.ui:ref`, '');
                  const refType = get(uiSchema, `${key}.ui:refType`, 'json');
                  SELECT_CONFIG.push(
                    { 'key': i, ref, refType },
                  );
                  break;

                default:
                  break;
              }


              switch (jsonSchema.properties[key].type) {
                case 'null': {
                  break;
                }
                case 'number':
                  break;
                case 'integer':
                  break;
                  case 'string':
                      ['minLength', 'maxLength', 'pattern'].forEach(prop => {
                        if (jsonSchema.properties[key].hasOwnProperty(prop)) {
                          TO[prop] = jsonSchema.properties[key][prop];
                        }
                      });
                      break;

                default:
                  break;
              }

              set(TO, 'disabled', get(uiSchema, `${key}.ui:disabled`, false));
              set(TO, 'placeholder', get(uiSchema, `${key}.ui:placeholder`, null));

              TO['errMessage'] = get(uiSchema, `${key}.ui:errMessage`, null);
              TO['patternErrMessage'] = get(uiSchema, `${key}.ui:patternErrMessage`, null);

              if (get(uiSchema, `${key}.ui:widget`, '') === 'blocks') {
                const blocksConfig = get(uiSchema, `${key}.ui:blocksConfig`, []);
                set(formlyConfig, `fieldGroup[${i}].templateOptions.blocksConfig`, blocksConfig);
              }
            }
          });
          i++;
        });
      }
      if (SELECT_CONFIG.length) {

        SELECT_CONFIG.forEach((item, index) => {
          const refType = SELECT_CONFIG[index].refType;
          if (refType === 'fetch' && SELECT_CONFIG[index].ref) {
            this.http.get(SELECT_CONFIG[index].ref).subscribe(newValue => {
              formlyConfig.fieldGroup[item.key].templateOptions.options = newValue;
            });
          } else {
            this.http.get(REFDATA_APIS[SELECT_CONFIG[index].ref][SELECT_CONFIG[index].refType])
              .subscribe(newValue => {
                formlyConfig.fieldGroup[item.key].templateOptions.options = newValue;
              });
          }
        });

      }

      return formlyConfig;
    } catch (e) {

    }

  }


  /**
   * This adds support for UI Schema ui:widget specifications by updating the field
   * type in jsonSchema to match the type provided in ui:widget
   *
   * Warning - not a pure function
   * TODO: refactor to maintain referential transparency
   *
   * @param uiSchema ui schema with widget config
   * @param jsonSchema schema to be updated
   */
  uiTypeMapper(uiSchema: any, jsonSchema: any) {
    Object.keys(uiSchema).forEach((uiKey) => {
      Object.keys(jsonSchema.properties).forEach((schemaKey) => {
        if ((uiKey === schemaKey) && uiSchema[uiKey]['ui:widget']) {
          jsonSchema.properties[schemaKey].type = uiSchema[uiKey]['ui:widget'];
        }
        // Calls to widget type mapping when using $ref within schema fail here
        // because the reference has not been de-referenced by the time this mapper is called
        // TODO: FIX THIS!
        // if ((uiKey === schemaKey) && get(jsonSchema, `properties.${schemaKey}.type`, '') === 'array') {
        //   this.uiTypeMapper(uiSchema[uiKey].items, jsonSchema['properties'][schemaKey].items);
        // }
      });
    });
  }

  jsonMapper(jsonSchema, uiSchema) {
    let i = 0;
    try {

      Object.keys(uiSchema).forEach(function (key) {
        Object.keys(jsonSchema.properties).forEach(function (uiKey) {
          if (uiKey === key) {
            jsonSchema.properties[i].type = uiSchema.bandArtist['ui:widget'];

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



  getRefData() {
    return this.http.get('assets/fake-data/test-ref-data.json');
  }

}


function mapTextArea(TO: any, uiSchema: any, key: string) {
  set(TO, 'autosize', get(uiSchema, `${key}.ui:autosize`, false));
  TO['rows'] = get(uiSchema, `${key}.ui:rows`, 420);
  TO['cols'] = get(uiSchema, `${key}.ui:cols`, 30);
}

function mapTimepicker(TO: any, uiSchema: any, key: string) {
  TO['hideClock'] = get(uiSchema, `${key}.ui:hideClock`, false);
  TO['timeFormat'] = get(uiSchema, `${key}.ui:timeFormat`, false);
}

function mapKSelect(TO: any, uiSchema: any, key: string) {
 set(TO, 'labelProp',  get(uiSchema, `${key}.ui:labelProp`, 'label'));
 set(TO, 'valueProp',  get(uiSchema, `${key}.ui:valueProp`, 'value'));
 set(TO, 'isMultiSelect',  get(uiSchema, `${key}.ui:isMultiSelect`, false));
 set(TO, 'addTag',  get(uiSchema, `${key}.ui:addTag`, false));
}

