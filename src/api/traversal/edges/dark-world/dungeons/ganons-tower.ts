import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Ganon's Tower together.

const ganonsTowerEdges: Edge[] = [
  makeEdge( NodeId.GT_02_ENTRANCE, NodeId.DARK_GANONS_TOWER_ENTRANCE ),
  makeEdge( NodeId.GT_02_ENTRANCE, NodeId.GT_01_TORCH_ROOM ),
  makeEdge( NodeId.GT_02_ENTRANCE, NodeId.GT_01_SWITCH ),
  makeEdge( NodeId.GT_02_ENTRANCE, NodeId.GT_03_SPIKES ),

  makeEdge( NodeId.GT_01_TORCH_ROOM, NodeId.GT_02_ENTRANCE ),
  makeEdge( NodeId.GT_01_TORCH_ROOM, NodeId.GT_01_TORCH_ITEM, NodeConnectionId.CanKnockItemOffTorch ),
  makeEdge( NodeId.GT_01_TORCH_ROOM, NodeId.GT_01_BUMPER ),
  makeEdge( NodeId.GT_01_TORCH_ROOM, NodeId.GT_01_SWITCH ),

  makeEdge( NodeId.GT_01_BUMPER, NodeId.GT_01_MANY_PITS, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.GT_01_BUMPER, NodeId.GT_01_TORCH_ROOM ),

  makeEdge( NodeId.GT_01_MANY_PITS, NodeId.GT_01_BUMPER ),
  makeEdge( NodeId.GT_01_MANY_PITS, NodeId.GT_01_DARK_MAGICIAN, NodeConnectionId.HasHookshotOrBombHover ),
  makeEdge( NodeId.GT_01_MANY_PITS, NodeId.GT_01_MAP, NodeConnectionId.HasHookshotOrAdvancedBoots ),
  makeEdge( NodeId.GT_01_MANY_PITS, NodeId.GT_01_DOUBLE_CRYSTAL, NodeConnectionId.HasHookshotOrAdvancedBoots ),

  makeEdge( NodeId.GT_01_DARK_MAGICIAN, NodeId.GT_01_MANY_PITS ),
  makeEdge( NodeId.GT_01_MAP, NodeId.GT_01_MANY_PITS ),

  makeEdge( NodeId.GT_01_DOUBLE_CRYSTAL, NodeId.GT_01_MANY_PITS ),
  makeEdge( NodeId.GT_01_DOUBLE_CRYSTAL, NodeId.GT_01_SPIKES, NodeConnectionId.HasReliableProjectile ),

  makeEdge( NodeId.GT_01_SPIKES, NodeId.GT_01_DOUBLE_CRYSTAL ),
  makeEdge( NodeId.GT_01_SPIKES, NodeId.GT_01_FIRE_SNAKE ),

  makeEdge( NodeId.GT_01_FIRE_SNAKE, NodeId.GT_01_TELEPORTER_TOP, NodeConnectionId.HasHookshotOrBombHover ),

  makeEdge( NodeId.GT_01_TELEPORTER_TOP, NodeId.GT_01_TELEPORTER_BOTTOM ),
  makeEdge( NodeId.GT_01_TELEPORTER_TOP, NodeId.GT_01_RANDOMIZER_ROOM ),

  makeEdge( NodeId.GT_01_TELEPORTER_BOTTOM, NodeId.GT_01_FULL_INVISIBLE ),

  makeEdge( NodeId.GT_01_SWITCH, NodeId.GT_02_ENTRANCE ),
  makeEdge( NodeId.GT_01_SWITCH, NodeId.GT_01_TORCH_ROOM ),
  makeEdge( NodeId.GT_01_BUMPER, NodeId.GT_01_TILE_ROOM, NodeConnectionId.HasCaneOfSomaria ),

  makeEdge( NodeId.GT_01_TILE_ROOM, NodeId.GT_01_SWITCH ),
  makeEdge( NodeId.GT_01_TILE_ROOM, NodeId.GT_01_TORCHES ),

  makeEdge( NodeId.GT_01_TORCHES, NodeId.GT_01_TILE_ROOM ),
  makeEdge( NodeId.GT_01_TORCHES, NodeId.GT_01_DANGER ),
  makeEdge( NodeId.GT_01_TORCHES, NodeId.GT_01_GIBDOS, NodeConnectionId.CanLightRodTorches ),

  makeEdge( NodeId.GT_01_DANGER, NodeId.GT_01_TORCHES ),

  makeEdge( NodeId.GT_01_GIBDOS, NodeId.GT_01_TORCHES ),
  // TODO: Fix this.
  makeEdge( NodeId.GT_01_GIBDOS, NodeId.GT_01_COMPASS, NodeConnectionId.HasReliableProjectile ),

  makeEdge( NodeId.GT_01_COMPASS, NodeId.GT_01_GIBDOS ),
  makeEdge( NodeId.GT_01_COMPASS, NodeId.GT_01_CONVEYOR ),
  makeEdge( NodeId.GT_01_CONVEYOR, NodeId.GT_01_COLLAPSING_BRIDGE ),
  makeEdge( NodeId.GT_01_COLLAPSING_BRIDGE, NodeId.GT_01_SOLO_TELEPORTER ),
  makeEdge( NodeId.GT_01_SOLO_TELEPORTER, NodeId.GT_01_MINI_INVISIBLE ),
  makeEdge( NodeId.GT_01_MINI_INVISIBLE, NodeId.GT_01_FULL_INVISIBLE, NodeConnectionId.CanCrossInvisibleBridge ),

  makeEdge( NodeId.GT_01_FULL_INVISIBLE, NodeId.GT_01_BIG_CHEST_AREA ),
  makeEdge( NodeId.GT_01_FULL_INVISIBLE, NodeId.GT_01_BOB, NodeConnectionId.CanCrossInvisibleBridge ),
  makeEdge( NodeId.GT_01_BOB, NodeId.GT_B1_ICE_ARMOS, NodeConnectionId.HasBombsDarkWorld ),
  // TODO: Add armos kill connection
  makeEdge( NodeId.GT_B1_ICE_ARMOS, NodeId.GT_B1_BIG_KEY ),
  makeEdge( NodeId.GT_B1_ICE_ARMOS, NodeId.GT_B1_ESCAPE ),
  makeEdge( NodeId.GT_B1_BIG_KEY, NodeId.GT_B1_ICE_ARMOS ),
  makeEdge( NodeId.GT_B1_ESCAPE, NodeId.GT_B1_FAIRIES ),
  makeEdge( NodeId.GT_B1_ESCAPE, NodeId.GT_01_BIG_CHEST_AREA ),
  makeEdge( NodeId.GT_B1_FAIRIES, NodeId.GT_B1_ESCAPE ),

  makeEdge( NodeId.GT_01_BIG_CHEST_AREA, NodeId.GT_01_BIG_CHEST, NodeConnectionId.HasBigKeyForGanon ),
  makeEdge( NodeId.GT_01_BIG_CHEST_AREA, NodeId.GT_01_TORCH_ROOM ),

  makeEdge( NodeId.GT_03_SPIKES, NodeId.GT_02_ENTRANCE ),
  makeEdge( NodeId.GT_03_SPIKES, NodeId.GT_03_MIMIC_1 ),
  makeEdge( NodeId.GT_03_MIMIC_1, NodeId.GT_03_MIMIC_2, NodeConnectionId.CanMimicClip ),
  makeEdge( NodeId.GT_03_MIMIC_2, NodeId.GT_03_CALM, NodeConnectionId.CanMimicClip ),
  makeEdge( NodeId.GT_03_CALM, NodeId.GT_03_EYEGORES, NodeConnectionId.HasBigKeyForGanon ),
  makeEdge( NodeId.GT_03_EYEGORES, NodeId.GT_03_CANNONS ),
  makeEdge( NodeId.GT_03_CANNONS, NodeId.GT_03_REWARD, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.GT_03_CANNONS, NodeId.GT_04_GAUNTLET_1 ),
  makeEdge( NodeId.GT_04_GAUNTLET_1, NodeId.GT_04_GAUNTLET_2, NodeConnectionId.HasReliableWeapon ),
  makeEdge( NodeId.GT_04_GAUNTLET_2, NodeId.GT_04_GAUNTLET_3, NodeConnectionId.HasReliableWeapon ),
  makeEdge( NodeId.GT_04_GAUNTLET_3, NodeId.GT_04_GAUNTLET_4, NodeConnectionId.HasReliableWeapon ),
  makeEdge( NodeId.GT_04_GAUNTLET_4, NodeId.GT_04_GAUNTLET_5, NodeConnectionId.HasReliableWeapon ),
  makeEdge( NodeId.GT_04_GAUNTLET_5, NodeId.GT_04_WARNING, NodeConnectionId.HasReliableWeapon ),
  makeEdge( NodeId.GT_04_WARNING, NodeId.GT_04_LANMOLAS ),
  // TODO: Link to Lanmolas (or whoever the boss is).
  makeEdge( NodeId.GT_04_LANMOLAS, NodeId.GT_04_RECOVERY ),
  makeEdge( NodeId.GT_04_RECOVERY, NodeId.GT_05_WIZZROBE_1 ),
  // TODO: Cover enemies as well.
  makeEdge( NodeId.GT_05_WIZZROBE_1, NodeId.GT_05_EYE_BRIDGE, NodeConnectionId.CanCrossInvisibleBridge ),
  makeEdge( NodeId.GT_05_EYE_BRIDGE, NodeId.GT_05_WIZZROBE_2 ),
  makeEdge( NodeId.GT_05_WIZZROBE_2, NodeId.GT_05_COLLAPSING ),
  makeEdge( NodeId.GT_05_COLLAPSING, NodeId.GT_05_TORCHES ),
  makeEdge( NodeId.GT_05_TORCHES, NodeId.GT_05_EYE_WALLS, NodeConnectionId.CanLightTorch ),
  makeEdge( NodeId.GT_05_EYE_WALLS, NodeId.GT_06_COLLAPSING ),
  makeEdge( NodeId.GT_06_COLLAPSING, NodeId.GT_05_EYE_WALLS ),
  makeEdge( NodeId.GT_06_COLLAPSING, NodeId.GT_06_HELMASAURS, NodeConnectionId.CanLightTorch ),
  makeEdge( NodeId.GT_06_HELMASAURS, NodeId.GT_06_CONVEYOR ),
  makeEdge( NodeId.GT_06_CONVEYOR, NodeId.GT_06_CONSOLATION, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.GT_06_CONSOLATION, NodeId.GT_06_MOLDORM ),
  // TODO: Cover for Moldorm 2.
  makeEdge( NodeId.GT_06_MOLDORM, NodeId.GT_06_TOY_BOX, NodeConnectionId.HasHookshotOrHover ),
  makeEdge( NodeId.GT_06_TOY_BOX, NodeId.GT_06_BUMPERS ),
  makeEdge( NodeId.GT_06_BUMPERS, NodeId.GT_07_CALM ),
  makeEdge( NodeId.GT_07_CALM, NodeId.GT_07_BOSS ),
];

export default ganonsTowerEdges;
