import { unionize, ofType } from 'unionize';

export const AppActions = unionize({
  goHome: ofType()
}, 'type', 'payload');

export type AppActionsType = typeof AppActions._Union;
