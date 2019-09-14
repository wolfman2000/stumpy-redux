import { makeEdge } from './helpers';

import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';
import Edge from './edge';

const lightCaveEdges: Edge[] = [
  makeEdge( NodeId.StartingHouse, NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.StartingHouse, NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeConnectionId.IsInverted ),
];

export { lightCaveEdges };
