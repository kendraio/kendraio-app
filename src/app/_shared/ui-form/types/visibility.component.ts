import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Animations } from '../../animations';



@Component({
  selector: 'app-field-input-visibility',
  templateUrl: 'visibility.component.html',
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
      option: this.formControl.value
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

