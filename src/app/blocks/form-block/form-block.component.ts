import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {KendraioFormService} from '../../_shared/ui-form/services/kendraio.form.service';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss']
})
export class FormBlockComponent implements OnInit, OnChanges, OnDestroy {

  @Input() config;
  @Input() model: any = {};

  _output = new Subject();
  @Output() output = new EventEmitter();

  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};

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
    this.updateForm();
  }

  updateForm() {
    this.formService.getJSONSchemaForm(this.config.adapter, this.config.formId)
      .subscribe((fields) => {
        this.fields = fields;
      });
  }

  sendOutput() {
    this._output.next({ ...this.model });
  }
}
