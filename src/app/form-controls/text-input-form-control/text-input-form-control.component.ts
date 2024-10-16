import { Component, Input, OnDestroy } from "@angular/core";
import {
  ControlValueAccessor,
  UntypedFormControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-text-input-form-control",
  templateUrl: "./text-input-form-control.component.html",
  styleUrls: ["./text-input-form-control.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextInputFormControlComponent,
      multi: true,
    },
  ],
})
export class TextInputFormControlComponent
  implements OnDestroy, ControlValueAccessor
{
  @Input() placeholder: string;

  formControl = new UntypedFormControl();

  _changed = (v) => {};

  destroy$ = new Subject();

  constructor() {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => this._changed(x));
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  registerOnChange(fn: any): void {
    this._changed = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    this.formControl.patchValue(obj);
  }
}
