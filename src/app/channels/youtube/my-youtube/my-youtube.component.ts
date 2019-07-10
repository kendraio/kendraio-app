import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { KendraioFormService } from 'src/app/_shared/ui-form/services/kendraio.form.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-youtube',
  templateUrl: './my-youtube.component.html',
  styleUrls: ['./my-youtube.component.scss']
})
export class MyYoutubeComponent {
  form = new FormGroup({});
  model: any = {
    title: 'As it is in Hell',
    description: 'Born in the morning in the drizzlin rain. Trouble is his middle name',
    videoId: 'BeW1e40mSGQ',
    tags: ['this', 'is', 'tagging', 'in', 'action']
  };

  formConfig: any;
  options: FormlyFormOptions = {};
  jsonSchema: any;
  uiSchema: any;
  fields: FormlyFieldConfig[];
  routePath: any;
  formDescription: string;
  formLabel: string;

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private formService: KendraioFormService,
    private route: ActivatedRoute,
  ) {

    this.routePath = this.route.snapshot.routeConfig.path;
    this.getJSONSchema(this.routePath);
  }

  getJSONSchema(form: any) {
    this.formService.getFormData(form)
      .subscribe(([uiSchema, jsonSchema]) => {
        this.uiTypeMapper(uiSchema, jsonSchema);
          this.formConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
          this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
          this.formDescription = this.formConfig.templateOptions.description;
          this.formLabel = this.formConfig.templateOptions.label;
              // console.log(jsonSchema);
      });
  }

  private uiTypeMapper(uiSchema: any, jsonSchema: any) {
    try {
      Object.keys(uiSchema).forEach(function (uiKey) {
        Object.keys(jsonSchema.properties).forEach(function (schemaKey) {
          if ((uiKey === schemaKey) && uiSchema[uiKey]['ui:type']) {
            jsonSchema.properties[schemaKey].type = uiSchema[uiKey]['ui:type'];
          } else {
            jsonSchema.properties[schemaKey].type = jsonSchema.properties[schemaKey].type;
          }
        });
        // i++;
      });
    } catch (e) {
    }
   // return i;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
