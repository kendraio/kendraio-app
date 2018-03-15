import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AdaptersActions } from './actions';
import { concatMap, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { fetchText } from '../../utils/fetch';
import { load as parseYaml } from 'js-yaml';
import { keys } from 'lodash';
import { processAdapterConfig$ } from '../../utils/process-adapter';
import { AdapterConfig } from '../../model/adapter';

const adapterList = 'assets/adapters/adapters.yml';
const adapterBasePath = name => `assets/adapters/${name}`;

@Injectable()
export class AdaptersEffects {

  @Effect()
  init$ = this.actions$.pipe(
    filter(AdaptersActions.is.initAdapters),
    concatMap(() => fetchText(adapterList),
      (_, text: string) => keys(parseYaml(text))),
    mergeMap((keys: Array<string>) =>
      keys.map(id => AdaptersActions.loadAdapter({ id })))
  );

  @Effect()
  load$ = this.actions$.pipe(
    filter(AdaptersActions.is.loadAdapter),
    // tap(console.log),
    map(({ payload: { id }}) => ({ id, file: `${adapterBasePath(id)}/adapter.yaml` })),
    concatMap(({ file }) => fetchText(file), ({ id }, data: string) => ({ id, config: parseYaml(data) })),
    concatMap(({ id, config }) => processAdapterConfig$(adapterBasePath(id), config), ({ id }, config) => ({ id, config })),
    map((config) => AdaptersActions.setAdapterConfig(config as { id: string, config: AdapterConfig}))
  );

  constructor(private actions$: Actions) {}
}
