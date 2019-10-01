import EntranceType from './entrance-type';
import NodeConnectionId from './node-connection-id';
import NodeId from './node-id';

interface ICssLocation {
  left: number;
  top: number;
  entranceType: EntranceType;
  visibility: NodeConnectionId;
  treasureNodes: NodeId[];
}

export default ICssLocation;
