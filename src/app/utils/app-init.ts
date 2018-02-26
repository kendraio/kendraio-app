import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { AdaptersActions } from '../state/adapters/actions';

export function initApp(store: Store<AppState>) {
  return () => store.dispatch(AdaptersActions.initAdapters({}));
}
