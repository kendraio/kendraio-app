import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {KendraioFormService} from '../../_shared/ui-form/services/kendraio.form.service';
import {UntypedFormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Subject} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';
import {clone, get, has, isUndefined, set} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';

interface BaseJsonSchema {
  properties?: any,
  type?: string;
}

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss']
})
export class FormBlockComponent implements OnInit, OnChanges, OnDestroy {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();
  _changes = new Subject();

  form = new UntypedFormGroup({});
  fields: FormlyFieldConfig[] = [];
  options: FormlyFormOptions = {};

  label = 'Submit';
  hasSubmit = true;
  emitOnInit = false;

  contextErrorKey = null;
  contextErrors = '';
  prevContextKey = '';

  schemaBlocks = [];

  constructor(
    private readonly formService: KendraioFormService
  ) { }

  ngOnInit() {
    this.setupChangesOutput();
  }

  setupChangesOutput() {
    this._changes
      .pipe(
        filter(_ => !this.hasSubmit),
        debounceTime(get(this.config, 'debounceTime', 400)),
        filter(_ => this.form.valid)
      )
      .subscribe(value => {
        this.output.emit(clone(this.form.getRawValue()));
      });
  }

  ngOnDestroy() {
    this._changes.complete();
  }

  ngOnChanges(changes): void {
    const keyChanges = Object.keys(changes);
    if (isUndefined(get(changes, 'model.previousValue')) && get(this.config, 'skipInit', false)) {
      return;
    }

    this.contextErrorKey = get(this.config, 'contextErrorKey', null);
    if (this.context.__key !== this.prevContextKey) {
      // context has changed
      this.prevContextKey = this.context.__key;
      // update errors from context if used
      if (this.contextErrorKey) {
        this.contextErrors = mappingUtility(this.context, this.contextErrorKey) || '';
      }
      if (keyChanges.length === 1 && keyChanges.includes('context')) {
        // exit if only the context was changed
        return;
      }
    }

    this.label = get(this.config, 'label', 'Submit');
    this.hasSubmit = get(this.config, 'hasSubmit', true);
    this.emitOnInit = get(this.config, 'emitOnInit', false) as boolean;
    this.updateForm();
    if (this.emitOnInit) {
      this.onModelChange(this.model);
    }
    this.options['context'] = this.context;
  }

  injectContextToJsonSchema<T extends BaseJsonSchema>(jsonSchema: T): T {
    let mutatedJsonSchema = clone(jsonSchema);
    mutatedJsonSchema = set(mutatedJsonSchema, 'definitions.context', this.context);
    return mutatedJsonSchema as T;
  }
  
  updateForm() {
    if (has(this.config, 'adapter') && has(this.config, 'formId')) {
      this.formService.getJSONSchemaForm(this.config.adapter, this.config.formId)
        .subscribe((fields) => {
          this.fields = fields;
        });
    } else if (has(this.config, 'jsonSchema') && has(this.config, 'uiSchema')) {
      const { uiSchema } = this.config;
      let { jsonSchema } = this.config;
      jsonSchema = this.injectContextToJsonSchema(jsonSchema);
      console.log({jsonSchema})

      this.fields = this.formService.schemasToFieldConfig(jsonSchema, uiSchema);
    } else if (has(this.config,  'schemaGetter')) {
      this.fields = [];
      const schemaGetterConfig = get(this.config, 'schemaGetter');
      console.log("schemaGetterConfig" )
      console.dir(schemaGetterConfig )
      // Check either for a JSON object in string or a blocks with jsonSchema key
        if (typeof schemaGetterConfig === 'string') {
          // If schemaGetter is a string, it can be a jsonSchema in a string, a JMESPath mapping we need to resolve with context or a jsonSchema passed as data
          // All of them must have the {jsonSchema: [data]} structure
          try {
            const parsedConfig = JSON.parse(schemaGetterConfig);
            console.log("parsedConfig", parsedConfig);

            if (parsedConfig && typeof parsedConfig === 'object' && parsedConfig.hasOwnProperty('jsonSchema')) {
              console.log("string with json schema")
              this.onSchemaBlocksComplete(parsedConfig);
             } else {
              console.warn('schemaGetterConfig string is not a valid JSON object with a "jsonSchema" property.');
             }
          } catch (error) {
            console.error('Error parsing schemaGetterConfig string as JSON:', error);
            console.warn("The passed schema must include the jsonSchema property");
          }
          
        } else {
          this.schemaBlocks = get(this.config, 'schemaGetter.blocks', []);
          // console.log("schemaBlocks", this.schemaBlocks)       
          // console.log("schemaBlocks", get(this.schemaBlocks, 'jsonSchema', {})) 
          if (get(this.schemaBlocks, 'jsonSchema', {})) {
            console.warn("The passed schema must include the jsonSchema property");
          }      
        }

      // onSchemaBlocksComplete is triggered later via the components view
    } else {
      this.fields = [];
    }
  }

  onSchemaBlocksComplete(result) {
    // console.log("result", result)
    let jsonSchema = get(result, 'jsonSchema', {});
    //let jsonSchema = result

    if (jsonSchema) { 
      jsonSchema = this.injectContextToJsonSchema(jsonSchema);
      const uiSchema = get(result, 'uiSchema', {});
      this.fields = this.formService.schemasToFieldConfig(jsonSchema, uiSchema);
    } else {
      console.warn("Schema is empty, skipping schemasToFieldConfig");
    }
  }

  onModelChange(model) {
    this._changes.next(this.model);
  }

  onSubmit() {
    // Send directly (skip the debounce)
    this.output.emit(clone(this.model));
  }
}
