import { Component, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-blocks-input-control",
  templateUrl: "./blocks-input-control.component.html",
  styleUrls: ["./blocks-input-control.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BlocksInputControlComponent,
      multi: true,
    },
  ],
})
export class BlocksInputControlComponent
  implements OnInit, ControlValueAccessor
{
  @Input() blocks = [];
  @Input() models = [];
  @Input() context = {};

  constructor() {}

  ngOnInit() {}

  _onValueChanged = (v) => {};

  registerOnChange(fn: any): void {
    this._onValueChanged = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    // console.log('write value', { obj });
  }

  onWorkflowComplete(value) {
    // console.log('formly blocks workflow complete', { value });
    if (!!value) {
      this._onValueChanged(value);
    }
  }
}
