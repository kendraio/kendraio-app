import { AdapterConfig } from '../model/adapter';
import { fetchText } from './fetch';
import { concatMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

// TODO: this should not be hard-coded to RIN adapters
const loadString$ = file => fetchText(file);

const projectResult = (adapter: AdapterConfig, extractor) => ({
  ...adapter,
  source: {
    ...adapter.source,
    parserConfig: (adapter.source && adapter.source.parserConfig) ? {
      ...adapter.source.parserConfig,
      arrayAccessFormPaths: adapter.source.parserConfig.arrayAccessFormPaths.map(e => new RegExp(e))
    } : undefined,
    extractor
  }
});

export const processAdapterConfig$ = (basePath: string, adapter: AdapterConfig) =>
  (adapter.source && adapter.source.extractor)
    ? of(`${basePath}/${adapter.source.extractor}`).pipe(
      concatMap(loadString$, (_, extractor) => projectResult(adapter, extractor)),
    )
    : of(projectResult(adapter, {}));
