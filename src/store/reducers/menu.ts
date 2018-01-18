import { MenuLink } from '@store/model';
import * as MenuActions from '@store/actions/menu';

export interface State {
  menu: Array<MenuLink>;
}

const initialState: State = {
  menu: []
};

export function reducer(state: State = initialState, action: MenuActions.All): State {
  switch (action.type) {
    case MenuActions.MENU_SET_LINKS:
      return { ...state, menu: action.payload };
    default:
      return state;
  }
}

export const getMenu = (state: State) => state.menu;
