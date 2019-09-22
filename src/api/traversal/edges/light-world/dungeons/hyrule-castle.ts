import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Hyrule Castle together.

const hyruleCastleEdges: Edge[] = [
  makeEdge( NodeId.HC_LOBBY, NodeId.LIGHT_HYRULE_CASTLE_CENTER_ENTRANCE ),
  makeEdge( NodeId.HC_LOBBY, NodeId.HC_LEFT ),
  makeEdge( NodeId.HC_LOBBY, NodeId.HC_RIGHT ),
  makeEdge( NodeId.HC_LOBBY, NodeId.HC_THRONE ),

  makeEdge( NodeId.HC_LEFT, NodeId.HC_LOBBY ),
  makeEdge( NodeId.HC_LEFT, NodeId.LIGHT_HYRULE_CASTLE_LEFT_ENTRANCE ),
  makeEdge( NodeId.HC_LEFT, NodeId.HC_BACK ),

  makeEdge( NodeId.HC_RIGHT, NodeId.HC_LOBBY ),
  makeEdge( NodeId.HC_RIGHT, NodeId.LIGHT_HYRULE_CASTLE_LEFT_ENTRANCE ),
  makeEdge( NodeId.HC_RIGHT, NodeId.HC_BACK ),

  makeEdge( NodeId.HC_BACK, NodeId.HC_LEFT ),
  makeEdge( NodeId.HC_BACK, NodeId.HC_RIGHT ),
  makeEdge( NodeId.HC_BACK, NodeId.HC_BASEMENT_1 ),

  makeEdge( NodeId.HC_BASEMENT_1, NodeId.HC_BACK ),
  makeEdge( NodeId.HC_BASEMENT_1, NodeId.HC_BASEMENT_2 ),

  makeEdge( NodeId.HC_BASEMENT_2, NodeId.HC_ZELDAS_CELL ),
  makeEdge( NodeId.HC_BASEMENT_2, NodeId.HC_BASEMENT_1 ),

  makeEdge( NodeId.HC_ZELDAS_CELL, NodeId.HC_BASEMENT_2 ),

  makeEdge( NodeId.HC_THRONE, NodeId.HC_BACK ),
  makeEdge( NodeId.HC_THRONE, NodeId.HC_SEWERS_DRY ),

  makeEdge( NodeId.HC_SEWERS_DRY, NodeId.HC_SEWERS_ITEM, NodeConnectionId.HasStandardTorchLightSource ),

  makeEdge( NodeId.HC_SEWERS_ITEM, NodeId.HC_SEWERS_WET, NodeConnectionId.CanOpenLockedDoorInSewers ),

  makeEdge( NodeId.HC_SEWERS_WET, NodeId.HC_SEWERS_ESCAPE, NodeConnectionId.HasStandardTorchLightSource ),
  makeEdge( NodeId.HC_SEWERS_WET, NodeId.HC_SEWERS_ITEM, NodeConnectionId.CanOpenLockedDoorInSewers ),

  makeEdge( NodeId.HC_SEWERS_ESCAPE, NodeId.HC_SEWERS_SIDE, NodeConnectionId.HasBootsOrBombs ),
  makeEdge( NodeId.HC_SEWERS_ESCAPE, NodeId.SANCTUARY ),

  makeEdge( NodeId.SANCTUARY, NodeId.LIGHT_SANCTUARY_EXIT ),
];

export default hyruleCastleEdges;
