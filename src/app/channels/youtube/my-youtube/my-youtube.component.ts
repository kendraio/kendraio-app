import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
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
    title: 'Kendraio App live demo with Daniel and Liam 2019',
    description: 'Kendraio App live demo with Daniel and Liam 2019',
    videoId: '9pg35huY01M',
    tags: [
      'Kendraio', 'App', 'live demo', 'Daniel Harris',
    ],
    thumbnails: [
      {
        'url': 'https://i9.ytimg.com/vi/9pg35huY01M/mq1.jpg?sqp=CLjSuOsF&rs=AOn4CLDHRb7NU5gElRZ8uhUeAyik4Am5Nw',
        'width': 320,
        'height': 180,
        'isDefault': false
      },
      {
        'url': 'https://i9.ytimg.com/vi/9pg35huY01M/mq2.jpg?sqp=CLjSuOsF&rs=AOn4CLA5ZVgKeptJQoXnrI7Epb5i8I-N3A',
        'width': 320,
        'height': 180,
        'isDefault': false
      },
      {
        'url': 'https://i9.ytimg.com/vi/9pg35huY01M/3.jpg?sqp=CLjSuOsF&rs=AOn4CLCC8Xt_RmhEZlnlE4UbCCA7GqaqIQ',
        'width': 320,
        'height': 180,
        'isDefault': true
      },
    ],


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
    private formService: KendraioFormService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {

    this.routePath = this.route.snapshot.routeConfig.path;
   this.getJSONSchema('youtube', this.routePath);
    // this.getJSONSchema('arrays');
  // this.loadExample()
  }

  loadExample() {
    this.http.get<any>(`assets/YouTube/arrays.json`).pipe(
      tap(({ schema, model }) => {
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formService.toFieldConfig(schema)];
        this.model = model;
      }),
    ).subscribe();
  }




  getJSONSchema(group: string, form: any) {
    this.formService.getFormData(group, form)
      .subscribe(([uiSchema, jsonSchema]) => {
        this.formService.uiTypeMapper(uiSchema, jsonSchema);
        // TODO: This is duplicated code, also appears in form-generator component
        // TODO: Possible refactor to move to service?
          this.formConfig = this.formService.toFieldConfig(jsonSchema);
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
