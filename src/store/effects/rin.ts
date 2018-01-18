import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { RIN_LOAD_FILE, RinLoadFileAction } from '@store/actions/rin';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

function FileReaderObservable(file) {
  return Observable.fromPromise(new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve((e.target as FileReader).result);
    reader.readAsText(file);
  }));
}

@Injectable()
export class RinEffects {

  @Effect({ dispatch: false })
  loadRin$ = this.actions$.ofType<RinLoadFileAction>(RIN_LOAD_FILE)
    .pipe(
      map(action => action.payload),
      mergeMap(file => FileReaderObservable(file)),
      tap(console.log)
    );

  constructor(private actions$: Actions) {}
}
