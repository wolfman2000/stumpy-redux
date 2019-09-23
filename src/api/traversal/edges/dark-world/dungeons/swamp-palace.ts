import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Swamp Palace together.

const swampPalaceEdges: Edge[] = [
  makeEdge( NodeId.SP_01_ENTRANCE, NodeId.DARK_SP_ENTRANCE ),
  makeEdge( NodeId.SP_01_ENTRANCE, NodeId.SP_01_GREETERS, NodeConnectionId.CanSwimToSwampStart ),

  makeEdge( NodeId.SP_01_GREETERS, NodeId.SP_B1_FIRST_POOL, NodeConnectionId.CanEnterInfernalSwampDoor ),

  makeEdge( NodeId.SP_B1_FIRST_POOL, NodeId.SP_B1_MAP_CHEST, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.SP_B1_FIRST_POOL, NodeId.SP_B1_SHOOTER_ROOM ),

  makeEdge( NodeId.SP_B1_SHOOTER_ROOM, NodeId.SP_B1_FLOODPROOF_KEY ),
  makeEdge( NodeId.SP_B1_SHOOTER_ROOM, NodeId.SP_B1_FIRST_LEVER_AREA ),

  makeEdge( NodeId.SP_B1_FIRST_LEVER_AREA, NodeId.SP_B1_FIRST_LEVER, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.SP_B1_FIRST_LEVER_AREA, NodeId.SP_B1_MAIN_ROOM, NodeConnectionId.HasHammerDarkWorld ),

  makeEdge( NodeId.SP_B1_MAIN_ROOM, NodeId.SP_B1_COMPASS_NE ),
  makeEdge( NodeId.SP_B1_MAIN_ROOM, NodeId.SP_B1_BIG_CHEST, NodeConnectionId.HasBigKeyForSwamp ),
  makeEdge( NodeId.SP_B1_MAIN_ROOM, NodeId.SP_B1_SWITCH, NodeConnectionId.HasHookshotDarkWorld ),
  makeEdge( NodeId.SP_B1_MAIN_ROOM, NodeId.SP_B1_SHOOTER_WEST ),
  makeEdge( NodeId.SP_B1_MAIN_ROOM, NodeId.SP_B1_SECOND_LEVER_AREA ),

  makeEdge( NodeId.SP_B1_COMPASS_NE, NodeId.SP_B1_COMPASS_S ),
  makeEdge( NodeId.SP_B1_COMPASS_S, NodeId.SP_B1_COMPASS_NW ),

  makeEdge( NodeId.SP_B1_SHOOTER_WEST, NodeId.SP_B1_FLOODFULL_KEY ),
  makeEdge( NodeId.SP_B1_SHOOTER_WEST, NodeId.SP_B1_SPIKES ),

  makeEdge( NodeId.SP_B1_SPIKES, NodeId.SP_B1_WATER_CORRIDOR ),
  makeEdge( NodeId.SP_B1_WATER_CORRIDOR, NodeId.SP_01_BIG_POOL ),

  makeEdge( NodeId.SP_01_BIG_POOL, NodeId.SP_B1_WEST_SIDE_WEST_TREASURE ),
  makeEdge( NodeId.SP_01_BIG_POOL, NodeId.SP_B1_BIG_KEY ),
  makeEdge( NodeId.SP_B1_WEST_SIDE_WEST_TREASURE, NodeId.SP_B1_BIG_KEY, NodeConnectionId.HasHookshotDarkWorld ),

  makeEdge( NodeId.SP_B1_SWITCH, NodeId.SP_B1_STATUE ),
  makeEdge( NodeId.SP_B1_SWITCH, NodeId.SP_B1_SMALL_CORRIDOR ),

  makeEdge( NodeId.SP_B1_STATUE, NodeId.SP_B1_MINI_CORRIDOR ),
  makeEdge( NodeId.SP_B1_MINI_CORRIDOR, NodeId.SP_B2_LEVER_INACCESSIBLE ),
  makeEdge( NodeId.SP_B1_SMALL_CORRIDOR, NodeId.SP_B2_LEVER_ACCESSIBLE ),
  makeEdge( NodeId.SP_B2_LEVER_INACCESSIBLE, NodeId.SP_B2_DRAINED_POOL ),
  makeEdge( NodeId.SP_B2_DRAINED_POOL, NodeId.SP_B2_CORRIDOR ),
  makeEdge( NodeId.SP_B2_CORRIDOR, NodeId.SP_B2_SUNKEN_TREASURE ),
  makeEdge( NodeId.SP_B2_CORRIDOR, NodeId.SP_B2_WATERFALL ),
  makeEdge( NodeId.SP_B2_SUNKEN_TREASURE, NodeId.SP_B1_SWITCH ),

  makeEdge( NodeId.SP_B2_WATERFALL, NodeId.SP_B2_WATERFALL_SECRET ),
  makeEdge( NodeId.SP_B2_WATERFALL_SECRET, NodeId.SP_B1_C_ROOM ),
  makeEdge( NodeId.SP_B1_C_ROOM, NodeId.SP_B1_FINAL_POOL ),
  makeEdge( NodeId.SP_B1_FINAL_POOL, NodeId.SP_B1_I_ROOM ),
  makeEdge( NodeId.SP_B1_FINAL_POOL, NodeId.SP_B1_T_ROOM ),
  makeEdge( NodeId.SP_B1_T_ROOM, NodeId.SP_B1_BOSS ),
];

export default swampPalaceEdges;
