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
import {UI_SCHEMA} from './uischema';
import {EDITOR_OPTIONS} from './editor-options';
import {AdapterFormSelectService} from '../../services/adapter-form-select.service';
import {FormDataService} from '../../services/form-data.service';
import {get, has} from 'lodash-es';

@Component({
  selector: 'app-form-builder-page',
  templateUrl: './form-builder-page.component.html',
  styleUrls: ['./form-builder-page.component.scss']
})
export class FormBuilderPageComponent implements OnInit, OnDestroy {

  editorOptions = EDITOR_OPTIONS;

  JSONSchema = '{}';
  jsonModel: NgxEditorModel;

  UISchema = '{}';
  uiModel: NgxEditorModel;

  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  model = {};

  _destroy$ = new Subject();
  _schemaChange$ = new Subject();

  isDbForm = false;
  originalDbValues = {};

  @ViewChild('modelOutput', { static: false }) modelOutput: ElementRef;

  constructor(
    private formService: KendraioFormService,
    private formSubmitHandler: FormSubmitHandlerService,
    private shareLinks: ShareLinkGeneratorService,
    private formSelect: AdapterFormSelectService,
    private formData: FormDataService
  ) { }

  ngOnInit() {
    this._schemaChange$.pipe(
      takeUntil(this._destroy$),
      debounceTime(1000)
    ).subscribe(() => {
      try {
        const JSONSchema = JSON.parse(this.JSONSchema);
        this.isDbForm = has(JSONSchema, 'name');
        this.fields = this.formService.schemasToFieldConfig(JSONSchema, JSON.parse(this.UISchema));
      } catch (e) {
        // TODO: error handling
      }
    });

    const urlData = this.shareLinks.getData();
    if (urlData) {
      this.setSchemaValues(urlData);
    }
    this.updateEditorModels();
    this.jsonSchemaChange();
  }

  setSchemaValues({ JSONSchema, UISchema }) {
    this.JSONSchema = JSON.stringify(JSONSchema, null, 4);
    this.UISchema = JSON.stringify(UISchema, null, 4);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateEditorModels() {
    this.jsonModel = {
      value: this.JSONSchema,
      language: 'json',
      uri: 'a:jsonModel.json'
    };
    this.uiModel = {
      value: this.UISchema,
      language: 'json',
      uri: 'a:uiModel.json'
    };
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
        schema: UI_SCHEMA
      }]
    });
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

  onSave() {
    // Save changes to Form Model to database
    if (this.isDbForm) {
      const JSONSchema = JSON.parse(this.JSONSchema);
      this.saveOriginalDbValues(this.model);
      this.formData.saveData(get(JSONSchema, 'name'), this.model)
        .subscribe(({ ok, rev }) => {
          if (ok) {
            this.model['_rev'] = rev;
          }
        });
    }
  }

  loadFromAdapter() {
    this.formSelect.selectForm().subscribe(values => {
      if (!!values) {
        this.setSchemaValues(values);
        this.updateEditorModels();
        this.resetModelData();
      }
    });
  }

  saveOriginalDbValues(values) {
    // TODO: Deep copy to save original values?
    this.originalDbValues = { ...values };
  }

  loadFromDatabase() {
    const data = JSON.parse(this.JSONSchema);
    if (data && has(data, 'name')) {
      this.formData.loadData(get(data, 'name')).subscribe(values => {
        this.saveOriginalDbValues(values);
        this.model = values;
        this.onChange();
      });
    } else {
      this.formData.noSchemaName();
    }
  }

  resetModelData() {
    this.model = {};
    this.onChange();
  }

  resetForm() {
    this.form.reset(this.originalDbValues);
  }
}
