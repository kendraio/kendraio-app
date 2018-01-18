import * as fromMenu from './menu';
import * as fromRin from './rin';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  menu: fromMenu.State;
  rin: fromRin.State;
}

export const reducers = {
  menu: fromMenu.reducer,
  rin: fromRin.reducer
};

export const getMenuState = createFeatureSelector<fromMenu.State>('menu');

export const getMenuItems = createSelector(
  getMenuState,
  fromMenu.getMenu
);

export const getRinState = createFeatureSelector<fromRin.State>('rin');

export const getRinHasProjects = createSelector(
  getRinState,
  fromRin.hasProjects
);

export const getRinProjects = createSelector(
  getRinState,
  fromRin.getProjects
);
