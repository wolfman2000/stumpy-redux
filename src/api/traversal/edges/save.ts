import { makeEdge } from './helpers';

import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';
import Edge from './edge';

const menuEdges: Edge[] = [
  makeEdge( NodeId.Menu, NodeId.StartingHouse, NodeConnectionId.Always ),
  makeEdge( NodeId.Menu, NodeId.LIGHT_A4_LOWER, NodeConnectionId.HasFluteNotInverted ),
  makeEdge( NodeId.Menu, NodeId.LIGHT_C7, NodeConnectionId.HasFluteNotInverted ),
  makeEdge( NodeId.Menu, NodeId.LIGHT_D1, NodeConnectionId.HasFluteNotInverted ),
  makeEdge( NodeId.Menu, NodeId.LIGHT_F5, NodeConnectionId.HasFluteNotInverted ),
  makeEdge( NodeId.Menu, NodeId.LIGHT_F8, NodeConnectionId.HasFluteNotInverted ),
  makeEdge( NodeId.Menu, NodeId.LIGHT_G1_SOUTH, NodeConnectionId.HasFluteNotInverted ),
  makeEdge( NodeId.Menu, NodeId.LIGHT_H4, NodeConnectionId.HasFluteNotInverted ),
  makeEdge( NodeId.Menu, NodeId.LIGHT_H8, NodeConnectionId.HasFluteNotInverted ),
  makeEdge( NodeId.Menu, NodeId.DARK_A4_LOWER, NodeConnectionId.HasFluteInverted ),
  makeEdge( NodeId.Menu, NodeId.DARK_C7, NodeConnectionId.HasFluteInverted ),
  makeEdge( NodeId.Menu, NodeId.DARK_D1, NodeConnectionId.HasFluteInverted ),
  makeEdge( NodeId.Menu, NodeId.DARK_F5, NodeConnectionId.HasFluteInverted ),
  makeEdge( NodeId.Menu, NodeId.DARK_F8, NodeConnectionId.HasFluteInverted ),
  makeEdge( NodeId.Menu, NodeId.DARK_G1_SOUTH, NodeConnectionId.HasFluteInverted ),
  makeEdge( NodeId.Menu, NodeId.DARK_H4, NodeConnectionId.HasFluteInverted ),
  makeEdge( NodeId.Menu, NodeId.DARK_H8, NodeConnectionId.HasFluteNotInverted ),
];

export { menuEdges };
