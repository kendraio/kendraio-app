import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import { blobToDataURL } from 'blob-util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-image-input-control',
  templateUrl: './image-input-control.component.html',
  styleUrls: ['./image-input-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageInputControlComponent,
      multi: true
    }
  ]
})
export class ImageInputControlComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() name;
  @Input() placeholder: string;

  @Output() updateTags = new EventEmitter();
  // tags = new FormControl([]);
  destroy$ = new Subject();

  @Input() tagControl: AbstractControl;

  src;
  file: Blob;

  _onValueChanged = v => {};

  valueChanged = file => {
    blobToDataURL(file).then(dataUrl => this.src = dataUrl);
    this._onValueChanged(file);
  }

  constructor() {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  deleteTag(i) {
    const newTags = [ ...this.tagControl.value.splice(0, i), ...this.tagControl.value.splice(i + 1)];
    this.tagControl.setValue(newTags);
  }

  onFileChange(event) {
    const file: File = event.target.files[0];
    if (file) {
      this.valueChanged(file);
    }
  }

  ngOnInit() {
    this.tagControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(tags => this.updateTags.emit(tags));
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


}

