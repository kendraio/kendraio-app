import { Map } from 'immutable';
import { v4 } from 'uuid';
import { NodesActions, NodesActionsType } from './actions';
import { Project } from '../../model/project';

export interface NodesState {
  nodes: Array<{ id: string, type: string }>;
  links: Array<{ source: string, target: string }>;
}

const init: NodesState = {
  nodes: [],
  links: []
};

const uuidsForProject = ({ nodes, links }) => {
  const ids = nodes.reduce((acc, v) => acc.set(v.id, v4()), Map<string, string>());

  return {
    nodes: nodes.map(n => ({ ...n, id: ids.get(n.id) })),
    links: links.map(l => ({ ...l, source: ids.get(l.source), target: ids.get(l.target) }))
  };
};

export function nodesReducer(state: NodesState = init, action: NodesActionsType): NodesState {
  return NodesActions.match({

    importNodes(project: Project) {
      const { nodes, links } = uuidsForProject(project);
      console.log({nodes, links});
      return ({ nodes: state.nodes.concat(nodes), links: state.links.concat(links) });
    },

    addNode({ adapterId, type }) {
      return { ...state, nodes: state.nodes.concat([{ type, id: v4() }]) };
    },

    clearNodes() {
      return init;
    }

  }, () => state)(action);
}
