import { createSelector } from 'reselect';

import traversalTable from './table';

import { StumpyState } from '../../reducers';

import {
  available,
  availableWithGlitches,
  possible,
  possibleWithGlitches,
  unavailable,
  visible,
  visibleWithGlitches,
} from '../../../api/traversal/availabilities';
import AvailabilityLogic from '../../../api/traversal/availabilities/availability-logic';
import Edge from '../../../api/traversal/edges/edge';
import NodeConnectionId from '../../../api/traversal/nodes/node-connection-id';
import NodeId from '../../../api/traversal/nodes/node-id';

const getEdges = ( state: StumpyState ) => state.edges;

export const getState = ( _: StumpyState ) => _; // Identity.

interface INodeConnection {
  canConnect: NodeConnectionId;
  node: NodeId;
}

interface INodeData {
  isClaimed?: boolean;
  connections: INodeConnection[];
}

interface ISimpleNodeMap {
  [id: number]: NodeId[];
}

const generateLimitedGraph = (
  state: StumpyState,
  edges: Edge[],
  allowedAvailabilities: AvailabilityLogic[],
) => {
  const graph: ISimpleNodeMap = {};

  edges.forEach( ( e ) => {
    const availability = traversalTable.has( e.canTraverse )
      ? ( traversalTable.get( e.canTraverse )!( state ) || unavailable )
      : unavailable;

    const isMatchingAvailability = ( a: AvailabilityLogic ): boolean => {
      return a.availability === availability.availability &&
        a.usesGlitches === availability.usesGlitches;
    };

    if ( allowedAvailabilities.some( isMatchingAvailability ) ) {
      if ( !graph[e.from] ) {
        graph[e.from] = [e.to];
      } else {
        graph[e.from].push( e.to );
      }
    }
  } );

  return graph;
};

const generateAccessibleGraph = ( state: StumpyState, edges: Edge[] ) => {
  return generateLimitedGraph( state, edges, [available] );
};

const generateVisibleGraph = ( state: StumpyState, edges: Edge[] ) => {
  return generateLimitedGraph( state, edges, [available, visible ] );
};

const generatePossibleGraph = ( state: StumpyState, edges: Edge[] ) => {
  return generateLimitedGraph( state, edges, [available, visible, possible] );
};

const generateAccessibleGlitchGraph = ( state: StumpyState, edges: Edge[] ) => {
  return generateLimitedGraph(
    state,
    edges,
    [available, availableWithGlitches],
  );
};

const generateVisibleGlitchGraph = ( state: StumpyState, edges: Edge[] ) => {
  return generateLimitedGraph(
    state,
    edges,
    [available, availableWithGlitches, visible, visibleWithGlitches],
  );
};

const generatePossibleGlitchGraph = ( state: StumpyState, edges: Edge[] ) => {
  return generateLimitedGraph(
    state,
    edges,
    [available, availableWithGlitches, visible, visibleWithGlitches, possible, possibleWithGlitches],
  );
};

export const getFullAccessibleGraph = createSelector(
  getState,
  getEdges,
  generateAccessibleGraph,
);

export const getFullVisibleGraph = createSelector(
  getState,
  getEdges,
  generateVisibleGraph,
);

export const getFullPossibleGraph = createSelector(
  getState,
  getEdges,
  generatePossibleGraph,
);

export const getGlitchedAccessibleGraph = createSelector(
  getState,
  getEdges,
  generateAccessibleGlitchGraph,
);

export const getGlitchedVisibleGraph = createSelector(
  getState,
  getEdges,
  generateVisibleGlitchGraph,
);

export const getGlitchedPossibleGraph = createSelector(
  getState,
  getEdges,
  generatePossibleGlitchGraph,
);

export const isNodeOnGraph = ( graph: ISimpleNodeMap, targetNode: NodeId ): boolean => {
  const visited: NodeId[] = [];
  let finalAccessibility: boolean | null = null;

  // tslint:disable-next-line: variable-name
  const _util = ( currentNodeId: NodeId ) => {
    if ( !!finalAccessibility ) {
      return;
    }

    const nodeData = graph[currentNodeId];
    if ( !nodeData ) {
      return; // Not defined in the graph. Don't crash.
    }

    const eachConnection = ( n: NodeId ) => {
      if ( visited.some( ( t ) => t === n ) ) {
        return; // No need to revisit.
      }

      if ( n === targetNode ) {
        finalAccessibility = true;
      } else {
        visited.push( n );
        _util( n );
      }
    };

    nodeData.forEach( eachConnection );
  };

  _util( NodeId.Menu );

  return !!finalAccessibility;
};

export const makeGetAccessibility = () => {
  return ( state: StumpyState, nodeId: NodeId ): AvailabilityLogic => {
    if ( isNodeOnGraph( getFullAccessibleGraph( state ), nodeId ) ) {
      return available;
    }
    if ( isNodeOnGraph( getFullVisibleGraph( state ), nodeId ) ) {
      return visible;
    }
    if ( isNodeOnGraph( getFullPossibleGraph( state ), nodeId ) ) {
      return possible;
    }
    if ( isNodeOnGraph( getGlitchedAccessibleGraph( state ), nodeId ) ) {
      return availableWithGlitches;
    }
    if ( isNodeOnGraph( getGlitchedVisibleGraph( state ), nodeId ) ) {
      return visibleWithGlitches;
    }
    if ( isNodeOnGraph( getGlitchedPossibleGraph( state ), nodeId ) ) {
      return possibleWithGlitches;
    }

    return unavailable;
  };
  /*
  return createSelector(
    getState,
    getNodeId,
    getAccessibility,
  );
  */
};
