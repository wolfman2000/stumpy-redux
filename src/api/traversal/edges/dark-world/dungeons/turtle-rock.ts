import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Turtle Rock together.

const turtleRockEdges: Edge[] = [
  makeEdge( NodeId.TR_01_ENTRANCE, NodeId.DARK_TR_MAIN_ENTRANCE ),
  makeEdge( NodeId.TR_01_ENTRANCE, NodeId.TR_01_HUGE, NodeConnectionId.CanCrossHugeSomariaGaps ),

  makeEdge( NodeId.TR_01_HUGE, NodeId.TR_01_ENTRANCE, NodeConnectionId.CanCrossHugeSomariaGaps ),
  makeEdge( NodeId.TR_01_HUGE, NodeId.TR_01_COMPASS, NodeConnectionId.CanCrossHugeSomariaGaps ),
  makeEdge( NodeId.TR_01_HUGE, NodeId.TR_01_TILE_ROOM, NodeConnectionId.CanCrossHugeSomariaGaps ),
  makeEdge( NodeId.TR_01_HUGE, NodeId.TR_01_QUAD_TORCHES, NodeConnectionId.CanCrossHugeSomariaGaps ),
  makeEdge( NodeId.TR_01_HUGE, NodeId.TR_01_POKEY, NodeConnectionId.CanCrossHugeSomariaGaps ),

  makeEdge( NodeId.TR_01_COMPASS, NodeId.TR_01_HUGE ),

  makeEdge( NodeId.TR_01_TILE_ROOM, NodeId.TR_01_QUAD_STATUES ),
  makeEdge( NodeId.TR_01_TILE_ROOM, NodeId.TR_01_HUGE ),

  makeEdge( NodeId.TR_01_QUAD_STATUES, NodeId.TR_01_TILE_ROOM ),

  makeEdge( NodeId.TR_01_QUAD_TORCHES, NodeId.TR_01_HUGE ),
  makeEdge( NodeId.TR_01_QUAD_TORCHES, NodeId.TR_01_MAP_ROOM ),

  makeEdge( NodeId.TR_01_MAP_ROOM, NodeId.TR_01_QUAD_TORCHES ),

  makeEdge( NodeId.TR_01_POKEY, NodeId.TR_01_CHAIN_CHOMP ),
  makeEdge( NodeId.TR_01_POKEY, NodeId.TR_01_HUGE ),

  makeEdge( NodeId.TR_01_CHAIN_CHOMP, NodeId.TR_01_CHAIN_CHOMP_KEY ),
  makeEdge( NodeId.TR_01_CHAIN_CHOMP, NodeId.TR_01_QUAD_STATUES ),
  makeEdge( NodeId.TR_01_CHAIN_CHOMP, NodeId.TR_B1_START ),

  makeEdge( NodeId.TR_B1_START, NodeId.TR_01_CHAIN_CHOMP ),
  makeEdge( NodeId.TR_B1_START, NodeId.TR_B1_PIPES ),

  makeEdge( NodeId.TR_B1_PIPES, NodeId.TR_B1_START ),
  makeEdge( NodeId.TR_B1_PIPES, NodeId.TR_B1_ANTI_FAIRIES ),
  makeEdge( NodeId.TR_B1_PIPES, NodeId.TR_B1_DOUBLE_POKEYS ),

  makeEdge( NodeId.TR_B1_ANTI_FAIRIES, NodeId.TR_B1_PIPES ),
  makeEdge( NodeId.TR_B1_ANTI_FAIRIES, NodeId.TR_B1_LAVA_CHEST ),

  makeEdge( NodeId.TR_B1_LAVA_CHEST, NodeId.TR_B1_PIPES ),
  makeEdge( NodeId.TR_B1_LAVA_CHEST, NodeId.TR_B1_START ),

  makeEdge( NodeId.TR_B1_DOUBLE_POKEYS, NodeId.TR_B1_PIPES ),
  makeEdge( NodeId.TR_B1_DOUBLE_POKEYS, NodeId.TR_B1_DOUBLE_SHOOTER ),
  makeEdge( NodeId.TR_B1_DOUBLE_POKEYS, NodeId.TR_B1_SPLIT ),

  makeEdge( NodeId.TR_B1_SPLIT, NodeId.TR_B1_DOUBLE_POKEYS ),
  makeEdge( NodeId.TR_B1_SPLIT, NodeId.TR_B1_BIG_CHEST_LEDGE ),
  makeEdge( NodeId.TR_B1_SPLIT, NodeId.TR_B1_LASER_WALL_ENTRANCE ),

  makeEdge( NodeId.TR_B1_BIG_CHEST_LEDGE, NodeId.TR_B1_SPLIT ),

  makeEdge( NodeId.TR_B1_LASER_WALL_ENTRANCE, NodeId.TR_B1_SPLIT ),
  // TODO: Make this work for entrance mode.
  makeEdge( NodeId.TR_B1_LASER_WALL_ENTRANCE, NodeId.DARK_TR_LASER_WALL_ENTRANCE ),

  makeEdge( NodeId.TR_B1_TREASURE_ENTRANCE, NodeId.DARK_TR_TREASURE_ENTRANCE ),
  makeEdge( NodeId.TR_B1_TREASURE_ENTRANCE, NodeId.TR_B1_BIG_CHEST_AREA, NodeConnectionId.CanCrossSmallSomariaGaps ),
  makeEdge( NodeId.TR_B1_TREASURE_ENTRANCE, NodeId.TR_B1_BIG_CHEST_LEDGE, NodeConnectionId.CanBombJumpOrHover ),

  makeEdge( NodeId.TR_B1_BIG_CHEST_AREA, NodeId.TR_B1_BIG_CHEST, NodeConnectionId.HasBigKeyForTurtle ),
  makeEdge( NodeId.TR_B1_BIG_CHEST_AREA, NodeId.TR_B1_TREASURE_ENTRANCE, NodeConnectionId.CanCrossSmallSomariaGaps ),
  makeEdge( NodeId.TR_B1_BIG_CHEST_AREA, NodeId.TR_B1_DOUBLE_SHOOTER ),

  makeEdge( NodeId.TR_B1_DOUBLE_SHOOTER, NodeId.TR_B1_DOUBLE_POKEYS ),
  makeEdge( NodeId.TR_B1_DOUBLE_SHOOTER, NodeId.TR_B1_QUAD_POTS, NodeConnectionId.HasBigKeyForTurtle ),

  makeEdge( NodeId.TR_B1_QUAD_POTS, NodeId.TR_B1_DOUBLE_SHOOTER ),
  makeEdge( NodeId.TR_B1_QUAD_POTS, NodeId.TR_B1_MONEY_SECURITY ),
  makeEdge( NodeId.TR_B1_QUAD_POTS, NodeId.TR_B1_SINGLE_ROLLER, NodeConnectionId.HasBootsOrBombs ),

  makeEdge( NodeId.TR_B1_MONEY_SECURITY, NodeId.TR_B1_MONEY_VAULT ),
  makeEdge( NodeId.TR_B1_MONEY_SECURITY, NodeId.TR_B1_QUAD_POTS ),

  makeEdge( NodeId.TR_B1_MONEY_VAULT, NodeId.TR_B1_MONEY_SECURITY ),

  makeEdge( NodeId.TR_B1_SINGLE_ROLLER, NodeId.TR_B1_QUAD_POTS ),
  makeEdge( NodeId.TR_B1_SINGLE_ROLLER, NodeId.TR_B2_DARK_HUGE ),

  makeEdge( NodeId.TR_B2_DARK_HUGE, NodeId.TR_B1_SINGLE_ROLLER, NodeConnectionId.CanCrossDarkSomariaGaps ),
  makeEdge( NodeId.TR_B2_DARK_HUGE, NodeId.TR_B2_NARROW_BRIDGE, NodeConnectionId.CanCrossDarkSomariaGaps ),

  makeEdge( NodeId.TR_B2_NARROW_BRIDGE, NodeId.TR_B2_DARK_HUGE ),
  makeEdge( NodeId.TR_B2_NARROW_BRIDGE, NodeId.TR_B2_LASER_BRIDGE_ENTRANCE ),
  makeEdge( NodeId.TR_B2_NARROW_BRIDGE, NodeId.TR_B2_PYRAMID ),

  makeEdge( NodeId.TR_B2_LASER_BRIDGE_ENTRANCE, NodeId.TR_B2_NARROW_BRIDGE ),
  makeEdge(
    NodeId.TR_B2_LASER_BRIDGE_ENTRANCE,
    NodeId.TR_B2_LASER_BRIDGE_ITEMS,
    NodeConnectionId.HasLaserEyeProtection,
   ),
  makeEdge( NodeId.TR_B2_LASER_BRIDGE_ENTRANCE, NodeId.DARK_TR_LASER_BRIDGE_ENTRANCE ),

  makeEdge( NodeId.TR_B2_PYRAMID, NodeId.TR_B2_NARROW_BRIDGE ),
  makeEdge( NodeId.TR_B2_PYRAMID, NodeId.TR_B3_ENTER ),

  makeEdge( NodeId.TR_B3_ENTER, NodeId.TR_B3_PREPARE, NodeConnectionId.CanCrossHugeSomariaGaps ),
  makeEdge( NodeId.TR_B3_ENTER, NodeId.TR_B2_PYRAMID ),

  makeEdge( NodeId.TR_B3_PREPARE, NodeId.TR_B3_ENTER, NodeConnectionId.CanCrossHugeSomariaGaps ),
  makeEdge( NodeId.TR_B3_PREPARE, NodeId.TR_B3_BOSS, NodeConnectionId.HasBigKeyForTurtle ),
];

export default turtleRockEdges;
