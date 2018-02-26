import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { HomePage } from '../../../pages/home/home';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { App } from 'ionic-angular';
import { NodesActions } from './actions';
import { AdapterConfig } from '../../model/adapter';
import { readXml } from '../../utils/file-reader';
import { search } from 'jmespath';
import { getAdapter } from '../adapters/selectors';
import { AppActions } from '../app/actions';
import { fetchText } from '../../utils/fetch';
import * as X2JS from 'x2js';

const reduceTargets = ({ source, target }) =>
  target.map(t => ({ source, ...t }));

const readUsingConfig$ = ({ file, adapter }: { file: File; adapter: AdapterConfig }) =>
  readXml(adapter.source.parserConfig)(file);


@Injectable()
export class NodesEffects {

  @Effect()
  loadFile$ = this.actions$.pipe(
    filter(NodesActions.is.loadFile),
    switchMap(({ payload: { adapterId }}) => this.store.select(getAdapter(adapterId)),
      ({ payload: { file }}, adapter) => ({ file, adapter })),
    tap(console.log),
    switchMap(readUsingConfig$, ({ adapter }, data) => ({ adapter, data })),
    map(({ adapter: { source: { extractor }}, data }) => search(data, extractor)),
    map(({ nodes, links }) => ({ nodes, links: [].concat(...links.filter(l => l.target).map(t => reduceTargets(t))) })),
    map(({ nodes, links }) => NodesActions.importNodes({ nodes, links }))
  );

  @Effect()
  demo$ = this.actions$.pipe(
    filter(NodesActions.is.demoData),
    switchMap(() => fetchText('assets/data/rin-sample-01.xml')),
    switchMap(() => this.store.select(getAdapter('m-rin')), (demoData, adapter) => ({ demoData, adapter})),
    tap(console.log),
    map(({ demoData, adapter}) => {
      const defaultConfig = {
        enableToStringFunc: false
      };
      const x2js = new X2JS({ ...defaultConfig, ...adapter.source.parserConfig });
      const { nodes, links } = search(x2js.xml2js(demoData), adapter.source.extractor);
      return NodesActions.importNodes({
        nodes,
        links: [].concat(...links.filter(l => l.target).map(t => reduceTargets(t)))
      });
    })
  );

  @Effect()
  reset$ = this.actions$.pipe(
    filter(NodesActions.is.clearNodes),
    map(() => AppActions.goHome({}))
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private app: App) {}
}