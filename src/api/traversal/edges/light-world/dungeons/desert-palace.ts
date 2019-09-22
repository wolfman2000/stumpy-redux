import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Desert Palace together.

const desertPalaceEdges: Edge[] = [
  makeEdge( NodeId.DP_01_LOBBY, NodeId.DP_01_CENTER_HALLWAY, NodeConnectionId.CanActInLightWorld ),
  makeEdge( NodeId.DP_01_LOBBY, NodeId.LIGHT_DESERT_PALACE_CENTER_ENTRANCE ),

  makeEdge( NodeId.DP_01_CENTER_HALLWAY, NodeId.DP_01_MAP_ROOM ),
  makeEdge( NodeId.DP_01_CENTER_HALLWAY, NodeId.DP_01_EAST_HALLWAY ),
  makeEdge( NodeId.DP_01_CENTER_HALLWAY, NodeId.DP_01_WEST_HALLWAY ),

  makeEdge( NodeId.DP_01_EAST_HALLWAY, NodeId.DP_01_CENTER_HALLWAY ),
  makeEdge( NodeId.DP_01_EAST_HALLWAY, NodeId.DP_01_DANGER_ROOM ),
  makeEdge( NodeId.DP_01_EAST_HALLWAY, NodeId.DP_01_COMPASS_ROOM, NodeConnectionId.HasKeyForDesertDungeonItems ),
  makeEdge( NodeId.DP_01_EAST_HALLWAY, NodeId.DP_01_EAST_ENTRANCE ),

  makeEdge( NodeId.DP_01_COMPASS_ROOM, NodeId.DP_01_BIG_KEY_ROOM, NodeConnectionId.HasReliableWeapon ),

  makeEdge( NodeId.DP_01_EAST_ENTRANCE, NodeId.DP_01_EAST_HALLWAY ),
  makeEdge( NodeId.DP_01_EAST_HALLWAY, NodeId.LIGHT_DESERT_PALACE_RIGHT_ENTRANCE ),

  makeEdge( NodeId.DP_01_WEST_HALLWAY, NodeId.DP_01_CENTER_HALLWAY ),
  makeEdge( NodeId.DP_01_WEST_HALLWAY, NodeId.DP_01_TORCH_ROOM ),
  makeEdge( NodeId.DP_01_WEST_HALLWAY, NodeId.DP_01_POT_ROOM ),
  makeEdge( NodeId.DP_01_WEST_HALLWAY, NodeId.DP_01_WEST_ENTRANCE ),

  makeEdge( NodeId.DP_01_TORCH_ROOM, NodeId.DP_01_TORCH_ITEM, NodeConnectionId.CanKnockItemOffTorch ),

  makeEdge( NodeId.DP_01_POT_ROOM, NodeId.DP_01_BIG_CHEST_ROOM, NodeConnectionId.CanActInLightWorld ),

  makeEdge( NodeId.DP_01_BIG_CHEST_ROOM, NodeId.DP_01_BIG_CHEST, NodeConnectionId.HasBigKeyForDesert ),

  makeEdge( NodeId.DP_01_WEST_ENTRANCE, NodeId.DP_01_WEST_HALLWAY ),
  makeEdge( NodeId.DP_01_WEST_ENTRANCE, NodeId.LIGHT_DESERT_PALACE_LEFT_ENTRANCE ),

  makeEdge( NodeId.DP_01_BACK_ENTRANCE, NodeId.LIGHT_DESERT_PALACE_BACK_ENTRANCE ),
  makeEdge( NodeId.DP_01_BACK_ENTRANCE, NodeId.DP_01_TILE_ROOM ),

  makeEdge( NodeId.DP_01_TILE_ROOM, NodeId.DP_02_HALLWAY ),

  makeEdge( NodeId.DP_02_HALLWAY, NodeId.DP_02_TENTACLE_ROOM ),

  makeEdge( NodeId.DP_02_TENTACLE_ROOM, NodeId.DP_02_BEAMOS_ROOM, NodeConnectionId.HasReliableWeapon ),

  makeEdge( NodeId.DP_02_BEAMOS_ROOM, NodeId.DP_02_TILE_ROOM ),

  makeEdge( NodeId.DP_02_TILE_ROOM, NodeId.DP_02_TORCH_ROOM ),

  makeEdge( NodeId.DP_02_TORCH_ROOM, NodeId.DP_02_BOSS, NodeConnectionId.HasTorchLightSource ),
];

export default desertPalaceEdges;
