import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { adaptersReducer, AdaptersState } from './adapters/reducer';
import { nodesReducer, NodesState } from './nodes/reducer';
import { Map } from 'immutable';

export interface AppState {
  adapters: AdaptersState,
  nodes: NodesState
}

export const reducers: ActionReducerMap<AppState> = {
  adapters: adaptersReducer,
  nodes: nodesReducer
};

export const getAdaptersState = createFeatureSelector('adapters');
export const getNodesState = createFeatureSelector('nodes');

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
      'nodes',
      {
        adapters: {
          serialize: ({ enabled }) => enabled,
          deserialize: (enabled) => {
            // console.log(enabled);
            return { enabled: Map(enabled), adapters: Map() };
          }
        }
      }
    ],
    rehydrate: true
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer
];
