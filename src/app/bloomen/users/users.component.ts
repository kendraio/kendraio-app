import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { KendraioFormService } from 'src/app/_shared/ui-form/services/kendraio.form.service';
import { FormGroup } from '@angular/forms';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

// @PerfumeAfterViewInit('FormlyComponent')
export class UsersComponent implements OnInit, AfterViewInit {
  modelJS: any = {
    firstName: 'Chuck',
    lastName: 'Norris',
    age: 75,
    bio: 'Roundhouse kicking asses since 1940',
    password: 'noneed',
  };
  options: FormlyFormOptions = {};
  fieldsJS: FormlyFieldConfig[] = [this.formService.toFieldConfig({
    'title': 'A registration form',
    'description': 'A simple form example.',
    'type': 'object',
    'required': [
      'lastName',
    ],
    'properties': {
      'firstName': {
        'type': 'string',
        'title': 'First name',
        'required': 'true'
      },
      'lastName': {
        'type': 'string',
        'title': 'Last name',
      },
      'age': {
        'type': 'integer',
        'title': 'Age',
      },
      'bio': {
        'type': 'string',
        'title': 'Bio',
      },
      'password': {
        'type': 'string',
        'title': 'Password',
        'minLength': 3,
      },
      'telephone': {
        'type': 'string',
        'title': 'Telephone',
        'minLength': 10,
      },
    },
  })];


  countries: any[] = [
    { label: 'Un Kngdm', value: 'UK' },
    { label: 'United States of America', value: 'USA' },
    { label: 'Greece', value: 'GR' }
  ];


  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = [
  //  ...this.formlyService.getDefaultForm()
  ];
  public userDetailsfields: FormlyFieldConfig[];
  public model = {};
  public userDetailsModel = {};
  public firstInteraction = false;
  public startFilling = false;

  constructor(
    private router: Router,
    private formService: KendraioFormService
  ) { }

  ngOnInit() {
    console.log(this.fields);
    setTimeout(() => {
      this.router.navigate([{ outlets: { popup: null } }]);
//   this.userDetailsfields = this.formlyService.getFormById('USERDETAILS');
    }, 3000);

  }

routeFn(rt: string) {
      this.router.navigate(['bloomen/users/' + rt]) ;
    }

    ngAfterViewInit() {

    }

    public submit() {
      console.log(this.model);

    }

    public switchForm(id) {
      this.model = {};
      // this.fields = this.formlyService.getFormById(id, false);
    }

    public interactionWithFormly() {
      if (!this.firstInteraction) {

        this.firstInteraction = true;
      }
    }



    public modelChange(e) {
      if (!this.startFilling) {

        this.startFilling = true; // not in  use
      }
    }

    public detailsModelChange(e) {
      if (!this.startFilling) {

        this.startFilling = true;
      }
    }

}
