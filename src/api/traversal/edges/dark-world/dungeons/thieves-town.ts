import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Thieves Town together.

const thievesTownEdges: Edge[] = [
  makeEdge( NodeId.TT_B1_BIG_SW, NodeId.DARK_TT_ENTRANCE ),
  makeEdge( NodeId.TT_B1_BIG_SW, NodeId.TT_B1_BIG_NW ),
  makeEdge( NodeId.TT_B1_BIG_SW, NodeId.TT_B1_BIG_SE ),

  makeEdge( NodeId.TT_B1_BIG_NW, NodeId.TT_B1_BIG_SW ),
  makeEdge( NodeId.TT_B1_BIG_NW, NodeId.TT_B1_BIG_NE ),

  makeEdge( NodeId.TT_B1_BIG_NE, NodeId.TT_B1_EAST_HALLWAY, NodeConnectionId.HasBigKeyForThieves ),
  makeEdge( NodeId.TT_B1_BIG_NE, NodeId.TT_B1_BIG_NW ),
  makeEdge( NodeId.TT_B1_BIG_NE, NodeId.TT_B1_BIG_SE ),

  makeEdge( NodeId.TT_B1_BIG_SE, NodeId.TT_B1_BIG_SW ),
  makeEdge( NodeId.TT_B1_BIG_SE, NodeId.TT_B1_BIG_NE ),

  makeEdge( NodeId.TT_B1_EAST_HALLWAY, NodeId.TT_B1_BOSS ),
  makeEdge( NodeId.TT_B1_EAST_HALLWAY, NodeId.TT_B1_SOUTH_PASSAGES ),

  makeEdge( NodeId.TT_B1_SOUTH_PASSAGES, NodeId.TT_B1_EAST_HALLWAY ),
  makeEdge( NodeId.TT_B1_SOUTH_PASSAGES, NodeId.TT_B1_WEST_HALLWAY ),

  makeEdge( NodeId.TT_B1_WEST_HALLWAY, NodeId.TT_B1_SOUTH_PASSAGES ),
  makeEdge( NodeId.TT_B1_WEST_HALLWAY, NodeId.TT_B1_NORTH_PASSAGES ),
  makeEdge( NodeId.TT_B1_WEST_HALLWAY, NodeId.TT_B1_SPIKES ),

  makeEdge( NodeId.TT_B1_SPIKES, NodeId.TT_B1_WEST_HALLWAY ),
  makeEdge( NodeId.TT_B1_SPIKES, NodeId.TT_01_HINT ),

  makeEdge( NodeId.TT_01_HINT, NodeId.TT_01_CORRIDOR ),
  makeEdge( NodeId.TT_01_HINT, NodeId.TT_B1_SPIKES ),

  makeEdge( NodeId.TT_01_CORRIDOR, NodeId.TT_01_HINT ),
  makeEdge( NodeId.TT_01_CORRIDOR, NodeId.TT_01_ATTIC ),

  makeEdge( NodeId.TT_01_ATTIC, NodeId.TT_01_CORRIDOR ),

  makeEdge( NodeId.TT_B1_NORTH_PASSAGES, NodeId.TT_B1_WEST_HALLWAY ),
  makeEdge( NodeId.TT_B1_NORTH_PASSAGES, NodeId.TT_B1_EAST_HALLWAY ),
  makeEdge( NodeId.TT_B1_NORTH_PASSAGES, NodeId.TT_B2_ENTRY ),

  makeEdge( NodeId.TT_B2_ENTRY, NodeId.TT_B1_NORTH_PASSAGES ),
  makeEdge( NodeId.TT_B2_ENTRY, NodeId.TT_B2_CONVEYORS ),
  makeEdge( NodeId.TT_B2_ENTRY, NodeId.TT_B2_POT, NodeConnectionId.HasGloveDarkWorld ),

  makeEdge( NodeId.TT_B2_CONVEYORS, NodeId.TT_B2_BUMPERS ),
  makeEdge( NodeId.TT_B2_CONVEYORS, NodeId.TT_B2_BIG_CHEST_OUTER, NodeConnectionId.HasSmallKeyForThieves ),
  makeEdge( NodeId.TT_B2_CONVEYORS, NodeId.TT_B2_POT ),

  makeEdge( NodeId.TT_B2_BIG_CHEST_OUTER, NodeId.TT_B2_BIG_CHEST_INNER, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.TT_B2_BIG_CHEST_INNER, NodeId.TT_B2_BIG_CHEST, NodeConnectionId.HasBigKeyForThieves ),

  makeEdge( NodeId.TT_B2_POT, NodeId.TT_B2_CONVEYORS ),
  makeEdge( NodeId.TT_B2_POT, NodeId.TT_B2_ENTRY, NodeConnectionId.HasGloveDarkWorld ),
  makeEdge( NodeId.TT_B2_POT, NodeId.TT_B2_JAIL ),

  makeEdge( NodeId.TT_B2_JAIL, NodeId.TT_B2_POT ),

];

export default thievesTownEdges;
