import { createSelector } from '@ngrx/store';
import { getAdaptersState, getNodesState } from '../reducers';
import { NodesState } from './reducer';


export const getNodes = createSelector(getNodesState, ({ nodes }) => nodes);
export const hasNodes = createSelector(getNodesState, ({ nodes }: NodesState) => nodes.length > 0);

