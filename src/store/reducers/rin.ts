import * as RinActions from '@store/actions/rin';
import { RinImportDataAction } from '@store/actions/rin';

export interface State {
  projects: Array<any>;
}

const initialState: State = {
  projects: []
};

export function reducer(state: State = initialState, action: RinActions.All): State {
  switch (action.type) {
    case RinActions.RIN_IMPORT_RIN_DATA:
      return { projects:
          state.projects.concat((action as RinImportDataAction).payload) };

    case RinActions.CLEAR_PROJECTS:
      return { projects: [] };

    default:
      return state;
  }
}

export const hasProjects = (state: State) => state.projects.length > 0;
export const getProjects = (state: State) => state.projects;
