import { unionize, ofType } from 'unionize';
import { Project } from '../../model/project';


export const NodesActions = unionize({
  loadFile: ofType<{ file: File, adapterId: string }>(),
  importRinProject: ofType<Project>(),
  importNodes: ofType(),
  clearNodes: ofType(),
  demoData: ofType(),
  addNode: ofType<{ adapterId: string, type: string }>()
}, 'type', 'payload');

export type NodesActionsType = typeof NodesActions._Union;
