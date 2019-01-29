import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { blobToDataURL } from 'blob-util';
import { MatDialog } from '@angular/material';
import { EditClipDialogComponent } from '../../dialogs/edit-clip-dialog/edit-clip-dialog.component';
import { ConfirmDeleteDialogComponent } from '../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';

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

  constructor(
    private readonly dialog: MatDialog
  ) { }

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

  removeClip(i) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: {
        item: {
          type: 'Clip',
          name: (this.clipControl.value as Array<any>)[i].name
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const clips = this.clipControl.value as Array<any>;
        clips.splice(i, 1);
        this.clipControl.setValue(clips);
      }
    });
  }

  editClip(i) {
    const clip = (this.clipControl.value as Array<any>)[i];
    const dialogRef = this.dialog.open(EditClipDialogComponent, {
      data: {
        clip
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const clips = this.clipControl.value as Array<any>;
        clips[i] = result;
        this.clipControl.setValue(clips);
      }
    });
  }
}
