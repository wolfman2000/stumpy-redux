import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

const darkEntranceEdges: Edge[] = [
  // Dark A1 connections
  makeEdge( NodeId.DARK_SW_MAIN_WEST_ENTRANCE, NodeId.SW_01_PIT_WEST ),
  makeEdge( NodeId.DARK_SW_PINBALL_ENTRANCE, NodeId.SW_01_PINBALL_ROOM ),
  makeEdge( NodeId.DARK_SW_BIG_CHEST_ENTRANCE, NodeId.SW_01_POTS ),
  makeEdge( NodeId.DARK_SW_BIG_CHEST_EXIT, NodeId.SW_01_EXIT ),
  makeEdge( NodeId.DARK_SW_BIG_CHEST_EXIT, NodeId.DARK_A1_SE ),
  makeEdge( NodeId.DARK_SW_CONNECTOR_RIGHT_ENTRANCE, NodeId.SW_02_CONNECTOR_RIGHT ),
  makeEdge( NodeId.DARK_SW_CONNECTOR_RIGHT_ENTRANCE, NodeId.DARK_A1_SE ),
  makeEdge( NodeId.DARK_SW_CONNECTOR_PIT_ENTRANCE, NodeId.SW_02_PIT ),
  makeEdge( NodeId.DARK_SW_CONNECTOR_LEFT_ENTRANCE, NodeId.SW_02_CONNECTOR_LEFT ),
  makeEdge( NodeId.DARK_SW_CONNECTOR_LEFT_ENTRANCE, NodeId.DARK_A1_NW ),
  makeEdge( NodeId.DARK_SW_BACK_ENTRANCE, NodeId.SW_03_ENTRANCE ),
  makeEdge( NodeId.DARK_SW_BACK_ENTRANCE, NodeId.DARK_A1_NW ),

  // Dark A3 connections
  makeEdge( NodeId.DARK_LUMBERJACK_HOUSE_ENTRANCE, NodeId.CAVE_DARK_LUMBERJACK ),
  makeEdge( NodeId.DARK_LUMBERJACK_HOUSE_ENTRANCE, NodeId.DARK_A3 ),

  // Dark A4 connections
  makeEdge( NodeId.DARK_MOUNTAIN_FAIRY_ENTRANCE, NodeId.CAVE_DARK_MOUNTAIN_FAIRY, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.DARK_MOUNTAIN_FAIRY_ENTRANCE, NodeId.CAVE_DM_ASCENT_EXIT, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.DARK_MOUNTAIN_FAIRY_ENTRANCE, NodeId.DARK_A4_LOWER ),

  makeEdge( NodeId.DARK_SPIKE_CAVE_ENTRANCE, NodeId.CAVE_SPIKE_CAVE_ENTRANCE ),
  makeEdge( NodeId.DARK_SPIKE_CAVE_ENTRANCE, NodeId.DARK_A4_LOWER ),

  makeEdge( NodeId.DARK_GANONS_TOWER_ENTRANCE, NodeId.GT_02_ENTRANCE ),
  makeEdge( NodeId.DARK_GANONS_TOWER_ENTRANCE, NodeId.DARK_A4_UPPER ),

  // Dark A6 connections
  makeEdge( NodeId.DARK_HOOKSHOT_CAVE_BOTTOM, NodeId.CAVE_HOOKSHOT_CAVE_BOTTOM ),
  makeEdge( NodeId.DARK_HOOKSHOT_CAVE_BOTTOM, NodeId.DARK_A6_UPPER ),
  makeEdge( NodeId.DARK_HOOKSHOT_CAVE_TOP, NodeId.CAVE_HOOKSHOT_CAVE_TOP ),
  makeEdge( NodeId.DARK_HOOKSHOT_CAVE_TOP, NodeId.DARK_A6_ISLAND ),
  makeEdge( NodeId.DARK_SUPERBUNNY_CAVE_BOTTOM, NodeId.CAVE_SUPERBUNNY_BOTTOM ),
  makeEdge( NodeId.DARK_SUPERBUNNY_CAVE_BOTTOM, NodeId.DARK_A6_LOWER ),
  makeEdge( NodeId.DARK_SUPERBUNNY_CAVE_TOP, NodeId.CAVE_SUPERBUNNY_TOP ),
  makeEdge( NodeId.DARK_SUPERBUNNY_CAVE_TOP, NodeId.DARK_A6_UPPER ),

  makeEdge( NodeId.DARK_TR_LASER_WALL_ENTRANCE, NodeId.TR_B1_LASER_WALL_ENTRANCE ),
  makeEdge( NodeId.DARK_TR_LASER_WALL_ENTRANCE, NodeId.DARK_A6_SPIRAL_TOP ),
  makeEdge( NodeId.DARK_TR_TREASURE_ENTRANCE, NodeId.TR_B1_TREASURE_ENTRANCE ),
  makeEdge( NodeId.DARK_TR_TREASURE_ENTRANCE, NodeId.DARK_A6_MIMIC_LEDGE ),
  makeEdge( NodeId.DARK_TR_LASER_BRIDGE_ENTRANCE, NodeId.TR_B2_LASER_BRIDGE_ENTRANCE ),
  makeEdge( NodeId.DARK_TR_LASER_BRIDGE_ENTRANCE, NodeId.DARK_A6_FAIRY_LEDGE ),

  // Dark A8 connections
  makeEdge( NodeId.DARK_TR_MAIN_ENTRANCE, NodeId.TR_01_ENTRANCE ),
  makeEdge( NodeId.DARK_TR_MAIN_ENTRANCE, NodeId.DARK_A8 ),

  // Dark B3 connections
  makeEdge( NodeId.DARK_BUMPER_BOTTOM_ENTRANCE, NodeId.CAVE_DM_ASCENT_ENTRANCE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.DARK_BUMPER_BOTTOM_ENTRANCE, NodeId.CAVE_BUMPER_CAVE_BOTTOM, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.DARK_BUMPER_BOTTOM_ENTRANCE, NodeId.DARK_B3_BUMPER_BOTTOM ),
  makeEdge( NodeId.DARK_BUMPER_TOP_ENTRANCE, NodeId.CAVE_BUMPER_CAVE_TOP, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.DARK_BUMPER_TOP_ENTRANCE, NodeId.CAVE_DARK_MOUNTAIN_FAIRY, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.DARK_BUMPER_TOP_ENTRANCE, NodeId.DARK_B3_BUMPER_TOP ),

  // Dark C2 connections
  makeEdge( NodeId.DARK_FORTUNE_TELLER_ENTRANCE, NodeId.CAVE_OUTCAST_FORTUNE_TELLER ),
  makeEdge( NodeId.DARK_FORTUNE_TELLER_ENTRANCE, NodeId.DARK_C2 ),

  // Dark C4 connections
  makeEdge( NodeId.DARK_DARK_CHAPEL_ENTRANCE, NodeId.CAVE_CHAPEL ),
  makeEdge( NodeId.DARK_DARK_CHAPEL_ENTRANCE, NodeId.DARK_C4 ),

  // Dark C7 connections
  makeEdge( NodeId.DARK_POTION_SHOP_ENTRANCE, NodeId.CAVE_WITCH_HUT ),
  makeEdge( NodeId.DARK_POTION_SHOP_ENTRANCE, NodeId.DARK_C7 ),

  // Dark D1 connections
  makeEdge( NodeId.DARK_CHEST_GAME_ENTRANCE, NodeId.CAVE_CHEST_GAME ),
  makeEdge( NodeId.DARK_CHEST_GAME_ENTRANCE, NodeId.DARK_D1 ),
  makeEdge( NodeId.DARK_C_HOUSE_ENTRANCE, NodeId.CAVE_C_HOUSE ),
  makeEdge( NodeId.DARK_C_HOUSE_ENTRANCE, NodeId.DARK_D1 ),
  makeEdge( NodeId.DARK_BREWERY_ENTRANCE, NodeId.CAVE_BREWERY ),
  makeEdge( NodeId.DARK_BREWERY_ENTRANCE, NodeId.DARK_D1 ),
  makeEdge( NodeId.DARK_HAMMER_HOUSE_ENTRANCE, NodeId.CAVE_HAMMER_PEG_HOUSE ),
  makeEdge( NodeId.DARK_HAMMER_HOUSE_ENTRANCE, NodeId.DARK_D1 ),

  makeEdge( NodeId.DARK_TT_ENTRANCE, NodeId.TT_B1_BIG_SW ),
  makeEdge( NodeId.DARK_TT_ENTRANCE, NodeId.DARK_D1 ),

  // Dark D3 connections
  makeEdge( NodeId.DARK_SHIELD_SHOP_ENTRANCE, NodeId.CAVE_SHIELD_SHOP ),
  makeEdge( NodeId.DARK_SHIELD_SHOP_ENTRANCE, NodeId.DARK_D3 ),

  // Dark D4 connections
  makeEdge( NodeId.DARK_PYRAMID_WALL_ENTRANCE, NodeId.CAVE_PYRAMID_FAIRY ),
  makeEdge( NodeId.DARK_PYRAMID_WALL_ENTRANCE, NodeId.DARK_D4_GARDEN ),

  makeEdge( NodeId.DARK_PYRAMID_TOP_ENTRANCE, NodeId.CAVE_GANON_ARENA ),
  // TODO: Verify for inverted.
  makeEdge( NodeId.DARK_PYRAMID_TOP_EXIT, NodeId.CAVE_GANON_FAILURE ),
  makeEdge( NodeId.DARK_PYRAMID_TOP_EXIT, NodeId.DARK_D4_OUTER ),

  // Dark D7 connections
  makeEdge( NodeId.DARK_MONKEY_HUT_ENTRANCE, NodeId.CAVE_MONKEY_HUT ),
  makeEdge( NodeId.DARK_MONKEY_HUT_ENTRANCE, NodeId.DARK_D7 ),
  makeEdge( NodeId.DARK_POD_ENTRANCE, NodeId.POD_01_ENTRANCE ),
  makeEdge( NodeId.DARK_POD_ENTRANCE, NodeId.DARK_D7 ),

  // Dark E3 connections
  makeEdge( NodeId.DARK_HAMMER_PEG_ENTRANCE, NodeId.CAVE_HAMMER_PEGS ),
  makeEdge( NodeId.DARK_HAMMER_PEG_ENTRANCE, NodeId.DARK_E3 ),

  // Dark F2 connections
  makeEdge( NodeId.DARK_ARCHERY_GAME_ENTRANCE, NodeId.CAVE_ARCHERY_GAME ),
  makeEdge( NodeId.DARK_ARCHERY_GAME_ENTRANCE, NodeId.DARK_F2_LOWER ),

  // Dark F4 connections
  makeEdge( NodeId.DARK_BONK_ROCKS_ENTRANCE, NodeId.CAVE_BOMB_SHOP_BONK_ROCKS ),
  makeEdge( NodeId.DARK_BONK_ROCKS_ENTRANCE, NodeId.DARK_F4 ),

  // Dark F5 connections
  makeEdge( NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeId.DARK_F5 ),
  makeEdge( NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeId.StartingHouse, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeId.BombShopHouse, NodeConnectionId.IsNotInverted ),

  // Dark F7 connections
  makeEdge( NodeId.DARK_TREES_FAIRY_ENTRANCE, NodeId.CAVE_DARK_TREE_FAIRY_CAVE ),
  makeEdge( NodeId.DARK_TREES_FAIRY_ENTRANCE, NodeId.DARK_F7 ),

  // Dark F8 connections
  makeEdge( NodeId.DARK_PEGS_CAVE_ENTRANCE, NodeId.CAVE_FLUTE_SPOT_FIVE ),
  makeEdge( NodeId.DARK_PEGS_CAVE_ENTRANCE, NodeId.DARK_F8 ),

  // Dark G1 conenctions
  makeEdge( NodeId.DARK_LEFT_MIRE_SHED_ENTRANCE, NodeId.CAVE_MIRE_SHED_LEFT ),
  makeEdge( NodeId.DARK_LEFT_MIRE_SHED_ENTRANCE, NodeId.DARK_G1_WEST ),
  makeEdge( NodeId.DARK_RIGHT_MIRE_SHED, NodeId.CAVE_MIRE_SHED_RIGHT ),
  makeEdge( NodeId.DARK_RIGHT_MIRE_SHED, NodeId.DARK_G1_ZONK ),
  makeEdge( NodeId.DARK_MIRE_CAVE_ENTRANCE, NodeId.CAVE_MIRE_CAVE ),
  makeEdge( NodeId.DARK_MIRE_CAVE_ENTRANCE, NodeId.DARK_G1 ),

  makeEdge( NodeId.DARK_MM_ENTRANCE, NodeId.MM_01_ENTRANCE ),
  makeEdge( NodeId.DARK_MM_ENTRANCE, NodeId.DARK_G1_GATE_NORTH ),

  // Dark G5 connections
  makeEdge( NodeId.DARK_HYPE_CAVE_ENTRANCE, NodeId.CAVE_HYPE_CAVE_ENTRANCE ),
  makeEdge( NodeId.DARK_HYPE_CAVE_ENTRANCE, NodeId.DARK_G5 ),

  // Dark G6 connections
  makeEdge( NodeId.DARK_HYLIA_FORTUNE_TELLER_ENTRANCE, NodeId.CAVE_DARK_HYLIA_FORTUNE_TELLER ),
  makeEdge( NodeId.DARK_HYLIA_FORTUNE_TELLER_ENTRANCE, NodeId.DARK_G6_NW ),

  makeEdge( NodeId.DARK_IP_ENTRANCE, NodeId.IP_01_ENTRANCE ),
  makeEdge( NodeId.DARK_IP_ENTRANCE, NodeId.DARK_G6_UPGRADE_ISLAND ),

  // Dark G8 connections
  makeEdge( NodeId.DARK_ICE_ROD_CAVE_ENTRANCE, NodeId.CAVE_DARK_ICE_ROD_CAVE ),
  makeEdge( NodeId.DARK_ICE_ROD_CAVE_ENTRANCE, NodeId.DARK_G8 ),

  makeEdge( NodeId.DARK_ICE_ROCK_CAVE_ENTRANCE, NodeId.CAVE_DARK_ICE_ROCK_CAVE ),
  makeEdge( NodeId.DARK_ICE_ROCK_CAVE_ENTRANCE, NodeId.DARK_G8 ),

  makeEdge( NodeId.DARK_ICE_BEE_CAVE_ENTRANCE, NodeId.CAVE_DARK_ICE_BEE_CAVE ),
  makeEdge( NodeId.DARK_ICE_BEE_CAVE_ENTRANCE, NodeId.DARK_G8 ),

  // Dark H4 connections
  makeEdge( NodeId.DARK_SP_ENTRANCE, NodeId.SP_01_ENTRANCE ),
  makeEdge( NodeId.DARK_SP_ENTRANCE, NodeId.DARK_H4 ),
];

export { darkEntranceEdges };
