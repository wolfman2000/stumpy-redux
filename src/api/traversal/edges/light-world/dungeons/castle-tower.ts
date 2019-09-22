import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects the Castle Tower together.

const castleTowerEdges: Edge[] = [
  makeEdge( NodeId.CT_02_ENTRY, NodeId.LIGHT_HYRULE_CASTLE_TOWER_ENTRANCE ),
  makeEdge( NodeId.CT_02_ENTRY, NodeId.CT_02_KNIGHTS ),

  makeEdge( NodeId.CT_02_KNIGHTS, NodeId.CT_02_ENTRY ),
  makeEdge( NodeId.CT_02_KNIGHTS, NodeId.CT_02_KEY, NodeConnectionId.HasReliableWeapon ),

  makeEdge( NodeId.CT_02_KEY, NodeId.CT_02_KNIGHTS ),
  makeEdge( NodeId.CT_02_KEY, NodeId.CT_03_ENTRY, NodeConnectionId.CanAccessTowerMaze ),

  makeEdge( NodeId.CT_03_ENTRY, NodeId.CT_02_KEY, NodeConnectionId.CanAccessTowerMaze ),
  makeEdge( NodeId.CT_03_ENTRY, NodeId.CT_03_MAZE, NodeConnectionId.HasLightSource ),

  makeEdge( NodeId.CT_03_MAZE, NodeId.CT_03_ENTRY ),
  makeEdge( NodeId.CT_03_MAZE, NodeId.CT_03_HALL, NodeConnectionId.CanAccessTopOfCastleTower ),

  makeEdge( NodeId.CT_03_HALL, NodeId.CT_04_HALL, NodeConnectionId.HasLightSource ),

  makeEdge( NodeId.CT_04_HALL, NodeId.CT_04_TALL, NodeConnectionId.HasLightSource ),

  makeEdge( NodeId.CT_04_TALL, NodeId.CT_04_KEY, NodeConnectionId.HasLightSource ),

  makeEdge( NodeId.CT_04_KEY, NodeId.CT_05_HINT, NodeConnectionId.HasLightSource ),

  makeEdge( NodeId.CT_05_HINT, NodeId.CT_05_GUARDS ),

  makeEdge( NodeId.CT_05_GUARDS, NodeId.CT_05_POTS ),

  makeEdge( NodeId.CT_05_POTS, NodeId.CT_05_RUN ),

  makeEdge( NodeId.CT_05_RUN, NodeId.CT_06_TINY ),

  makeEdge( NodeId.CT_06_TINY, NodeId.CT_06_HALL ),

  makeEdge( NodeId.CT_06_HALL, NodeId.CT_07_ENTRY ),

  makeEdge( NodeId.CT_07_ENTRY, NodeId.CT_07_BOSS, NodeConnectionId.CanCutCurtainWall ),
];

export default castleTowerEdges;
