import { Component, OnInit } from '@angular/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { KendraioFormService } from '../../_shared/ui-form/services/kendraio.form.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-user-ipn-form',
  templateUrl: './user-ipn-form.component.html',
  styleUrls: ['./user-ipn-form.component.scss']
})
export class UserIpnFormComponent implements OnInit {

  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model = {};

  fields: FormlyFieldConfig[];
  formConfig: any;
  formDescription: string;
  formLabel: string;

  constructor(
    // TODO: I would rather not have to inject both form services.
    // Use of Formly should be hidden inside KendraioFormService
    private formlyJsonschema: FormlyJsonschema,
    private formService: KendraioFormService,
  ) { }

  ngOnInit() {
    this.getJSONSchema('ipn');
  }

  getJSONSchema(form: any) {
    this.formService.getFormData(form)
      .subscribe(([uiSchema, jsonSchema]) => {
        this.formService.uiTypeMapper(uiSchema, jsonSchema);
        // TODO: I lifted this from my-youtube to test form service
        this.formConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
        this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
      });
  }

}
