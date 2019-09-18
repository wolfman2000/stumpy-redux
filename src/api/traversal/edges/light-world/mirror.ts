import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

const makeMirrorEdge = (
  from: NodeId,
  to: NodeId,
  how: NodeConnectionId = NodeConnectionId.HasMirrorInverted,
): Edge => {
  return makeEdge( from, to, how );
};

const lightMirrorEdges: Edge[] = [
  makeMirrorEdge( NodeId.LIGHT_A1_NW, NodeId.DARK_A1_NW ),
  makeMirrorEdge( NodeId.LIGHT_A1_NE, NodeId.DARK_A1_NE ),
  makeMirrorEdge( NodeId.LIGHT_A1_SW, NodeId.DARK_A1_SW ),
  makeMirrorEdge( NodeId.LIGHT_A1_SE, NodeId.DARK_A1_SE ),
  makeMirrorEdge( NodeId.LIGHT_A3, NodeId.DARK_A3 ),
  makeMirrorEdge( NodeId.LIGHT_A4_LOWER, NodeId.DARK_A4_LOWER, NodeConnectionId.Always ), // The tile warp is free.
  makeMirrorEdge( NodeId.LIGHT_A4_SPECTACLE_ROCK, NodeId.DARK_A4_SPECTACLE_ROCK ),
  makeMirrorEdge( NodeId.LIGHT_A4_UPPER, NodeId.DARK_A4_UPPER ),
  makeMirrorEdge( NodeId.LIGHT_A6_UPPER_LEFT, NodeId.DARK_A6_UPPER_LEFT ),
  makeMirrorEdge( NodeId.LIGHT_A6_UPPER, NodeId.DARK_A6_UPPER ),
  makeMirrorEdge( NodeId.LIGHT_A6_ISLAND, NodeId.DARK_A6_ISLAND ),
  makeMirrorEdge( NodeId.LIGHT_A6_SPIRAL_TOP, NodeId.DARK_A6_SPIRAL_TOP ),
  makeMirrorEdge( NodeId.LIGHT_A6_MIMIC_LEDGE, NodeId.DARK_A6_MIMIC_LEDGE ),
  makeMirrorEdge( NodeId.LIGHT_A6_FAIRY_LEDGE, NodeId.DARK_A6_FAIRY_LEDGE ),
  makeMirrorEdge( NodeId.LIGHT_A6_FAIRY_LAND, NodeId.DARK_A6_FAIRY_LAND ),
  makeMirrorEdge( NodeId.LIGHT_A6_LOWER, NodeId.DARK_A6_LOWER, NodeConnectionId.CanHeavyLiftToDarkWorld ),
  makeMirrorEdge( NodeId.LIGHT_A6_LOWER_LEFT, NodeId.DARK_A6_LOWER_LEFT ),
  makeMirrorEdge( NodeId.LIGHT_A8, NodeId.DARK_A8 ),
  makeMirrorEdge(
    NodeId.LIGHT_A8_UPPER_ROCK,
    NodeId.DARK_A8_UPPER_ROCK,
    NodeConnectionId.CanWarpToDarkFromUpperTurtleRock,
  ),

  makeMirrorEdge( NodeId.LIGHT_B3, NodeId.DARK_B3 ),
  makeMirrorEdge( NodeId.LIGHT_B3_DM_BOTTOM, NodeId.DARK_B3_BUMPER_BOTTOM ),
  makeMirrorEdge( NodeId.LIGHT_B3_DM_TOP, NodeId.DARK_B3_BUMPER_TOP ),
  makeMirrorEdge( NodeId.LIGHT_B8, NodeId.DARK_B8 ),

  makeMirrorEdge( NodeId.LIGHT_C1_WEST, NodeId.DARK_C1_WEST ),
  makeMirrorEdge( NodeId.LIGHT_C1_NE, NodeId.DARK_C1_NE ),
  makeMirrorEdge( NodeId.LIGHT_C1_EAST, NodeId.DARK_C1_EAST, NodeConnectionId.CanLiftToDarkWorld ),
  makeMirrorEdge( NodeId.LIGHT_C1_SE, NodeId.DARK_C1_SE ),
  makeMirrorEdge( NodeId.LIGHT_C2, NodeId.DARK_C2 ),
  makeMirrorEdge( NodeId.LIGHT_C3, NodeId.DARK_C3 ),
  makeMirrorEdge( NodeId.LIGHT_C4, NodeId.DARK_C4 ),
  makeMirrorEdge( NodeId.LIGHT_C5, NodeId.DARK_C5 ),
  makeMirrorEdge( NodeId.LIGHT_C5_KING_AREA, NodeId.DARK_C5_KING_AREA ),
  makeMirrorEdge( NodeId.LIGHT_C5_LEDGE, NodeId.DARK_C5_LEDGE ),
  makeMirrorEdge( NodeId.LIGHT_C6_WEST, NodeId.DARK_C6_WEST ),
  makeMirrorEdge( NodeId.LIGHT_C6_EAST, NodeId.DARK_C6_EAST ),
  makeMirrorEdge( NodeId.LIGHT_C7, NodeId.DARK_C7 ),
  makeMirrorEdge( NodeId.LIGHT_C7_UPPER, NodeId.DARK_C7_UPPER ),
  makeMirrorEdge( NodeId.LIGHT_C8, NodeId.DARK_C8 ),

  makeMirrorEdge( NodeId.LIGHT_D1, NodeId.DARK_D1 ),
  makeMirrorEdge( NodeId.LIGHT_D3, NodeId.DARK_D3 ),
  makeMirrorEdge( NodeId.LIGHT_D4_OUTER, NodeId.DARK_D4_OUTER, NodeConnectionId.CanEnterDarkWorldViaAgahnim ),
  makeMirrorEdge( NodeId.LIGHT_D4_OUTER, NodeId.DARK_D4_OUTER ),
  makeMirrorEdge( NodeId.LIGHT_D4_GARDEN, NodeId.DARK_D4_GARDEN ),
  makeMirrorEdge( NodeId.LIGHT_D4_ROOFTOP, NodeId.DARK_D4_ROOFTOP ),
  makeMirrorEdge( NodeId.LIGHT_D6_WEST, NodeId.DARK_D6_WEST ),
  makeMirrorEdge( NodeId.LIGHT_D6_EAST, NodeId.DARK_D6_EAST ),
  makeMirrorEdge( NodeId.LIGHT_D7, NodeId.DARK_D7 ),

  makeMirrorEdge( NodeId.LIGHT_E3, NodeId.DARK_E3 ),
  makeMirrorEdge( NodeId.LIGHT_E6, NodeId.DARK_E6 ),

  makeMirrorEdge( NodeId.LIGHT_F1_LOWER, NodeId.DARK_F1_LOWER ),
  makeMirrorEdge( NodeId.LIGHT_F1_UPPER, NodeId.DARK_F1_UPPER ),
  makeMirrorEdge( NodeId.LIGHT_F1_GAME, NodeId.DARK_F1_GAME ),
  makeMirrorEdge( NodeId.LIGHT_F2_UPPER, NodeId.DARK_F2_UPPER ),
  makeMirrorEdge( NodeId.LIGHT_F2_LOWER, NodeId.DARK_F2_LOWER ),
  makeMirrorEdge( NodeId.LIGHT_F3, NodeId.DARK_F3 ),
  makeMirrorEdge( NodeId.LIGHT_F3_BYPASS, NodeId.DARK_F3_BYPASS ),
  makeMirrorEdge( NodeId.LIGHT_F4, NodeId.DARK_F4 ),
  makeMirrorEdge( NodeId.LIGHT_F5, NodeId.DARK_F5 ),
  makeMirrorEdge( NodeId.LIGHT_F6_LOWER, NodeId.DARK_F6_LOWER ),
  makeMirrorEdge( NodeId.LIGHT_F6_UPPER, NodeId.DARK_F6_UPPER ),
  makeMirrorEdge( NodeId.LIGHT_F7, NodeId.DARK_F7 ),
  makeMirrorEdge( NodeId.LIGHT_F8, NodeId.DARK_F8 ),
  makeMirrorEdge( NodeId.LIGHT_F8_PEGS, NodeId.DARK_F8_PEGS, NodeConnectionId.CanLiftToDarkWorld ),

  makeMirrorEdge( NodeId.LIGHT_G1, NodeId.DARK_G1 ),
  makeMirrorEdge( NodeId.LIGHT_G1_WEST, NodeId.DARK_G1_WEST ),
  makeMirrorEdge( NodeId.LIGHT_G1_SOUTH, NodeId.DARK_G1_SOUTH, NodeConnectionId.CanHeavyLiftToDarkWorld ),
  makeMirrorEdge( NodeId.LIGHT_G1_NE, NodeId.DARK_G1_NE ),
  makeMirrorEdge( NodeId.LIGHT_G1_TOP, NodeId.DARK_G1_TOP ),
  makeMirrorEdge( NodeId.LIGHT_G1_GATE_NORTH, NodeId.DARK_G1_GATE_NORTH ),
  makeMirrorEdge( NodeId.LIGHT_G1_GATE_SOUTH, NodeId.DARK_G1_GATE_SOUTH ),
  makeMirrorEdge( NodeId.LIGHT_G3, NodeId.DARK_G3 ),
  makeMirrorEdge( NodeId.LIGHT_G3_VT, NodeId.DARK_G3_VT ),
  makeMirrorEdge( NodeId.LIGHT_G4_BYPASS, NodeId.DARK_G4_BYPASS ),
  makeMirrorEdge( NodeId.LIGHT_G4, NodeId.DARK_G4 ),
  makeMirrorEdge( NodeId.LIGHT_G4_PORTAL_AREA, NodeId.DARK_G4_PORTAL_AREA, NodeConnectionId.CanLiftToDarkWorld ),
  makeMirrorEdge( NodeId.LIGHT_G5, NodeId.DARK_G5 ),
  makeMirrorEdge( NodeId.LIGHT_G6_NW, NodeId.DARK_G6_NW ),
  makeMirrorEdge( NodeId.LIGHT_G6_NE, NodeId.DARK_G6_NE ),
  makeMirrorEdge( NodeId.LIGHT_G6_SW, NodeId.DARK_G6_SW ),
  makeMirrorEdge( NodeId.LIGHT_G6_SE, NodeId.DARK_G6_SE ),
  makeMirrorEdge( NodeId.LIGHT_G6_ITEM_ISLAND, NodeId.DARK_G6_ITEM_ISLAND ),
  makeMirrorEdge(
    NodeId.LIGHT_G6_UPGRADE_ISLAND,
    NodeId.DARK_G6_UPGRADE_ISLAND,
    NodeConnectionId.CanHeavyLiftToDarkWorld,
  ),
  makeMirrorEdge( NodeId.LIGHT_G8, NodeId.DARK_G8 ),

  makeMirrorEdge( NodeId.LIGHT_H3, NodeId.DARK_H3 ),
  makeMirrorEdge( NodeId.LIGHT_H3_TABLET_AREA, NodeId.DARK_H3_TABLET_AREA ),
  makeMirrorEdge( NodeId.LIGHT_H4, NodeId.DARK_H4 ),
  makeMirrorEdge( NodeId.LIGHT_H5, NodeId.DARK_H5 ),
  makeMirrorEdge( NodeId.LIGHT_H8, NodeId.DARK_H8 ),
];

export { lightMirrorEdges };
