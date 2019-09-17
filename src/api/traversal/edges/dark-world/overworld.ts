import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

const darkOverworldEdges: Edge[] = [
  // Dark A1
  makeEdge( NodeId.DARK_A1_NW, NodeId.DARK_SW_CONNECTOR_LEFT_ENTRANCE ),
  makeEdge( NodeId.DARK_A1_NW, NodeId.DARK_SW_CONNECTOR_PIT_ENTRANCE ),
  makeEdge( NodeId.DARK_A1_NW, NodeId.DARK_SW_BACK_ENTRANCE, NodeConnectionId.HasFireRodDarkWorld ),

  makeEdge( NodeId.DARK_A1_NE, NodeId.DARK_A3 ),
  makeEdge( NodeId.DARK_A1_NE, NodeId.DARK_A1_SW ),

  makeEdge( NodeId.DARK_A1_SW, NodeId.DARK_A1_NE ),
  makeEdge( NodeId.DARK_A1_SW, NodeId.DARK_C1_WEST ),

  makeEdge( NodeId.DARK_A1_SE, NodeId.DARK_C1_NE ),
  makeEdge( NodeId.DARK_A1_SE, NodeId.DARK_C2 ),
  makeEdge( NodeId.DARK_A1_SE, NodeId.DARK_SW_MAIN_WEST_ENTRANCE ),
  makeEdge( NodeId.DARK_A1_SE, NodeId.DARK_SW_PINBALL_ENTRANCE ),
  makeEdge( NodeId.DARK_A1_SE, NodeId.DARK_SW_BIG_CHEST_EXIT ),
  makeEdge( NodeId.DARK_A1_SE, NodeId.DARK_SW_BIG_CHEST_ENTRANCE, NodeConnectionId.CanActInDarkWorld ),

  // Dark A3
  makeEdge( NodeId.DARK_A3, NodeId.DARK_A1_NE ),
  makeEdge( NodeId.DARK_A3, NodeId.DARK_B3 ),
  makeEdge( NodeId.DARK_A3, NodeId.DARK_LUMBERJACK_HOUSE_ENTRANCE ),

  // Dark A4
  makeEdge( NodeId.DARK_A4_LOWER, NodeId.DARK_MOUNTAIN_FAIRY_ENTRANCE ),
  makeEdge( NodeId.DARK_A4_LOWER, NodeId.DARK_SPIKE_CAVE_ENTRANCE ),
  makeEdge( NodeId.DARK_A4_LOWER, NodeId.DARK_A6_LOWER_LEFT ),
  makeEdge( NodeId.DARK_A4_LOWER, NodeId.DARK_A4_UPPER, NodeConnectionId.IsInverted ),

  makeEdge( NodeId.DARK_A4_SPECTACLE_ROCK, NodeId.DARK_A4_LOWER ),

  makeEdge( NodeId.DARK_A4_UPPER, NodeId.DARK_A6_UPPER ),
  makeEdge( NodeId.DARK_A4_UPPER, NodeId.DARK_A4_LOWER ),
  makeEdge( NodeId.DARK_A4_UPPER, NodeId.DARK_A4_SPECTACLE_ROCK ),

  // Dark A6
  makeEdge( NodeId.DARK_A6_UPPER_LEFT, NodeId.DARK_A4_UPPER ),
  makeEdge( NodeId.DARK_A6_UPPER_LEFT, NodeId.DARK_A6_UPPER ),

  makeEdge( NodeId.DARK_A6_UPPER, NodeId.DARK_A6_UPPER_LEFT ),
  makeEdge( NodeId.DARK_A6_UPPER, NodeId.DARK_A8 ),
  makeEdge( NodeId.DARK_A6_UPPER, NodeId.DARK_A6_LOWER ),
  makeEdge( NodeId.DARK_A6_UPPER, NodeId.DARK_HOOKSHOT_CAVE_BOTTOM, NodeConnectionId.HasGloveDarkWorld ),
  makeEdge( NodeId.DARK_A6_UPPER, NodeId.DARK_SUPERBUNNY_CAVE_TOP ),

  makeEdge( NodeId.DARK_A6_ISLAND, NodeId.DARK_A6_UPPER ),
  makeEdge( NodeId.DARK_A6_ISLAND, NodeId.DARK_HOOKSHOT_CAVE_TOP ),

  makeEdge( NodeId.DARK_A6_SPIRAL_TOP, NodeId.DARK_A6_MIMIC_LEDGE ),
  makeEdge( NodeId.DARK_A6_SPIRAL_TOP, NodeId.DARK_TR_LASER_WALL_ENTRANCE ),

  makeEdge( NodeId.DARK_A6_MIMIC_LEDGE, NodeId.DARK_A6_SPIRAL_TOP ),
  makeEdge( NodeId.DARK_A6_MIMIC_LEDGE, NodeId.DARK_TR_TREASURE_ENTRANCE ),

  makeEdge( NodeId.DARK_A6_FAIRY_LEDGE, NodeId.DARK_TR_LASER_BRIDGE_ENTRANCE ),

  makeEdge( NodeId.DARK_A6_FAIRY_LAND, NodeId.DARK_A6_LOWER ),

  makeEdge( NodeId.DARK_A6_LOWER, NodeId.DARK_A6_FAIRY_LAND, NodeConnectionId.CanActInDarkWorld ),
  makeEdge( NodeId.DARK_A6_LOWER, NodeId.DARK_SUPERBUNNY_CAVE_BOTTOM ),
  makeEdge( NodeId.DARK_A6_LOWER, NodeId.DARK_MOUNTAIN_SHOP_ENTRANCE ),

  makeEdge( NodeId.DARK_A6_LOWER_LEFT, NodeId.DARK_A4_LOWER ),

  // Dark A8
  makeEdge( NodeId.DARK_A8, NodeId.DARK_A6_UPPER ),
  makeEdge( NodeId.DARK_A8, NodeId.DARK_A8_UPPER_ROCK, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.DARK_A8, NodeId.DARK_TR_MAIN_ENTRANCE, NodeConnectionId.CanEnterTurtleRock ),

  makeEdge( NodeId.DARK_A8_UPPER_ROCK, NodeId.DARK_A8 ),

  // Dark B3 connections
  makeEdge( NodeId.DARK_B3, NodeId.DARK_A3 ),
  makeEdge( NodeId.DARK_B3, NodeId.DARK_C3 ),
  makeEdge( NodeId.DARK_B3, NodeId.DARK_B3_BUMPER_BOTTOM, NodeConnectionId.HasGloveDarkWorld ),
  makeEdge( NodeId.DARK_B3, NodeId.DARK_BUMPER_ITEM, NodeConnectionId.AlwaysVisible ),

  makeEdge( NodeId.DARK_B3_BUMPER_BOTTOM, NodeId.DARK_B3 ),
  makeEdge( NodeId.DARK_B3_BUMPER_BOTTOM, NodeId.DARK_BUMPER_BOTTOM_ENTRANCE ),

  makeEdge( NodeId.DARK_B3_BUMPER_TOP, NodeId.DARK_B3 ),
  makeEdge( NodeId.DARK_B3_BUMPER_TOP, NodeId.DARK_BUMPER_TOP_ENTRANCE ),
  makeEdge( NodeId.DARK_B3_BUMPER_TOP, NodeId.DARK_BUMPER_ITEM ),

  // Dark B8 connections
  makeEdge( NodeId.DARK_B8, NodeId.DARK_C8 ),
  makeEdge( NodeId.DARK_B8, NodeId.DARK_CATFISH_ITEM, NodeConnectionId.CanActInDarkWorld ),

  // Dark C1 connections
  makeEdge( NodeId.DARK_C1_WEST, NodeId.DARK_A1_SW ),
  makeEdge( NodeId.DARK_C1_WEST, NodeId.DARK_D1 ),
  makeEdge( NodeId.DARK_C1_WEST, NodeId.DARK_C1_NE, NodeConnectionId.CanActInDarkWorld ),

  makeEdge( NodeId.DARK_C1_NE, NodeId.DARK_C1_WEST, NodeConnectionId.CanActInDarkWorld ),
  makeEdge( NodeId.DARK_C1_NE, NodeId.DARK_A1_SE ),
  makeEdge( NodeId.DARK_C1_NE, NodeId.DARK_C1_EAST, NodeConnectionId.CanActInDarkWorld ),

  makeEdge( NodeId.DARK_C1_EAST, NodeId.DARK_C1_NE, NodeConnectionId.CanActInDarkWorld ),
  makeEdge( NodeId.DARK_C1_EAST, NodeId.DARK_C1_SE, NodeConnectionId.HasTitansDarkWorld ),

  makeEdge( NodeId.DARK_C1_SE, NodeId.DARK_C1_EAST, NodeConnectionId.HasTitansDarkWorld ),
  makeEdge( NodeId.DARK_C1_SE, NodeId.DARK_D1 ),

  // Dark C2 connections
  makeEdge( NodeId.DARK_C2, NodeId.DARK_A1_SE ),
  makeEdge( NodeId.DARK_C2, NodeId.DARK_C3 ),
  makeEdge( NodeId.DARK_C2, NodeId.DARK_D1 ),
  makeEdge( NodeId.DARK_C2, NodeId.DARK_FORTUNE_TELLER_ENTRANCE ),

  // Dark C3 connections
  makeEdge( NodeId.DARK_C3, NodeId.DARK_B3 ),
  makeEdge( NodeId.DARK_C3, NodeId.DARK_C2 ),
  makeEdge( NodeId.DARK_C3, NodeId.DARK_C4 ),
  makeEdge( NodeId.DARK_C3, NodeId.DARK_D3 ),

  // Dark C4 connections
  makeEdge( NodeId.DARK_C4, NodeId.DARK_C3 ),
  makeEdge( NodeId.DARK_C4, NodeId.DARK_C5 ),
  makeEdge( NodeId.DARK_C4, NodeId.DARK_DARK_CHAPEL_ENTRANCE ),

  // Dark C5 connections
  makeEdge( NodeId.DARK_C5, NodeId.DARK_C4 ),
  makeEdge( NodeId.DARK_C5, NodeId.DARK_C6_WEST ),
  makeEdge( NodeId.DARK_C5, NodeId.DARK_C5_LEDGE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.DARK_C5, NodeId.DARK_C5_KING_AREA ),

  makeEdge( NodeId.DARK_C5_KING_AREA, NodeId.DARK_C5 ),

  makeEdge( NodeId.DARK_C5_LEDGE, NodeId.DARK_C5 ),

  // Dark C6 connections
  makeEdge( NodeId.DARK_C6_WEST, NodeId.DARK_C5 ),
  makeEdge( NodeId.DARK_C6_WEST, NodeId.DARK_D6_WEST ),
  makeEdge( NodeId.DARK_C6_WEST, NodeId.DARK_C6_WATER, NodeConnectionId.HasFlippers ),

  makeEdge( NodeId.DARK_C6_WATER, NodeId.DARK_C6_EAST ),

  makeEdge( NodeId.DARK_C6_EAST, NodeId.DARK_C7 ),
  makeEdge( NodeId.DARK_C6_EAST, NodeId.DARK_D6_EAST ),
  makeEdge( NodeId.DARK_C6_EAST, NodeId.DARK_C6_WATER, NodeConnectionId.HasFlippers ),

  // Dark C7 connections
  makeEdge( NodeId.DARK_C7, NodeId.DARK_C7_UPPER, NodeConnectionId.HasGloveDarkWorld ),
  makeEdge( NodeId.DARK_C7, NodeId.DARK_C6_EAST ),
  makeEdge( NodeId.DARK_C7, NodeId.DARK_POTION_SHOP_ENTRANCE ),

  makeEdge( NodeId.DARK_C7_UPPER, NodeId.DARK_C8 ),
  makeEdge( NodeId.DARK_C7_UPPER, NodeId.DARK_C7, NodeConnectionId.HasGloveDarkWorld ),
  makeEdge( NodeId.DARK_C7_UPPER, NodeId.DARK_C6_WATER, NodeConnectionId.HasFlippers ),

  // Dark C8 connections
  makeEdge( NodeId.DARK_C8, NodeId.DARK_C7_UPPER ),
  makeEdge( NodeId.DARK_C8, NodeId.DARK_B8 ),

  // Dark D1 connections
  makeEdge( NodeId.DARK_D1, NodeId.DARK_C1_WEST ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_C1_SE ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_C2 ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_E3 ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_F2_UPPER ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_TREASURE_GAME_ENTRANCE ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_TT_ENTRANCE, NodeConnectionId.CanActInDarkWorld ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_C_HOUSE_ENTRANCE ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_HAMMER_HOUSE_ENTRANCE, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.DARK_D1, NodeId.DARK_BREWERY_ENTRANCE, NodeConnectionId.HasBombsDarkWorld ),

  // Dark D3 connections
  makeEdge( NodeId.DARK_D3, NodeId.DARK_C3 ),
  makeEdge( NodeId.DARK_D3, NodeId.DARK_SHIELD_SHOP_ENTRANCE ),

  // Dark D4 connections
  makeEdge( NodeId.DARK_D4_OUTER, NodeId.DARK_E6 ),
  makeEdge( NodeId.DARK_D4_OUTER, NodeId.DARK_D4_GARDEN ),

  makeEdge( NodeId.DARK_D4_LOWER, NodeId.DARK_F4 ),
  makeEdge( NodeId.DARK_D4_LOWER, NodeId.DARK_F5 ),

  makeEdge( NodeId.DARK_D4_GARDEN, NodeId.DARK_D4_OUTER ),
  makeEdge( NodeId.DARK_D4_GARDEN, NodeId.DARK_D4_ROOFTOP ),
  makeEdge( NodeId.DARK_D4_GARDEN, NodeId.DARK_PYRAMID_WALL_ENTRANCE, NodeConnectionId.CanEnterPyramidWall ),
  makeEdge( NodeId.DARK_D4_GARDEN, NodeId.DARK_PYRAMID_ITEM ),

  makeEdge( NodeId.DARK_D4_ROOFTOP, NodeId.DARK_D4_GARDEN ),
  // TODO: Proper connection to Ganon's hole.

  // Dark D6 connections
  makeEdge( NodeId.DARK_D6_WEST, NodeId.DARK_D6_WATER, NodeConnectionId.HasFakableFlippers ),
  makeEdge( NodeId.DARK_D6_WEST, NodeId.DARK_C6_WEST ),

  makeEdge( NodeId.DARK_D6_EAST, NodeId.DARK_D6_WEST, NodeConnectionId.HasHookshotDarkWorld ),
  makeEdge( NodeId.DARK_D6_EAST, NodeId.DARK_C6_EAST ),
  makeEdge( NodeId.DARK_D6_EAST, NodeId.DARK_E6 ),
  makeEdge( NodeId.DARK_D6_EAST, NodeId.DARK_D6_WATER, NodeConnectionId.HasFlippers ),

  makeEdge( NodeId.DARK_D6_WATER, NodeId.DARK_C6_WATER ),

  // Dark D7 connections
  makeEdge( NodeId.DARK_D7, NodeId.DARK_F7 ),
  makeEdge( NodeId.DARK_D7, NodeId.DARK_F8 ),
  makeEdge( NodeId.DARK_D7, NodeId.DARK_MONKEY_HUT_ENTRANCE ),
  makeEdge( NodeId.DARK_D7, NodeId.DARK_POD_ENTRANCE ),

  // Dark E3 connections
  makeEdge( NodeId.DARK_E3, NodeId.DARK_D1, NodeConnectionId.HasTitansDarkWorld ),
  makeEdge( NodeId.DARK_E3, NodeId.DARK_E3_UPPER ),
  makeEdge( NodeId.DARK_E3, NodeId.DARK_HAMMER_HOUSE_ENTRANCE, NodeConnectionId.HasHammerDarkWorld ),

  makeEdge( NodeId.DARK_E3_UPPER, NodeId.DARK_E3 ),

  // Dark E6 connections
  makeEdge( NodeId.DARK_E6, NodeId.DARK_D6_EAST ),
  makeEdge( NodeId.DARK_E6, NodeId.DARK_D4_OUTER ),
  makeEdge( NodeId.DARK_E6, NodeId.DARK_F6_UPPER ),

  // Dark F1 connections
  makeEdge( NodeId.DARK_F1_LOWER, NodeId.DARK_F2_LOWER ),
  makeEdge( NodeId.DARK_F1_LOWER, NodeId.DARK_F1_GAME ),

  makeEdge( NodeId.DARK_F1_UPPER, NodeId.DARK_F1_LOWER ),

  makeEdge( NodeId.DARK_F1_GAME, NodeId.DARK_DIG_GAME_ITEM ),
  makeEdge( NodeId.DARK_F1_GAME, NodeId.DARK_F1_LOWER ),

  // Dark F2 connections
  makeEdge( NodeId.DARK_F2_UPPER, NodeId.DARK_D1 ),
  makeEdge( NodeId.DARK_F2_UPPER, NodeId.DARK_F2_LOWER ),
  makeEdge( NodeId.DARK_F2_UPPER, NodeId.DARK_BLACKSMITH_ITEM, NodeConnectionId.HasTitansDarkWorld ),

  makeEdge( NodeId.DARK_F2_LOWER, NodeId.DARK_F2_UPPER, NodeConnectionId.HasTitansDarkWorld ),
  makeEdge( NodeId.DARK_F2_LOWER, NodeId.DARK_F1_LOWER ),
  makeEdge( NodeId.DARK_F2_LOWER, NodeId.DARK_F1_UPPER ),
  makeEdge( NodeId.DARK_F2_LOWER, NodeId.DARK_F3_BYPASS ),
  makeEdge( NodeId.DARK_F2_LOWER, NodeId.DARK_ARCHERY_GAME_ENTRANCE ),

  // Dark F3 connections
  makeEdge( NodeId.DARK_F3, NodeId.DARK_G3, NodeConnectionId.CanActInLightWorld ),
  makeEdge( NodeId.DARK_F3, NodeId.DARK_STUMPY_ITEM ),

  makeEdge( NodeId.DARK_F3_BYPASS, NodeId.DARK_F2_LOWER ),
  makeEdge( NodeId.DARK_F3_BYPASS, NodeId.DARK_G3 ),

  // Dark F4 connections
  makeEdge( NodeId.DARK_F4, NodeId.DARK_D4_LOWER ),
  makeEdge( NodeId.DARK_F4, NodeId.DARK_F5 ),
  makeEdge( NodeId.DARK_F4, NodeId.DARK_G4_BYPASS ),
  makeEdge( NodeId.DARK_F4, NodeId.DARK_BONK_ROCKS_ENTRANCE, NodeConnectionId.HasBootsDarkWorld ),

  // Dark F5 connections
  makeEdge( NodeId.DARK_F5, NodeId.DARK_F4 ),
  makeEdge( NodeId.DARK_F5, NodeId.DARK_D4_LOWER ),
  makeEdge( NodeId.DARK_F5, NodeId.DARK_F6_LOWER ),
  makeEdge( NodeId.DARK_F5, NodeId.DARK_G5 ),
  makeEdge( NodeId.DARK_F5, NodeId.DARK_BOMB_SHOP_ENTRANCE ),

  // Dark F6 connections
  makeEdge( NodeId.DARK_F6_LOWER, NodeId.DARK_F6_UPPER, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.DARK_F6_LOWER, NodeId.DARK_F5 ),
  makeEdge( NodeId.DARK_F6_LOWER, NodeId.DARK_G6_NW ),

  makeEdge( NodeId.DARK_F6_UPPER, NodeId.DARK_F6_LOWER, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.DARK_F6_UPPER, NodeId.DARK_E6 ),
  makeEdge( NodeId.DARK_F6_UPPER, NodeId.DARK_F7 ),
  makeEdge( NodeId.DARK_F6_UPPER, NodeId.DARK_F6_WATER ),

  makeEdge( NodeId.DARK_F6_WATER, NodeId.DARK_F7_WATER ),

  // Dark F7 connections
  makeEdge( NodeId.DARK_F7, NodeId.DARK_D7 ),
  makeEdge( NodeId.DARK_F7, NodeId.DARK_G6_NE ),
  makeEdge( NodeId.DARK_F7, NodeId.DARK_F6_UPPER ),
  makeEdge( NodeId.DARK_F7, NodeId.DARK_TREES_FAIRY_ENTRANCE ),

  makeEdge( NodeId.DARK_F7_WATER, NodeId.DARK_F6_WATER ),
  makeEdge( NodeId.DARK_F7_WATER, NodeId.DARK_G6_WATER ),

  // Dark F8 connections
  makeEdge( NodeId.DARK_F8, NodeId.DARK_D7 ),
  makeEdge( NodeId.DARK_F8, NodeId.DARK_F8_PEGS, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.DARK_F8, NodeId.DARK_PEGS_CAVE_ENTRANCE ),

  makeEdge( NodeId.DARK_F8_PEGS, NodeId.DARK_F8, NodeConnectionId.HasHammerDarkWorld ),

  // Dark G1 connections
  makeEdge( NodeId.DARK_G1, NodeId.DARK_H3 ),
  makeEdge( NodeId.DARK_G1, NodeId.DARK_G1_ZONK ),
  makeEdge( NodeId.DARK_G1, NodeId.DARK_G1_NE ),
  makeEdge( NodeId.DARK_G1, NodeId.DARK_G1_GATE_SOUTH ),
  makeEdge( NodeId.DARK_G1, NodeId.DARK_MIRE_CAVE_ENTRANCE ),

  makeEdge( NodeId.DARK_G1_WEST, NodeId.DARK_G1 ),
  makeEdge( NodeId.DARK_G1_WEST, NodeId.DARK_LEFT_MIRE_SHED_ENTRANCE ),
  makeEdge( NodeId.DARK_G1_WEST, NodeId.DARK_G1_TOP ),

  makeEdge( NodeId.DARK_G1_SOUTH, NodeId.DARK_G1 ),

  makeEdge( NodeId.DARK_G1_NE, NodeId.DARK_G1 ),

  makeEdge( NodeId.DARK_G1_ZONK, NodeId.DARK_G1 ),
  makeEdge( NodeId.DARK_G1_ZONK, NodeId.DARK_RIGHT_MIRE_SHED ),

  makeEdge( NodeId.DARK_G1_TOP, NodeId.DARK_G1_WEST ),

  makeEdge( NodeId.DARK_G1_GATE_NORTH, NodeId.DARK_MM_ENTRANCE, NodeConnectionId.CanEnterMiseryMire ),

  makeEdge( NodeId.DARK_G1_GATE_SOUTH, NodeId.DARK_G1_GATE_NORTH ),
  makeEdge( NodeId.DARK_G1_GATE_SOUTH, NodeId.DARK_G1 ),

  // Dark G3 connections
  makeEdge( NodeId.DARK_G3, NodeId.DARK_F3_BYPASS ),
  makeEdge( NodeId.DARK_G3, NodeId.DARK_F3, NodeConnectionId.CanActInLightWorld ),
  makeEdge( NodeId.DARK_G3, NodeId.DARK_G4_BYPASS ),
  makeEdge( NodeId.DARK_G3, NodeId.DARK_G3_VT ),

  makeEdge( NodeId.DARK_G3_VT, NodeId.DARK_G3 ),

  // Dark G4 connections
  makeEdge( NodeId.DARK_G4_BYPASS, NodeId.DARK_G3 ),
  makeEdge( NodeId.DARK_G4_BYPASS, NodeId.DARK_F4 ),
  makeEdge( NodeId.DARK_G4_BYPASS, NodeId.DARK_G4, NodeConnectionId.HasGloveDarkWorld ),

  makeEdge( NodeId.DARK_G4, NodeId.DARK_G4_BYPASS, NodeConnectionId.HasGloveDarkWorld ),
  makeEdge( NodeId.DARK_G4, NodeId.DARK_H4 ),
  makeEdge( NodeId.DARK_G4, NodeId.DARK_G5 ),
  makeEdge( NodeId.DARK_G4, NodeId.DARK_G4_PORTAL_AREA, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.DARK_G4, NodeId.DARK_G4_WATER, NodeConnectionId.HasFakableFlippers ),

  makeEdge( NodeId.DARK_G4_PORTAL_AREA, NodeId.DARK_G4, NodeConnectionId.HasHammerDarkWorld ),

  makeEdge( NodeId.DARK_G4_WATER, NodeId.DARK_G4 ),
  // makeEdge( NodeId.LIGHT_G4_WATER, NodeId.LIGHT_G4_WATER_WARP ),
  makeEdge( NodeId.DARK_G4_WATER, NodeId.DARK_G5_WATER ),

  // Dark G5 entrances
  makeEdge( NodeId.DARK_G5, NodeId.DARK_F5 ),
  makeEdge( NodeId.DARK_G5, NodeId.DARK_H5 ),
  makeEdge( NodeId.DARK_G5, NodeId.DARK_G4 ),
  makeEdge( NodeId.DARK_G5, NodeId.DARK_G5_WATER, NodeConnectionId.HasFakableFlippers ),
  makeEdge( NodeId.DARK_G5, NodeId.DARK_HYPE_CAVE_ENTRANCE, NodeConnectionId.HasBombsDarkWorld ),

  makeEdge( NodeId.DARK_G5_WATER, NodeId.DARK_G5 ),
  makeEdge( NodeId.DARK_G5_WATER, NodeId.DARK_G4_WATER ),

  // Dark G6 connections
  makeEdge( NodeId.DARK_G6_NW, NodeId.DARK_F6_LOWER ),
  makeEdge( NodeId.DARK_G6_NW, NodeId.DARK_G6_WATER, NodeConnectionId.HasFlippers ),
  makeEdge( NodeId.DARK_G6_NW, NodeId.DARK_HYLIA_FORTUNE_TELLER_ENTRANCE ),

  makeEdge( NodeId.DARK_G6_NE, NodeId.DARK_F7 ),
  makeEdge( NodeId.DARK_G6_NE, NodeId.DARK_G6_WATER, NodeConnectionId.HasFlippers ),

  makeEdge( NodeId.DARK_G6_SW, NodeId.DARK_H5 ),
  makeEdge( NodeId.DARK_G6_SW, NodeId.DARK_G6_WATER, NodeConnectionId.HasFlippers ),

  makeEdge( NodeId.DARK_G6_SE, NodeId.DARK_H8 ),
  makeEdge( NodeId.DARK_G6_SE, NodeId.DARK_G6_WATER, NodeConnectionId.HasFakableFlippers ),

  makeEdge( NodeId.DARK_G6_WATER, NodeId.DARK_G6_ITEM_ISLAND ),
  makeEdge( NodeId.DARK_G6_WATER, NodeId.DARK_G6_NE ),
  makeEdge( NodeId.DARK_G6_WATER, NodeId.DARK_H8_WATER ),
  makeEdge( NodeId.DARK_G6_WATER, NodeId.DARK_G6_UPGRADE_ISLAND, NodeConnectionId.IsInverted ),

  makeEdge( NodeId.DARK_G6_ITEM_ISLAND, NodeId.DARK_G6_WATER ),

  // TODO: Possibly adjust this one due to entrance shenanigans and inverted.
  makeEdge( NodeId.DARK_G6_UPGRADE_ISLAND, NodeId.DARK_G6_WATER, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.DARK_G6_UPGRADE_ISLAND, NodeId.DARK_IP_ENTRANCE ),

  // Dark G8 connections
  makeEdge( NodeId.DARK_G8, NodeId.DARK_H8 ),
  makeEdge( NodeId.DARK_G8, NodeId.DARK_ICE_ROD_CAVE_ENTRANCE, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.DARK_G8, NodeId.DARK_ICE_BEE_CAVE_ENTRANCE ),
  makeEdge( NodeId.DARK_G8, NodeId.DARK_ICE_ROCK_CAVE_ENTRANCE, NodeConnectionId.HasGloveDarkWorld ),

  // Dark H3 connections
  makeEdge( NodeId.DARK_H3, NodeId.DARK_H3_TABLET_AREA ),
  makeEdge( NodeId.DARK_H3, NodeId.DARK_H4 ),

  makeEdge( NodeId.DARK_H3_TABLET_AREA, NodeId.DARK_H3 ),

  // Dark H4 connections
  makeEdge( NodeId.DARK_H4, NodeId.DARK_H3 ),
  makeEdge( NodeId.DARK_H4, NodeId.DARK_G4 ),
  makeEdge( NodeId.DARK_H4, NodeId.DARK_H5 ),
  makeEdge( NodeId.DARK_H4, NodeId.DARK_SP_ENTRANCE ),

  // Dark H5 connections
  makeEdge( NodeId.DARK_H5, NodeId.DARK_G5 ),
  makeEdge( NodeId.DARK_H5, NodeId.DARK_H4 ),
  makeEdge( NodeId.DARK_H5, NodeId.DARK_G6_SW ),

  // Dark H8 connections
  makeEdge( NodeId.DARK_H8, NodeId.DARK_G6_SE ),
  makeEdge( NodeId.DARK_H8, NodeId.DARK_G8 ),
  makeEdge( NodeId.DARK_H8, NodeId.DARK_H8_WATER, NodeConnectionId.HasFakableFlippers ),

  makeEdge( NodeId.DARK_H8_WATER, NodeId.DARK_G6_WATER ),
  // makeEdge( NodeId.LIGHT_H8_WATER, NodeId.LIGHT_H8_WATER_WARP ),
];

export { darkOverworldEdges };
