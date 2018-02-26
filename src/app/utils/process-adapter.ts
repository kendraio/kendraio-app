import { AdapterConfig } from '../model/adapter';
import { fetchText } from './fetch';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

// TODO: this should not be hard-coded to RIN adapters
const loadString$ = file => fetchText(file);

const projectResult = (adapter: AdapterConfig, extractor) => ({
  ...adapter,
  source: {
    ...adapter.source,
    parserConfig: (adapter.source.parserConfig) ? {
      ...adapter.source.parserConfig,
      arrayAccessFormPaths: adapter.source.parserConfig.arrayAccessFormPaths.map(e => new RegExp(e))
    } : undefined,
    extractor
  }
});

export const processAdapterConfig$ = (basePath: string, adapter: AdapterConfig) =>
  of(`${basePath}/${adapter.source.extractor}`).pipe(
    switchMap(loadString$, (_, extractor) => projectResult(adapter, extractor)),
  );
