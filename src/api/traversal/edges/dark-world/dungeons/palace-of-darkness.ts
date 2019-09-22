import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Palace of Darkness together.

const palaceOfDarknessEdges: Edge[] = [
  makeEdge( NodeId.POD_01_ENTRANCE, NodeId.DARK_POD_ENTRANCE ),
  makeEdge( NodeId.POD_01_ENTRANCE, NodeId.POD_01_LOBBY_LEFT ),
  makeEdge( NodeId.POD_01_ENTRANCE, NodeId.POD_01_LOBBY_CENTER ),
  makeEdge( NodeId.POD_01_ENTRANCE, NodeId.POD_01_LOBBY_RIGHT ),

  makeEdge( NodeId.POD_01_LOBBY_LEFT, NodeId.POD_01_ENTRANCE ),
  makeEdge( NodeId.POD_01_LOBBY_LEFT, NodeId.POD_B1_SHOOTER_ROOM ),

  makeEdge( NodeId.POD_B1_SHOOTER_ROOM, NodeId.POD_01_LOBBY_LEFT ),

  makeEdge( NodeId.POD_01_LOBBY_CENTER, NodeId.POD_01_TURTLE_ENTRY, NodeConnectionId.CanEnterFrontPodDoor ),
  makeEdge( NodeId.POD_01_LOBBY_CENTER, NodeId.POD_01_ENTRANCE ),

  makeEdge( NodeId.POD_01_LOBBY_RIGHT, NodeId.POD_01_ENTRANCE ),
  makeEdge( NodeId.POD_01_LOBBY_RIGHT, NodeId.POD_01_LOBBY_CENTER ),
  makeEdge( NodeId.POD_01_LOBBY_RIGHT, NodeId.POD_B1_TELEPORTER_ROOM ),

  makeEdge( NodeId.POD_B1_TELEPORTER_ROOM, NodeId.POD_01_LOBBY_RIGHT ),
  makeEdge( NodeId.POD_B1_TELEPORTER_ROOM, NodeId.POD_B1_HINT_ROOM ),

  makeEdge( NodeId.POD_B1_HINT_ROOM, NodeId.POD_B1_TELEPORTER_ROOM ),
  makeEdge( NodeId.POD_B1_HINT_ROOM, NodeId.POD_B1_BARI_CORRIDOR, NodeConnectionId.HasBootsOrBombs ),

  makeEdge( NodeId.POD_B1_BARI_CORRIDOR, NodeId.POD_B1_HINT_ROOM, NodeConnectionId.HasBootsOrBombs ),
  makeEdge( NodeId.POD_B1_BARI_CORRIDOR, NodeId.POD_B1_RED_MIMIC, NodeConnectionId.HasBootsOrBombs ),

  makeEdge( NodeId.POD_B1_RED_MIMIC, NodeId.POD_B1_CONVEYOR, NodeConnectionId.CanMimicBottleClip ),
  makeEdge( NodeId.POD_B1_RED_MIMIC, NodeId.POD_B1_BARI_CORRIDOR, NodeConnectionId.HasBootsOrBombs ),

  makeEdge( NodeId.POD_B1_CONVEYOR, NodeId.POD_B1_RED_MIMIC ),
  makeEdge( NodeId.POD_B1_CONVEYOR, NodeId.POD_01_MAP_CHEST ),

  makeEdge( NodeId.POD_01_MAP_CHEST, NodeId.POD_B1_CONVEYOR ),
  makeEdge( NodeId.POD_01_MAP_CHEST, NodeId.POD_01_FAIRIES, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.POD_01_MAP_CHEST, NodeId.POD_01_BALCONY, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.POD_01_MAP_CHEST, NodeId.POD_01_SWITCH, NodeConnectionId.HasHammerDarkWorld ),

  makeEdge( NodeId.POD_01_BALCONY, NodeId.POD_01_MAP_CHEST, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.POD_01_FAIRIES, NodeId.POD_01_MAP_CHEST, NodeConnectionId.HasBombsDarkWorld ),

  makeEdge( NodeId.POD_01_SWITCH, NodeId.POD_01_MIMIC ),
  makeEdge( NodeId.POD_01_SWITCH, NodeId.POD_01_BUMPERS ),

  makeEdge( NodeId.POD_01_TURTLE_ENTRY, NodeId.POD_01_LOBBY_CENTER ),
  makeEdge( NodeId.POD_01_TURTLE_ENTRY, NodeId.POD_01_ARROW_LEAP ),
  makeEdge( NodeId.POD_01_TURTLE_ENTRY, NodeId.POD_01_MAIN_EXIT ),
  makeEdge( NodeId.POD_01_TURTLE_ENTRY, NodeId.POD_B1_SKULL_LEDGE, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.POD_01_TURTLE_ENTRY, NodeId.POD_B1_SKULL_KEY ),

  makeEdge( NodeId.POD_B1_SKULL_LEDGE, NodeId.POD_B1_SKULL_KEY ),
  makeEdge( NodeId.POD_B1_SKULL_LEDGE, NodeId.POD_01_BIG_KEY, NodeConnectionId.CanAccessBigKeyInPod ),

  makeEdge( NodeId.POD_01_BIG_KEY, NodeId.POD_B1_SKULL_KEY ),

  makeEdge( NodeId.POD_B1_SKULL_KEY, NodeId.POD_B1_TELEPORTER_ROOM ),

  makeEdge( NodeId.POD_01_ARROW_LEAP, NodeId.POD_01_BALCONY, NodeConnectionId.CanHoverInDarkWorld ),
  makeEdge( NodeId.POD_01_ARROW_LEAP, NodeId.POD_01_TOP ),
  makeEdge( NodeId.POD_01_ARROW_LEAP, NodeId.POD_01_BUMPERS ),

  makeEdge( NodeId.POD_01_BUMPERS, NodeId.POD_01_MAIN_EXIT ),
  makeEdge( NodeId.POD_01_BUMPERS, NodeId.POD_01_SWITCH ),

  makeEdge( NodeId.POD_01_MAIN_EXIT, NodeId.POD_01_TURTLE_ENTRY ),
  makeEdge( NodeId.POD_01_MAIN_EXIT, NodeId.POD_01_BUMPERS ),

  makeEdge( NodeId.POD_01_TOP, NodeId.POD_01_BUMPERS ),
  makeEdge( NodeId.POD_01_TOP, NodeId.POD_01_COLLAPSING_BRIDGE, NodeConnectionId.CanAccessPodParty ),

  makeEdge( NodeId.POD_01_COLLAPSING_BRIDGE, NodeId.POD_01_COLLAPSING_TOP ),
  makeEdge( NodeId.POD_01_COLLAPSING_BRIDGE, NodeId.POD_01_BIG_CHEST_AREA, NodeConnectionId.CanBombJumpOrHover ),

  makeEdge( NodeId.POD_01_COLLAPSING_TOP, NodeId.POD_01_COMPASS_ROOM ),
  makeEdge( NodeId.POD_01_COLLAPSING_TOP, NodeId.POD_01_DARK_MAZE, NodeConnectionId.CanAccessPodMaze ),

  makeEdge( NodeId.POD_01_DARK_MAZE, NodeId.POD_01_COLLAPSING_TOP, NodeConnectionId.CanAccessPodMaze ),
  makeEdge( NodeId.POD_01_DARK_MAZE, NodeId.POD_01_BIG_CHEST_AREA, NodeConnectionId.HasBombsDarkWorld ),

  makeEdge( NodeId.POD_01_BIG_CHEST_AREA, NodeId.POD_01_BIG_CHEST, NodeConnectionId.HasBigKeyForPod ),
  makeEdge( NodeId.POD_01_BIG_CHEST_AREA, NodeId.POD_01_DARK_MAZE, NodeConnectionId.CanAccessPodMazeBackward ),

  makeEdge( NodeId.POD_01_COMPASS_ROOM, NodeId.POD_B1_MONEY_ROOM, NodeConnectionId.HasTorchLightSource ),
  makeEdge( NodeId.POD_01_COMPASS_ROOM, NodeId.POD_01_COLLAPSING_TOP ),
  makeEdge( NodeId.POD_01_COMPASS_ROOM, NodeId.POD_01_HARMLESS_HALLWAY, NodeConnectionId.CanAccessHarmlessHallway ),

  makeEdge( NodeId.POD_01_HARMLESS_HALLWAY, NodeId.POD_01_TOP ),
  makeEdge( NodeId.POD_01_HARMLESS_HALLWAY, NodeId.POD_01_COMPASS_ROOM ),

  makeEdge( NodeId.POD_01_MIMIC, NodeId.POD_01_SWITCH ),
  makeEdge( NodeId.POD_01_MIMIC, NodeId.POD_01_EYE_STATUE, NodeConnectionId.CanMimicClip ),

  makeEdge( NodeId.POD_01_EYE_STATUE, NodeId.POD_01_MIMIC ),
  makeEdge( NodeId.POD_01_EYE_STATUE, NodeId.POD_B1_METAL_MOLE, NodeConnectionId.CanShootEyeStatue ),

  makeEdge( NodeId.POD_B1_METAL_MOLE, NodeId.POD_B1_TURTLE_ROOM, NodeConnectionId.CanAccessFinalPodSection ),

  makeEdge( NodeId.POD_B1_TURTLE_ROOM, NodeId.POD_B1_BRIDGE, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.POD_B1_BRIDGE, NodeId.POD_B1_BOSS, NodeConnectionId.HasBigKeyForPod ),
];

export default palaceOfDarknessEdges;
