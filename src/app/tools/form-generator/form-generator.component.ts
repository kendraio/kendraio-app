import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { tap, distinctUntilChanged, debounce, debounceTime } from 'rxjs/operators';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { KendraioFormService } from 'src/app/_shared/ui-form/services/kendraio.form.service'

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  isLoading = false;
  schemaform: FormGroup;
  formChanges$: Observable<any>;
  private subscription: Subscription;
  model: any = {
    bandArtist: 'The Forest',
    recordingTitle: 'Born in the morning',
    isrc: 'YA9N4nsAxZo'
  };

  uiSchemaDefault: any =   {
    "isrc": {
      "ui:disabled": true,
      "ui:placeholder": "Enter your ISRC"
    },
    "versionType": {
      "ui:disabled": false,
      "ui:placeholder": "Enter  Version Type",
      "ui:type": "textarea",
      "ui:required": true,
    }
  };

  formConfig: any;
  options: FormlyFormOptions = {};
  jsonSchema: any;
  uiSchema: any;
  fields: FormlyFieldConfig[];
  isValid: boolean;
  formDescription: string;
  formLabel: string;

  constructor(
    private fb: FormBuilder,
    private formService: KendraioFormService,
    private formlyJsonschema: FormlyJsonschema,
  ) {
    this.createForm();
    this.formChanges$ = this.schemaform.valueChanges;
  }

  ngOnInit() {

    this.subscription = this.formChanges$.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      tap(() => {
        this.isLoading = true;
      })
    )
      // .debounceTime(2000)
      .subscribe(newVal => {
        this.generateForm();
        this.isLoading = false;
      });

  }

  generateForm() {




    let uiSchema = {};
    let jsonSchema = {};
    this.isValid = true;

    //  if (this.isJson(this.schemaform.get('JSONSchema').value)) {

    //  }
    // try {
    //   jsonSchema = JSON.parse(this.schemaform.get('JSONSchema').value);
    //   this.isValid = true;
    // } catch (e) {
    //   console.log('schema not valid');
    //   this.isValid = false;
    // }

    jsonSchema = this.isValidJsonSchema(jsonSchema);
    this.model = JSON.parse(this.schemaform.get('model').value);
    uiSchema = this.isValidJson(uiSchema);

    if (this.isValid) {
      this.formConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
      this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
    }
console.log(this.formConfig.templateOptions)

this.formDescription = this.formConfig.templateOptions.description;
this.formLabel =  this.formConfig.templateOptions.label;
  }

  private isValidJson(uiSchema: {}) {
    try {
      uiSchema = JSON.parse(this.schemaform.get('UISchema').value);
    } catch (e) {
      // this.isValid = false;
      if (Object.keys(uiSchema).length === 0) {
        // return;
      }  else {
        this.isValid = false;
      }
    }
    return uiSchema;
  }


  private isValidJsonSchema(jsonSchema: {}) {
    try {
      this.isValid = true;
      jsonSchema = JSON.parse(this.schemaform.get('JSONSchema').value);
    } catch (e) {
      this.isValid = false;
      if (Object.keys(jsonSchema).length === 0) {
      }  else {
        this.isValid = false;
      }
    }
    return jsonSchema;
  }

  createForm() {
    this.schemaform = this.fb.group({
      JSONSchema: [''],
      UISchema: [JSON.stringify(this.uiSchemaDefault)],
      model: [JSON.stringify(this.model)],
    });
  }

}

