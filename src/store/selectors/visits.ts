import { StumpyState } from '../reducers';

import NodeId from '../../api/traversal/nodes/node-id';

export const makeGetVisited = () => {
  return ( state: StumpyState, node: NodeId ): boolean => {
    const item = state.visits;
    return !!item[node];
  };
};
