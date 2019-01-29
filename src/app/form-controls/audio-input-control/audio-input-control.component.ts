import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { blobToDataURL } from 'blob-util';

@Component({
  selector: 'app-audio-input-control',
  templateUrl: './audio-input-control.component.html',
  styleUrls: ['./audio-input-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AudioInputControlComponent,
      multi: true
    }
  ]
})
export class AudioInputControlComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() placeholder: string;
  destroy$ = new Subject();

  data = [
  ];

  src;
  file: Blob;

  @Input() clipControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

  _onValueChanged = v => {};

  valueChanged = file => {
    this.file = file;
    blobToDataURL(file).then(dataUrl => this.src = dataUrl);
    this._onValueChanged(file);
  }

  onFileChange(event) {
    const file: File = event.target.files[0];
    if (file) {
      this.valueChanged(file);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  registerOnChange(fn: any): void {
    this._onValueChanged = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(file: any): void {
    this.file = file;
    if (file) {
      blobToDataURL(file).then(dataUrl => this.src = dataUrl);
    }
  }

  add(name) {
    if (name.trim() !== '') {
      this.data.push({ name, start: 0, end: 100 });
      const clips = this.clipControl.value as Array<any>;
      clips.push({ name, start: 0, end: 100 });
      this.clipControl.setValue(clips);
    }
  }

  onClipUpdate(i, { start, end }) {
    const clips = this.clipControl.value as Array<any>;
    clips[i] = { ...clips[i], start, end };
    this.clipControl.setValue(clips);
  }
}
