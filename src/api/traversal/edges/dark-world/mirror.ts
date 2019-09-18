import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

const makeMirrorEdge = (
  from: NodeId,
  to: NodeId,
  how: NodeConnectionId = NodeConnectionId.HasMirror,
): Edge => {
  return makeEdge( from, to, how );
};

const lightMirrorEdges: Edge[] = [
  makeMirrorEdge( NodeId.DARK_A1_NW, NodeId.LIGHT_A1_NW ),
  makeMirrorEdge( NodeId.DARK_A1_NE, NodeId.LIGHT_A1_NE ),
  makeMirrorEdge( NodeId.DARK_A1_SW, NodeId.LIGHT_A1_SW ),
  makeMirrorEdge( NodeId.DARK_A1_SE, NodeId.LIGHT_A1_SE ),
  makeMirrorEdge( NodeId.DARK_A3, NodeId.LIGHT_A3 ),
  makeMirrorEdge( NodeId.DARK_A4_LOWER, NodeId.LIGHT_A4_LOWER, NodeConnectionId.Always ), // The tile warp is free.
  makeMirrorEdge( NodeId.DARK_A4_SPECTACLE_ROCK, NodeId.LIGHT_A4_SPECTACLE_ROCK ),
  makeMirrorEdge( NodeId.DARK_A4_UPPER, NodeId.LIGHT_A4_UPPER ),
  makeMirrorEdge( NodeId.DARK_A6_UPPER_LEFT, NodeId.LIGHT_A6_UPPER_LEFT ),
  makeMirrorEdge( NodeId.DARK_A6_UPPER, NodeId.LIGHT_A6_UPPER ),
  makeMirrorEdge( NodeId.DARK_A6_ISLAND, NodeId.LIGHT_A6_ISLAND ),
  makeMirrorEdge( NodeId.DARK_A6_SPIRAL_TOP, NodeId.LIGHT_A6_SPIRAL_TOP ),
  makeMirrorEdge( NodeId.DARK_A6_MIMIC_LEDGE, NodeId.LIGHT_A6_MIMIC_LEDGE ),
  makeMirrorEdge( NodeId.DARK_A6_FAIRY_LEDGE, NodeId.LIGHT_A6_FAIRY_LEDGE ),
  makeMirrorEdge( NodeId.DARK_A6_FAIRY_LAND, NodeId.LIGHT_A6_FAIRY_LAND ),
  makeMirrorEdge( NodeId.DARK_A6_LOWER, NodeId.LIGHT_A6_LOWER, NodeConnectionId.CanHeavyLiftToLightWorld ),
  makeMirrorEdge( NodeId.DARK_A6_LOWER_LEFT, NodeId.LIGHT_A6_LOWER_LEFT ),
  makeMirrorEdge( NodeId.DARK_A8, NodeId.LIGHT_A8 ),
  makeMirrorEdge( NodeId.DARK_A8_UPPER_ROCK, NodeId.LIGHT_A8_UPPER_ROCK, NodeConnectionId.CanHeavyLiftToLightWorld ),

  makeMirrorEdge( NodeId.DARK_B3, NodeId.LIGHT_B3 ),
  makeMirrorEdge( NodeId.DARK_B3_BUMPER_BOTTOM, NodeId.LIGHT_B3_DM_BOTTOM ),
  makeMirrorEdge( NodeId.DARK_B3_BUMPER_TOP, NodeId.LIGHT_B3_DM_TOP ),
  makeMirrorEdge( NodeId.DARK_B8, NodeId.LIGHT_B8 ),

  makeMirrorEdge( NodeId.DARK_C1_WEST, NodeId.LIGHT_C1_WEST ),
  makeMirrorEdge( NodeId.DARK_C1_NE, NodeId.LIGHT_C1_NE ),
  makeMirrorEdge( NodeId.DARK_C1_EAST, NodeId.LIGHT_C1_EAST, NodeConnectionId.CanLiftToLightWorld ),
  makeMirrorEdge( NodeId.DARK_C1_SE, NodeId.LIGHT_C1_SE ),
  makeMirrorEdge( NodeId.DARK_C2, NodeId.LIGHT_C2 ),
  makeMirrorEdge( NodeId.DARK_C3, NodeId.LIGHT_C3 ),
  makeMirrorEdge( NodeId.DARK_C4, NodeId.LIGHT_C4 ),
  makeMirrorEdge( NodeId.DARK_C5, NodeId.LIGHT_C5 ),
  makeMirrorEdge( NodeId.DARK_C5_KING_AREA, NodeId.LIGHT_C5_KING_AREA ),
  makeMirrorEdge( NodeId.DARK_C5_LEDGE, NodeId.LIGHT_C5_LEDGE ),
  makeMirrorEdge( NodeId.DARK_C6_WEST, NodeId.LIGHT_C6_WEST ),
  makeMirrorEdge( NodeId.DARK_C6_EAST, NodeId.LIGHT_C6_EAST ),
  makeMirrorEdge( NodeId.DARK_C7, NodeId.LIGHT_C7 ),
  makeMirrorEdge( NodeId.DARK_C7_UPPER, NodeId.LIGHT_C7_UPPER ),
  makeMirrorEdge( NodeId.DARK_C8, NodeId.LIGHT_C8 ),

  makeMirrorEdge( NodeId.DARK_D1, NodeId.LIGHT_D1 ),
  makeMirrorEdge( NodeId.DARK_D3, NodeId.LIGHT_D3 ),
  makeMirrorEdge( NodeId.DARK_D4_OUTER, NodeId.LIGHT_D4_OUTER, NodeConnectionId.CanEnterDarkWorldViaAgahnim ),
  makeMirrorEdge( NodeId.DARK_D4_OUTER, NodeId.LIGHT_D4_OUTER ),
  makeMirrorEdge( NodeId.DARK_D4_GARDEN, NodeId.LIGHT_D4_GARDEN ),
  makeMirrorEdge( NodeId.DARK_D4_ROOFTOP, NodeId.LIGHT_D4_ROOFTOP ),
  makeMirrorEdge( NodeId.DARK_D6_WEST, NodeId.LIGHT_D6_WEST ),
  makeMirrorEdge( NodeId.DARK_D6_EAST, NodeId.LIGHT_D6_EAST ),
  makeMirrorEdge( NodeId.DARK_D7, NodeId.LIGHT_D7 ),

  makeMirrorEdge( NodeId.DARK_E3, NodeId.LIGHT_E3 ),
  makeMirrorEdge( NodeId.DARK_E6, NodeId.LIGHT_E6 ),

  makeMirrorEdge( NodeId.DARK_F1_LOWER, NodeId.LIGHT_F1_LOWER ),
  makeMirrorEdge( NodeId.DARK_F1_UPPER, NodeId.LIGHT_F1_UPPER ),
  makeMirrorEdge( NodeId.DARK_F1_GAME, NodeId.LIGHT_F1_GAME ),
  makeMirrorEdge( NodeId.DARK_F2_UPPER, NodeId.LIGHT_F2_UPPER ),
  makeMirrorEdge( NodeId.DARK_F2_LOWER, NodeId.LIGHT_F2_LOWER ),
  makeMirrorEdge( NodeId.DARK_F3, NodeId.LIGHT_F3 ),
  makeMirrorEdge( NodeId.DARK_F3_BYPASS, NodeId.LIGHT_F3_BYPASS ),
  makeMirrorEdge( NodeId.DARK_F4, NodeId.LIGHT_F4 ),
  makeMirrorEdge( NodeId.DARK_F5, NodeId.LIGHT_F5 ),
  makeMirrorEdge( NodeId.DARK_F6_LOWER, NodeId.LIGHT_F6_LOWER ),
  makeMirrorEdge( NodeId.DARK_F6_UPPER, NodeId.LIGHT_F6_UPPER ),
  makeMirrorEdge( NodeId.DARK_F7, NodeId.LIGHT_F7 ),
  makeMirrorEdge( NodeId.DARK_F8, NodeId.LIGHT_F8 ),
  makeMirrorEdge( NodeId.DARK_F8_PEGS, NodeId.LIGHT_F8_PEGS, NodeConnectionId.CanLiftToLightWorld ),

  makeMirrorEdge( NodeId.DARK_G1, NodeId.LIGHT_G1 ),
  makeMirrorEdge( NodeId.DARK_G1_WEST, NodeId.LIGHT_G1_WEST ),
  makeMirrorEdge( NodeId.DARK_G1_SOUTH, NodeId.LIGHT_G1_SOUTH, NodeConnectionId.CanHeavyLiftToLightWorld ),
  makeMirrorEdge( NodeId.DARK_G1_NE, NodeId.LIGHT_G1_NE ),
  makeMirrorEdge( NodeId.DARK_G1_TOP, NodeId.LIGHT_G1_TOP ),
  makeMirrorEdge( NodeId.DARK_G1_GATE_NORTH, NodeId.LIGHT_G1_GATE_NORTH ),
  makeMirrorEdge( NodeId.DARK_G1_GATE_SOUTH, NodeId.LIGHT_G1_GATE_SOUTH ),
  makeMirrorEdge( NodeId.DARK_G3, NodeId.LIGHT_G3 ),
  makeMirrorEdge( NodeId.DARK_G3_VT, NodeId.LIGHT_G3_VT ),
  makeMirrorEdge( NodeId.DARK_G4_BYPASS, NodeId.LIGHT_G4_BYPASS ),
  makeMirrorEdge( NodeId.DARK_G4, NodeId.LIGHT_G4 ),
  makeMirrorEdge( NodeId.DARK_G4_PORTAL_AREA, NodeId.LIGHT_G4_PORTAL_AREA, NodeConnectionId.CanLiftToLightWorld ),
  makeMirrorEdge( NodeId.DARK_G5, NodeId.LIGHT_G5 ),
  makeMirrorEdge( NodeId.DARK_G6_NW, NodeId.LIGHT_G6_NW ),
  makeMirrorEdge( NodeId.DARK_G6_NE, NodeId.LIGHT_G6_NE ),
  makeMirrorEdge( NodeId.DARK_G6_SW, NodeId.LIGHT_G6_SW ),
  makeMirrorEdge( NodeId.DARK_G6_SE, NodeId.LIGHT_G6_SE ),
  makeMirrorEdge( NodeId.DARK_G6_ITEM_ISLAND, NodeId.LIGHT_G6_ITEM_ISLAND ),
  makeMirrorEdge(
    NodeId.DARK_G6_UPGRADE_ISLAND,
    NodeId.LIGHT_G6_UPGRADE_ISLAND,
    NodeConnectionId.CanHeavyLiftToLightWorld,
  ),
  makeMirrorEdge( NodeId.DARK_G8, NodeId.LIGHT_G8 ),

  makeMirrorEdge( NodeId.DARK_H3, NodeId.LIGHT_H3 ),
  makeMirrorEdge( NodeId.DARK_H3_TABLET_AREA, NodeId.LIGHT_H3_TABLET_AREA ),
  makeMirrorEdge( NodeId.DARK_H4, NodeId.LIGHT_H4 ),
  makeMirrorEdge( NodeId.DARK_H5, NodeId.LIGHT_H5 ),
  makeMirrorEdge( NodeId.DARK_H8, NodeId.LIGHT_H8 ),
];

export { lightMirrorEdges };
