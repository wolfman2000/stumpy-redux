import produce from 'immer';
import { getType } from 'typesafe-actions';

import { fallbackNodes } from '../../api/traversal';
import { fallbackEdges } from '../../api/traversal/edges';
import Edge from '../../api/traversal/edges/edge';
import NodeId from '../../api/traversal/nodes/node-id';
import { setEdge, StumpyAction } from '../actions';

const nodeReducer = ( state = fallbackNodes, _: StumpyAction ): NodeId[] => {
  return state;
};

const edgeReducer = ( state = fallbackEdges, action: StumpyAction ): Edge[] => {
  const produceState = ( draft: Edge[] ): void => {
    switch ( action.type ) {
      case getType( setEdge ): {
        const findEdge = ( s: Edge ): boolean => {
          return s.from === action.payload.key &&
            s.to === action.payload.oldValue;
        };
        const item = draft.find( findEdge );
        if ( !!item ) {
          item.to = action.payload.newValue;
        }
        break;
      }
    }
  };

  return produce( state, produceState );
};

export { edgeReducer, nodeReducer };
