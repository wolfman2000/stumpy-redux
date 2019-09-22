import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Eastern Palace together.

const easternPalaceEdges: Edge[] = [
  makeEdge( NodeId.EP_01_LOBBY, NodeId.LIGHT_EASTERN_PALACE_ENTRANCE ),
  makeEdge( NodeId.EP_01_LOBBY, NodeId.EP_01_CHASM ),

  makeEdge( NodeId.EP_01_CHASM, NodeId.EP_01_BOWLING ),

  makeEdge( NodeId.EP_01_BOWLING, NodeId.EP_01_OVERHANG ),

  makeEdge( NodeId.EP_01_OVERHANG, NodeId.EP_01_OVERHANG_LEFT ),
  makeEdge( NodeId.EP_01_OVERHANG, NodeId.EP_01_OVERHANG_RIGHT ),

  makeEdge( NodeId.EP_01_OVERHANG_RIGHT, NodeId.EP_01_OVERHANG_UPRIGHT ),
  makeEdge( NodeId.EP_01_OVERHANG_RIGHT, NodeId.EP_01_MAP_CHEST, NodeConnectionId.HasHookshotLightWorld ),

  makeEdge( NodeId.EP_01_OVERHANG_UPRIGHT, NodeId.EP_01_MAP_CHEST ),

  makeEdge( NodeId.EP_01_OVERHANG_LEFT, NodeId.EP_01_STALFOS_CORNER ),

  makeEdge( NodeId.EP_01_STALFOS_CORNER, NodeId.EP_01_COMPASS_ROOM ),

  makeEdge( NodeId.EP_01_COMPASS_ROOM, NodeId.EP_01_HINT_ROOM ),

  makeEdge( NodeId.EP_01_HINT_ROOM, NodeId.EP_01_BIG_CHEST_ROOM ),

  makeEdge( NodeId.EP_01_BIG_CHEST_ROOM, NodeId.EP_01_BIG_CHEST, NodeConnectionId.HasBigKeyForEastern ),
  makeEdge( NodeId.EP_01_BIG_CHEST_ROOM, NodeId.EP_01_EYEGORE, NodeConnectionId.HasBigKeyForEastern ),
  makeEdge( NodeId.EP_01_BIG_CHEST_ROOM, NodeId.EP_01_DARK_HALLWAY ),

  makeEdge( NodeId.EP_01_DARK_HALLWAY, NodeId.EP_01_BIG_KEY_CHEST_ROOM, NodeConnectionId.HasLightSource ),

  makeEdge( NodeId.EP_01_BIG_KEY_CHEST_ROOM, NodeId.EP_01_HINT_ROOM ),

  makeEdge( NodeId.EP_01_EYEGORE, NodeId.EP_02_HALLWAY, NodeConnectionId.HasTorchLightSource ),

  makeEdge( NodeId.EP_02_HALLWAY, NodeId.EP_02_RED_EYEGORE ),

  makeEdge( NodeId.EP_02_RED_EYEGORE, NodeId.EP_02_BOSS, NodeConnectionId.CanDefeatRedEyegores ),
];

export default easternPalaceEdges;
