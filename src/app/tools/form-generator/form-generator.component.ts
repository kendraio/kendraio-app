import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { tap, distinctUntilChanged, debounce, debounceTime } from 'rxjs/operators';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { KendraioFormService } from 'src/app/_shared/ui-form/services/kendraio.form.service'

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  isLoading = false;
  schemaform: FormGroup;
  formChanges$: Observable<any>;
  private subscription: Subscription;
  model: any = {
    title: 'The Forest',
    description: 'Born in the morning in the drizzlin rain. Trouble is his middle name',
    videoId: 'YA9N4nsAxZo',
    tags: ['this', 'is', 'tagging', 'in', 'action']
  };

  formConfig: any;
  options: FormlyFormOptions = {};
  jsonSchema: any;
  uiSchema: any;
  fields: FormlyFieldConfig[];

  constructor(
    private fb: FormBuilder,
    private formService: KendraioFormService,
    private formlyJsonschema: FormlyJsonschema,
  ) {
    this.createForm();
    this.formChanges$ = this.schemaform.valueChanges;
  }

  ngOnInit() {

    this.subscription = this.formChanges$.pipe(
      distinctUntilChanged(),
      debounceTime(2000),
      tap(() => {
      })
    )
      // .debounceTime(2000)
      .subscribe(newVal => {
        // this.doit ();
        this.generateForm()
      });

  }

  generateForm() {
const jsonSchema = JSON.parse(this.schemaform.get('JSONSchema').value);
this.model = JSON.parse(this.schemaform.get('model').value);
// this.model = model;
const uiSchema = {};


    // this.formService.getFormData('youtube')
    //   .subscribe(([uiSchema, jsonSchema]) => {
          this.formConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
          this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
              console.log(jsonSchema);
      // });


  }

  createForm() {
    this.schemaform = this.fb.group({
      JSONSchema: [''],
      UISchema: [''],
      model: [JSON.stringify(this.model)],
    });
  };

}


// {
// 	"title": "PRS recording",
// 	"description": "Register a recording with PRS.",
// 	"type": "object",
// 	"required": [
// 		"isrc",
// 		"bandArtist",
// 		"recordingTitle",
// 		"contentType",
// 		"pDate"
// 	],
// 	"properties": {
// 		"isrc": {
// 			"type": "string",
// 			"title": "ISRC",
// 			"minLength": 12,
// 			"maxLength": 12,
// 			"default": ""
// 		},
// 		"bandArtist": {
// 			"type": "string",
// 			"title": "Band/Artist name "
// 		},
// 		"recordingTitle": {
// 			"type": "string",
// 			"title": "Recording Title"
// 		},
// 		"versionType": {
// 			"type": "string",
// 			"title": "Version Type"
// 		},
// 		"genre": {
// 			"type": "string",
// 			"title": "Genre"
// 		},

// 		"remastered": {
// 			"type": "boolean",
// 			"title": "Remastered",
// 			"description": "This recording is remastered"
// 		},
// 		"contentType": {
// 			"type": "string",
// 			"title": "Content Type"
// 		}
// 	}
// }
