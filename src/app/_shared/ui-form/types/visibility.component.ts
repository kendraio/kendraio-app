import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatRadioChange } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Animations } from '../../animations';



@Component({
  selector: 'app-field-input-visibility',
  template: `

<div class="popup-container" [formGroup]="formx">

<label>{{to.label}}</label><br/>

  <mat-radio-group aria-label="Visibility"  (change)="radioChange($event)" formControlName="option" >
  <mat-radio-button value="1">Public</mat-radio-button>
  <mat-radio-button value="2" >Private</mat-radio-button>
  <mat-radio-button value="3">Unlisted</mat-radio-button>
</mat-radio-group>

<div class="card" [ngClass]="val === '2' ? 'in' : 'out'" *ngIf="val === '2'"  @enterAnimateUpDwn >

<label (click)="showSchedulue = !showSchedulue"> <b> + Add Schedule</b></label>

<div *ngIf="date"  @enterAnimateUpDwn>
Date: {{date}} <br>
Time: {{time}}
</div>

    <div class="schedule-popup" *ngIf="showSchedulue" [ngClass]="showSchedulue ? 'in' : 'out'"   @enterAnimateUpDwn >
            Shedule as Public

<input type="date"  class="pr form-control form-input"  formControlName="date" />
<input class="pr form-control form-input" formControlName="time" />
<select>
<option value="gmt">gmt uk</option>
<option value="saab">11111</option>
<option value="mercedes">22222</option>
<option value="audi">33333</option>
</select>

<label (click)="showSchedulue = false">Close</label>

    </div>
</div>
</div>
 `,
 animations: [Animations.kendraAnimations]
})
// tslint:disable-next-line: component-class-suffiximplements OnInit
export class FieldInputVisibilityComponent  extends FieldType implements OnInit {
  val: string;
  showSchedulue: boolean;
  formx = new FormGroup({});
  valueChanges$: Observable<any>;
  subscription: Subscription;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formx = this.fb.group({
      date: '',
      time: '',
      option: ''
    });

  this.valueChanges$ = this.formx.valueChanges;

  this.subscription = this.valueChanges$
  .pipe().subscribe(res => {
    this.formControl.patchValue(this.formx.value);
  });
  }

  get date() {
    return this.formx.get('date').value;
  }

  get time() {
    return this.formx.get('time').value;
  }


  radioChange(event: MatRadioChange) {
    this.val = event.value;
    this.formControl.patchValue(this.formx.value);
  }

}

