import { makeEdge } from '../../helpers';

import NodeConnectionId from '../../../nodes/node-connection-id';
import NodeId from '../../../nodes/node-id';
import Edge from '../../edge';

// This file connects Misery Mire together.

const miseryMireEdges: Edge[] = [
  makeEdge( NodeId.MM_01_ENTRANCE, NodeId.DARK_MM_ENTRANCE ),
  makeEdge( NodeId.MM_01_ENTRANCE, NodeId.MM_B1_FIRST_GUARDS, NodeConnectionId.HasHookshotOrAdvancedBoots ),

  makeEdge( NodeId.MM_B1_FIRST_GUARDS, NodeId.MM_01_ENTRANCE, NodeConnectionId.HasHookshotOrAdvancedBoots ),
  makeEdge( NodeId.MM_B1_FIRST_GUARDS, NodeId.MM_B1_HUGE, NodeConnectionId.HasReliableWeapon ),

  makeEdge( NodeId.MM_B1_HUGE, NodeId.MM_B1_FIRST_GUARDS ),
  makeEdge( NodeId.MM_B1_HUGE, NodeId.MM_B1_EAST_SHOOTER ),
  makeEdge( NodeId.MM_B1_HUGE, NodeId.MM_B1_LASER_FAIL ),
  makeEdge( NodeId.MM_B1_HUGE, NodeId.MM_B1_MAP_CHEST ),
  makeEdge( NodeId.MM_B1_HUGE, NodeId.MM_B1_TORCHES ),
  makeEdge( NodeId.MM_B1_HUGE, NodeId.MM_B1_BOMB_SLUG ),
  makeEdge( NodeId.MM_B1_HUGE, NodeId.MM_B1_WEST_SHOOTER ),
  makeEdge( NodeId.MM_B1_HUGE, NodeId.MM_B1_BARI_KEY ),

  makeEdge( NodeId.MM_B1_EAST_SHOOTER, NodeId.MM_B1_HUGE ),
  makeEdge( NodeId.MM_B1_EAST_SHOOTER, NodeId.MM_B1_LASER_BRIDGE ),

  makeEdge( NodeId.MM_B1_LASER_BRIDGE, NodeId.MM_B1_LASER_FAIL ),
  makeEdge( NodeId.MM_B1_LASER_BRIDGE, NodeId.MM_B1_LASER_RECOVERY ),
  makeEdge( NodeId.MM_B1_LASER_BRIDGE, NodeId.MM_B1_BIG_CHEST, NodeConnectionId.HasBigKeyForMire ),

  makeEdge( NodeId.MM_B1_LASER_FAIL, NodeId.MM_B1_HUGE ),

  makeEdge( NodeId.MM_B1_LASER_RECOVERY, NodeId.MM_B1_EAST_SHOOTER ),
  makeEdge( NodeId.MM_B1_LASER_RECOVERY, NodeId.MM_B1_MAP_CHEST ),
  makeEdge( NodeId.MM_B1_LASER_RECOVERY, NodeId.MM_B1_SPIKE_ROOM ),

  makeEdge( NodeId.MM_B1_MAP_CHEST, NodeId.MM_B1_LASER_RECOVERY ),
  makeEdge( NodeId.MM_B1_MAP_CHEST, NodeId.MM_B1_HUGE ),

  makeEdge( NodeId.MM_B1_TORCHES, NodeId.MM_B1_KEY_BRIDGE ),
  makeEdge( NodeId.MM_B1_TORCHES, NodeId.MM_B1_HUGE ),
  makeEdge( NodeId.MM_B1_TORCHES, NodeId.MM_B1_BOMB_SLUG ),
  makeEdge( NodeId.MM_B1_TORCHES, NodeId.MM_B1_SPIKE_ROOM ),

  makeEdge( NodeId.MM_B1_BOMB_SLUG, NodeId.MM_B1_TORCHES ),
  makeEdge( NodeId.MM_B1_BOMB_SLUG, NodeId.MM_B1_HUGE ),

  makeEdge( NodeId.MM_B1_SPIKE_ROOM, NodeId.MM_B1_TORCHES ),
  makeEdge( NodeId.MM_B1_SPIKE_ROOM, NodeId.MM_B1_LASER_RECOVERY ),
  makeEdge( NodeId.MM_B1_SPIKE_ROOM, NodeId.MM_B1_SIDEWAYS_U ),
  makeEdge( NodeId.MM_B1_SPIKE_ROOM, NodeId.MM_B1_SPIKE_CHEST, NodeConnectionId.HasSpikeCaveProtection ),

  makeEdge( NodeId.MM_B1_SIDEWAYS_U, NodeId.MM_B1_SPIKE_ROOM ),
  makeEdge( NodeId.MM_B1_SIDEWAYS_U, NodeId.MM_B1_LONG_BRIDGES ),
  makeEdge( NodeId.MM_B1_SIDEWAYS_U, NodeId.MM_B1_TELEPORTER_END ),

  makeEdge( NodeId.MM_B1_LONG_BRIDGES, NodeId.MM_B1_SIDEWAYS_U ),
  makeEdge( NodeId.MM_B1_LONG_BRIDGES, NodeId.MM_B1_FISHBONE ),

  makeEdge( NodeId.MM_B1_FISHBONE, NodeId.MM_B1_LONG_BRIDGES ),
  makeEdge( NodeId.MM_B1_FISHBONE, NodeId.MM_B1_HOURGLASS ),

  makeEdge( NodeId.MM_B1_HOURGLASS, NodeId.MM_B1_TELE_SHOOTER ),
  makeEdge( NodeId.MM_B1_HOURGLASS, NodeId.MM_B1_FISHBONE ),
  makeEdge( NodeId.MM_B1_HOURGLASS, NodeId.MM_B1_WEST_SHOOTER ),

  makeEdge( NodeId.MM_B1_WEST_SHOOTER, NodeId.MM_B1_HOURGLASS ),
  makeEdge( NodeId.MM_B1_WEST_SHOOTER, NodeId.MM_B1_HUGE ),

  makeEdge( NodeId.MM_B1_TELEPORTER_END, NodeId.MM_B1_SIDEWAYS_U ),
  makeEdge( NodeId.MM_B1_TELEPORTER_END, NodeId.MM_B1_MADNESS_BRIDGE, NodeConnectionId.HasBigKeyForMire ),

  makeEdge( NodeId.MM_B1_BARI_KEY, NodeId.MM_B1_HUGE ),
  makeEdge( NodeId.MM_B1_BARI_KEY, NodeId.MM_B1_DOUBLE_BEAMOS ),
  makeEdge( NodeId.MM_B1_BARI_KEY, NodeId.MM_B1_TILE_ROOM ),

  makeEdge( NodeId.MM_B1_DOUBLE_BEAMOS, NodeId.MM_B1_BARI_KEY ),
  makeEdge( NodeId.MM_B1_DOUBLE_BEAMOS, NodeId.MM_B1_BIG_KEY_LEDGE ),

  makeEdge( NodeId.MM_B1_BIG_KEY_LEDGE, NodeId.MM_B1_DOUBLE_BEAMOS ),

  makeEdge( NodeId.MM_B1_TILE_ROOM, NodeId.MM_B1_BARI_KEY ),
  makeEdge( NodeId.MM_B1_TILE_ROOM, NodeId.MM_B1_CONVEYOR ),
  makeEdge( NodeId.MM_B1_TILE_ROOM, NodeId.MM_B1_COMPASS, NodeConnectionId.CanLightTorch ),

  makeEdge( NodeId.MM_B1_COMPASS, NodeId.MM_B1_HOURGLASS ),
  makeEdge( NodeId.MM_B1_COMPASS, NodeId.MM_B1_TILE_ROOM ),

  makeEdge( NodeId.MM_B1_CONVEYOR, NodeId.MM_B1_TILE_ROOM ),
  makeEdge( NodeId.MM_B1_CONVEYOR, NodeId.MM_01_TORCH_TOP ),

  makeEdge( NodeId.MM_01_TORCH_TOP, NodeId.MM_01_TORCH_BOTTOM ),
  makeEdge( NodeId.MM_01_TORCH_TOP, NodeId.MM_B1_CONVEYOR ),

  makeEdge( NodeId.MM_01_TORCH_BOTTOM, NodeId.MM_01_TORCH_TOP ),
  makeEdge( NodeId.MM_01_TORCH_BOTTOM, NodeId.MM_01_TORCH_REWARD, NodeConnectionId.CanLightTorch ),

  makeEdge( NodeId.MM_01_TORCH_REWARD, NodeId.MM_01_TORCH_BOTTOM ),
  makeEdge( NodeId.MM_01_TORCH_REWARD, NodeId.MM_B1_BIG_KEY ),

  makeEdge( NodeId.MM_B1_BIG_KEY, NodeId.MM_B1_BIG_TELEPORTER ),
  makeEdge( NodeId.MM_B1_BIG_TELEPORTER, NodeId.MM_B1_TELE_SHOOTER ),

  makeEdge( NodeId.MM_B1_TELE_SHOOTER, NodeId.MM_B1_HOURGLASS ),
  makeEdge( NodeId.MM_B1_TELE_SHOOTER, NodeId.MM_B1_SOLO_TELEPORTER, NodeConnectionId.HasBigKeyForMire ),
  makeEdge( NodeId.MM_B1_SOLO_TELEPORTER, NodeId.MM_B1_TELE_SHOOTER, NodeConnectionId.HasBigKeyForMire ),
  makeEdge( NodeId.MM_B1_SOLO_TELEPORTER, NodeId.MM_B1_TELEPORTER_END ),

  makeEdge( NodeId.MM_B1_MADNESS_BRIDGE, NodeId.MM_B1_TELEPORTER_END, NodeConnectionId.HasBigKeyForMire ),
  makeEdge( NodeId.MM_B1_MADNESS_BRIDGE, NodeId.MM_B2_SOMARIA_ROOM, NodeConnectionId.HasLightSource ),

  makeEdge( NodeId.MM_B2_SOMARIA_ROOM, NodeId.MM_B2_X, NodeConnectionId.HasCaneOfSomaria ),
  makeEdge( NodeId.MM_B2_SOMARIA_ROOM, NodeId.MM_B2_MONEY_SMALL ),

  makeEdge( NodeId.MM_B2_X, NodeId.MM_B2_ISLAND_CRYSTAL ),
  makeEdge( NodeId.MM_B2_ISLAND_CRYSTAL, NodeId.MM_B2_MONEY_BIG ),
  makeEdge( NodeId.MM_B2_ISLAND_CRYSTAL, NodeId.MM_B2_RATS, NodeConnectionId.HasReliableProjectile ),
  makeEdge( NodeId.MM_B2_RATS, NodeId.MM_B2_MONEY_CRYSTAL ),
  makeEdge( NodeId.MM_B2_RATS, NodeId.MM_B2_SLIMES ),

  makeEdge( NodeId.MM_B2_SLIMES, NodeId.MM_B3_ALMOST ),
  makeEdge( NodeId.MM_B3_ALMOST, NodeId.MM_B3_BOSS, NodeConnectionId.HasBigKeyForMire ),

];

export default miseryMireEdges;
