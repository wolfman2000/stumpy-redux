import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Skull Woods together.

const skullWoodsEdges: Edge[] = [
  makeEdge( NodeId.SW_01_PIT_WEST, NodeId.SW_01_COMPASS ),

  makeEdge( NodeId.SW_01_COMPASS, NodeId.SW_01_KEY_ARMS ),
  makeEdge( NodeId.SW_01_COMPASS, NodeId.SW_01_PINBALL_ROOM ),

  makeEdge( NodeId.SW_01_KEY_ARMS, NodeId.SW_01_COMPASS ),
  makeEdge( NodeId.SW_01_KEY_ARMS, NodeId.SW_01_EXIT ),

  makeEdge( NodeId.SW_01_PINBALL_ROOM, NodeId.SW_01_MAP ),

  makeEdge( NodeId.SW_01_MAP, NodeId.SW_01_EXIT ),
  makeEdge( NodeId.SW_01_MAP, NodeId.SW_01_POTS, NodeConnectionId.HasHookshotDarkWorld ),

  makeEdge( NodeId.SW_01_POTS, NodeId.SW_01_BIG_CHEST_AREA, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.SW_01_POTS, NodeId.SW_01_MAP ),

  makeEdge( NodeId.SW_01_BIG_CHEST_AREA, NodeId.SW_01_BIG_CHEST, NodeConnectionId.HasBigKeyForSkull ),
  makeEdge( NodeId.SW_01_BIG_CHEST_AREA, NodeId.SW_01_POTS ),
  makeEdge( NodeId.SW_01_BIG_CHEST_AREA, NodeId.SW_01_EXIT, NodeConnectionId.HasHookshotOrBombHover ),

  makeEdge( NodeId.SW_01_EXIT, NodeId.SW_01_KEY_ARMS ),
  makeEdge( NodeId.SW_01_EXIT, NodeId.SW_01_MAP ),
  makeEdge( NodeId.SW_01_EXIT, NodeId.DARK_SW_BIG_CHEST_EXIT ),
  makeEdge( NodeId.SW_01_EXIT, NodeId.SW_01_BIG_CHEST_AREA, NodeConnectionId.CanBombJumpOrHover ),

  makeEdge( NodeId.SW_02_CONNECTOR_RIGHT, NodeId.DARK_SW_CONNECTOR_RIGHT_ENTRANCE ),
  makeEdge( NodeId.SW_02_CONNECTOR_RIGHT, NodeId.SW_02_BIG_KEY ),
  makeEdge( NodeId.SW_02_CONNECTOR_RIGHT, NodeId.SW_02_PIT ),

  makeEdge( NodeId.SW_02_PIT, NodeId.SW_02_CONNECTOR_RIGHT ),
  makeEdge( NodeId.SW_02_PIT, NodeId.SW_02_CONNECTOR_LEFT ),

  makeEdge( NodeId.SW_02_CONNECTOR_LEFT, NodeId.SW_02_DANGER ),
  makeEdge( NodeId.SW_02_CONNECTOR_LEFT, NodeId.SW_02_PIT ),
  makeEdge( NodeId.SW_02_CONNECTOR_LEFT, NodeId.DARK_SW_CONNECTOR_LEFT_ENTRANCE ),

  makeEdge( NodeId.SW_03_ENTRANCE, NodeId.DARK_SW_BACK_ENTRANCE ),
  makeEdge( NodeId.SW_03_ENTRANCE, NodeId.SW_03_BUMPER ),
  makeEdge( NodeId.SW_03_ENTRANCE, NodeId.SW_03_PITS ),

  makeEdge( NodeId.SW_03_PITS, NodeId.SW_03_TORCHES ),
  makeEdge( NodeId.SW_03_TORCHES, NodeId.SW_03_CURTAIN, NodeConnectionId.CanLightRodTorches ),
  makeEdge( NodeId.SW_03_CURTAIN, NodeId.SW_03_KEY, NodeConnectionId.CanCutCurtainWall ),
  makeEdge( NodeId.SW_03_KEY, NodeId.SW_03_SLIDE ),
  makeEdge( NodeId.SW_03_SLIDE, NodeId.SW_03_BOSS ),
];

export default skullWoodsEdges;
