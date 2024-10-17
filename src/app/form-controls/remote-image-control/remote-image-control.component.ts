import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-remote-image-control',
  templateUrl: './remote-image-control.component.html',
  styleUrls: ['./remote-image-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RemoteImageControlComponent,
      multi: true,
    },
  ],
})
export class RemoteImageControlComponent implements OnInit {
  @Input() placeholder: string;
  constructor() {}

  ngOnInit() {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {}
}
