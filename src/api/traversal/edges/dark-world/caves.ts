import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

const darkCaveEdges: Edge[] = [
  makeEdge( NodeId.BombShopHouse, NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.BombShopHouse, NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeConnectionId.IsInverted ),
];

export { darkCaveEdges };
