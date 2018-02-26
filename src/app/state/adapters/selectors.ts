import { createSelector } from '@ngrx/store';
import { getAdaptersState } from '../reducers';
import { Map } from 'immutable';
import { AdaptersState } from './reducer';


export const getAdapterEnabledList = createSelector(
  getAdaptersState,
  ({ adapters, enabled }: AdaptersState) =>
    enabled.map((v, k) => ({ enabled: v, config: adapters.get(k) }))
);


export const getAdapter = name => createSelector(
  getAdaptersState,
  ({ adapters }: AdaptersState) => adapters.get(name)
);

export const getSelectedAdapter = createSelector(getAdaptersState, ({ selectedAdapter }) => selectedAdapter);

export const getSelectedAdapterProp = prop => createSelector(getAdaptersState, ({ adapters, selectedAdapter }) => {
  if (selectedAdapter) {
    const adapter = adapters.get(selectedAdapter);
    return adapter[prop];
  }
  return [];
});

export const getSelectedAdapterNodeTypes = getSelectedAdapterProp('nodeTypes');
export const getSelectedAdapterLinkTypes = getSelectedAdapterProp('linkTypes');
