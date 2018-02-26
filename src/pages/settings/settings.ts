import { Component } from '@angular/core';
import { NodesActions } from '../../app/state/nodes/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/state';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private store: Store<AppState>) {}

  resetApp() {
    this.store.dispatch(NodesActions.clearNodes({}));
  }

}
