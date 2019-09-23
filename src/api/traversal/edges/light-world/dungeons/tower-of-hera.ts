import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Tower of Hera together.

const towerOfHeraEdges: Edge[] = [
  makeEdge( NodeId.TOH_02_ENTRANCE, NodeId.LIGHT_HERA_ENTRANCE ),
  makeEdge( NodeId.TOH_02_ENTRANCE, NodeId.TOH_02_LOBBY, NodeConnectionId.HasReliableProjectile ),

  makeEdge( NodeId.TOH_02_LOBBY, NodeId.TOH_01_SMALL_KEY ),
  makeEdge( NodeId.TOH_02_LOBBY, NodeId.TOH_01_TILE_ROOM, NodeConnectionId.HasKeyForHeraBasement ),
  makeEdge( NodeId.TOH_02_LOBBY, NodeId.TOH_03_START ),

  makeEdge( NodeId.TOH_01_TILE_ROOM, NodeId.TOH_01_MINI_MOLDORM ),
  makeEdge( NodeId.TOH_01_MINI_MOLDORM, NodeId.TOH_01_BIG_KEY, NodeConnectionId.CanLightTorch ),

  makeEdge( NodeId.TOH_03_START, NodeId.TOH_03_BIG_KEY_DOOR ),
  makeEdge( NodeId.TOH_03_BIG_KEY_DOOR, NodeId.TOH_03_END, NodeConnectionId.HasBigKeyForHera ),
  makeEdge( NodeId.TOH_03_END, NodeId.TOH_04_MAIN ),

  makeEdge( NodeId.TOH_04_MAIN, NodeId.TOH_04_BIG_CHEST_PLATFORM, NodeConnectionId.HasHookshotOrBombHover ),
  makeEdge( NodeId.TOH_04_MAIN, NodeId.TOH_05_ONLY ),

  makeEdge( NodeId.TOH_04_BIG_CHEST_PLATFORM, NodeId.TOH_04_BIG_CHEST, NodeConnectionId.HasBigKeyForHera ),

  makeEdge( NodeId.TOH_05_ONLY, NodeId.TOH_04_BIG_CHEST_PLATFORM ),
  makeEdge( NodeId.TOH_05_ONLY, NodeId.TOH_06_LEDGE ),
  makeEdge( NodeId.TOH_06_LEDGE, NodeId.TOH_06_BOSS ),
];

export default towerOfHeraEdges;
