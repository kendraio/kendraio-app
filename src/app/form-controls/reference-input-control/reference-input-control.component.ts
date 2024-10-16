import { Component, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-reference-input-control",
  templateUrl: "./reference-input-control.component.html",
  styleUrls: ["./reference-input-control.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ReferenceInputControlComponent,
      multi: true,
    },
  ],
})
export class ReferenceInputControlComponent
  implements OnInit, ControlValueAccessor
{
  @Input() placeholder: string;
  constructor() {}

  ngOnInit() {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {}
}
