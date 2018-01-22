import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ClearProjectsAction } from '@store/actions/rin';

@Component({
  selector: 'page-home',
  templateUrl: './settings.page.html'
})
export class SettingsPage {

  constructor(private store: Store<AppState>) {}

  resetApp() {
    this.store.dispatch(new ClearProjectsAction());
  }
}