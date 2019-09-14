import { createSelector } from 'reselect';

import traversalTable from './table';

import { StumpyState } from '../../reducers';

import { unavailable } from '../../../api/traversal/availabilities';
import Availability from '../../../api/traversal/availabilities/availability';
import AvailabilityLogic from '../../../api/traversal/availabilities/availability-logic';
import AvailabilityMap from '../../../api/traversal/availabilities/availability-map';
import Edge from '../../../api/traversal/edges/edge';
import NodeConnectionId from '../../../api/traversal/nodes/node-connection-id';
import NodeId from '../../../api/traversal/nodes/node-id';

const getEdges = ( state: StumpyState ) => state.edges;

const getNodes = ( state: StumpyState ) => state.nodes;

export const getState = ( _: StumpyState ) => _; // Identity.

const getNodeId = ( _: StumpyState, id: NodeId ) => id;

interface INodeConnection {
  canConnect: NodeConnectionId;
  node: NodeId;
}

interface INodeData {
  isClaimed?: boolean;
  connections: INodeConnection[];
}

interface INodeMap {
  [id: number]: INodeConnection[]; // INodeData;
}

const generateFullGraph = ( edges: Edge[], nodes: NodeId[] ) => {
  const graph: INodeMap = {};
  nodes.forEach( ( n ) => {
    const matchingEdges = edges
      .filter( ( e ) => e.from === n )
      .map( ( e ): INodeConnection => {
        return {
          canConnect: e.canTraverse,
          node: e.to,
        };
      } )
      ;
    graph[n] = matchingEdges;
  } );
  return graph;
};

export const getFullGraph = createSelector(
  getEdges,
  getNodes,
  generateFullGraph,
);

const getAccessibility = createSelector(
  getState,
  getNodeId,
  ( state, targetNode ): AvailabilityLogic => {
    const graph = getFullGraph( state );
    const visited: AvailabilityMap = {};
    let finalAccessibility: AvailabilityLogic | null = null;

    // tslint:disable-next-line: variable-name
    const _util = ( currentNodeId: NodeId ) => {
      if ( !!finalAccessibility ) {
        return;
      }

      const nodeData = graph[currentNodeId];
      if ( !nodeData ) {
        return; // Not defined in the graph. Don't crash.
      }

      const eachConnection = ( n: INodeConnection ) => {
        if ( visited[n.node] ) {
          return; // No need to revisit.
        }

        const accessibility = traversalTable.has( n.canConnect )
          ? traversalTable.get( n.canConnect )!( state )
          : unavailable;

        if ( accessibility.availability !== Availability.Unavailable ) {
          if ( n.node === targetNode ) {
            finalAccessibility = accessibility;
          } else {
            visited[n.node] = accessibility;
            _util( n.node );
          }
        }
      };

      nodeData.forEach( eachConnection );
    };

    _util( NodeId.Menu );

    return !!finalAccessibility ? finalAccessibility : unavailable;
  },
);

export const makeGetAccessibility = () => {
  return ( state: StumpyState, nodeId: NodeId ): AvailabilityLogic => {
    return getAccessibility( state, nodeId );
  };
  /*
  return createSelector(
    getState,
    getNodeId,
    getAccessibility,
  );
  */
};
