import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

// This file contains the actual entrances/exits to caves.
// These may be modified via entrance shuffle algorithms.

const entranceEdges: Edge[] = [
  // Light A1 connections
  makeEdge( NodeId.LIGHT_FOREST_HIDEOUT_ENTRANCE, NodeId.CAVE_WOODS_HIDEOUT_TOP ),
  makeEdge( NodeId.LIGHT_FOREST_HIDEOUT_EXIT, NodeId.CAVE_WOODS_HIDEOUT_BOTTOM ),
  makeEdge( NodeId.LIGHT_FOREST_HIDEOUT_EXIT, NodeId.LIGHT_A1_SE ),

  makeEdge( NodeId.LIGHT_FOREST_GAME_ENTRANCE, NodeId.CAVE_WOODS_TREASURE_GAME ),

  // Light A3 connections
  makeEdge( NodeId.LIGHT_LUMBERJACK_ENTRANCE, NodeId.CAVE_LUMBERJACK_TOP ),
  makeEdge( NodeId.LIGHT_LUMBERJACK_EXIT, NodeId.CAVE_LUMBERJACK_BOTTOM ),
  makeEdge( NodeId.LIGHT_LUMBERJACK_EXIT, NodeId.LIGHT_A3 ),

  // Light A4 connections
  makeEdge( NodeId.LIGHT_SPECTACLE_ROCK_ENTRANCE, NodeId.LIGHT_A4_LOWER ),
  makeEdge( NodeId.LIGHT_SPECTACLE_ROCK_ENTRANCE, NodeId.CAVE_SPECTACLE_BOTTOM ),
  makeEdge( NodeId.LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE, NodeId.LIGHT_A4_LOWER ),
  makeEdge( NodeId.LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE, NodeId.CAVE_SPECTACLE_OUTLOOK ),
  makeEdge( NodeId.LIGHT_SPECTACLE_ROCK_EXIT, NodeId.LIGHT_A4_LOWER ),
  makeEdge( NodeId.LIGHT_SPECTACLE_ROCK_EXIT, NodeId.CAVE_SPECTACLE_EXIT ),

  makeEdge( NodeId.LIGHT_DM_DESCENT_ENTRANCE, NodeId.LIGHT_A4_LOWER ),
  makeEdge( NodeId.LIGHT_DM_DESCENT_ENTRANCE, NodeId.CAVE_DM_DESCENT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_DM_DESCENT_EXIT_CAVE, NodeId.LIGHT_B3_DM_TOP, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.LIGHT_DM_DESCENT_EXIT_CAVE, NodeId.LIGHT_A4_LOWER, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_DM_DESCENT_EXIT_CAVE, NodeId.CAVE_DM_DESCENT_EXIT ),

  makeEdge( NodeId.LIGHT_DM_ASCENT_ENTRANCE, NodeId.LIGHT_B3_DM_BOTTOM ),
  makeEdge( NodeId.LIGHT_DM_ASCENT_ENTRANCE, NodeId.CAVE_DM_ASCENT_ENTRANCE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.LIGHT_DM_ASCENT_ENTRANCE, NodeId.CAVE_BUMPER_CAVE_BOTTOM, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_DM_ASCENT_EXIT_CAVE, NodeId.LIGHT_A4_LOWER ),
  makeEdge( NodeId.LIGHT_DM_ASCENT_EXIT_CAVE, NodeId.CAVE_DM_ASCENT_EXIT, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.LIGHT_DM_ASCENT_EXIT_CAVE, NodeId.CAVE_DM_DESCENT_EXIT, NodeConnectionId.IsInverted ),

  makeEdge( NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_ENTRANCE, NodeId.CAVE_DM_MAN_FRONT ),
  makeEdge( NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_ENTRANCE, NodeId.LIGHT_A4_LOWER ),
  makeEdge( NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_EXIT, NodeId.CAVE_DM_MAN_BACK ),
  makeEdge( NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_EXIT, NodeId.LIGHT_A4_LOWER ),

  makeEdge( NodeId.LIGHT_HERA_ENTRANCE, NodeId.TOH_02_ENTRANCE ),
  makeEdge( NodeId.LIGHT_HERA_ENTRANCE, NodeId.LIGHT_A4_UPPER ),

  // Light A6 connections
  makeEdge( NodeId.LIGHT_SPIRAL_CAVE_ENTRANCE, NodeId.CAVE_SPIRAL_CAVE_TOP ),
  makeEdge( NodeId.LIGHT_SPIRAL_CAVE_ENTRANCE, NodeId.LIGHT_A6_SPIRAL_TOP ),
  makeEdge( NodeId.LIGHT_SPIRAL_CAVE_EXIT, NodeId.CAVE_SPIRAL_CAVE_BOTTOM ),
  makeEdge( NodeId.LIGHT_SPIRAL_CAVE_EXIT, NodeId.LIGHT_A6_LOWER ),

  makeEdge( NodeId.LIGHT_MOUNTAIN_FAIRY_BOTTOM, NodeId.CAVE_FAIRY_TRANSITION_BOTTOM ),
  makeEdge( NodeId.LIGHT_MOUNTAIN_FAIRY_BOTTOM, NodeId.LIGHT_A6_FAIRY_LAND ),
  makeEdge( NodeId.LIGHT_MOUNTAIN_FAIRY_TOP, NodeId.CAVE_FAIRY_TRANSITION_TOP ),
  makeEdge( NodeId.LIGHT_MOUNTAIN_FAIRY_TOP, NodeId.LIGHT_A6_FAIRY_LEDGE ),

  makeEdge( NodeId.LIGHT_MIMIC_CAVE_ENTRANCE, NodeId.CAVE_MIMIC_CAVE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_MIMIC_CAVE_ENTRANCE, NodeId.LIGHT_A6_MIMIC_LEDGE ),

  makeEdge( NodeId.LIGHT_MOUNTAIN_FAIRY_CAVE, NodeId.CAVE_DM_FAIRY_CAVE ),
  makeEdge( NodeId.LIGHT_MOUNTAIN_FAIRY_CAVE, NodeId.LIGHT_A6_LOWER ),

  makeEdge( NodeId.LIGHT_PARADOX_BOTTOM_ENTRANCE, NodeId.CAVE_PARADOX_MIDDLE ),
  makeEdge( NodeId.LIGHT_PARADOX_BOTTOM_ENTRANCE, NodeId.LIGHT_A6_LOWER ),
  makeEdge( NodeId.LIGHT_PARADOX_MIDDLE_ENTRANCE, NodeId.CAVE_PARADOX_BOTTOM ),
  makeEdge( NodeId.LIGHT_PARADOX_MIDDLE_ENTRANCE, NodeId.LIGHT_A6_LOWER ),
  makeEdge( NodeId.LIGHT_PARADOX_TOP_ENTRANCE, NodeId.CAVE_PARADOX_TOP ),
  makeEdge( NodeId.LIGHT_PARADOX_TOP_ENTRANCE, NodeId.LIGHT_A6_UPPER ),

  // Light B8 connections
  makeEdge( NodeId.LIGHT_WATERFALL, NodeId.CAVE_WATERFALL_WISHING ),
  makeEdge( NodeId.LIGHT_WATERFALL, NodeId.LIGHT_B8_WATER ),

  // Light C2 connections
  makeEdge( NodeId.LIGHT_KAKARIKO_FORTUNE, NodeId.CAVE_KAKARIKO_FORTUNE_TELLER ),
  makeEdge( NodeId.LIGHT_KAKARIKO_FORTUNE, NodeId.LIGHT_C2 ),

  // Light C4 connections
  makeEdge( NodeId.LIGHT_SANCTUARY_BONK_ROCKS_ENTRANCE, NodeId.CAVE_SANCTUARY_BONK_ROCKS ),
  makeEdge( NodeId.LIGHT_SANCTUARY_BONK_ROCKS_ENTRANCE, NodeId.LIGHT_C4 ),
  makeEdge( NodeId.LIGHT_SANCTUARY_EXIT, NodeId.SANCTUARY ),
  makeEdge( NodeId.LIGHT_SANCTUARY_EXIT, NodeId.LIGHT_C4 ),

  // Light C5 connections
  makeEdge( NodeId.LIGHT_CASTLE_GRAVE_ENTRANCE, NodeId.HC_SEWERS_ESCAPE, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_GRAVEYARD_LEDGE_ENTRANCE, NodeId.CAVE_GRAVEYARD_LEDGE_MAIN ),
  makeEdge( NodeId.LIGHT_GRAVEYARD_LEDGE_ENTRANCE, NodeId.LIGHT_C5_LEDGE ),
  makeEdge( NodeId.LIGHT_KINGS_TOMB_ENTRANCE, NodeId.CAVE_KINGS_TOMB ),
  makeEdge( NodeId.LIGHT_KINGS_TOMB_ENTRANCE, NodeId.LIGHT_C5_KING_AREA ),

  // Light C6 connections
  makeEdge( NodeId.LIGHT_FAIRY_CAVE_ENTRANCE, NodeId.CAVE_POINTLESS_FAIRY_START ),
  makeEdge( NodeId.LIGHT_FAIRY_CAVE_EXIT, NodeId.CAVE_POINTLESS_FAIRY_END ),
  makeEdge( NodeId.LIGHT_FAIRY_CAVE_EXIT, NodeId.LIGHT_C6_WEST ),

  // Light C7 connections
  makeEdge( NodeId.LIGHT_POTION_SHOP_ENTRANCE, NodeId.CAVE_POTION_SHOP ),
  makeEdge( NodeId.LIGHT_POTION_SHOP_ENTRANCE, NodeId.LIGHT_C7 ),

  // Light D1 connections
  makeEdge( NodeId.LIGHT_WELL_ENTRANCE, NodeId.CAVE_WELL_TOP ),
  makeEdge( NodeId.LIGHT_WELL_EXIT, NodeId.CAVE_WELL_BOTTOM ),
  makeEdge( NodeId.LIGHT_WELL_EXIT, NodeId.LIGHT_D1 ),

  makeEdge( NodeId.LIGHT_BLINDS_HOUSE_ENTRANCE, NodeId.CAVE_BLINDS_HIDEOUT_TOP ),
  makeEdge( NodeId.LIGHT_BLINDS_HOUSE_ENTRANCE, NodeId.LIGHT_D1 ),

  makeEdge( NodeId.LIGHT_WOMAN_HOUSE_LEFT_ENTRANCE, NodeId.CAVE_WOMAN_HOME_LEFT ),
  makeEdge( NodeId.LIGHT_WOMAN_HOUSE_LEFT_ENTRANCE, NodeId.LIGHT_D1 ),
  makeEdge( NodeId.LIGHT_WOMAN_HOUSE_RIGHT_ENTRANCE, NodeId.CAVE_WOMAN_HOME_RIGHT ),
  makeEdge( NodeId.LIGHT_WOMAN_HOUSE_RIGHT_ENTRANCE, NodeId.LIGHT_D1 ),

  makeEdge( NodeId.LIGHT_SNITCH_HOUSE_LEFT_ENTRANCE, NodeId.CAVE_SNITCH_LEFT_HOME ),
  makeEdge( NodeId.LIGHT_SNITCH_HOUSE_LEFT_ENTRANCE, NodeId.LIGHT_D1 ),
  makeEdge( NodeId.LIGHT_SNITCH_HOUSE_RIGHT_ENTRANCE, NodeId.CAVE_SNITCH_RIGHT_HOME ),
  makeEdge( NodeId.LIGHT_SNITCH_HOUSE_RIGHT_ENTRANCE, NodeId.LIGHT_D1 ),

  makeEdge( NodeId.LIGHT_CUCCO_HOUSE_ENTRANCE, NodeId.CAVE_CUCCO_HOUSE ),
  makeEdge( NodeId.LIGHT_CUCCO_HOUSE_ENTRANCE, NodeId.LIGHT_D1 ),

  makeEdge( NodeId.LIGHT_TAVERN_BACK_ENTRANCE, NodeId.CAVE_TAVERN_BACK ),
  makeEdge( NodeId.LIGHT_TAVERN_BACK_ENTRANCE, NodeId.LIGHT_D1 ),
  makeEdge( NodeId.LIGHT_TAVERN_FRONT_ENTRANCE, NodeId.CAVE_TAVERN_FRONT ),
  makeEdge( NodeId.LIGHT_TAVERN_FRONT_ENTRANCE, NodeId.LIGHT_D1 ),

  makeEdge( NodeId.LIGHT_SICK_KID_ENTRANCE, NodeId.CAVE_SICK_KID_HOME ),
  makeEdge( NodeId.LIGHT_SICK_KID_ENTRANCE, NodeId.LIGHT_D1 ),

  makeEdge( NodeId.LIGHT_GRASS_HOUSE_ENTRANCE, NodeId.CAVE_GRASS_HOME ),
  makeEdge( NodeId.LIGHT_GRASS_HOUSE_ENTRANCE, NodeId.LIGHT_D1 ),
  makeEdge( NodeId.LIGHT_BOMBABLE_HUT_ENTRANCE, NodeId.CAVE_BOMBABLE_HUT ),
  makeEdge( NodeId.LIGHT_BOMBABLE_HUT_ENTRANCE, NodeId.LIGHT_D1 ),
  makeEdge( NodeId.LIGHT_KAKARIKO_SHOP_ENTRANCE, NodeId.CAVE_KAKARIKO_SHOP ),
  makeEdge( NodeId.LIGHT_KAKARIKO_SHOP_ENTRANCE, NodeId.LIGHT_D1 ),

  // Light D4 connections
  makeEdge( NodeId.LIGHT_UNCLE_ENTRANCE, NodeId.CAVE_UNCLE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_UNCLE_EXIT, NodeId.CAVE_UNCLE_EXIT ),
  makeEdge( NodeId.LIGHT_UNCLE_EXIT, NodeId.LIGHT_D4_GARDEN ),

  makeEdge( NodeId.LIGHT_HYRULE_CASTLE_CENTER_ENTRANCE, NodeId.HC_LOBBY ),
  makeEdge( NodeId.LIGHT_HYRULE_CASTLE_CENTER_ENTRANCE, NodeId.LIGHT_D4_GARDEN ),
  makeEdge( NodeId.LIGHT_HYRULE_CASTLE_LEFT_ENTRANCE, NodeId.HC_LEFT ),
  makeEdge( NodeId.LIGHT_HYRULE_CASTLE_LEFT_ENTRANCE, NodeId.LIGHT_D4_ROOFTOP ),
  makeEdge( NodeId.LIGHT_HYRULE_CASTLE_RIGHT_ENTRANCE, NodeId.HC_RIGHT ),
  makeEdge( NodeId.LIGHT_HYRULE_CASTLE_RIGHT_ENTRANCE, NodeId.LIGHT_D4_ROOFTOP ),

  makeEdge( NodeId.LIGHT_HYRULE_CASTLE_TOWER_ENTRANCE, NodeId.CT_02_ENTRY ),
  makeEdge( NodeId.LIGHT_HYRULE_CASTLE_TOWER_ENTRANCE, NodeId.LIGHT_D4_ROOFTOP ),

  // Light D7 connections
  makeEdge( NodeId.LIGHT_SAHASRAHLA_ENTRANCE, NodeId.CAVE_SAHAS_MAIN ),
  makeEdge( NodeId.LIGHT_SAHASRAHLA_ENTRANCE, NodeId.LIGHT_D7 ),
  makeEdge( NodeId.LIGHT_EASTERN_PALACE_ENTRANCE, NodeId.EP_01_LOBBY ),
  makeEdge( NodeId.LIGHT_EASTERN_PALACE_ENTRANCE, NodeId.LIGHT_D7 ),

  // Light E3 connections
  makeEdge( NodeId.LIGHT_BLACKSMITHS_ENTRANCE, NodeId.CAVE_BLACKSMITHS ),
  makeEdge( NodeId.LIGHT_BLACKSMITHS_ENTRANCE, NodeId.LIGHT_E3 ),
  makeEdge( NodeId.LIGHT_MAD_BATTER_ENTRANCE, NodeId.CAVE_MAD_BATTER_ENTRANCE ),
  makeEdge( NodeId.LIGHT_MAD_BATTER_EXIT, NodeId.CAVE_MAD_BATTER_EXIT ),
  makeEdge( NodeId.LIGHT_MAD_BATTER_EXIT, NodeId.LIGHT_E3 ),

  // Light F1 connections
  makeEdge( NodeId.LIGHT_BROTHERS_LEFT_ENTRANCE, NodeId.CAVE_FIGHTING_BROS_LEFT ),
  makeEdge( NodeId.LIGHT_BROTHERS_LEFT_ENTRANCE, NodeId.LIGHT_F1_UPPER ),

  // Light F2 connections
  makeEdge( NodeId.LIGHT_LIBRARY_ENTRANCE, NodeId.CAVE_LIBRARY_MAIN ),
  makeEdge( NodeId.LIGHT_LIBRARY_ENTRANCE, NodeId.LIGHT_F2_UPPER ),
  makeEdge( NodeId.LIGHT_KAKARIKO_CHEST_GAME_ENTRANCE, NodeId.CAVE_KAKARIKO_CHEST_GAME ),
  makeEdge( NodeId.LIGHT_KAKARIKO_CHEST_GAME_ENTRANCE, NodeId.LIGHT_F2_LOWER ),

  // Light F4 connections
  makeEdge( NodeId.LIGHT_HOUSE_BONK_ROCK_ENTRANCE, NodeId.CAVE_HOUSE_BONK_ROCKS ),
  makeEdge( NodeId.LIGHT_HOUSE_BONK_ROCK_ENTRANCE, NodeId.LIGHT_F4 ),

  // Light F5 connections
  makeEdge( NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeId.LIGHT_F5 ),
  makeEdge( NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeId.StartingHouse, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeId.BombShopHouse, NodeConnectionId.IsInverted ),

  // Light F7 connections
  makeEdge( NodeId.LIGHT_TREES_FAIRY_ENTRANCE, NodeId.CAVE_LIGHT_TREE_FAIRY_CAVE ),
  makeEdge( NodeId.LIGHT_TREES_FAIRY_ENTRANCE, NodeId.LIGHT_F7 ),

  // Light F8 connections
  makeEdge( NodeId.LIGHT_PEGS_FAIRY_ENTRANCE, NodeId.CAVE_LIGHT_PEGS_FAIRY_CAVE ),
  makeEdge( NodeId.LIGHT_PEGS_FAIRY_ENTRANCE, NodeId.LIGHT_F8 ),

  // Light G1 connections
  makeEdge( NodeId.LIGHT_CHECKERBOARD_ENTRANCE, NodeId.CAVE_CHECKERBOARD_CAVE ),
  makeEdge( NodeId.LIGHT_CHECKERBOARD_ENTRANCE, NodeId.LIGHT_G1_NE ),
  makeEdge( NodeId.LIGHT_AGINAH_ENTRANCE, NodeId.CAVE_AGINAH_CAVE_MAIN ),
  makeEdge( NodeId.LIGHT_AGINAH_ENTRANCE, NodeId.LIGHT_G1 ),

  makeEdge( NodeId.LIGHT_DESERT_PALACE_CENTER_ENTRANCE, NodeId.DP_01_LOBBY ),
  makeEdge( NodeId.LIGHT_DESERT_PALACE_CENTER_ENTRANCE, NodeId.LIGHT_G1_GATE_NORTH ),
  makeEdge( NodeId.LIGHT_DESERT_PALACE_RIGHT_ENTRANCE, NodeId.DP_01_EAST_ENTRANCE ),
  makeEdge( NodeId.LIGHT_DESERT_PALACE_RIGHT_ENTRANCE, NodeId.LIGHT_G1_ZONK ),
  makeEdge( NodeId.LIGHT_DESERT_PALACE_LEFT_ENTRANCE, NodeId.DP_01_WEST_ENTRANCE ),
  makeEdge( NodeId.LIGHT_DESERT_PALACE_LEFT_ENTRANCE, NodeId.LIGHT_G1_WEST ),
  makeEdge( NodeId.LIGHT_DESERT_PALACE_BACK_ENTRANCE, NodeId.DP_01_BACK_ENTRANCE ),
  makeEdge( NodeId.LIGHT_DESERT_PALACE_BACK_ENTRANCE, NodeId.LIGHT_G1_TOP ),

  // Light G3 connections
  makeEdge( NodeId.LIGHT_VT_CAVE_ENTRANCE, NodeId.CAVE_VT_CAVE ),
  makeEdge( NodeId.LIGHT_VT_CAVE_ENTRANCE, NodeId.LIGHT_G3_VT ),

  // Light G5 connections
  makeEdge( NodeId.LIGHT_HYPE_FAIRY_ENTRANCE, NodeId.CAVE_HYPE_FAIRY ),
  makeEdge( NodeId.LIGHT_HYPE_FAIRY_ENTRANCE, NodeId.LIGHT_G5 ),

  // Light G6 connections
  makeEdge( NodeId.LIGHT_LAKE_FORTUNE_TELLER_ENTRANCE, NodeId.CAVE_LAKE_HYLIA_FORTUNE_TELLER ),
  makeEdge( NodeId.LIGHT_LAKE_FORTUNE_TELLER_ENTRANCE, NodeId.LIGHT_G6_NW ),
  makeEdge( NodeId.LIGHT_LAKE_SHOP_ENTRANCE, NodeId.CAVE_LAKE_HYLIA_SHOP ),
  makeEdge( NodeId.LIGHT_LAKE_SHOP_ENTRANCE, NodeId.LIGHT_G6_NW ),
  makeEdge( NodeId.LIGHT_UPGRADE_FAIRY_ENTRANCE, NodeId.CAVE_UPGRADE_FAIRY ),
  makeEdge( NodeId.LIGHT_UPGRADE_FAIRY_ENTRANCE, NodeId.LIGHT_G6_UPGRADE_ISLAND ),
  makeEdge( NodeId.LIGHT_MINI_MOLDORM_ENTRANCE, NodeId.CAVE_MINI_MOLDORM_MAIN ),
  makeEdge( NodeId.LIGHT_MINI_MOLDORM_ENTRANCE, NodeId.LIGHT_G6_SW ),

  // Light G8 connections
  makeEdge( NodeId.LIGHT_ICE_ROD_CAVE_ENTRANCE, NodeId.CAVE_ICE_ROD_CAVE ),
  makeEdge( NodeId.LIGHT_ICE_ROD_CAVE_ENTRANCE, NodeId.LIGHT_G8 ),
  makeEdge( NodeId.LIGHT_ICE_BEE_CAVE_ENTRANCE, NodeId.CAVE_ICE_BEE_CAVE ),
  makeEdge( NodeId.LIGHT_ICE_BEE_CAVE_ENTRANCE, NodeId.LIGHT_G8 ),
  makeEdge( NodeId.LIGHT_ICE_FAIRY_CAVE_ENTRANCE, NodeId.CAVE_ICE_FAIRY_CAVE ),
  makeEdge( NodeId.LIGHT_ICE_FAIRY_CAVE_ENTRANCE, NodeId.LIGHT_G8 ),

  // Light H3 connections
  makeEdge( NodeId.LIGHT_THIEF_CAVE_ENTRANCE, NodeId.CAVE_THIEF_CAVE ),
  makeEdge( NodeId.LIGHT_THIEF_CAVE_ENTRANCE, NodeId.LIGHT_H3 ),
  makeEdge( NodeId.LIGHT_RUPEE_CAVE_ENTRANCE, NodeId.CAVE_RUPEE_CAVE ),
  makeEdge( NodeId.LIGHT_RUPEE_CAVE_ENTRANCE, NodeId.LIGHT_H3 ),

  // Light H4 connections
  makeEdge( NodeId.LIGHT_DAM_ENTRANCE, NodeId.CAVE_DAM_RELEASE ),
  makeEdge( NodeId.LIGHT_DAM_ENTRANCE, NodeId.LIGHT_H4 ),
];

export { entranceEdges };
