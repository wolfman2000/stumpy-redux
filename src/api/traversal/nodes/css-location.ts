import EntranceType from './entrance-type';
import NodeConnectionId from './node-connection-id';

interface ICssLocation {
  left: number;
  top: number;
  entranceType: EntranceType;
  visibility: NodeConnectionId;
}

export default ICssLocation;
