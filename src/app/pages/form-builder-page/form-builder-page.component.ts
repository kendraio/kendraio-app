import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {KendraioFormService} from '../../_shared/ui-form/services/kendraio.form.service';
import {FormSubmitHandlerService} from '../../services/form-submit-handler.service';
import {ShareLinkGeneratorService} from '../../services/share-link-generator.service';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import JSONFormatter from 'json-formatter-js';
import { JSON_SCHEMA } from './jsonschema';
import { NgxEditorModel } from 'ngx-monaco-editor';
import {config} from '../../_shared/ui-form/config';

@Component({
  selector: 'app-form-builder-page',
  templateUrl: './form-builder-page.component.html',
  styleUrls: ['./form-builder-page.component.scss']
})
export class FormBuilderPageComponent implements OnInit, OnDestroy {

  editorOptions = {
    baseUrl: 'form-builder',
    theme: 'vs-dark',
    language: 'json',
    minimap: {
      enabled: false
    },
    lineNumbers: 'off',
    scrollBeyondLastLine: false
  };

  JSONSchema = '{}';
  jsonModel: NgxEditorModel = {
    value: this.JSONSchema,
    language: 'json',
    uri: 'a:jsonModel.json'
  };

  UISchema = '{}';
  uiModel: NgxEditorModel = {
    value: this.UISchema,
    language: 'json',
    uri: 'a:uiModel.json'
  };

  modelText = '{}';

  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  model = {};

  _destroy$ = new Subject();
  _schemaChange$ = new Subject();

  @ViewChild('modelOutput', { static: false }) modelOutput: ElementRef;

  constructor(
    private formService: KendraioFormService,
    private formSubmitHandler: FormSubmitHandlerService,
    private shareLinks: ShareLinkGeneratorService
  ) { }

  ngOnInit() {
    this._schemaChange$.pipe(
      takeUntil(this._destroy$),
      debounceTime(1000)
    ).subscribe(() => {
      try {
        this.fields = this.formService.schemasToFieldConfig(JSON.parse(this.JSONSchema), JSON.parse(this.UISchema));
      } catch (e) {
        // TODO: error handling
      }
    });

    const urlData = this.shareLinks.getData();
    if (urlData) {
      this.JSONSchema = JSON.stringify(urlData['JSONSchema'], null, 4);
      this.UISchema = JSON.stringify(urlData['UISchema'], null, 4);
    }
    this.jsonSchemaChange();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  initJson() {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [{
        fileMatch: ['a:jsonModel.json'],
        uri: 'https://json-schema.org/draft-07/schema',
        schema: JSON_SCHEMA
      }, {
        fileMatch: ['a:uiModel.json'],
        uri: 'https://app.kendra.io/v0/ui-schema',
        schema: {
          type: 'object',
          additionalProperties: {
            type: 'object',
            properties: {
              'ui:widget': {
                'type': 'string',
                'enum': [
                  'datepicker',
                  ...config.types.map(({ name }) => name)
                ]
              },
              'ui:disabled': {
                'type': 'boolean'
              },
              'ui:placeholder': {
                'type': 'boolean'
              },
              'ui:labelProp': {
                type: 'string'
              },
              'ui:valueProp': {
                type: 'string'
              },
              'ui:isMultiSelect': {
                type: 'boolean'
              },
              'ui:ref': {
                type: 'string'
              },
              'ui:refType': {
                enum: ['json', 'http', 'fetch']
              }
            }
          }
        }
      }]
    });
  }

  initUi() {
  }

  jsonSchemaChange() {
    this._schemaChange$.next();
  }

  shareForm() {
    const JSONSchema = JSON.parse(this.JSONSchema);
    const UISchema = JSON.parse(this.UISchema);
    this.shareLinks.shareLink('form-builder', { JSONSchema, UISchema });
  }

  onChange() {
    // Replace #modelOutput DIV contents with formatted JSON
    const formatter = new JSONFormatter(this.model, Infinity, { theme: 'dark' });
    while (this.modelOutput.nativeElement.firstChild) {
      this.modelOutput.nativeElement.removeChild(this.modelOutput.nativeElement.firstChild);
    }
    this.modelOutput.nativeElement.append(formatter.render());
  }

  onSubmit() {
    // Send form submit event to the form handler service
    this.formSubmitHandler.handle({
      form: `formBuilderForm`,
      action: 'submit',
      payload: this.form.getRawValue()
    });
  }
}
