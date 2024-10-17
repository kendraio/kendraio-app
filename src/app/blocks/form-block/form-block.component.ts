import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { KendraioFormService } from '../../_shared/ui-form/services/kendraio.form.service';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';
import { clone, get, has, isUndefined, set } from 'lodash-es';
import { mappingUtility } from '../mapping-block/mapping-util';

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss'],
})
export class FormBlockComponent implements OnInit, OnChanges, OnDestroy {
  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();
  _changes = new Subject();

  form = new UntypedFormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};

  label = 'Submit';
  hasSubmit = true;
  emitOnInit = false;

  contextErrorKey = null;
  contextErrors = '';
  prevContextKey = '';

  schemaBlocks = [];

  constructor(private readonly formService: KendraioFormService) {}

  ngOnInit() {
    this.setupChangesOutput();
  }

  setupChangesOutput() {
    this._changes
      .pipe(
        filter((_) => !this.hasSubmit),
        debounceTime(get(this.config, 'debounceTime', 400)),
        filter((_) => this.form.valid)
      )
      .subscribe((value) => {
        this.output.emit(clone(this.form.getRawValue()));
      });
  }

  ngOnDestroy() {
    this._changes.complete();
  }

  ngOnChanges(changes): void {
    const keyChanges = Object.keys(changes);
    if (
      isUndefined(get(changes, 'model.previousValue')) &&
      get(this.config, 'skipInit', false)
    ) {
      return;
    }

    this.contextErrorKey = get(this.config, 'contextErrorKey', null);
    if (this.context.__key !== this.prevContextKey) {
      // context has changed
      this.prevContextKey = this.context.__key;
      // update errors from context if used
      if (this.contextErrorKey) {
        this.contextErrors =
          mappingUtility(this.context, this.contextErrorKey) || '';
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

  injectContextToJsonSchema(jsonSchema: any) {
    let mutatedJsonSchema = clone(jsonSchema);
    mutatedJsonSchema = set(
      mutatedJsonSchema,
      'definitions.context',
      this.context
    );
    return mutatedJsonSchema;
  }

  updateForm() {
    if (has(this.config, 'adapter') && has(this.config, 'formId')) {
      this.formService
        .getJSONSchemaForm(this.config.adapter, this.config.formId)
        .subscribe((fields) => {
          this.fields = fields;
        });
    } else if (has(this.config, 'jsonSchema') && has(this.config, 'uiSchema')) {
      const { uiSchema } = this.config;
      let { jsonSchema } = this.config;
      jsonSchema = this.injectContextToJsonSchema(jsonSchema);
      this.fields = this.formService.schemasToFieldConfig(jsonSchema, uiSchema);
    } else if (has(this.config, 'schemaGetter')) {
      this.fields = [];
      this.schemaBlocks = get(this.config, 'schemaGetter.blocks', []);
      // onSchemaBlocksComplete is triggered later via the components view
    } else {
      this.fields = [];
    }
  }

  onSchemaBlocksComplete(result) {
    let jsonSchema = get(result, 'jsonSchema', {});
    jsonSchema = this.injectContextToJsonSchema(jsonSchema);
    const uiSchema = get(result, 'uiSchema', {});
    this.fields = this.formService.schemasToFieldConfig(jsonSchema, uiSchema);
  }

  onModelChange(model) {
    this._changes.next(this.model);
  }

  onSubmit() {
    // Send directly (skip the debounce)
    this.output.emit(clone(this.model));
  }
}
