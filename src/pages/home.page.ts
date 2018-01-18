import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getRinHasProjects, getRinProjects } from '@store/reducers';
import { RinLoadFileAction } from '@store/actions/rin';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  hasProjects$: Observable<boolean>;
  projects$: Observable<Array<any>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.hasProjects$ = this.store.select(getRinHasProjects);
    this.projects$ = this.store.select(getRinProjects);
  }

  pickFile() {
    this.fileInput.nativeElement.click();
  }

  fileChange(files: FileList) {
    if (files.length > 0) {
      this.store.dispatch(new RinLoadFileAction(files[0]));
    }
  }
}
