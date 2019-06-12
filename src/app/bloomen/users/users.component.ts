import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormlyService } from 'src/app/_shared/ui-form/services/formly.service';
import { FormGroup } from '@angular/forms';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

// @PerfumeAfterViewInit('FormlyComponent')
export class UsersComponent implements OnInit, AfterViewInit {



  countries: any[] = [
    { label: 'Un Kngdm', value: 'UK' },
    { label: 'United States of America', value: 'USA' },
    { label: 'Greece', value: 'GR' }
  ];


  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = [
   ...this.formlyService.getDefaultForm()
  ];
  public userDetailsfields: FormlyFieldConfig[];
  public model = {};
  public userDetailsModel = {};
  public firstInteraction = false;
  public startFilling = false;

  constructor(
    private router: Router,
    private formlyService: FormlyService,
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
      this.fields = this.formlyService.getFormById(id, false);
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
