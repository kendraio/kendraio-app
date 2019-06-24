import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { KendraioFormService } from 'src/app/_shared/ui-form/services/kendraio.form.service'

@Component({
  selector: 'app-my-youtube',
  templateUrl: './my-youtube.component.html',
  styleUrls: ['./my-youtube.component.scss']
})
export class MyYoutubeComponent {
  form = new FormGroup({});
  model: any = {
    title: 'The Forest',
    description: 'Born in the morning in the drizzlin rain. Trouble is his middle name',
    videoId: 'YA9N4nsAxZo'
  };

  formConfig: any;
  options: FormlyFormOptions = {};
  jsonSchema: any;
  uiSchema: any;
  fields: FormlyFieldConfig[];

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private formService: KendraioFormService
  ) {
    this.getJSONSchema();
  }

  getJSONSchema() {
    this.formService.getFormData('youtube')
      .subscribe(([uiSchema, jsonSchema]) => {
          this.formConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
          this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
              console.log(jsonSchema);
      });
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}