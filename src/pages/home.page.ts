import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { RinLoadFileAction } from '@store/actions/rin';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html'
})
export class HomePage {

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private store: Store<AppState>) {}

  pickFile() {
    this.fileInput.nativeElement.click();
  }

  fileChange(files: FileList) {
    if (files.length > 0) {
      this.store.dispatch(new RinLoadFileAction(files[0]));
    }
  }
}
