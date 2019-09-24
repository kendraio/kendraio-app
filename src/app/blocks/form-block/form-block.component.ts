import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {KendraioFormService} from '../../_shared/ui-form/services/kendraio.form.service';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, tap} from 'rxjs/operators';
import { clone, get, has } from 'lodash-es';

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

  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};

  label = 'Submit';
  hasSubmit = true;
  emitOnInit = false;

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
    this.label = get(this.config, 'label', 'Submit');
    this.hasSubmit = get(this.config, 'hasSubmit', true);
    this.emitOnInit = get(this.config, 'emitOnInit', false) as boolean;
    this.updateForm();
    if (this.emitOnInit) {
      this.onModelChange(this.model);
    }
  }

  updateForm() {
    if (has(this.config, 'adapter') && has(this.config, 'formId')) {
      this.formService.getJSONSchemaForm(this.config.adapter, this.config.formId)
        .subscribe((fields) => {
          this.fields = fields;
        });
    } else if (has(this.config, 'jsonSchema') && has(this.config, 'uiSchema')) {
      const { jsonSchema, uiSchema } = this.config;
      this.fields = this.formService.schemasToFieldConfig(jsonSchema, uiSchema);
    } else {
      this.fields = [];
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
