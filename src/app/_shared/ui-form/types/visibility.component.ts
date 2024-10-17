import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatLegacyRadioChange as MatRadioChange } from '@angular/material/legacy-radio';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Animations } from '../../animations';

@Component({
  selector: 'app-field-input-visibility',
  templateUrl: 'visibility.component.html',
  animations: [Animations.kendraAnimations],
})
// tslint:disable-next-line: component-class-suffiximplements OnInit
export class FieldInputVisibilityComponent extends FieldType implements OnInit {
  val: string;
  showSchedulue: boolean;
  visabilityForm = new UntypedFormGroup({});
  valueChanges$: Observable<any>;
  subscription: Subscription;

  constructor(private fb: UntypedFormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.visabilityForm = this.fb.group({
      date: '',
      time: '',
      privacyStatus: this.formControl.value,
    });

    this.valueChanges$ = this.visabilityForm.valueChanges;

    this.subscription = this.valueChanges$.pipe().subscribe((res) => {
      //   this.formControl.patchValue(this.visabilityForm.value);
    });
  }

  get date() {
    return this.visabilityForm.get('date').value;
  }

  get time() {
    return this.visabilityForm.get('time').value;
  }

  radioChange(event: MatRadioChange) {
    this.val = event.value;
    this.formControl.patchValue(this.val);
  }
}
