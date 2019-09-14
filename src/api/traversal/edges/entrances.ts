import { makeEdge } from './helpers';

import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';
import Edge from './edge';

const entranceEdges: Edge[] = [
  makeEdge( NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeId.LIGHT_F5, NodeConnectionId.Always ),
  makeEdge( NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeId.DARK_F5, NodeConnectionId.Always ),
];

export { entranceEdges };
