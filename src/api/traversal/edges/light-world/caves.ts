import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

// This file connects traditional light world caves to their entrances & each other.

const lightCaveEdges: Edge[] = [
  // Light A1 caves
  makeEdge( NodeId.CAVE_WOODS_HIDEOUT_TOP, NodeId.CAVE_WOODS_HIDEOUT_ITEM ),
  makeEdge( NodeId.CAVE_WOODS_HIDEOUT_TOP, NodeId.CAVE_WOODS_HIDEOUT_BOTTOM ),
  makeEdge( NodeId.CAVE_WOODS_HIDEOUT_BOTTOM, NodeId.CAVE_WOODS_HIDEOUT_ITEM, NodeConnectionId.AlwaysVisible ),
  makeEdge( NodeId.CAVE_WOODS_HIDEOUT_BOTTOM, NodeId.LIGHT_FOREST_HIDEOUT_EXIT ),

  // Light A3 caves
  makeEdge( NodeId.CAVE_LUMBERJACK_TOP, NodeId.CAVE_LUMBERJACK_BOTTOM ),
  makeEdge( NodeId.CAVE_LUMBERJACK_TOP, NodeId.CAVE_LUMBERJACK_ITEM ),
  makeEdge( NodeId.CAVE_LUMBERJACK_BOTTOM, NodeId.CAVE_LUMBERJACK_ITEM, NodeConnectionId.AlwaysVisible ),
  makeEdge( NodeId.CAVE_LUMBERJACK_BOTTOM, NodeId.LIGHT_LUMBERJACK_EXIT ),

  // Light A4 caves (not counting Hera)
  makeEdge( NodeId.CAVE_SPECTACLE_BOTTOM, NodeId.LIGHT_SPECTACLE_ROCK_ENTRANCE ),
  makeEdge( NodeId.CAVE_SPECTACLE_BOTTOM, NodeId.CAVE_SPECTACLE_ITEM ),
  makeEdge( NodeId.CAVE_SPECTACLE_ITEM, NodeId.CAVE_SPECTACLE_FAIRY ),
  makeEdge( NodeId.CAVE_SPECTACLE_ITEM, NodeId.CAVE_SPECTACLE_OUTLOOK, NodeConnectionId.CanHoverInLightWorld ),
  makeEdge( NodeId.CAVE_SPECTACLE_ITEM, NodeId.CAVE_WOODS_HIDEOUT_BOTTOM ),
  makeEdge( NodeId.CAVE_SPECTACLE_OUTLOOK, NodeId.CAVE_SPECTACLE_ITEM, NodeConnectionId.CanHoverInLightWorld ),
  makeEdge( NodeId.CAVE_SPECTACLE_OUTLOOK, NodeId.LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE ),
  makeEdge( NodeId.CAVE_SPECTACLE_FAIRY, NodeId.CAVE_SPECTACLE_EXIT ),
  makeEdge( NodeId.CAVE_SPECTACLE_EXIT, NodeId.CAVE_SPECTACLE_FAIRY ),
  makeEdge( NodeId.CAVE_SPECTACLE_EXIT, NodeId.LIGHT_SPECTACLE_ROCK_EXIT ),

  makeEdge( NodeId.CAVE_DM_DESCENT_ENTRANCE, NodeId.LIGHT_DM_DESCENT_ENTRANCE ),
  makeEdge( NodeId.CAVE_DM_DESCENT_ENTRANCE, NodeId.CAVE_DM_DESCENT_DARK, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_DESCENT_DARK, NodeId.CAVE_DM_DESCENT_ENTRANCE, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_DESCENT_DARK, NodeId.CAVE_DM_DESCENT_EXIT, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_DESCENT_EXIT, NodeId.CAVE_DM_DESCENT_DARK, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_DESCENT_EXIT, NodeId.LIGHT_DM_DESCENT_EXIT_CAVE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.CAVE_DM_DESCENT_EXIT, NodeId.LIGHT_DM_ASCENT_EXIT_CAVE, NodeConnectionId.IsInverted ),

  makeEdge( NodeId.CAVE_DM_ASCENT_ENTRANCE, NodeId.LIGHT_DM_ASCENT_ENTRANCE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.CAVE_DM_ASCENT_ENTRANCE, NodeId.DARK_BUMPER_BOTTOM_ENTRANCE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.CAVE_DM_ASCENT_ENTRANCE, NodeId.CAVE_DM_ASCENT_DARK, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_ASCENT_DARK, NodeId.CAVE_DM_ASCENT_EXIT, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_ASCENT_EXIT, NodeId.CAVE_DM_ASCENT_DARK, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_ASCENT_EXIT, NodeId.LIGHT_DM_ASCENT_EXIT_CAVE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.CAVE_DM_ASCENT_EXIT, NodeId.DARK_MOUNTAIN_FAIRY_ENTRANCE, NodeConnectionId.IsInverted ),

  makeEdge( NodeId.CAVE_DM_MAN_FRONT, NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_DM_MAN_FRONT, NodeId.CAVE_DM_MAN_DARK, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_MAN_DARK, NodeId.CAVE_DM_MAN_FRONT, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_MAN_DARK, NodeId.CAVE_DM_MAN_BACK, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_MAN_BACK, NodeId.CAVE_DM_MAN_DARK, NodeConnectionId.HasLightSource ),
  makeEdge( NodeId.CAVE_DM_MAN_BACK, NodeId.LIGHT_OLD_MAN_MOUNTAIN_CAVE_EXIT ),

  // Light A6 connections
  makeEdge( NodeId.CAVE_SPIRAL_CAVE_TOP, NodeId.LIGHT_SPIRAL_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_SPIRAL_CAVE_TOP, NodeId.CAVE_SPIRAL_CAVE_ITEM ),
  makeEdge( NodeId.CAVE_SPIRAL_CAVE_ITEM, NodeId.CAVE_SPIRAL_CAVE_BOTTOM ),
  makeEdge( NodeId.CAVE_SPIRAL_CAVE_BOTTOM, NodeId.LIGHT_SPIRAL_CAVE_EXIT ),

  makeEdge( NodeId.CAVE_FAIRY_TRANSITION_BOTTOM, NodeId.CAVE_FAIRY_TRANSITION_TOP ),
  makeEdge( NodeId.CAVE_FAIRY_TRANSITION_BOTTOM, NodeId.LIGHT_MOUNTAIN_FAIRY_BOTTOM ),
  makeEdge( NodeId.CAVE_FAIRY_TRANSITION_TOP, NodeId.CAVE_FAIRY_TRANSITION_BOTTOM ),
  makeEdge( NodeId.CAVE_FAIRY_TRANSITION_TOP, NodeId.LIGHT_MOUNTAIN_FAIRY_TOP ),

  makeEdge( NodeId.CAVE_MIMIC_CAVE_ENTRANCE, NodeId.LIGHT_MIMIC_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_MIMIC_CAVE_ENTRANCE, NodeId.CAVE_MIMIC_CAVE_ITEM, NodeConnectionId.HasHammerLightWorld ),

  makeEdge( NodeId.CAVE_PARADOX_BOTTOM, NodeId.LIGHT_PARADOX_MIDDLE_ENTRANCE ),
  makeEdge( NodeId.CAVE_PARADOX_BOTTOM, NodeId.CAVE_PARADOX_CATCHER, NodeConnectionId.CanMakeBlocksDisappear ),
  makeEdge( NodeId.CAVE_PARADOX_CATCHER, NodeId.CAVE_PARADOX_BOTTOM, NodeConnectionId.CanMakeBlocksDisappear ),
  makeEdge( NodeId.CAVE_PARADOX_CATCHER, NodeId.CAVE_PARADOX_SMALL_VAULT, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.CAVE_PARADOX_CATCHER, NodeId.CAVE_PARADOX_LEDGE ),
  makeEdge( NodeId.CAVE_PARADOX_LEDGE, NodeId.CAVE_PARADOX_LARGE_VAULT, NodeConnectionId.HasReliableProjectile ),
  makeEdge( NodeId.CAVE_PARADOX_LEDGE, NodeId.CAVE_PARADOX_CATCHER ),
  makeEdge( NodeId.CAVE_PARADOX_LEDGE, NodeId.CAVE_PARADOX_MIDDLE, NodeConnectionId.CanBombJumpOrHover ),
  makeEdge( NodeId.CAVE_PARADOX_MIDDLE, NodeId.CAVE_PARADOX_LEDGE, NodeConnectionId.CanBombJumpOrHover ),
  makeEdge( NodeId.CAVE_PARADOX_MIDDLE, NodeId.LIGHT_PARADOX_BOTTOM_ENTRANCE ),
  makeEdge( NodeId.CAVE_PARADOX_MIDDLE, NodeId.CAVE_PARADOX_TOP ),
  makeEdge( NodeId.CAVE_PARADOX_TOP, NodeId.CAVE_PARADOX_MIDDLE ),
  makeEdge( NodeId.CAVE_PARADOX_TOP, NodeId.LIGHT_PARADOX_TOP_ENTRANCE ),

  // Light B8 connections
  makeEdge( NodeId.CAVE_WATERFALL_WISHING, NodeId.LIGHT_WATERFALL ),

  // Light C2 connections
  makeEdge( NodeId.CAVE_KAKARIKO_FORTUNE_TELLER, NodeId.LIGHT_KAKARIKO_FORTUNE ),

  // Light C4 connections (limited hyrule castle stuff)
  makeEdge( NodeId.CAVE_SANCTUARY_BONK_ROCKS, NodeId.LIGHT_SANCTUARY_BONK_ROCKS_ENTRANCE ),

  // Light C5 connections
  makeEdge( NodeId.CAVE_GRAVEYARD_LEDGE_MAIN, NodeId.CAVE_GRAVEYARD_LEDGE_ITEM, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.CAVE_GRAVEYARD_LEDGE_MAIN, NodeId.LIGHT_GRAVEYARD_LEDGE_ENTRANCE ),

  makeEdge( NodeId.CAVE_KINGS_TOMB, NodeId.LIGHT_KINGS_TOMB_ENTRANCE ),

  // Light C6 connections
  makeEdge( NodeId.CAVE_POINTLESS_FAIRY_START, NodeId.CAVE_POINTLESS_FAIRY_END ),
  makeEdge( NodeId.CAVE_POINTLESS_FAIRY_END, NodeId.LIGHT_FAIRY_CAVE_EXIT ),

  // Light C7 connections
  makeEdge( NodeId.CAVE_POTION_SHOP, NodeId.LIGHT_POTION_SHOP_ENTRANCE ),
  makeEdge( NodeId.CAVE_POTION_SHOP, NodeId.CAVE_POTION_SHOP_ITEM, NodeConnectionId.HasMushroom ),

  // Light D1 connections
  makeEdge( NodeId.CAVE_WELL_TOP, NodeId.CAVE_WELL_HIDDEN, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.CAVE_WELL_TOP, NodeId.CAVE_WELL_BOTTOM ),
  makeEdge( NodeId.CAVE_WELL_BOTTOM, NodeId.LIGHT_WELL_EXIT ),

  makeEdge( NodeId.CAVE_BLINDS_HIDEOUT_TOP, NodeId.LIGHT_BLINDS_HOUSE_ENTRANCE ),
  makeEdge( NodeId.CAVE_BLINDS_HIDEOUT_TOP, NodeId.CAVE_BLINDS_HIDEOUT_BOTTOM ),
  makeEdge( NodeId.CAVE_BLINDS_HIDEOUT_BOTTOM, NodeId.CAVE_BLINDS_HIDEOUT_HIDDEN, NodeConnectionId.HasBombsLightWorld ),

  makeEdge( NodeId.CAVE_WOMAN_HOME_LEFT, NodeId.CAVE_WOMAN_HOME_RIGHT ),
  makeEdge( NodeId.CAVE_WOMAN_HOME_LEFT, NodeId.LIGHT_WOMAN_HOUSE_LEFT_ENTRANCE ),
  makeEdge( NodeId.CAVE_WOMAN_HOME_RIGHT, NodeId.CAVE_WOMAN_HOME_LEFT ),
  makeEdge( NodeId.CAVE_WOMAN_HOME_RIGHT, NodeId.LIGHT_WOMAN_HOUSE_RIGHT_ENTRANCE ),

  makeEdge( NodeId.CAVE_SNITCH_LEFT_HOME, NodeId.LIGHT_SNITCH_HOUSE_LEFT_ENTRANCE ),
  makeEdge( NodeId.CAVE_SNITCH_RIGHT_HOME, NodeId.LIGHT_SNITCH_HOUSE_RIGHT_ENTRANCE ),

  makeEdge( NodeId.CAVE_CUCCO_HOUSE, NodeId.LIGHT_CUCCO_HOUSE_ENTRANCE ),
  makeEdge( NodeId.CAVE_CUCCO_HOUSE, NodeId.CAVE_CUCCO_ITEM, NodeConnectionId.HasBombsLightWorld ),

  makeEdge( NodeId.CAVE_TAVERN_BACK, NodeId.LIGHT_TAVERN_BACK_ENTRANCE ),
  makeEdge( NodeId.CAVE_TAVERN_FRONT, NodeId.LIGHT_TAVERN_FRONT_ENTRANCE ),

  makeEdge( NodeId.CAVE_SICK_KID_HOME, NodeId.CAVE_SICK_KID_ITEM, NodeConnectionId.HasBottle ),
  makeEdge( NodeId.CAVE_SICK_KID_HOME, NodeId.LIGHT_SICK_KID_ENTRANCE ),

  makeEdge( NodeId.CAVE_GRASS_HOME, NodeId.LIGHT_GRASS_HOUSE_ENTRANCE ),
  makeEdge( NodeId.CAVE_BOMBABLE_HUT, NodeId.LIGHT_BOMBABLE_HUT_ENTRANCE ),
  makeEdge( NodeId.CAVE_KAKARIKO_SHOP, NodeId.LIGHT_KAKARIKO_SHOP_ENTRANCE ),

  // Light D4 connections
  makeEdge( NodeId.CAVE_UNCLE_ENTRANCE, NodeId.CAVE_UNCLE_EXIT ),
  makeEdge( NodeId.CAVE_UNCLE_EXIT, NodeId.CAVE_UNCLE_ENTRANCE ),
  makeEdge( NodeId.CAVE_UNCLE_EXIT, NodeId.LIGHT_UNCLE_EXIT ),

  // Light D7 connections
  makeEdge( NodeId.CAVE_SAHAS_MAIN, NodeId.CAVE_SAHAS_CLOSET, NodeConnectionId.HasBootsOrBombs ),
  makeEdge( NodeId.CAVE_SAHAS_MAIN, NodeId.CAVE_SAHAS_PENDANT, NodeConnectionId.HasGreenPendant ),
  makeEdge( NodeId.CAVE_SAHAS_MAIN, NodeId.LIGHT_SAHASRAHLA_ENTRANCE ),

  // Light E3 connections
  makeEdge( NodeId.CAVE_BLACKSMITHS, NodeId.LIGHT_E3 ),
  makeEdge( NodeId.CAVE_MAD_BATTER_ENTRANCE, NodeId.CAVE_MAD_BATTER_ITEM, NodeConnectionId.HasPowderOrFake ),
  makeEdge( NodeId.CAVE_MAD_BATTER_ENTRANCE, NodeId.CAVE_MAD_BATTER_EXIT ),
  makeEdge( NodeId.CAVE_MAD_BATTER_EXIT, NodeId.LIGHT_MAD_BATTER_EXIT ),

  // Light F1 connections
  makeEdge( NodeId.CAVE_FIGHTING_BROS_LEFT, NodeId.CAVE_FIGHTING_BROS_RIGHT, NodeConnectionId.HasBootsOrBombs ),
  makeEdge( NodeId.CAVE_FIGHTING_BROS_LEFT, NodeId.LIGHT_BROTHERS_LEFT_ENTRANCE ),
  makeEdge( NodeId.CAVE_FIGHTING_BROS_RIGHT, NodeId.CAVE_FIGHTING_BROS_LEFT, NodeConnectionId.HasBootsOrBombs ),
  makeEdge( NodeId.CAVE_FIGHTING_BROS_RIGHT, NodeId.LIGHT_BROTHERS_RIGHT_ENTRANCE ),

  // Light F2 connections
  makeEdge( NodeId.CAVE_LIBRARY_MAIN, NodeId.CAVE_LIBRARY_ITEM, NodeConnectionId.CanKnockItemOffTorch ),
  makeEdge( NodeId.CAVE_LIBRARY_MAIN, NodeId.LIGHT_LIBRARY_ENTRANCE ),
  makeEdge( NodeId.CAVE_KAKARIKO_CHEST_GAME, NodeId.LIGHT_KAKARIKO_CHEST_GAME_ENTRANCE ),

  // Light F4 connections
  makeEdge( NodeId.CAVE_HOUSE_BONK_ROCKS, NodeId.LIGHT_HOUSE_BONK_ROCK_ENTRANCE ),

  // Light F5 connections
  makeEdge( NodeId.StartingHouse, NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.StartingHouse, NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeConnectionId.IsNotInverted ),

  // Light F7 connections
  makeEdge( NodeId.CAVE_LIGHT_TREE_FAIRY_CAVE, NodeId.LIGHT_TREES_FAIRY_ENTRANCE ),

  // Light F8 connections
  makeEdge( NodeId.CAVE_LIGHT_PEGS_FAIRY_CAVE, NodeId.LIGHT_PEGS_FAIRY_ENTRANCE ),

  // Light G1 connections
  makeEdge( NodeId.CAVE_CHECKERBOARD_CAVE, NodeId.LIGHT_CHECKERBOARD_ENTRANCE ),
  makeEdge( NodeId.CAVE_AGINAH_CAVE_MAIN, NodeId.CAVE_AGINAH_CAVE_ITEM, NodeConnectionId.HasBombsLightWorld ),
  makeEdge( NodeId.CAVE_AGINAH_CAVE_MAIN, NodeId.LIGHT_AGINAH_ENTRANCE ),

  // Light G3 connections
  makeEdge( NodeId.CAVE_VT_CAVE, NodeId.LIGHT_VT_CAVE_ENTRANCE ),

  // Light G5 connections
  makeEdge( NodeId.CAVE_HYPE_FAIRY, NodeId.LIGHT_HYPE_FAIRY_ENTRANCE ),

  // Light G6 connections
  makeEdge( NodeId.CAVE_LAKE_HYLIA_FORTUNE_TELLER, NodeId.LIGHT_LAKE_FORTUNE_TELLER_ENTRANCE ),
  makeEdge( NodeId.CAVE_LAKE_HYLIA_SHOP, NodeId.LIGHT_LAKE_SHOP_ENTRANCE ),
  makeEdge( NodeId.CAVE_UPGRADE_FAIRY, NodeId.LIGHT_UPGRADE_FAIRY_ENTRANCE ),
  makeEdge( NodeId.CAVE_MINI_MOLDORM_MAIN, NodeId.CAVE_MINI_MOLDORM_VAULT, NodeConnectionId.CanDefeatMiniMoldorms ),
  makeEdge( NodeId.CAVE_MINI_MOLDORM_MAIN, NodeId.LIGHT_MINI_MOLDORM_ENTRANCE ),

  // Light G8 connections
  makeEdge( NodeId.CAVE_ICE_ROD_CAVE, NodeId.LIGHT_ICE_ROD_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_ICE_BEE_CAVE, NodeId.LIGHT_ICE_BEE_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_ICE_FAIRY_CAVE, NodeId.LIGHT_ICE_FAIRY_CAVE_ENTRANCE ),

  // Light H3 connections
  makeEdge( NodeId.CAVE_THIEF_CAVE, NodeId.LIGHT_THIEF_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_RUPEE_CAVE, NodeId.LIGHT_RUPEE_CAVE_ENTRANCE ),

  // Light H4 connections
  makeEdge( NodeId.CAVE_DAM_RELEASE, NodeId.LIGHT_DAM_ENTRANCE ),
];

export { lightCaveEdges };
