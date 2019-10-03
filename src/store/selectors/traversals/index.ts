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
import NodeId from '../../../api/traversal/nodes/node-id';
import { isEntrance, isInverted } from '../settings';

const getEdges = ( state: StumpyState ) => state.edges;

export const getState = ( _: StumpyState ) => _; // Identity.

export const getLightWorldNodes = createSelector(
  isEntrance,
  isInverted,
  ( entrance, inverted ) => {
    let nodes: NodeId[] = [
      NodeId.LIGHT_WATERFALL,
      NodeId.LIGHT_UNCLE_ENTRANCE,
      NodeId.LIGHT_KINGS_TOMB_ENTRANCE,
      NodeId.LIGHT_SWAMP_ITEM,
      NodeId.LIGHT_DAM_ENTRANCE,
      NodeId.LIGHT_SPIRAL_CAVE_ENTRANCE,
      NodeId.LIGHT_TAVERN_BACK_ENTRANCE,
      NodeId.LIGHT_CUCCO_HOUSE_ENTRANCE,
      NodeId.LIGHT_AGINAH_ENTRANCE,
      NodeId.LIGHT_SAHASRAHLA_ENTRANCE,
      NodeId.LIGHT_WELL_ENTRANCE,
      NodeId.LIGHT_BLINDS_HOUSE_ENTRANCE,
      NodeId.LIGHT_PARADOX_TOP_ENTRANCE,
      NodeId.LIGHT_SANCTUARY_BONK_ROCKS_ENTRANCE,
      NodeId.LIGHT_MINI_MOLDORM_ENTRANCE,
      NodeId.LIGHT_ICE_ROD_CAVE_ENTRANCE,
      NodeId.LIGHT_BOTTLE_PURCHASE,
      NodeId.LIGHT_SICK_KID_ENTRANCE,
      NodeId.LIGHT_BIRD_LOVER,
      NodeId.LIGHT_ETHER_TABLET,
      NodeId.LIGHT_BOMBOS_TABLET,
      NodeId.LIGHT_DESERT_LEDGE_ITEM,
      NodeId.LIGHT_B8_ZORA_MAIN,
      NodeId.LIGHT_DM_ASCENT_EXIT_CAVE,
      NodeId.LIGHT_POTION_SHOP_ENTRANCE,
      NodeId.LIGHT_FOREST_HIDEOUT_ENTRANCE,
      NodeId.LIGHT_LUMBERJACK_ENTRANCE,
      NodeId.LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE,
      NodeId.LIGHT_VT_CAVE_ENTRANCE,
      NodeId.LIGHT_GRAVEYARD_LEDGE_ENTRANCE,
      NodeId.LIGHT_CHECKERBOARD_ENTRANCE,
      NodeId.LIGHT_LIBRARY_ENTRANCE,
      NodeId.LIGHT_MUSHROOM_SPOT,
      NodeId.LIGHT_A4_SPECTACLE_ROCK,
      NodeId.LIGHT_A6_ISLAND,
      NodeId.LIGHT_RACE_GAME_ITEM,
      NodeId.LIGHT_LAKE_ISLAND_ITEM,
      NodeId.LIGHT_SHOVEL_SPOT,
      NodeId.LIGHT_MAD_BATTER_ENTRANCE,
      NodeId.LIGHT_MASTER_SWORD_PEDESTAL,
    ];

    if ( entrance || !inverted ) {
      nodes.push( NodeId.LIGHT_LINKS_HOUSE_ENTRANCE );
    }

    if ( entrance ) {
      nodes = nodes.concat( [] );
    }

    return nodes;
  },
);

export const getDarkWorldNodes = createSelector(
  isEntrance,
  isInverted,
  ( entrance, inverted ) => {
    return [];
  },
);

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
  const graph = generateLimitedGraph( state, edges, [available] );
  // console.log( graph );
  return graph;
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
      if ( finalAccessibility || visited.some( ( t ) => t === n ) ) {
        return; // No need to revisit.
      }

      if ( n === targetNode ) {
        finalAccessibility = true;
        return;
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
};
