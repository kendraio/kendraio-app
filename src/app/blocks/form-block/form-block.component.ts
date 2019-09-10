import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {KendraioFormService} from '../../_shared/ui-form/services/kendraio.form.service';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {get, has} from 'lodash-es';

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss']
})
export class FormBlockComponent implements OnInit, OnChanges, OnDestroy {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  _output = new Subject();
  @Output() output = new EventEmitter();

  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};

  // TODO: Consider how to support multiple actions?
  label = 'Submit';

  constructor(
    private readonly formService: KendraioFormService
  ) { }

  ngOnInit() {
    this._output
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => this.output.emit(value));
  }

  ngOnDestroy() {
    this._output.complete();
  }

  ngOnChanges(changes): void {
    // console.log({ changes });
    this.label = get(this.config, 'label', 'Submit');
    this.updateForm();
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

  onModelChange() {
    // TODO: Add option to block config to enable/disable live form updates
    // Send via the observable to debounce form changes
    // sendOutput()
  }

  onSubmit() {
    // Send directly (skip the debounce)
    this.output.emit({ ...this.model });
  }

  sendOutput() {
    this._output.next({ ...this.model });
  }
}
