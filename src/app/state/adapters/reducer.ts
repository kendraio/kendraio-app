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

    // For now, all adapters are enabled on startup
    setAdapterConfig({ id, config }) {
      return {
        ...state,
        enabled: state.enabled.set(id, true),
        adapters: state.adapters.set(id, config)
      };
    },

    enableAdapter({ id }) {
      return { ...state, enabled: state.enabled.set(id, false) };
    },

    disableAdapter({ id }) {
      return { ...state, enabled: state.enabled.set(id, true) };
    },

    selectAdapter({ id: selectedAdapter }) {
      return { ...state, selectedAdapter };
    }

  }, () => state)(action);
}
