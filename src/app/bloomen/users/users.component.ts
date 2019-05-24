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
    // private counters: CountersService
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
      // perfume.getInstance().start(TIMERS.get('FormlyComponentFI'));
    }
  
    public submit() {
      console.log(this.model);
      // perfume.getInstance().end(TIMERS.get('FillForm'));
    }
  
    public switchForm(id) {
      this.model = {};
      this.fields = this.formlyService.getFormById(id);
    }
    
    public interactionWithFormly() {
      if (!this.firstInteraction) {
        // perfume.getInstance().end(TIMERS.get('FormlyComponentFI'));
        this.firstInteraction = true;
      }
    }

    
  
    public modelChange(e) {
      if (!this.startFilling) {
        // perfume.getInstance().start(TIMERS.get('FillForm'));
        this.startFilling = true;
      } 
    }  
    
    public detailsModelChange(e) {
      if (!this.startFilling) {
        // perfume.getInstance().start(TIMERS.get('FillForm'));
        this.startFilling = true;
      } 
    }

}
