import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';
import Edge from './edge';

const makeEdge = ( from: NodeId, to: NodeId, conn: NodeConnectionId = NodeConnectionId.Always ): Edge => {
  return { canTraverse: conn, from, to };
};

export { makeEdge };
