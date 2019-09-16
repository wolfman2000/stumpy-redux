import { makeEdge } from './helpers';

import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';
import Edge from './edge';

const whirlpoolEdges: Edge[] = [
  makeEdge( NodeId.LIGHT_G4_WATER_WARP, NodeId.LIGHT_C6_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_WATER_WARP, NodeId.LIGHT_G4_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B8_WATER_WARP, NodeId.LIGHT_G6_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_WATER_WARP, NodeId.LIGHT_B8_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C3_WATER_WARP, NodeId.LIGHT_H8_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H8_WATER_WARP, NodeId.LIGHT_C3_WATER, NodeConnectionId.Always ),
];

export { whirlpoolEdges };
