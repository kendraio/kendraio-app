import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {
  CLEAR_PROJECTS, ClearProjectsAction, RIN_LOAD_FILE, RinImportDataAction,
  RinLoadFileAction
} from '@store/actions/rin';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { rinXmlToJs } from '@app/shared/rin-import';
import { App } from 'ionic-angular';
import { HomePage } from '@pages/home.page';

function FileReaderObservable(file) {
  return Observable.fromPromise(new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve((e.target as FileReader).result);
    reader.readAsText(file);
  }));
}

@Injectable()
export class RinEffects {

  @Effect()
  loadRin$ = this.actions$.ofType<RinLoadFileAction>(RIN_LOAD_FILE)
    .pipe(
      map(action => action.payload),
      mergeMap(file => FileReaderObservable(file)),
      switchMap((xml: string) => Observable.fromPromise(rinXmlToJs(xml))),
      tap(console.log),
      map(data => new RinImportDataAction(data))
    );

  @Effect({ dispatch: false })
  reset$ = this.actions$.ofType<ClearProjectsAction>(CLEAR_PROJECTS)
    .pipe(
      tap(() => this.app.getActiveNav().setRoot(HomePage))
    );

  constructor(
    private actions$: Actions,
    private app: App
  ) {}
}
