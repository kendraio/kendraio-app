import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NodesActions } from '../../app/state/nodes/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/state';
import { AppActions } from '../../app/state/app/actions';

@Component({
  selector: 'page-import',
  templateUrl: 'import.html'
})
export class ImportPage {

  @ViewChild('fileInput') fileInput: ElementRef;

  adapter = 'm-rin';

  constructor(public navCtrl: NavController,
              private store: Store<AppState>) {

  }

  pickFile() {
    this.fileInput.nativeElement.click();
  }

  fileChange(files: FileList) {
    if (files.length > 0) {
      const file = files[0];
      this.store.dispatch(NodesActions.loadFile({ file, adapterId: this.adapter }));
      this.store.dispatch(AppActions.goHome({}));
    }
  }

  demoData() {
    this.store.dispatch(NodesActions.demoData({}));
    this.store.dispatch(AppActions.goHome({}));
  }
}
