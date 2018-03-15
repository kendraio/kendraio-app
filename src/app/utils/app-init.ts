import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { AdaptersActions } from '../state/adapters/actions';

export function initApp(store: Store<AppState>) {
  return () => {
    store.dispatch(AdaptersActions.initAdapters({}));
    // TODO: this delay is so that adapter is enabled after import has finished
    setTimeout(() => store.dispatch(AdaptersActions.enableAdapter({ id: 'm-rin' })), 1000);
  }
}
