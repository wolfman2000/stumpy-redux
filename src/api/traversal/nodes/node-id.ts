enum NodeId {
  Menu = 0,
  StartingHouse = 10,

  // Light World sections.
  LIGHT_A1 = 2110, // Forest screen, 2x2
  LIGHT_A3 = 2130, // Lumberjack screen, 1x1
  LIGHT_A4 = 2140, // Death mountain, 2x2
  LIGHT_A4_LOWER = 2142, // Lower part of A4. Most connections.
  LIGHT_A4_SPECTACLE_ROCK = 2148, // Top of Spectacle Rock.
  LIGHT_A4_UPPER = 2150, // Hera accessible.
  LIGHT_A6 = 2160, // Death mountain east of Hera, 2x2
  LIGHT_A6_UPPER_LEFT = 2162, // bridge with hammer requirement.
  LIGHT_A6_UPPER = 2164, // Upper path
  LIGHT_A6_ISLAND = 2166, // Island you mirror to
  LIGHT_A6_SPIRAL_TOP = 2168, // Fall to enter spiral cave
  LIGHT_A6_MIMIC_LEDGE = 2170, // Mirror to here from TR
  LIGHT_A6_FAIRY_LEDGE = 2172, // Usually pointless connector
  LIGHT_A6_FAIRY_LAND = 2174, // Rocks surround this
  LIGHT_A6_LOWER = 2176, // Common lower path,
  LIGHT_A6_LOWER_LEFT = 2178, // Just left of the bridge,
  LIGHT_A8 = 2180, // Warp to Turtle Rock, 1x1
  LIGHT_A8_UPPER_ROCK = 2185,
  LIGHT_B3 = 2230, // Screen to cave to DM, 1x1
  LIGHT_B3_DM_BOTTOM = 2233,
  LIGHT_B3_DM_TOP = 2236,
  LIGHT_B8 = 2280, // Transition point to Zora. 1x1
  LIGHT_B8_WATER = 2285, // Water portion.
  LIGHT_B8_ZORA_MAIN = 2290, // Side portion: King accessible.
  LIGHT_B8_ZORA_LEDGE = 2295, // The ledge below Zora
  LIGHT_C1 = 2310, // Forest transition. DW portal. 1x1
  LIGHT_C1_WEST = 2312, // From woods to town.
  LIGHT_C1_NE = 2314, // From woods to above the portal.
  LIGHT_C1_EAST = 2316, // The section with the wood portal.
  LIGHT_C1_SE = 2318, // Just below the woods portal.
  LIGHT_C2 = 2320, // Fortune Teller above town. 1x1
  LIGHT_C3 = 2330, // Open lake. Pond for warping. 1x1
  LIGHT_C3_WATER = 2335, // The pond in C3.
  LIGHT_C4 = 2340, // Sanctuary and bonk rocks. 1x1
  LIGHT_C5 = 2350, // Graveyard. 1x1
  LIGHT_C5_LEDGE = 2352, // Graveyard Ledge
  LIGHT_C5_KING_AREA = 2354, // Small part to access King's Tomb.
  LIGHT_C6 = 2360, // Common Houlihan. 1x1
  LIGHT_C6_WEST = 2362, // West part
  LIGHT_C6_EAST = 2364, // East part
  LIGHT_C6_WATER = 2366, // Water portion
  LIGHT_C7 = 2370, // Potion Shop. 1x1
  LIGHT_C7_UPPER = 2375, // silly block
  LIGHT_C8 = 2380, // Path to Zora. 1x1
  LIGHT_D1 = 2410, // Kakariko. 2x2
  LIGHT_D3 = 2430, // ...the rare path. 1x1
  LIGHT_D4 = 2440, // Hyrule Castle. 2x2
  LIGHT_D4_GARDEN = 2444, // Inside of castle walls.
  LIGHT_D4_ROOFTOP = 2448, // Top of the castle
  LIGHT_D4_LOWER = 2452, // Below the castle
  LIGHT_D4_OUTER = 2456, // Walls surrounding the castle.
  LIGHT_D6 = 2460, // Bridge. 1x1
  LIGHT_D6_WEST = 2462, // west of the bridge
  LIGHT_D6_EAST = 2464, // east of the bridge
  LIGHT_D6_WATER = 2466, // water under the bridge
  LIGHT_D7 = 2470, // Eastern Ruins. 2x2
  LIGHT_E3 = 2530, // Blacksmiths. 1x1
  LIGHT_E3_UPPER = 2535, // Upper right part above the hole.
  LIGHT_E6 = 2560, // Random columns. 1x1
  LIGHT_F1 = 2610, // Race Game. 1x1
  LIGHT_F1_UPPER = 2612, // The ledge by the house
  LIGHT_F1_GAME = 2614, // The game of the world
  LIGHT_F1_LOWER = 2616, // The lower part
  LIGHT_F2 = 2620, // Library. 1x1
  LIGHT_F2_UPPER = 2621, // Connects to village
  LIGHT_F2_LOWER = 2622, // Connects to dig game
  LIGHT_F3 = 2630, // Haunted Grove. Dig spot. 1x1
  LIGHT_F3_BYPASS = 2635, // SW bypass.
  LIGHT_F4 = 2640, // House Bonk Rocks. 1x1
  LIGHT_F5 = 2650, // Link's House. 1x1
  LIGHT_F6 = 2660, // Bird Lover Transition point. 1x1
  LIGHT_F6_LOWER = 2661, // Below the bridge.
  LIGHT_F6_UPPER = 2662, // Above the bridge.
  LIGHT_F6_WATER = 2665, // Water to the bird lover.
  LIGHT_F7 = 2670, // Path to EP. 1x1
  LIGHT_F7_WATER = 2675, // Water section
  LIGHT_F8 = 2680, // Flute #5. 1x1
  LIGHT_F8_PEGS = 2685, // Hammer pegs surrounding portal.
  LIGHT_G1 = 2710, // DP areas. 2x2.
  LIGHT_G1_WEST = 2711, // Western ledge
  LIGHT_G1_SOUTH = 2712, // Outcropping to flute to.
  LIGHT_G1_NE = 2713, // Checkboard ledge.
  LIGHT_G1_TABLET_AREA = 2714, // Tablet area.
  LIGHT_G1_ZONK = 2715, // The dummy entrance.
  LIGHT_G1_TOP = 2716, // guarding desert palace back.
  LIGHT_G1_GATE_SOUTH = 2717, // Book needed to get past.
  LIGHT_G1_GATE_NORTH = 2718, // Past gate. One way to DP.
  LIGHT_G3 = 2730, // VT cave. 1x1
  LIGHT_G3_VT = 2735, // VT Cave area
  LIGHT_G4 = 2740, // DW Portal. Shortcut to desert. 1x1
  LIGHT_G4_BYPASS = 2741, // The passage in the NW part.
  LIGHT_G4_PORTAL_AREA = 2742, // The portal spot,
  LIGHT_G4_WATER = 2743, // The water area with a portal.
  LIGHT_G5 = 2750, // Light Hype Cave. 1x1
  LIGHT_G5_WATER = 2755, // Mini pool
  LIGHT_G6 = 2760, // Lake Hylia. 2x2
  LIGHT_G6_NW = 2761, // Northwest land
  LIGHT_G6_NE = 2762, // Northeast land
  LIGHT_G6_SW = 2763, // Southeast land
  LIGHT_G6_SE = 2764, // Southeast land
  LIGHT_G6_WATER = 2765, // Big water
  LIGHT_G6_ITEM_ISLAND = 2766, // Island with an item.
  LIGHT_G6_UPGRADE_ISLAND = 2767, // Island with upgrade
  LIGHT_G8 = 2780, // Ice Rod Cave. 1x1
  LIGHT_H3 = 2830, // Purple Chest Guy. 1x1
  LIGHT_H3_TABLET_AREA = 2835, // To the tablet.
  LIGHT_H4 = 2840, // Reservoir. 1x1.
  LIGHT_H5 = 2850, // Path towards mini-moldorm. 1x1
  LIGHT_H8 = 2880, // Path to Ice Rod Cave. 1x1
  LIGHT_H8_WATER = 2885, // the water below

  // Dark World sections.
  DARK_A1 = 3110, // Dead Woods. 2x2
  DARK_A3 = 3130, // ex-lumberjacks. 1x1
  DARK_A4 = 3140, // Ganon's Tower. 2x2
  DARK_A4_LOWER = 3142,
  DARK_A4_SPECTACLE_ROCK = 3146,
  DARK_A4_UPPER = 3148,
  DARK_A6 = 3160, // Lynel's Bridge. 2x2
  DARK_A6_UPPER_LEFT = 3162, // bridge with hammer requirement.
  DARK_A6_UPPER = 3164, // Upper path
  DARK_A6_ISLAND = 3166, // Island you mirror to
  DARK_A6_SPIRAL_TOP = 3168, // Fall to enter spiral cave
  DARK_A6_MIMIC_LEDGE = 3170, // Mirror to here from TR
  DARK_A6_FAIRY_LEDGE = 3172, // Usually pointless connector
  DARK_A6_FAIRY_LAND = 3174, // Rocks surround this
  DARK_A6_LOWER = 3176, // Common lower path,
  DARK_A6_LOWER_LEFT = 3178, // Just left of the bridge,
  DARK_A8 = 3180, // Turtle Rock. 1x1
  DARK_A8_UPPER_ROCK = 3185, // medallion casting for TR.
  DARK_B3 = 3230, // Bumper Cave. 1x1
  DARK_B3_BUMPER_BOTTOM = 3233,
  DARK_B3_BUMPER_TOP = 3236,
  DARK_B8 = 3280, // Catfish. 1x1
  DARK_C1 = 3310, // Transition to forest. 1x1
  DARK_C1_WEST = 3312, // From woods to town.
  DARK_C1_NE = 3314, // From woods to above the portal.
  DARK_C1_EAST = 3316, // The section with the wood portal.
  DARK_C1_SE = 3318, // Just below the woods portal.
  DARK_C2 = 3320, // Fortune teller. 1x1
  DARK_C3 = 3330, // Random lake. 1x1
  DARK_C4 = 3340, // Dark Chapel. 1x1
  DARK_C5 = 3350, // Graveyard. 1x1
  DARK_C5_LEDGE = 3352, // Graveyard Ledge
  DARK_C5_KING_AREA = 3354, // Small part to access King's Tomb.
  DARK_C6 = 3360, // Towards ex-potion shop. 1x1
  DARK_C6_WEST = 3362, // West part
  DARK_C6_EAST = 3364, // East part
  DARK_C6_WATER = 3366, // Water portion
  DARK_C7 = 3370, // Ex-potion shop. 1x1
  DARK_C7_UPPER = 3375, // silly block
  DARK_C8 = 3380, // To catfish. 1x1
  DARK_D1 = 3410, // Village of Outcasts. 2x2
  DARK_D3 = 3430, // Rare shop. 1x1
  DARK_D4 = 3440, // Pyramid of Power. 2x2
  DARK_D4_GARDEN = 3444, // Inside of castle walls.
  DARK_D4_ROOFTOP = 3448, // Top of the castle
  DARK_D4_LOWER = 3452, // Below the castle
  DARK_D4_OUTER = 3456, // Walls surrounding the castle.
  DARK_D6 = 3460, // Broken Bridge. Can swim. 1x1
  DARK_D6_WEST = 3462, // west of the bridge
  DARK_D6_EAST = 3464, // east of the bridge
  DARK_D6_WATER = 3466, // water under the bridge
  DARK_D7 = 3470, // Monkey Ruins. 2x2
  DARK_E3 = 3530, // Purple Chest Spawn. 1x1
  DARK_E3_UPPER = 3535, // Upper right part above the hole.
  DARK_E6 = 3560, // Random pillars. 1x1
  DARK_F1 = 3610, // Digging Game. 1x1
  DARK_F1_UPPER = 3612, // The ledge by the house
  DARK_F1_GAME = 3614, // The game of the world
  DARK_F1_LOWER = 3616, // The lower part
  DARK_F2 = 3620, // Archery Game. 1x1
  DARK_F2_UPPER = 3621, // Connects to village
  DARK_F2_LOWER = 3622, // Connects to dig game
  DARK_F3 = 3630, // Stumpy. 1x1
  DARK_F3_BYPASS = 3635, // SW bypass.
  DARK_F4 = 3640, // House bonk rocks. 1x1
  DARK_F5 = 3650, // Bomb Shop. 1x1
  DARK_F6 = 3660, // Ex-bridge. 1x1
  DARK_F6_LOWER = 3661, // Below the bridge.
  DARK_F6_UPPER = 3662, // Above the bridge.
  DARK_F6_WATER = 3665, // Water to the bird lover.
  DARK_F7 = 3670, // Path to Pod. 1x1
  DARK_F7_WATER = 3675, // Water section
  DARK_F8 = 3680, // Portal landing. 1x1
  DARK_F8_PEGS = 3685, // Hammer pegs surrounding portal.
  DARK_G1 = 3710, // Haunted Wasteland. 2x2
  DARK_G1_WEST = 3711, // Western ledge
  DARK_G1_SOUTH = 3712, // Outcropping to flute to.
  DARK_G1_NE = 3713, // Checkboard ledge.
  // DARK_G1_TABLET_AREA = 3714, // Tablet area.
  DARK_G1_ZONK = 3715, // The dummy entrance.
  DARK_G1_TOP = 3716, // guarding desert palace back.
  DARK_G1_GATE_SOUTH = 3717, // Book needed to get past.
  DARK_G1_GATE_NORTH = 3718, // Past gate. One way to DP.
  DARK_G3 = 3730, // South of Grove. 1x1
  DARK_G3_VT = 3735, // VT Cave area
  DARK_G4 = 3740, // Portal landing. 1x1
  DARK_G4_BYPASS = 3741, // The passage in the NW part.
  DARK_G4_PORTAL_AREA = 3742, // The portal spot,
  DARK_G4_WATER = 3743, // The water area with a portal.
  DARK_G5 = 3750, // HYPE Cave. 1x1
  DARK_G5_WATER = 3755, // Mini pool
  DARK_G6 = 3760, // Frozen Lake. 2x2
  DARK_G6_NW = 3761, // Northwest land
  DARK_G6_NE = 3762, // Northeast land
  DARK_G6_SW = 3763, // Southeast land
  DARK_G6_SE = 3764, // Southeast land
  DARK_G6_WATER = 3765, // Big water
  DARK_G6_ITEM_ISLAND = 3766, // Island with an item.
  DARK_G6_UPGRADE_ISLAND = 3767, // Island with upgrade
  DARK_G8 = 3780, // Shopping Mall. 1x1
  DARK_H3 = 3830, // Bombos Entry. 1x1
  DARK_H3_TABLET_AREA = 3835, // To the tablet.
  DARK_H4 = 3840, // Swamp Palace. 1x1
  DARK_H5 = 3850, // Towards ex-MM cave. 1x1
  DARK_H8 = 3880, // Swim to mall. 1x1
  DARK_H8_WATER = 3885, // the water below

  // Light world A1 connections
  LIGHT_FOREST_GAME = 1000,
  LIGHT_MASTER_SWORD_PEDESTAL = 1001,
  LIGHT_MUSHROOM_SPOT = 1002,
  LIGHT_FOREST_HIDEOUT_ENTRANCE = 1003,
  LIGHT_FOREST_HIDEOUT_EXIT = 1004,

  // Light A3 connections
  LIGHT_LUMBERJACK_ENTRANCE = 1005,
  LIGHT_LUMBERJACK_EXIT = 1006,
  LIGHT_LUMBERJACK_HOUSE = 1007,

  // Light A4 connections
  LIGHT_DM_ASCENT_EXIT_CAVE = 1008,
  LIGHT_OLD_MAN_MOUNTAIN_CAVE_ENTRANCE = 1009,
  LIGHT_OLD_MAN_MOUNTAIN_CAVE_EXIT = 1010,
  LIGHT_DM_DESCENT_ENTRANCE_CAVE = 1011,
  LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE = 1012,
  LIGHT_SPECTACLE_ROCK_ENTRANCE = 1013,
  LIGHT_SPECTACLE_ROCK_EXIT = 1014,
  LIGHT_ETHER_MEDALLION = 1015,
  LIGHT_HERA_ENTRANCE = 1016,

  // Light A6 connections
  LIGHT_PARADOX_TOP_ENTRANCE = 1017,
  LIGHT_SPIRAL_CAVE_ENTRANCE = 1018,
  LIGHT_SPIRAL_CAVE_EXIT = 1019,
  LIGHT_MOUNTAIN_FAIRY_TOP = 1020,
  LIGHT_MOUNTAIN_FAIRY_BOTTOM = 1021,
  LIGHT_MIMIC_CAVE_ENTRANCE = 1022,
  LIGHT_MOUNTAIN_SHOP = 1023,
  LIGHT_PARADOX_MIDDLE_ENTRANCE = 1024,
  LIGHT_PARADOX_BOTTOM_ENTRANCE = 1025,
  LIGHT_MOUNTAIN_ISLAND_ITEM = 1026,

  // Light B3 connections
  LIGHT_DM_ASCENT_ENTRANCE = 1027,
  LIGHT_DM_DESCENT_EXIT = 1028,

  // Light B8 entrances
  LIGHT_WATERFALL = 1029,
  LIGHT_B8_WATER_WARP = 1030,
  LIGHT_ZORA_LEDGE_ITEM = 1031,

  // Light C2 entrances
  LIGHT_KAKARIKO_FORTUNE = 1032,

  // Light C3 entrances
  LIGHT_C3_WATER_WARP = 1033,

  // Light C4 entrances
  LIGHT_SANCTUARY_BONK_ROCKS_ENTRANCE = 1034,
  LIGHT_SANCTUARY_EXIT = 1035,

  // Light C5 entrances
  LIGHT_KINGS_TOMB_ENTRANCE = 1036,
  LIGHT_GRAVEYARD_LEDGE_ENTRANCE = 1037,
  LIGHT_CASTLE_GRAVE_ENTRANCE = 1038,

  // Light C6 entrances
  LIGHT_FAIRY_CAVE_ENTRANCE = 1039,
  LIGHT_FAIRY_CAVE_EXIT = 1040,
  LIGHT_C6_WATER_WARP = 1041,

  // Light C7 entrances
  LIGHT_POTION_SHOP_ENTRANCE = 1042,

  // Light D1 entrances
  LIGHT_WELL_ENTRANCE = 1043,
  LIGHT_WELL_EXIT = 1044,
  LIGHT_BLINDS_HOUSE_ENTRANCE = 1045,
  LIGHT_WOMAN_HOUSE_LEFT_ENTRANCE = 1046,
  LIGHT_WOMAN_HOUSE_RIGHT_ENTRANCE = 1047,
  LIGHT_SNITCH_HOUSE_LEFT_ENTRANCE = 1048,
  LIGHT_BOTTLE_PURCHASE = 1049,
  LIGHT_SNITCH_HOUSE_RIGHT_ENTRANCE = 1050,
  LIGHT_CUCCO_HOUSE_ENTRANCE = 1051,
  LIGHT_SICK_KID_ENTRANCE = 1052,
  LIGHT_GRASS_HOUSE_ENTRANCE = 1053,
  LIGHT_BOMBABLE_HUT_ENTRANCE = 1054,
  LIGHT_KAKARIKO_SHOP_ENTRANCE = 1055,
  LIGHT_TAVERN_BACK_ENTRANCE = 1056,
  LIGHT_TAVERN_FRONT_ENTRANCE = 1057,

  // Light D4 entrances
  LIGHT_UNCLE_ENTRANCE = 1058,
  LIGHT_UNCLE_EXIT = 1059,
  LIGHT_HYRULE_CASTLE_CENTER_ENTRANCE = 1060,
  LIGHT_HYRULE_CASTLE_LEFT_ENTRANCE = 1061,
  LIGHT_HYRULE_CASTLE_RIGHT_ENTRANCE = 1062,
  LIGHT_HYRULE_CASTLE_TOWER_ENTRANCE = 1063,

  // Light D7 entrances
  LIGHT_SAHASRAHLA_ENTRANCE = 1064,
  LIGHT_EASTERN_PALACE_ENTRANCE = 1065,

  // Light E3 entrances
  LIGHT_BLACKSMITHS_ENTRANCE = 1066,
  LIGHT_MAD_BATTER_ENTRANCE = 1067,
  LIGHT_MAD_BATTER_EXIT = 1068,

  // Light F1 entrances
  LIGHT_BROTHERS_LEFT_ENTRANCE = 1069,
  LIGHT_RACE_GAME_ITEM = 1070,

  // Light F2 entrances
  LIGHT_LIBRARY_ENTRANCE = 1071,
  LIGHT_OUTSIDE_CHEST_GAME_ENTRANCE = 1072,
  LIGHT_BROTHERS_RIGHT_ENTRANCE = 1073,

  // Light F3 entrances
  LIGHT_SHOVEL_SPOT = 1074,

  // Light F4 entrances
  LIGHT_HOUSE_BONK_ROCK_ENTRANCE = 1075,

  // Light F5 entrances
  LIGHT_LINKS_HOUSE_ENTRANCE = 1076,

  // Light F6 entrances
  LIGHT_BIRD_LOVER = 1077,

  // Light F7 entrances
  LIGHT_TREES_FAIRY_ENTRANCE = 1078,

  // Light F8 entrances
  LIGHT_PEGS_FAIRY_ENTRANCE = 1079,

  // Light G1 entrances
  LIGHT_DESERT_LEDGE_ITEM = 1080,
  LIGHT_DESERT_PALACE_LEFT_ENTRANCE = 1081,
  LIGHT_DESERT_PALACE_RIGHT_ENTRANCE = 1082,
  LIGHT_DESERT_PALACE_CENTER_ENTRANCE = 1083,
  LIGHT_DESERT_PALACE_BACK_ENTRANCE = 1084,
  LIGHT_CHECKERBOARD_ENTRANCE = 1085,
  LIGHT_AGINAH_ENTRANCE = 1086,
  LIGHT_BOMBOS_TABLET = 1087,

  // Light G3 entrances
  LIGHT_VT_CAVE_ENTRANCE = 1088,

  // Light G4 entrances
  LIGHT_G4_WATER_WARP = 1089,

  // Light G5 entrances
  LIGHT_HYPE_FAIRY_ENTRANCE = 1090,

  // Light G6 entrances
  LIGHT_LAKE_FORTUNE_TELLER_ENTRANCE = 1091,
  LIGHT_LAKE_SHOP_ENTRANCE = 1092,
  LIGHT_LAKE_ISLAND_ITEM = 1093,
  LIGHT_UPGRADE_FAIRY_ENTRANCE = 1094,
  LIGHT_MINI_MOLDORM_ENTRANCE = 1095,
  LIGHT_G6_WATER_WARP = 1096,

  // Light G8 entrances
  LIGHT_ICE_ROD_CAVE_ENTRANCE = 1097,
  LIGHT_ICE_BEE_CAVE_ENTRANCE = 1098,
  LIGHT_ICE_FAIRY_CAVE_ENTRANCE = 1099,

  // Light H3 entrances
  LIGHT_THIEF_CAVE_ENTRANCE = 1100,
  LIGHT_RUPEE_CAVE_ENTRANCE = 1101,
  LIGHT_PURPLE_CHEST = 1102,

  // Light H4 entrances
  LIGHT_DAM_ENTRANCE = 1103,
  LIGHT_SWAMP_ITEM = 1104,

  // Light H8 entrances
  LIGHT_H8_WATER_WARP = 1105,

  // Dark F5 entrances
  DARK_BOMB_SHOP_ENTRANCE = 1300,
}

export default NodeId;
