import { Component, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-legacy-data-form-control",
  templateUrl: "./legacy-data-form-control.component.html",
  styleUrls: ["./legacy-data-form-control.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LegacyDataFormControlComponent,
      multi: true,
    },
  ],
})
export class LegacyDataFormControlComponent
  implements OnInit, ControlValueAccessor
{
  @Input() doc;

  value;

  constructor() {}

  ngOnInit() {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    this.value = obj;
  }
}
