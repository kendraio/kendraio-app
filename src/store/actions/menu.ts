import { Action } from '@ngrx/store';
import { MenuLink } from '@store/model';

export const MENU_SET_LINKS = '[Menu] Set links';

export class MenuSetLinksAction implements Action {
  readonly type = MENU_SET_LINKS;
  constructor(public payload: Array<MenuLink>) {}
}

export type All
  = MenuSetLinksAction;
