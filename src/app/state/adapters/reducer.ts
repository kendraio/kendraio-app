import { AdaptersActions, AdaptersActionsType } from './actions';
import { Map } from 'immutable';
import { AdapterConfig } from '../../model/adapter';

export interface AdaptersState {
  adapters: Map<string, AdapterConfig>;
  enabled: Map<string, boolean>;
  selectedAdapter: string;
}

const init: AdaptersState = {
  adapters: Map<string, AdapterConfig>(),
  enabled: Map<string, boolean>(),
  selectedAdapter: undefined
};

export function adaptersReducer(state: AdaptersState = init, action: AdaptersActionsType): AdaptersState {
  return AdaptersActions.match({

    setAdapterConfig({ id, config }) {
      return {
        ...state,
        enabled: state.enabled.has(id) ? state.enabled : state.enabled.set(id, false),
        adapters: state.adapters.set(id, config)
      };
    },

    enableAdapter({ id }) {
      return { ...state, enabled: state.enabled.set(id, true) };
    },

    disableAdapter({ id }) {
      return { ...state, enabled: state.enabled.set(id, false) };
    },

    selectAdapter({ id: selectedAdapter }) {
      return { ...state, selectedAdapter };
    }

  }, () => state)(action);
}
