import { Component, OnInit } from '@angular/core';
import { KendraioFormService } from '../../_shared/ui-form/services/kendraio.form.service';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { get } from 'lodash-es';
import { FormSubmitHandlerService } from '../../services/form-submit-handler.service';

@Component({
  selector: 'app-user-ipn-form',
  templateUrl: './user-ipn-form.component.html',
  styleUrls: ['./user-ipn-form.component.scss']
})
export class UserIpnFormComponent implements OnInit {

  form = new UntypedFormGroup({});
  options: FormlyFormOptions = {};
  model = {};

  fields: FormlyFieldConfig[];
  formConfig: any;
  formDescription: string;
  formLabel: string;

  isFormLoaded = false;

  constructor(
    private formService: KendraioFormService,
    private formSubmitHandler: FormSubmitHandlerService
  ) { }

  ngOnInit() {
    this.getJSONSchema('user', 'ipn');
  }

  // TODO: update to use functionality shared in Kendraio Form Service
  getJSONSchema(group: string, form: any) {
    this.formService.getFormData(group, form)
      .subscribe(([uiSchema, jsonSchema]) => {
        this.formService.uiTypeMapper(uiSchema, jsonSchema);
        this.formConfig = this.formService.toFieldConfig(jsonSchema);
        this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
        this.isFormLoaded = true;
        // TODO: Might be better to use title/desc from uiSchema rather than jsonSchema
        // as jsonSchema data model, but data model could be shared by multiple forms
        this.formLabel = get(jsonSchema, 'title', '');
        this.formDescription = get(jsonSchema, 'description', '');
      });
  }

  addIPN() {
    this.formSubmitHandler.handle({
      form: 'ipn',
      action: 'addIPN',
      payload: this.form.getRawValue()
    });
  }
}
