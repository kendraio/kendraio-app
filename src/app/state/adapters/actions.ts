import { unionize, ofType } from 'unionize';
import { AdapterConfig } from '../../model/adapter';

export const AdaptersActions = unionize({
  initAdapters: ofType(),
  loadAdapter: ofType<{ id: string }>(),
  setAdapterConfig: ofType<{ id: string, config: AdapterConfig }>(),
  enableAdapter: ofType<{ id: string }>(),
  disableAdapter: ofType<{ id: string }>(),
  selectAdapter: ofType<{ id: string }>()
}, 'type', 'payload');

export type AdaptersActionsType = typeof AdaptersActions._Union;
