import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { NodesActions } from '../nodes/actions';
import { filter, tap } from 'rxjs/operators';
import { HomePage } from '../../../pages/home/home';
import { AppActions } from './actions';


@Injectable()
export class AppEffects {

  @Effect({ dispatch: false })
  goHome$ = this.actions$.pipe(
    filter(AppActions.is.goHome),
    tap(() => this.app.getActiveNavs()[0].setRoot(HomePage))
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private app: App) {}
}