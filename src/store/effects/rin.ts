import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { RIN_LOAD_FILE, RinImportDataAction, RinLoadFileAction } from '@store/actions/rin';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { rinXmlToJs } from '@app/shared/rin-import';

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

  constructor(private actions$: Actions) {}
}
