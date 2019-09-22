import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Ice Palace together.

const icePalaceEdges: Edge[] = [
  makeEdge( NodeId.IP_01_ENTRANCE, NodeId.DARK_IP_ENTRANCE ),
  makeEdge( NodeId.IP_01_ENTRANCE, NodeId.IP_01_KEY, NodeConnectionId.CanDefeatFreezors ),

  makeEdge( NodeId.IP_01_KEY, NodeId.IP_B1_START ),
  makeEdge( NodeId.IP_B1_START, NodeId.IP_B1_BLOCK ),

  makeEdge( NodeId.IP_B1_BLOCK, NodeId.IP_B1_COMPASS ),
  makeEdge( NodeId.IP_B1_BLOCK, NodeId.IP_B1_POTS ),
  makeEdge( NodeId.IP_B1_BLOCK, NodeId.IP_B1_END ),

  makeEdge( NodeId.IP_B1_COMPASS, NodeId.IP_B1_BLOCK ),

  makeEdge( NodeId.IP_B1_POTS, NodeId.IP_B1_OUCH ),
  makeEdge( NodeId.IP_B1_POTS, NodeId.IP_B1_BLOCK ),

  makeEdge( NodeId.IP_B1_OUCH, NodeId.IP_B1_POTS ),

  makeEdge( NodeId.IP_B1_END, NodeId.IP_B1_BLOCK ),
  makeEdge( NodeId.IP_B1_END, NodeId.IP_B2_STALFOS, NodeConnectionId.HasBombsDarkWorld ),

  makeEdge( NodeId.IP_B2_STALFOS, NodeId.IP_B2_CONVEYOR ),
  makeEdge( NodeId.IP_B2_CONVEYOR, NodeId.IP_B2_JUMP ),

  makeEdge( NodeId.IP_B2_JUMP, NodeId.IP_B2_CONVEYOR ),
  makeEdge( NodeId.IP_B2_JUMP, NodeId.IP_B2_SIDEWAYS_WALUIGI ),

  makeEdge( NodeId.IP_B2_SIDEWAYS_WALUIGI, NodeId.IP_B2_JUMP ),
  makeEdge( NodeId.IP_B2_SIDEWAYS_WALUIGI, NodeId.IP_B3_PENGATOR ),

  makeEdge( NodeId.IP_B3_PENGATOR, NodeId.IP_B2_SIDEWAYS_WALUIGI ),
  makeEdge( NodeId.IP_B3_PENGATOR, NodeId.IP_B3_SPLIT ),

  makeEdge( NodeId.IP_B3_SPLIT, NodeId.IP_B3_PENGATOR ),
  makeEdge( NodeId.IP_B3_SPLIT, NodeId.IP_B3_TRAP ),
  makeEdge( NodeId.IP_B3_SPLIT, NodeId.IP_B3_U_LEFT ),
  makeEdge( NodeId.IP_B3_SPLIT, NodeId.IP_B3_SLIPPERY ),

  makeEdge( NodeId.IP_B3_TRAP, NodeId.IP_B4_TALL_ICE ),

  makeEdge( NodeId.IP_B3_U_LEFT, NodeId.IP_B3_SPLIT ),
  makeEdge( NodeId.IP_B3_U_LEFT, NodeId.IP_B3_U_RIGHT, NodeConnectionId.CanCrossIceSpikeField ),
  makeEdge( NodeId.IP_B3_U_LEFT, NodeId.IP_B4_ESCAPE ),

  makeEdge( NodeId.IP_B3_U_RIGHT, NodeId.IP_B3_U_LEFT, NodeConnectionId.CanCrossIceSpikeField ),
  makeEdge( NodeId.IP_B3_U_RIGHT, NodeId.IP_B2_H_RIGHT ),

  makeEdge( NodeId.IP_B2_H_RIGHT, NodeId.IP_B3_U_RIGHT ),
  makeEdge( NodeId.IP_B2_H_RIGHT, NodeId.IP_B2_H_LEFT, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.IP_B2_H_RIGHT, NodeId.IP_B2_H_OUT, NodeConnectionId.HasHammerDarkWorld ),

  makeEdge( NodeId.IP_B2_H_LEFT, NodeId.IP_B2_H_RIGHT, NodeConnectionId.HasHammerDarkWorld ),

  makeEdge( NodeId.IP_B2_H_OUT, NodeId.IP_B2_H_RIGHT ),
  makeEdge( NodeId.IP_B2_H_OUT, NodeId.IP_B1_BIG_KEY ),

  makeEdge( NodeId.IP_B1_BIG_KEY, NodeId.IP_B2_H_OUT ),
  makeEdge( NodeId.IP_B1_BIG_KEY, NodeId.IP_B1_OUCH ),

  makeEdge( NodeId.IP_B3_SLIPPERY, NodeId.IP_B3_SPLIT ),
  makeEdge( NodeId.IP_B3_SLIPPERY, NodeId.IP_B4_FREEZOR_LEFT ),

  makeEdge( NodeId.IP_B4_FREEZOR_LEFT, NodeId.IP_B4_FREEZOR_ITEM, NodeConnectionId.CanDefeatFreezors ),
  makeEdge( NodeId.IP_B4_FREEZOR_LEFT, NodeId.IP_B3_SLIPPERY ),
  makeEdge( NodeId.IP_B4_FREEZOR_LEFT, NodeId.IP_B4_FREEZOR_RIGHT, NodeConnectionId.CanBombJumpOrHover ),
  makeEdge( NodeId.IP_B4_FREEZOR_LEFT, NodeId.IP_B5_BIG_CHEST_LEFT, NodeConnectionId.HasBootsDarkWorld ),
  makeEdge( NodeId.IP_B4_FREEZOR_LEFT, NodeId.IP_B5_BIG_CHEST_RIGHT ),

  makeEdge( NodeId.IP_B4_FREEZOR_RIGHT, NodeId.IP_B4_FREEZOR_LEFT, NodeConnectionId.CanBombJumpOrHover ),
  makeEdge( NodeId.IP_B4_FREEZOR_RIGHT, NodeId.IP_B4_TALL_ICE ),
  makeEdge( NodeId.IP_B4_FREEZOR_RIGHT, NodeId.IP_B5_BIG_CHEST_RIGHT ),

  makeEdge( NodeId.IP_B4_TALL_ICE, NodeId.IP_B4_FREEZOR_RIGHT ),
  makeEdge( NodeId.IP_B4_TALL_ICE, NodeId.IP_B4_HOOKSHOT_LEFT ),
  makeEdge( NodeId.IP_B4_TALL_ICE, NodeId.IP_B4_BELOW_TALL ),

  makeEdge( NodeId.IP_B4_HOOKSHOT_LEFT, NodeId.IP_B4_HOOKSHOT_RIGHT, NodeConnectionId.HasHookshotOrBombHover ),
  makeEdge( NodeId.IP_B4_HOOKSHOT_RIGHT, NodeId.IP_B4_ESCAPE ),
  makeEdge( NodeId.IP_B4_ESCAPE, NodeId.IP_B3_U_LEFT ),

  makeEdge( NodeId.IP_B4_BELOW_TALL, NodeId.IP_B4_TALL_ICE ),
  makeEdge( NodeId.IP_B4_BELOW_TALL, NodeId.IP_B5_T_ROOM ),

  makeEdge( NodeId.IP_B5_BIG_CHEST_LEFT, NodeId.IP_B5_BIG_CHEST, NodeConnectionId.HasBigKeyForIce ),
  makeEdge( NodeId.IP_B5_BIG_CHEST_LEFT, NodeId.IP_B5_BIG_CHEST_RIGHT ),

  makeEdge( NodeId.IP_B5_BIG_CHEST_RIGHT, NodeId.IP_B5_BIG_CHEST_LEFT, NodeConnectionId.CanHookshotThroughBlocks ),
  makeEdge( NodeId.IP_B5_BIG_CHEST_RIGHT, NodeId.IP_B5_COLORED_BLOCK_CHAOS ),

  makeEdge( NodeId.IP_B5_COLORED_BLOCK_CHAOS, NodeId.IP_B5_BIG_CHEST_RIGHT ),
  makeEdge( NodeId.IP_B5_COLORED_BLOCK_CHAOS, NodeId.IP_B5_FAIRY_PIT, NodeConnectionId.HasBigKeyForIce ),
  makeEdge( NodeId.IP_B5_COLORED_BLOCK_CHAOS, NodeId.IP_B6_SWITCH ),
  makeEdge( NodeId.IP_B5_COLORED_BLOCK_CHAOS, NodeId.IP_B5_BIG_ICE ),

  makeEdge( NodeId.IP_B5_BIG_ICE, NodeId.IP_B5_COLORED_BLOCK_CHAOS ),
  makeEdge( NodeId.IP_B5_BIG_ICE, NodeId.IP_B5_J_ROOM ),

  makeEdge( NodeId.IP_B5_J_ROOM, NodeId.IP_B5_BIG_ICE ),
  makeEdge( NodeId.IP_B5_J_ROOM, NodeId.IP_B5_T_ROOM ),

  makeEdge( NodeId.IP_B5_T_ROOM, NodeId.IP_B5_J_ROOM ),
  makeEdge( NodeId.IP_B5_T_ROOM, NodeId.IP_B4_BELOW_TALL ),

  makeEdge( NodeId.IP_B5_FAIRY_PIT, NodeId.IP_B5_COLORED_BLOCK_CHAOS ),
  makeEdge( NodeId.IP_B5_FAIRY_PIT, NodeId.IP_B6_FAIRY_POT ),

  makeEdge( NodeId.IP_B6_FAIRY_POT, NodeId.IP_B5_FAIRY_PIT ),
  makeEdge( NodeId.IP_B6_FAIRY_POT, NodeId.IP_B6_SWITCH ),

  makeEdge( NodeId.IP_B6_SWITCH, NodeId.IP_B6_FAIRY_POT ),
  makeEdge( NodeId.IP_B6_SWITCH, NodeId.IP_B6_T_ROOM ),
  makeEdge( NodeId.IP_B6_SWITCH, NodeId.IP_B6_ABOVE_KHOLDSTARE ),

  makeEdge( NodeId.IP_B6_ABOVE_KHOLDSTARE, NodeId.IP_B7_BOSS, NodeConnectionId.HasHammerDarkWorld ),
];

export default icePalaceEdges;
