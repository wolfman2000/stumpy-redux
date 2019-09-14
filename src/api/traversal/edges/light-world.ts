import { makeEdge } from './helpers';

import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';
import Edge from './edge';

const lightWorldEdges: Edge[] = [
  // Lost A1, Lost woods screen transitions.
  makeEdge( NodeId.LIGHT_A1, NodeId.LIGHT_A3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A1, NodeId.LIGHT_C1_WEST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A1, NodeId.LIGHT_C1_NE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A1, NodeId.LIGHT_C2, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A1, NodeId.DARK_A1, NodeConnectionId.HasMirrorInverted ),

  // Light A3 Lumberjack screen transitions.
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_A1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_B3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_LUMBERJACK_HOUSE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_LUMBERJACK_EXIT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A3, NodeId.LIGHT_LUMBERJACK_ENTRANCE, NodeConnectionId.CanEnterLumberjackTree ),
  makeEdge( NodeId.LIGHT_A3, NodeId.DARK_A3, NodeConnectionId.HasMirrorInverted ),

  // Light A4, west death mountain.
  // Adjust the rules on this one for major glitches.
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_A4_UPPER, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_A6_LOWER_LEFT, NodeConnectionId.Always ),

  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_DM_ASCENT_EXIT_CAVE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_EXIT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_DM_DESCENT_ENTRANCE_CAVE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_SPECTACLE_ROCK_EXIT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.LIGHT_SPECTACLE_ROCK_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_LOWER, NodeId.DARK_A4_LOWER, NodeConnectionId.Always ), // The tile warp is free.

  makeEdge( NodeId.LIGHT_A4_SPECTACLE_ROCK, NodeId.LIGHT_A4_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_SPECTACLE_ROCK, NodeId.LIGHT_A4_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_SPECTACLE_ROCK, NodeId.DARK_A4_SPECTACLE_ROCK, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_ETHER_MEDALLION, NodeConnectionId.IsTabletAccessible ),
  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_A4_SPECTACLE_ROCK, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_A4_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.LIGHT_A6_UPPER_LEFT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A4_UPPER, NodeId.DARK_A4_UPPER, NodeConnectionId.HasMirrorInverted ),

  // Light A6
  makeEdge( NodeId.LIGHT_A6_UPPER_LEFT, NodeId.LIGHT_A4_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_UPPER_LEFT, NodeId.LIGHT_A6_UPPER, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_A6_UPPER_LEFT, NodeId.DARK_A6_UPPER_LEFT, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_UPPER_LEFT, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_ISLAND, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_SPIRAL_TOP, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_MIMIC_LEDGE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_FAIRY_LEDGE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_FAIRY_LAND, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_A6_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.LIGHT_PARADOX_TOP_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_UPPER, NodeId.DARK_A6_UPPER, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A6_ISLAND, NodeId.LIGHT_A6_UPPER, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A6_ISLAND, NodeId.LIGHT_MOUNTAIN_ISLAND_ITEM, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_ISLAND, NodeId.DARK_A6_ISLAND, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A6_SPIRAL_TOP, NodeId.LIGHT_SPIRAL_CAVE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_SPIRAL_TOP, NodeId.LIGHT_A6_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_SPIRAL_TOP, NodeId.DARK_A6_SPIRAL_TOP, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A6_MIMIC_LEDGE, NodeId.LIGHT_MIMIC_CAVE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_MIMIC_LEDGE, NodeId.LIGHT_A6_LOWER, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_A6_MIMIC_LEDGE, NodeId.DARK_A6_MIMIC_LEDGE, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A6_FAIRY_LEDGE, NodeId.LIGHT_MOUNTAIN_FAIRY_TOP, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_FAIRY_LEDGE, NodeId.LIGHT_A6_FAIRY_LAND, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_FAIRY_LEDGE, NodeId.DARK_A6_FAIRY_LEDGE, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A6_FAIRY_LAND, NodeId.LIGHT_MOUNTAIN_FAIRY_BOTTOM, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_FAIRY_LAND, NodeId.LIGHT_A6_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_FAIRY_LAND, NodeId.DARK_A6_FAIRY_LAND, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_A6_LOWER_LEFT, NodeConnectionId.HasHookshotLightWorld ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_SPIRAL_CAVE_EXIT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_MOUNTAIN_SHOP, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_PARADOX_MIDDLE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.LIGHT_PARADOX_BOTTOM_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_LOWER, NodeId.DARK_A6_LOWER, NodeConnectionId.CanHeavyLiftToDarkWorld ),

  makeEdge( NodeId.LIGHT_A6_LOWER_LEFT, NodeId.LIGHT_A4_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A6_LOWER_LEFT, NodeId.LIGHT_A6_LOWER, NodeConnectionId.HasHookshotLightWorld ),
  makeEdge( NodeId.LIGHT_A6_LOWER_LEFT, NodeId.DARK_A6_LOWER_LEFT, NodeConnectionId.HasMirrorInverted ),

  // Light A8 main connections
  makeEdge( NodeId.LIGHT_A8, NodeId.LIGHT_A6_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_A8, NodeId.LIGHT_A8_UPPER_ROCK, NodeConnectionId.CanWalkToUpperTurtleRockSurface ),
  makeEdge( NodeId.LIGHT_A8, NodeId.DARK_A8, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_A8_UPPER_ROCK, NodeId.LIGHT_A8, NodeConnectionId.CanLeaveUpperTurtleRockSurface ),
  makeEdge( NodeId.LIGHT_A8_UPPER_ROCK, NodeId.DARK_A8_UPPER_ROCK, NodeConnectionId.CanWarpToDarkFromUpperTurtleRock ),

  makeEdge( NodeId.LIGHT_B3, NodeId.LIGHT_A3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B3, NodeId.LIGHT_C3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B3, NodeId.LIGHT_B3_DM_BOTTOM, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_B3, NodeId.DARK_B3, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_B3_DM_BOTTOM, NodeId.LIGHT_B3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B3_DM_BOTTOM, NodeId.LIGHT_DM_DESCENT_EXIT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B3_DM_BOTTOM, NodeId.DARK_B3_BUMPER_BOTTOM, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_B3_DM_TOP, NodeId.LIGHT_B3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B3_DM_TOP, NodeId.LIGHT_DM_ASCENT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B3_DM_TOP, NodeId.DARK_B3_BUMPER_TOP, NodeConnectionId.HasMirrorInverted ),

  // Light B8 edges
  makeEdge( NodeId.LIGHT_B8, NodeId.LIGHT_C8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B8, NodeId.LIGHT_B8_ZORA_MAIN, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B8, NodeId.LIGHT_B8_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_B8, NodeId.DARK_B8, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_B8_WATER, NodeId.LIGHT_B8_WATER_WARP, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B8_WATER, NodeId.LIGHT_B8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_B8_WATER, NodeId.LIGHT_WATERFALL, NodeConnectionId.CanGetItemsAfterWaterfall ),

  makeEdge( NodeId.LIGHT_B8_ZORA_MAIN, NodeId.LIGHT_B8_ZORA_LEDGE, NodeConnectionId.CanGetItemsAfterWaterfall ),
  makeEdge( NodeId.LIGHT_B8_ZORA_MAIN, NodeId.LIGHT_B8, NodeConnectionId.Always ),

  makeEdge( NodeId.LIGHT_B8_ZORA_LEDGE, NodeId.LIGHT_ZORA_LEDGE_ITEM, NodeConnectionId.Always ),

  // Light C1 connections
  makeEdge( NodeId.LIGHT_C1_WEST, NodeId.LIGHT_A1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C1_WEST, NodeId.LIGHT_A4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C1_WEST, NodeId.DARK_C1_WEST, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_C1_NE, NodeId.LIGHT_A1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C1_NE, NodeId.LIGHT_C1_EAST, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_C1_NE, NodeId.DARK_C1_NE, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_C1_EAST, NodeId.LIGHT_C1_NE, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_C1_EAST, NodeId.LIGHT_C1_SE, NodeConnectionId.HasTitansLightWorld ),
  makeEdge( NodeId.LIGHT_C1_EAST, NodeId.DARK_C1_EAST, NodeConnectionId.CanLiftToDarkWorld ),

  makeEdge( NodeId.LIGHT_C1_SE, NodeId.LIGHT_C1_EAST, NodeConnectionId.HasTitansLightWorld ),
  makeEdge( NodeId.LIGHT_C1_SE, NodeId.LIGHT_A4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C1_SE, NodeId.DARK_C1_SE, NodeConnectionId.HasMirrorInverted ),

  // Light C2 connections
  makeEdge( NodeId.LIGHT_C2, NodeId.LIGHT_A1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C2, NodeId.LIGHT_C3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C2, NodeId.LIGHT_A4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C2, NodeId.LIGHT_KAKARIKO_FORTUNE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C2, NodeId.DARK_C2, NodeConnectionId.HasMirrorInverted ),

  // Light C3 connections
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_B3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_C2, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_C4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_D3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C3, NodeId.LIGHT_C3_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_C3, NodeId.DARK_C3, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_C3_WATER, NodeId.LIGHT_C3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C3_WATER, NodeId.LIGHT_C3_WATER_WARP, NodeConnectionId.Always ),

  // Light C4 connections
  makeEdge( NodeId.LIGHT_C4, NodeId.LIGHT_C3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C4, NodeId.LIGHT_C5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C4, NodeId.LIGHT_SANCTUARY_BONK_ROCKS_ENTRANCE, NodeConnectionId.HasBootsLightWorld ),
  makeEdge( NodeId.LIGHT_C4, NodeId.DARK_C4, NodeConnectionId.HasMirrorInverted ),

  // Light C5 connections
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_C4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_C6_WEST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_C5_LEDGE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_C5_KING_AREA, NodeConnectionId.HasTitansLightWorld ),
  makeEdge( NodeId.LIGHT_C5, NodeId.LIGHT_CASTLE_GRAVE_ENTRANCE, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_C5, NodeId.DARK_C5, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_C5_KING_AREA, NodeId.LIGHT_C5, NodeConnectionId.HasTitansLightWorld ),
  makeEdge( NodeId.LIGHT_C5_KING_AREA, NodeId.LIGHT_KINGS_TOMB_ENTRANCE, NodeConnectionId.HasBootsLightWorld ),
  makeEdge( NodeId.LIGHT_C5_KING_AREA, NodeId.DARK_C5_KING_AREA, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_C5_LEDGE, NodeId.LIGHT_C5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C5_LEDGE, NodeId.LIGHT_GRAVEYARD_LEDGE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C5_LEDGE, NodeId.DARK_C5_LEDGE, NodeConnectionId.HasMirrorInverted ),

  // Light C6 connections
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_C5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_D6_WEST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_C6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_FAIRY_CAVE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.LIGHT_FAIRY_CAVE_EXIT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_WEST, NodeId.DARK_C6_WEST, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_C6_WATER, NodeId.LIGHT_C6_WEST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_WATER, NodeId.LIGHT_C6_WATER_WARP, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_WATER, NodeId.LIGHT_C6_EAST, NodeConnectionId.Always ),

  makeEdge( NodeId.LIGHT_C6_EAST, NodeId.LIGHT_C7, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_EAST, NodeId.LIGHT_D6_EAST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C6_EAST, NodeId.LIGHT_C6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_C6_EAST, NodeId.DARK_C6_EAST, NodeConnectionId.HasMirrorInverted ),

  // Light C7 connections
  makeEdge( NodeId.LIGHT_C7, NodeId.LIGHT_C7_UPPER, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_C7, NodeId.LIGHT_C6_EAST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C7, NodeId.LIGHT_POTION_SHOP_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C7, NodeId.DARK_C7, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_C7_UPPER, NodeId.LIGHT_C8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C7_UPPER, NodeId.LIGHT_C7, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_C7_UPPER, NodeId.LIGHT_C6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_C7_UPPER, NodeId.DARK_C7_UPPER, NodeConnectionId.HasMirrorInverted ),

  // Light C8 connections
  makeEdge( NodeId.LIGHT_C8, NodeId.LIGHT_C7_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C8, NodeId.LIGHT_B8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_C8, NodeId.DARK_C8, NodeConnectionId.HasMirrorInverted ),

  // Light D1 connections
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_C1_WEST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_C1_SE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_C2, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_E3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_F2_UPPER, NodeConnectionId.HasMirrorInverted ),
  makeEdge( NodeId.LIGHT_D1, NodeId.DARK_D1, NodeConnectionId.HasMirrorInverted ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_WELL_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_WELL_EXIT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_BLINDS_HOUSE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_WOMAN_HOUSE_LEFT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_WOMAN_HOUSE_RIGHT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_SNITCH_HOUSE_LEFT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_BOTTLE_PURCHASE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_SNITCH_HOUSE_RIGHT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_CUCCO_HOUSE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_SICK_KID_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_GRASS_HOUSE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_BOMBABLE_HUT_ENTRANCE, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_KAKARIKO_SHOP_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_TAVERN_BACK_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D1, NodeId.LIGHT_TAVERN_FRONT_ENTRANCE, NodeConnectionId.Always ),

  // Light D3 connections
  makeEdge( NodeId.LIGHT_D3, NodeId.LIGHT_C3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D3, NodeId.LIGHT_D4_OUTER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D3, NodeId.DARK_D3, NodeConnectionId.HasMirrorInverted ),

  // Light D4 connections
  makeEdge( NodeId.LIGHT_D4_OUTER, NodeId.LIGHT_D4_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_OUTER, NodeId.LIGHT_E6, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_D4_OUTER, NodeId.LIGHT_D4_GARDEN, NodeConnectionId.HasNotBeatenAgahnimForDarkWorld ),
  makeEdge( NodeId.LIGHT_D4_OUTER, NodeId.DARK_D4_OUTER, NodeConnectionId.CanEnterDarkWorldViaAgahnim ),

  makeEdge( NodeId.LIGHT_D4_LOWER, NodeId.LIGHT_F4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_LOWER, NodeId.LIGHT_F5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_LOWER, NodeId.LIGHT_D4_OUTER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_LOWER, NodeId.LIGHT_UNCLE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_OUTER, NodeId.DARK_D4_OUTER, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_D4_GARDEN, NodeId.LIGHT_D4_OUTER, NodeConnectionId.HasNotBeatenAgahnimForDarkWorld ),
  makeEdge( NodeId.LIGHT_D4_GARDEN, NodeId.LIGHT_UNCLE_EXIT, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_GARDEN, NodeId.LIGHT_HYRULE_CASTLE_CENTER_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_GARDEN, NodeId.DARK_D4_GARDEN, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_D4_ROOFTOP, NodeId.LIGHT_HYRULE_CASTLE_LEFT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_ROOFTOP, NodeId.LIGHT_HYRULE_CASTLE_RIGHT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D4_ROOFTOP, NodeId.LIGHT_HYRULE_CASTLE_TOWER_ENTRANCE, NodeConnectionId.CanEnterCastleTower ),
  makeEdge( NodeId.LIGHT_D4_ROOFTOP, NodeId.DARK_D4_ROOFTOP, NodeConnectionId.HasMirrorInverted ),

  // Light D6 connections
  makeEdge( NodeId.LIGHT_D6_WEST, NodeId.LIGHT_D6_EAST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D6_WEST, NodeId.LIGHT_C6_WEST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D6_WEST, NodeId.DARK_D6_WEST, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_D6_EAST, NodeId.LIGHT_D6_WEST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D6_EAST, NodeId.LIGHT_C6_EAST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D6_EAST, NodeId.LIGHT_E6, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D6_EAST, NodeId.DARK_D6_EAST, NodeConnectionId.HasMirrorInverted ),

  // Light D7 connections
  makeEdge( NodeId.LIGHT_D7, NodeId.LIGHT_F7, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D7, NodeId.LIGHT_F8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D7, NodeId.LIGHT_SAHASRAHLA_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D7, NodeId.LIGHT_EASTERN_PALACE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_D7, NodeId.DARK_D7, NodeConnectionId.HasMirrorInverted ),

  // Light E3 connections
  makeEdge( NodeId.LIGHT_E3, NodeId.LIGHT_D1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_E3, NodeId.LIGHT_E3_UPPER, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_E3, NodeId.LIGHT_BLACKSMITHS_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_E3, NodeId.DARK_E3, NodeConnectionId.HasMirrorInverted ),

  // Light E6 connections
  makeEdge( NodeId.LIGHT_E6, NodeId.LIGHT_D6_EAST, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_E6, NodeId.LIGHT_D4_OUTER, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_E6, NodeId.LIGHT_F6_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_E6, NodeId.DARK_E6, NodeConnectionId.HasMirrorInverted ),

  // Light F1 connections
  makeEdge( NodeId.LIGHT_F1_LOWER, NodeId.LIGHT_F2_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F1_LOWER, NodeId.DARK_F1_LOWER, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_F1_UPPER, NodeId.LIGHT_F1_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F1_UPPER, NodeId.LIGHT_F1_GAME, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F1_UPPER, NodeId.LIGHT_BROTHERS_LEFT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F1_UPPER, NodeId.DARK_F1_UPPER, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_F1_GAME, NodeId.LIGHT_F1_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F1_GAME, NodeId.LIGHT_RACE_GAME_ITEM, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F1_GAME, NodeId.LIGHT_F1_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F1_GAME, NodeId.DARK_F1_GAME, NodeConnectionId.HasMirrorInverted ),

  // Light F2 connections.
  makeEdge( NodeId.LIGHT_F2_UPPER, NodeId.LIGHT_D1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F2_UPPER, NodeId.LIGHT_F2_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F2_UPPER, NodeId.LIGHT_LIBRARY_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F2_UPPER, NodeId.DARK_F2_UPPER, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_F2_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_F1_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_F3_BYPASS, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_OUTSIDE_CHEST_GAME_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.LIGHT_BROTHERS_RIGHT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F2_LOWER, NodeId.DARK_F2_LOWER, NodeConnectionId.HasMirrorInverted ),

  // Light F3 connections
  makeEdge( NodeId.LIGHT_F3, NodeId.LIGHT_G3, NodeConnectionId.CanActInLightWorld ),
  makeEdge( NodeId.LIGHT_F3, NodeId.LIGHT_SHOVEL_SPOT, NodeConnectionId.HasShovelLightWorld ),
  makeEdge( NodeId.LIGHT_F3, NodeId.DARK_F3, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_F3_BYPASS, NodeId.LIGHT_F2_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F3_BYPASS, NodeId.LIGHT_G3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F3_BYPASS, NodeId.DARK_F3_BYPASS, NodeConnectionId.HasMirrorInverted ),

  // Light F4 connections
  makeEdge( NodeId.LIGHT_F4, NodeId.LIGHT_D4_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F4, NodeId.LIGHT_F5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F4, NodeId.LIGHT_G4_BYPASS, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F4, NodeId.LIGHT_HOUSE_BONK_ROCK_ENTRANCE, NodeConnectionId.HasBootsLightWorld ),
  makeEdge( NodeId.LIGHT_F4, NodeId.DARK_F4, NodeConnectionId.HasMirrorInverted ),

  // Light F5 connections
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_F4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_D4_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_F6_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_G5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F5, NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F5, NodeId.DARK_F5, NodeConnectionId.HasMirrorInverted ),

  // Light F6 connections
  makeEdge( NodeId.LIGHT_F6_LOWER, NodeId.LIGHT_F6_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F6_LOWER, NodeId.LIGHT_F5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F6_LOWER, NodeId.LIGHT_G6_NW, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F6_LOWER, NodeId.DARK_F6_LOWER, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_F6_UPPER, NodeId.LIGHT_F6_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F6_UPPER, NodeId.LIGHT_E6, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F6_UPPER, NodeId.LIGHT_F7, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F6_UPPER, NodeId.DARK_F6_UPPER, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_F6_WATER, NodeId.LIGHT_F7_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F6_WATER, NodeId.LIGHT_BIRD_LOVER, NodeConnectionId.Always ),

  // Light F7 connections
  makeEdge( NodeId.LIGHT_F7, NodeId.LIGHT_D7, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F7, NodeId.LIGHT_G6_NE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F7, NodeId.LIGHT_F6_UPPER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F7, NodeId.LIGHT_TREES_FAIRY_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F7, NodeId.DARK_F7, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_F7_WATER, NodeId.LIGHT_F6_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F7_WATER, NodeId.LIGHT_G6_WATER, NodeConnectionId.Always ),

  // Light F8 connections
  makeEdge( NodeId.LIGHT_F8, NodeId.LIGHT_D7, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F8, NodeId.LIGHT_F8_PEGS, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_F8, NodeId.LIGHT_PEGS_FAIRY_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_F8, NodeId.DARK_F8, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_F8_PEGS, NodeId.LIGHT_F8, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_F8_PEGS, NodeId.DARK_F8_PEGS, NodeConnectionId.CanLiftToDarkWorld ),

  // Light G1 connections
  makeEdge( NodeId.LIGHT_G1, NodeId.LIGHT_H3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1, NodeId.LIGHT_G1_NE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_G1, NodeId.LIGHT_G1_GATE_SOUTH, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1, NodeId.LIGHT_AGINAH_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1, NodeId.DARK_G1, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.LIGHT_G1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.LIGHT_DESERT_LEDGE_ITEM, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.LIGHT_DESERT_PALACE_LEFT_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.LIGHT_G1_TOP, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_G1_WEST, NodeId.DARK_G1_WEST, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G1_SOUTH, NodeId.LIGHT_G1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_SOUTH, NodeId.DARK_G1_SOUTH, NodeConnectionId.CanHeavyLiftToDarkWorld ),

  makeEdge( NodeId.LIGHT_G1_NE, NodeId.LIGHT_G1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_NE, NodeId.LIGHT_CHECKERBOARD_ENTRANCE, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_G1_NE, NodeId.DARK_G1_NE, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G1_TABLET_AREA, NodeId.LIGHT_H3_TABLET_AREA, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_TABLET_AREA, NodeId.LIGHT_G1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_TABLET_AREA, NodeId.LIGHT_BOMBOS_TABLET, NodeConnectionId.IsTabletAccessible ),

  makeEdge( NodeId.LIGHT_G1_ZONK, NodeId.LIGHT_G1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_ZONK, NodeId.LIGHT_DESERT_PALACE_RIGHT_ENTRANCE, NodeConnectionId.Always ),

  makeEdge( NodeId.LIGHT_G1_TOP, NodeId.LIGHT_G1_WEST, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_G1_TOP, NodeId.LIGHT_DESERT_PALACE_BACK_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_TOP, NodeId.DARK_G1_TOP, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G1_GATE_NORTH, NodeId.LIGHT_DESERT_PALACE_CENTER_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_GATE_NORTH, NodeId.DARK_G1_GATE_NORTH, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G1_GATE_SOUTH, NodeId.LIGHT_G1_GATE_NORTH, NodeConnectionId.HasBookLightWorld ),
  makeEdge( NodeId.LIGHT_G1_GATE_SOUTH, NodeId.LIGHT_G1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G1_GATE_SOUTH, NodeId.DARK_G1_GATE_SOUTH, NodeConnectionId.HasMirrorInverted ),

  // Light G3 connections
  makeEdge( NodeId.LIGHT_G3, NodeId.LIGHT_F3_BYPASS, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G3, NodeId.LIGHT_F3, NodeConnectionId.CanActInLightWorld ),
  makeEdge( NodeId.LIGHT_G3, NodeId.LIGHT_G4_BYPASS, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G3, NodeId.LIGHT_G3_VT, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_G3, NodeId.DARK_G3, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G3_VT, NodeId.LIGHT_G3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G3_VT, NodeId.LIGHT_VT_CAVE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G3_VT, NodeId.DARK_G3_VT, NodeConnectionId.HasMirrorInverted ),

  // Light G4 connections
  makeEdge( NodeId.LIGHT_G4_BYPASS, NodeId.LIGHT_G3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G4_BYPASS, NodeId.LIGHT_F4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G4_BYPASS, NodeId.LIGHT_G4, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_G4_BYPASS, NodeId.DARK_G4_BYPASS, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_G4_BYPASS, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_H4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_G5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_G4_PORTAL_AREA, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_G4, NodeId.LIGHT_G4_WATER, NodeConnectionId.HasFakableFlippers ),
  makeEdge( NodeId.LIGHT_G4, NodeId.DARK_G4, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G4_PORTAL_AREA, NodeId.LIGHT_G4, NodeConnectionId.HasHammerLightWorld ),
  makeEdge( NodeId.LIGHT_G4_PORTAL_AREA, NodeId.DARK_G4_PORTAL_AREA, NodeConnectionId.CanLiftToDarkWorld ),

  makeEdge( NodeId.LIGHT_G4_WATER, NodeId.LIGHT_G4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G4_WATER, NodeId.LIGHT_G4_WATER_WARP, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G4_WATER, NodeId.LIGHT_G5_WATER, NodeConnectionId.Always ),

  // Light G5 entrances
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_F5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_H5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_G4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_G5_WATER, NodeConnectionId.HasFakableFlippers ),
  makeEdge( NodeId.LIGHT_G5, NodeId.LIGHT_HYPE_FAIRY_ENTRANCE, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.LIGHT_G5, NodeId.DARK_G5, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G5_WATER, NodeId.LIGHT_G5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G5_WATER, NodeId.LIGHT_G4_WATER, NodeConnectionId.Always ),

  // Light G6 connections.
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.LIGHT_F6_LOWER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.LIGHT_LAKE_FORTUNE_TELLER_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.LIGHT_LAKE_SHOP_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_NW, NodeId.DARK_G6_NW, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G6_NE, NodeId.LIGHT_F7, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_NE, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_NE, NodeId.DARK_G6_NE, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G6_SW, NodeId.LIGHT_H5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_SW, NodeId.LIGHT_G6_SE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_SW, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_SW, NodeId.LIGHT_MINI_MOLDORM_ENTRANCE, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.LIGHT_G6_SW, NodeId.DARK_G6_SW, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G6_SE, NodeId.LIGHT_G6_SW, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_SE, NodeId.LIGHT_H8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_SE, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFakableFlippers ),
  makeEdge( NodeId.LIGHT_G6_SE, NodeId.DARK_G6_SE, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_ITEM_ISLAND, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_NW, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_NE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_H8_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_UPGRADE_ISLAND, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_WATER, NodeId.LIGHT_G6_WATER_WARP, NodeConnectionId.Always ),

  makeEdge( NodeId.LIGHT_G6_ITEM_ISLAND, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_ITEM_ISLAND, NodeId.LIGHT_LAKE_ISLAND_ITEM, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_ITEM_ISLAND, NodeId.DARK_G6_ITEM_ISLAND, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_G6_UPGRADE_ISLAND, NodeId.LIGHT_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.LIGHT_G6_UPGRADE_ISLAND, NodeId.LIGHT_UPGRADE_FAIRY_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G6_UPGRADE_ISLAND, NodeId.DARK_G6_UPGRADE_ISLAND, NodeConnectionId.CanHeavyLiftToDarkWorld ),

  // Light G8 connections
  makeEdge( NodeId.LIGHT_G8, NodeId.LIGHT_H8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G8, NodeId.LIGHT_ICE_ROD_CAVE_ENTRANCE, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.LIGHT_G8, NodeId.LIGHT_ICE_BEE_CAVE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_G8, NodeId.LIGHT_FAIRY_CAVE_ENTRANCE, NodeConnectionId.HasGloveLightWorld ),
  makeEdge( NodeId.LIGHT_G8, NodeId.DARK_G8, NodeConnectionId.HasMirrorInverted ),

  // Light H3 connections
  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_G1, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_H4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_THIEF_CAVE_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_RUPEE_CAVE_ENTRANCE, NodeConnectionId.HasGloveLightWorld ),
  // TODO: Figure out how to address the purple chest.

  makeEdge( NodeId.LIGHT_H3, NodeId.LIGHT_H3_TABLET_AREA, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.LIGHT_H3, NodeId.DARK_H3, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_H3_TABLET_AREA, NodeId.LIGHT_G1_TABLET_AREA, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H3_TABLET_AREA, NodeId.LIGHT_H3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H3_TABLET_AREA, NodeId.DARK_H3_TABLET_AREA, NodeConnectionId.HasMirrorInverted ),

  // Light H4 entrances
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_H3, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_G4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_H5, NodeConnectionId.Always ),
  // TODO: See if there is a way to have this be controlled more by state.
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_SWAMP_ITEM, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H4, NodeId.LIGHT_DAM_ENTRANCE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H4, NodeId.DARK_H4, NodeConnectionId.HasMirrorInverted ),

  // Light H5 entrances
  makeEdge( NodeId.LIGHT_H5, NodeId.LIGHT_G5, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H5, NodeId.LIGHT_H4, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H5, NodeId.LIGHT_G6_SW, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H5, NodeId.DARK_H5, NodeConnectionId.HasMirrorInverted ),

  // Light H8 entrances
  makeEdge( NodeId.LIGHT_H8, NodeId.LIGHT_G6_SE, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H8, NodeId.LIGHT_G8, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H8, NodeId.LIGHT_H8_WATER, NodeConnectionId.HasFakableFlippers ),
  makeEdge( NodeId.LIGHT_H8, NodeId.DARK_H8, NodeConnectionId.HasMirrorInverted ),

  makeEdge( NodeId.LIGHT_H8_WATER, NodeId.LIGHT_G6_WATER, NodeConnectionId.Always ),
  makeEdge( NodeId.LIGHT_H8_WATER, NodeId.LIGHT_H8_WATER_WARP, NodeConnectionId.Always ),
];

export { lightWorldEdges };
