import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

const lightOverworldEdges: Edge[] = [
  // Light A1, Lost woods screen transitions.
  makeEdge( NodeId.LIGHT_A1_NW, NodeId.LIGHT_A1_NE ),
  makeEdge( NodeId.LIGHT_A1_NW, NodeId.LIGHT_A1_SW ),
  makeEdge( NodeId.LIGHT_A1_NW, NodeId.LIGHT_MASTER_SWORD_PEDESTAL, NodeConnectionId.CanPullPedestal ),

  makeEdge( NodeId.LIGHT_A1_NE, NodeId.LIGHT_A3 ),
  makeEdge( NodeId.LIGHT_A1_NE, NodeId.LIGHT_A1_SE ),
  makeEdge( NodeId.LIGHT_A1_NE, NodeId.LIGHT_FOREST_GAME_ENTRANCE ),
  makeEdge( NodeId.LIGHT_A1_NE, NodeId.LIGHT_MUSHROOM_SPOT ),

  makeEdge( NodeId.LIGHT_A1_SW, NodeId.LIGHT_A1_NW ),
  makeEdge( NodeId.LIGHT_A1_SW, NodeId.LIGHT_C1_WEST ),
  makeEdge( NodeId.LIGHT_A1_SW, NodeId.LIGHT_C1_NE ),

  makeEdge( NodeId.LIGHT_A1_SE, NodeId.LIGHT_A1_NE ),
  makeEdge( NodeId.LIGHT_A1_SE, NodeId.LIGHT_FOREST_HIDEOUT_ENTRANCE, NodeConnectionId.CanActInLightWorld ),
  makeEdge( NodeId.LIGHT_A1_SE, NodeId.LIGHT_FOREST_HIDEOUT_EXIT ),
  makeEdge( NodeId.LIGHT_A1_SE, NodeId.LIGHT_C2 ),

  // Light A3 Lumberjack screen transitions.
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_A1_NE ),
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_B3 ),
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_LUMBERJACK_HOUSE ),
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_LUMBERJACK_EXIT ),
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_LUMBERJACK_ENTRANCE, NodeConnectionId.CanEnterLumberjackTree ),

  // Light A4, west death mountain.
  // Adjust the rules on this one for major glitches.
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_A4_UPPER, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_A6_LOWER_LEFT ),

  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_DM_ASCENT_EXIT_CAVE ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_EXIT ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_DM_DESCENT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_SPECTACLE_ROCK_EXIT ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_SPECTACLE_ROCK_ENTRANCE ),

  makeEdge( NodeId.LIGHT_A4_SPECTACLE_ROCK, NodeId.LIGHT_A4_UPPER ),
  makeEdge( NodeId.LIGHT_A4_SPECTACLE_ROCK, NodeId.LIGHT_A4_LOWER ),

  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_ETHER_MEDALLION, NodeConnectionId.IsTabletAccessible ),
  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_A4_SPECTACLE_ROCK, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_A4_LOWER ),
  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_A6_UPPER_LEFT ),
  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_HERA_ENTRANCE ),

  // Light A6
  makeEdge( NodeId.LIGHT_A6_UPPER_LEFT, NodeId.LIGHT_A4_UPPER ),
  makeEdge( NodeId.LIGHT_A6_UPPER_LEFT, NodeId.LIGHT_A6_UPPER, NodeConnectionId.HasHammerLightWorld ),

  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_UPPER_LEFT, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A8 ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_ISLAND, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_SPIRAL_TOP ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_MIMIC_LEDGE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_FAIRY_LEDGE ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_FAIRY_LAND ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_LOWER ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_PARADOX_TOP_ENTRANCE ),

  makeEdge( NodeId.LIGHT_A6_ISLAND, NodeId.LIGHT_A6_UPPER, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A6_ISLAND, NodeId.LIGHT_MOUNTAIN_ISLAND_ITEM ),

  makeEdge( NodeId.LIGHT_A6_SPIRAL_TOP, NodeId.LIGHT_SPIRAL_CAVE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_A6_SPIRAL_TOP, NodeId.LIGHT_A6_LOWER ),

  makeEdge( NodeId.LIGHT_A6_MIMIC_LEDGE, NodeId.LIGHT_MIMIC_CAVE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_A6_MIMIC_LEDGE, NodeId.LIGHT_A6_LOWER, NodeConnectionId.IsInverted ),

  makeEdge( NodeId.LIGHT_A6_FAIRY_LEDGE, NodeId.LIGHT_MOUNTAIN_FAIRY_TOP ),
  makeEdge( NodeId.LIGHT_A6_FAIRY_LEDGE, NodeId.LIGHT_A6_FAIRY_LAND ),

  makeEdge( NodeId.LIGHT_A6_FAIRY_LAND, NodeId.LIGHT_MOUNTAIN_FAIRY_BOTTOM ),
  makeEdge( NodeId.LIGHT_A6_FAIRY_LAND, NodeId.LIGHT_A6_LOWER ),

  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_A6_LOWER_LEFT, NodeConnectionId.HasHookshotLightWorld ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_SPIRAL_CAVE_EXIT ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_MOUNTAIN_FAIRY_CAVE ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_PARADOX_MIDDLE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_PARADOX_BOTTOM_ENTRANCE ),

  makeEdge( NodeId.LIGHT_A6_LOWER_LEFT, NodeId.LIGHT_A4_LOWER ),
  makeEdge( NodeId.LIGHT_A6_LOWER_LEFT, NodeId.LIGHT_A6_LOWER, NodeConnectionId.HasHookshotLightWorld ),

  // Light A8 main connections
  makeEdge( NodeId.LIGHT_A8, NodeId.LIGHT_A6_UPPER ),
  makeEdge( NodeId.LIGHT_A8, NodeId.LIGHT_A8_UPPER_ROCK, NodeConnectionId.CanWalkToUpperTurtleRockSurface ),

  makeEdge( NodeId.LIGHT_A8_UPPER_ROCK, NodeId.LIGHT_A8, NodeConnectionId.CanLeaveUpperTurtleRockSurface ),

  // Light B3 connections
  makeEdge( NodeId.LIGHT_B3, NodeId.LIGHT_A3 ),
  makeEdge( NodeId.LIGHT_B3, NodeId.LIGHT_C3 ),
  makeEdge( NodeId.LIGHT_B3, NodeId.LIGHT_B3_DM_BOTTOM, NodeConnectionId.HasGloveLightWorld ),

  makeEdge( NodeId.LIGHT_B3_DM_BOTTOM, NodeId.LIGHT_B3 ),
  makeEdge( NodeId.LIGHT_B3_DM_BOTTOM, NodeId.LIGHT_DM_DESCENT_EXIT_CAVE ),

  makeEdge( NodeId.LIGHT_B3_DM_TOP, NodeId.LIGHT_B3 ),
  makeEdge( NodeId.LIGHT_B3_DM_TOP, NodeId.LIGHT_DM_ASCENT_ENTRANCE ),

  // Light B8 edges
  makeEdge( NodeId.LIGHT_B8, NodeId.LIGHT_C8 ),
  makeEdge( NodeId.LIGHT_B8, NodeId.LIGHT_B8_ZORA_MAIN ),
  makeEdge( NodeId.LIGHT_B8, NodeId.LIGHT_B8_WATER, NodeConnectionId.HasFlippers ),

  makeEdge( NodeId.LIGHT_B8_WATER, NodeId.LIGHT_B8_WATER_WARP ),
  makeEdge( NodeId.LIGHT_B8_WATER, NodeId.LIGHT_B8 ),
  makeEdge( NodeId.LIGHT_B8_WATER, NodeId.LIGHT_WATERFALL, NodeConnectionId.CanGetItemsAfterWaterfall ),

  makeEdge( NodeId.LIGHT_B8_ZORA_MAIN, NodeId.LIGHT_B8_ZORA_LEDGE, NodeConnectionId.CanGetItemsAfterWaterfall ),
  makeEdge( NodeId.LIGHT_B8_ZORA_MAIN, NodeId.LIGHT_B8 ),
  makeEdge( NodeId.LIGHT_B8_ZORA_MAIN, NodeId.LIGHT_ZORA_LEDGE_ITEM, NodeConnectionId.AlwaysVisible ),

  makeEdge( NodeId.LIGHT_B8_ZORA_LEDGE, NodeId.LIGHT_ZORA_LEDGE_ITEM ),

  // Light C1 connections
  makeEdge( NodeId.LIGHT_C1_WEST, NodeId.LIGHT_A1_SW ),
  makeEdge( NodeId.LIGHT_C1_WEST, NodeId.LIGHT_D1 ),

  makeEdge( NodeId.LIGHT_C1_NE, NodeId.LIGHT_A1_SW ),
  makeEdge( NodeId.LIGHT_C1_NE, NodeId.LIGHT_C1_EAST, NodeConnectionId.HasHammerLightWorld ),

  makeEdge( NodeId.LIGHT_C1_EAST, NodeId.LIGHT_C1_NE, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_C1_EAST, NodeId.LIGHT_C1_SE, NodeConnectionId.HasTitansLightWorld ),

  makeEdge( NodeId.LIGHT_C1_SE, NodeId.LIGHT_C1_EAST, NodeConnectionId.HasTitansLightWorld ),
  makeEdge( NodeId.LIGHT_C1_SE, NodeId.LIGHT_D1 ),

  // Light C2 connections
  makeEdge( NodeId.LIGHT_C2, NodeId.LIGHT_A1_SE ),
  makeEdge( NodeId.LIGHT_C2, NodeId.LIGHT_C3 ),
  makeEdge( NodeId.LIGHT_C2, NodeId.LIGHT_D1 ),
  makeEdge( NodeId.LIGHT_C2, NodeId.LIGHT_KAKARIKO_FORTUNE ),

  // Light C3 connections
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_B3 ),
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_C2 ),
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_C4 ),
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_D3 ),
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_C3_WATER, NodeConnectionId.HasFlippers ),

  makeEdge( NodeId.LIGHT_C3_WATER, NodeId.LIGHT_C3 ),
  makeEdge( NodeId.LIGHT_C3_WATER, NodeId.LIGHT_C3_WATER_WARP ),

  // Light C4 connections
  makeEdge( NodeId.LIGHT_C4, NodeId.LIGHT_C3 ),
  makeEdge( NodeId.LIGHT_C4, NodeId.LIGHT_C5 ),
  makeEdge( NodeId.LIGHT_C4, NodeId.LIGHT_SANCTUARY_BONK_ROCKS_ENTRANCE, NodeConnectionId.HasBootsLightWorld ),

  // Light C5 connections
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_C4 ),
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_C6_WEST ),
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_C5_LEDGE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_C5_KING_AREA, NodeConnectionId.HasTitansLightWorld ),
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_CASTLE_GRAVE_ENTRANCE, NodeConnectionId.HasGloveLightWorld ),

  makeEdge( NodeId.LIGHT_C5_KING_AREA, NodeId.LIGHT_C5, NodeConnectionId.HasTitansLightWorld ),
  makeEdge( NodeId.LIGHT_C5_KING_AREA, NodeId.LIGHT_KINGS_TOMB_ENTRANCE, NodeConnectionId.HasBootsLightWorld ),

  makeEdge( NodeId.LIGHT_C5_LEDGE, NodeId.LIGHT_C5 ),
  makeEdge( NodeId.LIGHT_C5_LEDGE, NodeId.LIGHT_GRAVEYARD_LEDGE_ENTRANCE ),

  // Light C6 connections
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_C5 ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_D6_WEST ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_C6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_FAIRY_CAVE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_FAIRY_CAVE_EXIT ),

  makeEdge( NodeId.LIGHT_C6_WATER, NodeId.LIGHT_C6_WEST ),
  makeEdge( NodeId.LIGHT_C6_WATER, NodeId.LIGHT_C6_WATER_WARP ),
  makeEdge( NodeId.LIGHT_C6_WATER, NodeId.LIGHT_C6_EAST ),

  makeEdge( NodeId.LIGHT_C6_EAST, NodeId.LIGHT_C7 ),
  makeEdge( NodeId.LIGHT_C6_EAST, NodeId.LIGHT_D6_EAST ),
  makeEdge( NodeId.LIGHT_C6_EAST, NodeId.LIGHT_C6_WATER, NodeConnectionId.HasFlippers ),

  // Light C7 connections
  makeEdge( NodeId.LIGHT_C7, NodeId.LIGHT_C7_UPPER, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_C7, NodeId.LIGHT_C6_EAST ),
  makeEdge( NodeId.LIGHT_C7, NodeId.LIGHT_POTION_SHOP_ENTRANCE ),

  makeEdge( NodeId.LIGHT_C7_UPPER, NodeId.LIGHT_C8 ),
  makeEdge( NodeId.LIGHT_C7_UPPER, NodeId.LIGHT_C7, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_C7_UPPER, NodeId.LIGHT_C6_WATER, NodeConnectionId.HasFlippers ),

  // Light C8 connections
  makeEdge( NodeId.LIGHT_C8, NodeId.LIGHT_C7_UPPER ),
  makeEdge( NodeId.LIGHT_C8, NodeId.LIGHT_B8 ),

  // Light D1 connections
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_C1_WEST ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_C1_SE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_C2 ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_E3 ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_F2_UPPER ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_WELL_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_WELL_EXIT ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_BLINDS_HOUSE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_WOMAN_HOUSE_LEFT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_WOMAN_HOUSE_RIGHT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_SNITCH_HOUSE_LEFT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_BOTTLE_PURCHASE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_SNITCH_HOUSE_RIGHT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_CUCCO_HOUSE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_SICK_KID_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_GRASS_HOUSE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_BOMBABLE_HUT_ENTRANCE, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_KAKARIKO_SHOP_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_TAVERN_BACK_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_TAVERN_FRONT_ENTRANCE ),

  // Light D3 connections
  makeEdge( NodeId.LIGHT_D3, NodeId.LIGHT_C3 ),
  makeEdge( NodeId.LIGHT_D3, NodeId.LIGHT_D4_OUTER ),

  // Light D4 connections
  makeEdge( NodeId.LIGHT_D4_OUTER, NodeId.LIGHT_D4_LOWER ),
  makeEdge( NodeId.LIGHT_D4_OUTER, NodeId.LIGHT_E6, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_D4_OUTER, NodeId.LIGHT_D4_GARDEN, NodeConnectionId.HasNotBeatenAgahnimForDarkWorld ),

  makeEdge( NodeId.LIGHT_D4_LOWER, NodeId.LIGHT_F4 ),
  makeEdge( NodeId.LIGHT_D4_LOWER, NodeId.LIGHT_F5 ),
  makeEdge( NodeId.LIGHT_D4_LOWER, NodeId.LIGHT_D4_OUTER ),
  makeEdge( NodeId.LIGHT_D4_LOWER, NodeId.LIGHT_UNCLE_ENTRANCE ),

  makeEdge( NodeId.LIGHT_D4_GARDEN, NodeId.LIGHT_D4_OUTER, NodeConnectionId.HasNotBeatenAgahnimForDarkWorld ),
  makeEdge( NodeId.LIGHT_D4_GARDEN, NodeId.LIGHT_UNCLE_EXIT ),
  makeEdge( NodeId.LIGHT_D4_GARDEN, NodeId.LIGHT_HYRULE_CASTLE_CENTER_ENTRANCE ),

  makeEdge( NodeId.LIGHT_D4_ROOFTOP, NodeId.LIGHT_HYRULE_CASTLE_LEFT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D4_ROOFTOP, NodeId.LIGHT_HYRULE_CASTLE_RIGHT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D4_ROOFTOP, NodeId.LIGHT_HYRULE_CASTLE_TOWER_ENTRANCE, NodeConnectionId.CanEnterCastleTower ),

  // Light D6 connections
  makeEdge( NodeId.LIGHT_D6_WEST, NodeId.LIGHT_D6_EAST ),
  makeEdge( NodeId.LIGHT_D6_WEST, NodeId.LIGHT_C6_WEST ),

  makeEdge( NodeId.LIGHT_D6_EAST, NodeId.LIGHT_D6_WEST ),
  makeEdge( NodeId.LIGHT_D6_EAST, NodeId.LIGHT_C6_EAST ),
  makeEdge( NodeId.LIGHT_D6_EAST, NodeId.LIGHT_E6 ),

  // Light D7 connections
  makeEdge( NodeId.LIGHT_D7, NodeId.LIGHT_F7 ),
  makeEdge( NodeId.LIGHT_D7, NodeId.LIGHT_F8 ),
  makeEdge( NodeId.LIGHT_D7, NodeId.LIGHT_SAHASRAHLA_ENTRANCE ),
  makeEdge( NodeId.LIGHT_D7, NodeId.LIGHT_EASTERN_PALACE_ENTRANCE ),

  // Light E3 connections
  makeEdge( NodeId.LIGHT_E3, NodeId.LIGHT_D1 ),
  makeEdge( NodeId.LIGHT_E3, NodeId.LIGHT_E3_UPPER, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_E3, NodeId.LIGHT_BLACKSMITHS_ENTRANCE ),

  // Light E6 connections
  makeEdge( NodeId.LIGHT_E6, NodeId.LIGHT_D6_EAST ),
  makeEdge( NodeId.LIGHT_E6, NodeId.LIGHT_D4_OUTER, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_E6, NodeId.LIGHT_F6_UPPER ),

  // Light F1 connections
  makeEdge( NodeId.LIGHT_F1_LOWER, NodeId.LIGHT_F2_LOWER ),

  makeEdge( NodeId.LIGHT_F1_UPPER, NodeId.LIGHT_F1_LOWER ),
  makeEdge( NodeId.LIGHT_F1_UPPER, NodeId.LIGHT_F1_GAME ),
  makeEdge( NodeId.LIGHT_F1_UPPER, NodeId.LIGHT_BROTHERS_LEFT_ENTRANCE ),

  makeEdge( NodeId.LIGHT_F1_GAME, NodeId.LIGHT_F1_UPPER ),
  makeEdge( NodeId.LIGHT_F1_GAME, NodeId.LIGHT_RACE_GAME_ITEM ),
  makeEdge( NodeId.LIGHT_F1_GAME, NodeId.LIGHT_F1_LOWER ),

  // Light F2 connections.
  makeEdge( NodeId.LIGHT_F2_UPPER, NodeId.LIGHT_D1 ),
  makeEdge( NodeId.LIGHT_F2_UPPER, NodeId.LIGHT_F2_LOWER ),
  makeEdge( NodeId.LIGHT_F2_UPPER, NodeId.LIGHT_LIBRARY_ENTRANCE ),

  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_F2_UPPER ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_F1_LOWER ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_F3_BYPASS ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_KAKARIKO_CHEST_GAME_ENTRANCE ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_BROTHERS_RIGHT_ENTRANCE ),

  // Light F3 connections
  makeEdge( NodeId.LIGHT_F3, NodeId.LIGHT_G3, NodeConnectionId.CanActInLightWorld ),
  makeEdge( NodeId.LIGHT_F3, NodeId.LIGHT_SHOVEL_SPOT, NodeConnectionId.HasShovelLightWorld ),

  makeEdge( NodeId.LIGHT_F3_BYPASS, NodeId.LIGHT_F2_LOWER ),
  makeEdge( NodeId.LIGHT_F3_BYPASS, NodeId.LIGHT_G3 ),

  // Light F4 connections
  makeEdge( NodeId.LIGHT_F4, NodeId.LIGHT_D4_LOWER ),
  makeEdge( NodeId.LIGHT_F4, NodeId.LIGHT_F5 ),
  makeEdge( NodeId.LIGHT_F4, NodeId.LIGHT_G4_BYPASS ),
  makeEdge( NodeId.LIGHT_F4, NodeId.LIGHT_HOUSE_BONK_ROCK_ENTRANCE, NodeConnectionId.HasBootsLightWorld ),

  // Light F5 connections
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_F4 ),
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_D4_LOWER ),
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_F6_LOWER ),
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_G5 ),
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_LINKS_HOUSE_ENTRANCE ),

  // Light F6 connections
  makeEdge( NodeId.LIGHT_F6_LOWER, NodeId.LIGHT_F6_UPPER ),
  makeEdge( NodeId.LIGHT_F6_LOWER, NodeId.LIGHT_F5 ),
  makeEdge( NodeId.LIGHT_F6_LOWER, NodeId.LIGHT_G6_NW ),

  makeEdge( NodeId.LIGHT_F6_UPPER, NodeId.LIGHT_F6_LOWER ),
  makeEdge( NodeId.LIGHT_F6_UPPER, NodeId.LIGHT_E6 ),
  makeEdge( NodeId.LIGHT_F6_UPPER, NodeId.LIGHT_F7 ),

  makeEdge( NodeId.LIGHT_F6_WATER, NodeId.LIGHT_F7_WATER ),
  makeEdge( NodeId.LIGHT_F6_WATER, NodeId.LIGHT_BIRD_LOVER ),

  // Light F7 connections
  makeEdge( NodeId.LIGHT_F7, NodeId.LIGHT_D7 ),
  makeEdge( NodeId.LIGHT_F7, NodeId.LIGHT_G6_NE ),
  makeEdge( NodeId.LIGHT_F7, NodeId.LIGHT_F6_UPPER ),
  makeEdge( NodeId.LIGHT_F7, NodeId.LIGHT_TREES_FAIRY_ENTRANCE ),

  makeEdge( NodeId.LIGHT_F7_WATER, NodeId.LIGHT_F6_WATER ),
  makeEdge( NodeId.LIGHT_F7_WATER, NodeId.LIGHT_G6_WATER ),

  // Light F8 connections
  makeEdge( NodeId.LIGHT_F8, NodeId.LIGHT_D7 ),
  makeEdge( NodeId.LIGHT_F8, NodeId.LIGHT_F8_PEGS, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_F8, NodeId.LIGHT_PEGS_FAIRY_ENTRANCE ),

  makeEdge( NodeId.LIGHT_F8_PEGS, NodeId.LIGHT_F8, NodeConnectionId.HasHammerLightWorld ),

  // Light G1 connections
  makeEdge( NodeId.LIGHT_G1, NodeId.LIGHT_H3 ),
  makeEdge( NodeId.LIGHT_G1, NodeId.LIGHT_G1_NE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_G1, NodeId.LIGHT_G1_GATE_SOUTH ),
  makeEdge( NodeId.LIGHT_G1, NodeId.LIGHT_AGINAH_ENTRANCE ),

  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.LIGHT_G1 ),
  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.LIGHT_DESERT_LEDGE_ITEM ),
  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.LIGHT_DESERT_PALACE_LEFT_ENTRANCE ),
  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.LIGHT_G1_TOP, NodeConnectionId.HasGloveLightWorld ),

  makeEdge( NodeId.LIGHT_G1_SOUTH, NodeId.LIGHT_G1 ),

  makeEdge( NodeId.LIGHT_G1_NE, NodeId.LIGHT_G1 ),
  makeEdge( NodeId.LIGHT_G1_NE, NodeId.LIGHT_CHECKERBOARD_ENTRANCE, NodeConnectionId.HasGloveLightWorld ),

  makeEdge( NodeId.LIGHT_G1_TABLET_AREA, NodeId.LIGHT_H3_TABLET_AREA ),
  makeEdge( NodeId.LIGHT_G1_TABLET_AREA, NodeId.LIGHT_G1 ),
  makeEdge( NodeId.LIGHT_G1_TABLET_AREA, NodeId.LIGHT_BOMBOS_TABLET, NodeConnectionId.IsTabletAccessible ),

  makeEdge( NodeId.LIGHT_G1_ZONK, NodeId.LIGHT_G1 ),
  makeEdge( NodeId.LIGHT_G1_ZONK, NodeId.LIGHT_DESERT_PALACE_RIGHT_ENTRANCE ),

  makeEdge( NodeId.LIGHT_G1_TOP, NodeId.LIGHT_G1_WEST, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_G1_TOP, NodeId.LIGHT_DESERT_PALACE_BACK_ENTRANCE ),

  makeEdge( NodeId.LIGHT_G1_GATE_NORTH, NodeId.LIGHT_DESERT_PALACE_CENTER_ENTRANCE ),

  makeEdge( NodeId.LIGHT_G1_GATE_SOUTH, NodeId.LIGHT_G1_GATE_NORTH, NodeConnectionId.HasBookLightWorld ),
  makeEdge( NodeId.LIGHT_G1_GATE_SOUTH, NodeId.LIGHT_G1 ),

  // Light G3 connections
  makeEdge( NodeId.LIGHT_G3, NodeId.LIGHT_F3_BYPASS ),
  makeEdge( NodeId.LIGHT_G3, NodeId.LIGHT_F3, NodeConnectionId.CanActInLightWorld ),
  makeEdge( NodeId.LIGHT_G3, NodeId.LIGHT_G4_BYPASS ),
  makeEdge( NodeId.LIGHT_G3, NodeId.LIGHT_G3_VT, NodeConnectionId.IsInverted ),

  makeEdge( NodeId.LIGHT_G3_VT, NodeId.LIGHT_G3 ),
  makeEdge( NodeId.LIGHT_G3_VT, NodeId.LIGHT_VT_CAVE_ENTRANCE ),

  // Light G4 connections
  makeEdge( NodeId.LIGHT_G4_BYPASS, NodeId.LIGHT_G3 ),
  makeEdge( NodeId.LIGHT_G4_BYPASS, NodeId.LIGHT_F4 ),
  makeEdge( NodeId.LIGHT_G4_BYPASS, NodeId.LIGHT_G4, NodeConnectionId.HasGloveLightWorld ),

  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_G4_BYPASS, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_H4 ),
  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_G5 ),
  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_G4_PORTAL_AREA, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_G4_WATER, NodeConnectionId.HasFakableFlippers ),

  makeEdge( NodeId.LIGHT_G4_PORTAL_AREA, NodeId.LIGHT_G4, NodeConnectionId.HasHammerLightWorld ),

  makeEdge( NodeId.LIGHT_G4_WATER, NodeId.LIGHT_G4 ),
  makeEdge( NodeId.LIGHT_G4_WATER, NodeId.LIGHT_G4_WATER_WARP ),
  makeEdge( NodeId.LIGHT_G4_WATER, NodeId.LIGHT_G5_WATER ),

  // Light G5 entrances
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_F5 ),
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_H5 ),
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_G4 ),
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_G5_WATER, NodeConnectionId.HasFakableFlippers ),
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_HYPE_FAIRY_ENTRANCE, NodeConnectionId.HasBombsLightWorld ),

  makeEdge( NodeId.LIGHT_G5_WATER, NodeId.LIGHT_G5 ),
  makeEdge( NodeId.LIGHT_G5_WATER, NodeId.LIGHT_G4_WATER ),

  // Light G6 connections.
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.LIGHT_F6_LOWER ),
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.LIGHT_LAKE_FORTUNE_TELLER_ENTRANCE ),
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.LIGHT_LAKE_SHOP_ENTRANCE ),

  makeEdge( NodeId.LIGHT_G6_NE, NodeId.LIGHT_F7 ),
  makeEdge( NodeId.LIGHT_G6_NE, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),

  makeEdge( NodeId.LIGHT_G6_SW, NodeId.LIGHT_H5 ),
  makeEdge( NodeId.LIGHT_G6_SW, NodeId.LIGHT_G6_SE ),
  makeEdge( NodeId.LIGHT_G6_SW, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_SW, NodeId.LIGHT_MINI_MOLDORM_ENTRANCE, NodeConnectionId.HasBombsLightWorld ),

  makeEdge( NodeId.LIGHT_G6_SE, NodeId.LIGHT_G6_SW ),
  makeEdge( NodeId.LIGHT_G6_SE, NodeId.LIGHT_H8 ),
  makeEdge( NodeId.LIGHT_G6_SE, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFakableFlippers ),

  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_ITEM_ISLAND, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_NW ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_NE ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_H8_WATER ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_UPGRADE_ISLAND ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_WATER_WARP ),

  makeEdge( NodeId.LIGHT_G6_ITEM_ISLAND, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_ITEM_ISLAND, NodeId.LIGHT_LAKE_ISLAND_ITEM ),

  makeEdge( NodeId.LIGHT_G6_UPGRADE_ISLAND, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_UPGRADE_ISLAND, NodeId.LIGHT_UPGRADE_FAIRY_ENTRANCE ),

  // Light G8 connections
  makeEdge( NodeId.LIGHT_G8, NodeId.LIGHT_H8 ),
  makeEdge( NodeId.LIGHT_G8, NodeId.LIGHT_ICE_ROD_CAVE_ENTRANCE, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.LIGHT_G8, NodeId.LIGHT_ICE_BEE_CAVE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_G8, NodeId.LIGHT_FAIRY_CAVE_ENTRANCE, NodeConnectionId.HasGloveLightWorld ),

  // Light H3 connections
  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_G1 ),
  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_H4 ),
  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_THIEF_CAVE_ENTRANCE ),
  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_RUPEE_CAVE_ENTRANCE, NodeConnectionId.HasGloveLightWorld ),
  // TODO: Figure out how to address the purple chest.

  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_H3_TABLET_AREA, NodeConnectionId.IsInverted ),

  makeEdge( NodeId.LIGHT_H3_TABLET_AREA, NodeId.LIGHT_G1_TABLET_AREA ),
  makeEdge( NodeId.LIGHT_H3_TABLET_AREA, NodeId.LIGHT_H3 ),

  // Light H4 connections
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_H3 ),
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_G4 ),
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_H5 ),
  // TODO: See if there is a way to have this be controlled more by state.
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_SWAMP_ITEM ),
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_DAM_ENTRANCE ),

  // Light H5 connections
  makeEdge( NodeId.LIGHT_H5, NodeId.LIGHT_G5 ),
  makeEdge( NodeId.LIGHT_H5, NodeId.LIGHT_H4 ),
  makeEdge( NodeId.LIGHT_H5, NodeId.LIGHT_G6_SW ),

  // Light H8 entrances
  makeEdge( NodeId.LIGHT_H8, NodeId.LIGHT_G6_SE ),
  makeEdge( NodeId.LIGHT_H8, NodeId.LIGHT_G8 ),
  makeEdge( NodeId.LIGHT_H8, NodeId.LIGHT_H8_WATER, NodeConnectionId.HasFakableFlippers ),

  makeEdge( NodeId.LIGHT_H8_WATER, NodeId.LIGHT_G6_WATER ),
  makeEdge( NodeId.LIGHT_H8_WATER, NodeId.LIGHT_H8_WATER_WARP ),
];

export { lightOverworldEdges };
