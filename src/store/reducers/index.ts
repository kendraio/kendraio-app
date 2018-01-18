import * as fromMenu from './menu';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  menu: fromMenu.State;
}

export const reducers = {
  menu: fromMenu.reducer
};

export const getMenuState = createFeatureSelector<fromMenu.State>('menu');

export const getMenuItems = createSelector(
  getMenuState,
  fromMenu.getMenu
);
