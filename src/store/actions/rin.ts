import { Action } from '@ngrx/store';

export const RIN_LOAD_FILE = '[RIN] Load file';

export class RinLoadFileAction implements Action {
  readonly type = RIN_LOAD_FILE;
  constructor(public payload: File) {}
}

export type All
  = RinLoadFileAction;
