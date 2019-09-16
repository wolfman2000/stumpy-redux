import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';

interface IEdge {
  from: NodeId;
  to: NodeId;
  canTraverse: NodeConnectionId;
}

export default IEdge;
