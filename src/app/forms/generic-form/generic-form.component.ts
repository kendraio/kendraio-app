import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { KendraioFormService } from '../../_shared/ui-form/services/kendraio.form.service';
import { FormSubmitHandlerService } from '../../services/form-submit-handler.service';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  @Input() adapter: string;
  @Input() formId: string;

  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  model = {};
  formConfig: any;

  constructor(
    private formService: KendraioFormService,
    private formSubmitHandler: FormSubmitHandlerService
  ) { }

  ngOnInit() {
    this.formService.getJSONSchemaForm(this.adapter, this.formId)
      .subscribe(({ formConfig, fields }) => {
        this.formConfig = formConfig;
        this.fields = fields;
      });
  }

  onSubmit() {
    this.formSubmitHandler.handle({
      form: `${this.adapter}:${this.formId}`,
      action: 'submit',
      payload: this.form.getRawValue()
    });
  }
}
