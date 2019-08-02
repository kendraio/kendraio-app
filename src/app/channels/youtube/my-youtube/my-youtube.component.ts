import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { KendraioFormService } from 'src/app/_shared/ui-form/services/kendraio.form.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-my-youtube',
  templateUrl: './my-youtube.component.html',
  styleUrls: ['./my-youtube.component.scss']
})
export class MyYoutubeComponent {
  form = new FormGroup({});
  model: any = {
    title: 'As it is in Hell',
    description: '',
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
    private http: HttpClient,
  ) {

    this.routePath = this.route.snapshot.routeConfig.path;
    this.getJSONSchema(this.routePath);
  // this.loadExample()
  }

  loadExample() {
    this.http.get<any>(`assets/YouTube/arrays.json`).pipe(
      tap(({ schema, model }) => {
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
        this.model = model;
      }),
    ).subscribe();
  }




  getJSONSchema(form: any) {
    this.formService.getFormData(form)
      .subscribe(([uiSchema, jsonSchema]) => {
        this.formService.uiTypeMapper(uiSchema, jsonSchema);
        // TODO: This is duplicated code, also appears in form-generator component
        // TODO: Possible refactor to move to service?
          this.formConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
          this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
          this.formDescription = this.formConfig.templateOptions.description;
          this.formLabel = this.formConfig.templateOptions.label;
              // console.log(jsonSchema);
      });
  }


  submit() {
    alert(JSON.stringify(this.model));
  }
}
