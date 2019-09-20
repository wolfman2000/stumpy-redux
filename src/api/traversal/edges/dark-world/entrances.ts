import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

const darkEntranceEdges: Edge[] = [
  makeEdge( NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeId.DARK_F5 ),
  makeEdge( NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeId.StartingHouse, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeId.BombShopHouse, NodeConnectionId.IsNotInverted ),
];

export { darkEntranceEdges };
