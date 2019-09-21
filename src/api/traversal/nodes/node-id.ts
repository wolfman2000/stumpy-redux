enum NodeId {
  Menu = 0,

  // Light World sections.
  LIGHT_A1_NW = 2110, // Forest screen, 2x2, NW part
  LIGHT_A1_NE = 2115, // NE part
  LIGHT_A1_SW = 2120, // SW part
  LIGHT_A1_SE = 2125, // SE part
  LIGHT_A3 = 2130, // Lumberjack screen, 1x1
  // LIGHT_A4 = 2140, // Death mountain, 2x2
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

  DARK_A1_NW = 3110, // Skull Woods, 2x2, NW part
  DARK_A1_NE = 3115, // NE part
  DARK_A1_SW = 3120, // SW part
  DARK_A1_SE = 3125, // SE part
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
  LIGHT_FOREST_GAME_ENTRANCE = 1000,
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
  LIGHT_DM_DESCENT_ENTRANCE = 1011,
  LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE = 1012,
  LIGHT_SPECTACLE_ROCK_ENTRANCE = 1013,
  LIGHT_SPECTACLE_ROCK_EXIT = 1014,
  LIGHT_ETHER_TABLET = 1015,
  LIGHT_HERA_ENTRANCE = 1016,

  // Light A6 connections
  LIGHT_PARADOX_TOP_ENTRANCE = 1017,
  LIGHT_SPIRAL_CAVE_ENTRANCE = 1018,
  LIGHT_SPIRAL_CAVE_EXIT = 1019,
  LIGHT_MOUNTAIN_FAIRY_TOP = 1020,
  LIGHT_MOUNTAIN_FAIRY_BOTTOM = 1021,
  LIGHT_MIMIC_CAVE_ENTRANCE = 1022,
  LIGHT_MOUNTAIN_FAIRY_CAVE = 1023,
  LIGHT_PARADOX_MIDDLE_ENTRANCE = 1024,
  LIGHT_PARADOX_BOTTOM_ENTRANCE = 1025,
  LIGHT_MOUNTAIN_ISLAND_ITEM = 1026,

  // Light B3 connections
  LIGHT_DM_ASCENT_ENTRANCE = 1027,
  LIGHT_DM_DESCENT_EXIT_CAVE = 1028,

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
  LIGHT_KAKARIKO_CHEST_GAME_ENTRANCE = 1072,
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

  // Dark A1 entrances
  DARK_SW_BACK_ENTRANCE = 1200,
  DARK_SW_CONNECTOR_LEFT_ENTRANCE = 1201,
  DARK_SW_CONNECTOR_RIGHT_ENTRANCE = 1202,
  DARK_SW_CONNECTOR_PIT_ENTRANCE = 1203,
  DARK_SW_MAIN_WEST_ENTRANCE = 1204,
  DARK_SW_PINBALL_ENTRANCE = 1205,
  DARK_SW_BIG_CHEST_ENTRANCE = 1206,
  DARK_SW_BIG_CHEST_EXIT = 1207,

  // Dark A3 entrances
  DARK_LUMBERJACK_HOUSE_ENTRANCE = 1208,

  // Dark A4 entrances
  DARK_MOUNTAIN_FAIRY_ENTRANCE = 1209,
  DARK_SPIKE_CAVE_ENTRANCE = 1210,
  DARK_GANONS_TOWER_ENTRANCE = 1211,

  // Dark A6 entrances
  DARK_HOOKSHOT_CAVE_BOTTOM = 1212,
  DARK_HOOKSHOT_CAVE_TOP = 1213,
  DARK_SUPERBUNNY_CAVE_BOTTOM = 1214,
  DARK_SUPERBUNNY_CAVE_TOP = 1215,
  DARK_MOUNTAIN_SHOP_ENTRANCE = 1216,
  DARK_TR_LASER_WALL_ENTRANCE = 1217,
  DARK_TR_TREASURE_ENTRANCE = 1218,
  DARK_TR_LASER_BRIDGE_ENTRANCE = 1219,
  DARK_TR_MAIN_ENTRANCE = 1220,

  // Dark B3 entrances
  DARK_BUMPER_ITEM = 1221,
  DARK_BUMPER_TOP_ENTRANCE = 1222,
  DARK_BUMPER_BOTTOM_ENTRANCE = 1223,

  // Dark B8 entrances
  DARK_CATFISH_ITEM = 1224,

  // Dark C2 entrances
  DARK_FORTUNE_TELLER_ENTRANCE = 1225,

  // Dark C4 entrnaces
  DARK_DARK_CHAPEL_ENTRANCE = 1226,

  // Dark C7 entrances
  DARK_POTION_SHOP_ENTRANCE = 1227,

  // Dark D1 entrances
  DARK_CHEST_GAME_ENTRANCE = 1228,
  DARK_TT_ENTRANCE = 1229,
  DARK_C_HOUSE_ENTRANCE = 1230,
  DARK_HAMMER_HOUSE_ENTRANCE = 1231,
  DARK_BREWERY_ENTRANCE = 1232,

  // Dark D3 entrances
  DARK_SHIELD_SHOP_ENTRANCE = 1233,

  // Dark D4 entrances
  DARK_PYRAMID_TOP_ENTRANCE = 1234,
  DARK_PYRAMID_TOP_EXIT = 1235,
  DARK_PYRAMID_WALL_ENTRANCE = 1236,
  DARK_PYRAMID_ITEM = 1237,

  // Dark D7 entrances
  DARK_MONKEY_HUT_ENTRANCE = 1238,
  DARK_POD_ENTRANCE = 1239,

  // Dark E3 entrances
  DARK_HAMMER_PEG_ENTRANCE = 1240,
  DARK_PURPLE_CHEST_ITEM = 1241,

  // Dark F1 entrances
  DARK_DIG_GAME_ITEM = 1242,

  // Dark F2 entrances
  DARK_BLACKSMITH_ITEM = 1243,
  DARK_ARCHERY_GAME_ENTRANCE = 1244,

  // Dark F3 entrances
  DARK_STUMPY_ITEM = 1245,

  // Dark F4 entrances
  DARK_BONK_ROCKS_ENTRANCE = 1246,

  // Dark F5 entrances
  DARK_BOMB_SHOP_ENTRANCE = 1247,

  // Dark F7 entrances
  DARK_TREES_FAIRY_ENTRANCE = 1248,

  // Dark F8 entrances
  DARK_PEGS_CAVE_ENTRANCE = 1249,

  // Dark G1 entrances
  DARK_LEFT_MIRE_SHED_ENTRANCE = 1250,
  DARK_MM_ENTRANCE = 1251,
  DARK_RIGHT_MIRE_SHED = 1252,
  DARK_MIRE_CAVE_ENTRANCE = 1253,

  // Dark G5 entrances
  DARK_HYPE_CAVE_ENTRANCE = 1254,

  // Dark G6 entrances
  DARK_HYLIA_FORTUNE_TELLER_ENTRANCE = 1255,
  DARK_IP_ENTRANCE = 1256,

  // Dark G8 entrances
  DARK_ICE_ROD_CAVE_ENTRANCE = 1257,
  DARK_ICE_BEE_CAVE_ENTRANCE = 1258,
  DARK_ICE_ROCK_CAVE_ENTRANCE = 1259,

  // Dark H4 entrances
  DARK_SP_ENTRANCE = 1260,

  // Light A1 caves
  CAVE_WOODS_TREASURE_GAME = 4000,
  CAVE_WOODS_HIDEOUT_TOP = 4001,
  CAVE_WOODS_HIDEOUT_BOTTOM = 4002,
  CAVE_WOODS_HIDEOUT_ITEM = 4003,

  // Light A3 caves
  CAVE_LUMBERJACK_TOP = 4004,
  CAVE_LUMBERJACK_ITEM = 4005,
  CAVE_LUMBERJACK_BOTTOM = 4006,

  // Light A4 caves (not counting Hera)
  CAVE_SPECTACLE_OUTLOOK = 4007,
  CAVE_SPECTACLE_ITEM = 4008, // Count this as the room
  CAVE_SPECTACLE_FAIRY = 4009,
  CAVE_SPECTACLE_EXIT = 4010,
  CAVE_SPECTACLE_BOTTOM = 4011,

  CAVE_DM_DESCENT_ENTRANCE = 4012,
  CAVE_DM_DESCENT_DARK = 4013, // Need one node for lamp logic.
  CAVE_DM_DESCENT_EXIT = 4014,

  CAVE_DM_ASCENT_ENTRANCE = 4015,
  CAVE_DM_ASCENT_DARK = 4016, // Need one node for lamp logic.
  CAVE_DM_ASCENT_EXIT = 4017,

  CAVE_DM_MAN_FRONT = 4018,
  CAVE_DM_MAN_DARK = 4019, // Need one node for lamp logic.
  CAVE_DM_MAN_BACK = 4020,

  // Light A6 caves
  CAVE_SPIRAL_CAVE_TOP = 4021,
  CAVE_SPIRAL_CAVE_ITEM = 4022,
  CAVE_SPIRAL_CAVE_BOTTOM = 4023,
  CAVE_FAIRY_TRANSITION_BOTTOM = 4024,
  CAVE_FAIRY_TRANSITION_TOP = 4025,
  CAVE_MIMIC_CAVE_ENTRANCE = 4026,
  CAVE_MIMIC_CAVE_ITEM = 4027,

  CAVE_DM_FAIRY_CAVE = 4028,

  CAVE_PARADOX_BOTTOM = 4029,
  CAVE_PARADOX_CATCHER = 4030,
  CAVE_PARADOX_MIDDLE = 4031,
  CAVE_PARADOX_LEDGE = 4032,
  CAVE_PARADOX_SMALL_VAULT = 4033,
  CAVE_PARADOX_LARGE_VAULT = 4044,
  CAVE_PARADOX_TOP = 4045,

  // Light B8 caves
  CAVE_WATERFALL_WISHING = 4046,

  // Light C2 caves
  CAVE_KAKARIKO_FORTUNE_TELLER = 4047,

  // Light C4 caves
  CAVE_SANCTUARY_BONK_ROCKS = 4048,

  // Light C5 caves
  CAVE_GRAVEYARD_LEDGE_MAIN = 4049,
  CAVE_GRAVEYARD_LEDGE_ITEM = 4050,
  CAVE_KINGS_TOMB = 4051,

  // Light C6 caves
  CAVE_POINTLESS_FAIRY_START = 4052,
  CAVE_POINTLESS_FAIRY_END = 4053,

  // Light C7 caves
  CAVE_POTION_SHOP = 4054,
  CAVE_POTION_SHOP_ITEM = 4055,

  // Light D1 caves
  CAVE_WELL_TOP = 4056,
  CAVE_WELL_HIDDEN = 4057,
  CAVE_WELL_BOTTOM = 4058,
  CAVE_BLINDS_HIDEOUT_TOP = 4059,
  CAVE_BLINDS_HIDEOUT_BOTTOM = 4060,
  CAVE_BLINDS_HIDEOUT_HIDDEN = 4061,
  CAVE_WOMAN_HOME_LEFT = 4062,
  CAVE_WOMAN_HOME_RIGHT = 4063,
  CAVE_SNITCH_LEFT_HOME = 4064,
  CAVE_SNITCH_RIGHT_HOME = 4065,
  CAVE_CUCCO_HOUSE = 4066,
  CAVE_CUCCO_ITEM = 4067,
  CAVE_SICK_KID_HOME = 4068,
  CAVE_SICK_KID_ITEM = 4069,
  CAVE_TAVERN_BACK = 4070,
  CAVE_GRASS_HOME = 4071,
  CAVE_BOMBABLE_HUT = 4072,
  CAVE_KAKARIKO_SHOP = 4073,
  CAVE_TAVERN_FRONT = 4074,

  // Light D4 caves (excluding Hyrule Castle & Castle Tower)
  CAVE_UNCLE_ENTRANCE = 4075,
  CAVE_UNCLE_EXIT = 4076,

  // Light D7 caves (excluding Eastern Palace)
  CAVE_SAHAS_MAIN = 4077,
  CAVE_SAHAS_CLOSET = 4078,

  // Light E3 caves
  CAVE_BLACKSMITHS = 4079,
  CAVE_MAD_BATTER_ENTRANCE = 4080,
  CAVE_MAD_BATTER_ITEM = 4081,
  CAVE_MAD_BATTER_EXIT = 4082,

  // Light F1 caves
  CAVE_FIGHTING_BROS_LEFT = 4083,

  // Light F2 caves
  CAVE_FIGHTING_BROS_RIGHT = 4084,
  CAVE_LIBRARY_MAIN = 4085,
  CAVE_LIBRARY_ITEM = 4086,
  CAVE_KAKARIKO_CHEST_GAME = 4087,

  // Light F4 caves
  CAVE_HOUSE_BONK_ROCKS = 4088,

  // Light F5 caves
  StartingHouse = 10,

  // Light F7 caves
  CAVE_LIGHT_TREE_FAIRY_CAVE = 4090,

  // Light F8 caves
  CAVE_LIGHT_PEGS_FAIRY_CAVE = 4091,

  // Light G1 caves (not counting Desert Palace)
  CAVE_CHECKERBOARD_CAVE = 4092,
  CAVE_AGINAH_CAVE_MAIN = 4093,
  CAVE_AGINAH_CAVE_ITEM = 4094,

  // Light G3 caves
  CAVE_VT_CAVE = 4095,

  // Light G5 caves
  CAVE_HYPE_FAIRY = 4096,

  // Light G6 caves
  CAVE_LAKE_HYLIA_FORTUNE_TELLER = 4097,
  CAVE_LAKE_HYLIA_SHOP = 4098,
  CAVE_UPGRADE_FAIRY = 4099,
  CAVE_MINI_MOLDORM_MAIN = 4100,
  CAVE_MINI_MOLDORM_VAULT = 4101,

  // Light G8
  CAVE_ICE_ROD_CAVE = 4102,
  CAVE_ICE_BEE_CAVE = 4103,
  CAVE_ICE_FAIRY_CAVE = 4104,

  // Light H3
  CAVE_THIEF_CAVE = 4105,
  CAVE_RUPEE_CAVE = 4106,

  // Light H4
  CAVE_DAM_RELEASE = 4107,

  // Dark A3 caves
  CAVE_DARK_LUMBERJACK = 4500,

  // Dark A4 caves (not counting ganon's tower)
  CAVE_DARK_MOUNTAIN_FAIRY = 4501,
  CAVE_SPIKE_CAVE_ENTRANCE = 4502,
  CAVE_SPIKE_CAVE_SPIKES = 4503,
  CAVE_SPIKE_CAVE_REWARD = 4504,

  // Dark A6 caves (not counting Turtle Rock)
  CAVE_HOOKSHOT_CAVE_BOTTOM = 4505,
  CAVE_HOOKSHOT_CAVE_BOOTS = 4506,
  CAVE_HOOKSHOT_CAVE_HOOKSHOT = 4507,
  CAVE_HOOKSHOT_CAVE_PIT = 4508, // Ether bridge
  CAVE_HOOKSHOT_CAVE_TOP = 4509,
  CAVE_DARK_MOUNTAIN_SHOP = 4510,
  CAVE_SUPERBUNNY_BOTTOM = 4511,
  CAVE_SUPERBUNNY_TOP = 4512,

  // Dark B3 caves
  CAVE_BUMPER_CAVE_BOTTOM = 4513,
  CAVE_BUMPER_CAVE_TOP = 4514,

  // Dark C2 caves
  CAVE_OUTCAST_FORTUNE_TELLER = 4515,

  // Dark C4 caves
  CAVE_CHAPEL = 4516,

  // Dark C7 caves
  CAVE_WITCH_HUT = 4517,

  // Dark D1 caves
  CAVE_CHEST_GAME = 4518,
  CAVE_C_HOUSE = 4519,
  CAVE_BREWERY = 4520,
  CAVE_HAMMER_PEG_HOUSE = 4521,

  // Dark D3 caves
  CAVE_SHIELD_SHOP = 4522,

  // Dark D4 caves
  CAVE_PYRAMID_FAIRY = 4523,
  CAVE_GANON_ARENA = 4524,
  CAVE_GANON_FAILURE = 4525,

  // Dark D7 caves
  CAVE_MONKEY_HUT = 4526,

  // Dark E3 caves
  CAVE_HAMMER_PEGS = 4527,

  // Dark F2 caves
  CAVE_ARCHERY_GAME = 4528,

  // Dark F4 caves
  CAVE_BOMB_SHOP_BONK_ROCKS = 4529,

  // Dark F5 caves
  BombShopHouse = 20,

  // Dark F7 caves
  CAVE_DARK_TREE_FAIRY_CAVE = 4540,

  // Dark F8 caves
  CAVE_FLUTE_SPOT_FIVE = 4541,

  // Dark G1 caves
  CAVE_MIRE_SHED_LEFT = 4542,
  CAVE_MIRE_SHED_RIGHT = 4543,
  CAVE_MIRE_CAVE = 4544,

  // Dark G5 caves
  CAVE_HYPE_CAVE_ENTRANCE = 4545,
  CAVE_HYPE_CAVE_VAULT = 4546,

  // Dark G6 caves
  CAVE_DARK_HYLIA_FORTUNE_TELLER = 4547,

  // Dark G8 caves
  CAVE_DARK_ICE_ROD_CAVE = 4548,
  CAVE_DARK_ICE_BEE_CAVE = 4549,
  CAVE_DARK_ICE_ROCK_CAVE = 4550,

  // Hyrule Castle
  HC_LOBBY = 6000,
  HC_LEFT = 6001,
  HC_RIGHT = 6002,
  HC_BACK = 6003,
  HC_BASEMENT_1 = 6004,
  HC_BASEMENT_2 = 6005,
  HC_ZELDAS_CELL = 6006,
  HC_THRONE = 6007,
  HC_SEWERS_DRY = 6008,
  HC_SEWERS_ITEM = 6009,
  HC_SEWERS_WET = 6010,
  HC_SEWERS_ESCAPE = 6011,
  HC_SEWERS_SIDE = 6012,
  HC_SANCTUARY_SNAKES = 6013,
  SANCTUARY = 6014,

  // Eastern Palace
  EP_01_LOBBY = 6100,
  EP_01_CHASM = 6101,
  EP_01_BOWLING = 6102,
  EP_01_OVERHANG = 6103,
  EP_01_OVERHANG_RIGHT = 6104,
  EP_01_OVERHANG_UPRIGHT = 6105,
  EP_01_MAP_CHEST = 6106,
  EP_01_OVERHANG_LEFT = 6107,
  EP_01_STALFOS_CORNER = 6108,
  EP_01_COMPASS_ROOM = 6109,
  EP_01_HINT_ROOM = 6110,
  EP_01_BIG_CHEST_ROOM = 6111,
  EP_01_BIG_CHEST = 6112,
  EP_01_DARK_HALLWAY = 6113,
  EP_01_BIG_KEY_CHEST_ROOM = 6114,
  EP_01_EYEGORE = 6115,
  EP_02_HALLWAY = 6116,
  EP_02_RED_EYEGORE = 6117,
  EP_02_BOSS = 6118,

  // Desert Palace
  DP_01_LOBBY,
  DP_01_CENTER_HALLWAY,
  DP_01_MAP_ROOM,
  DP_01_EAST_HALLWAY,
  DP_01_DANGER_ROOM,
  DP_01_COMPASS_ROOM,
  DP_01_BIG_KEY_ROOM,
  DP_01_EAST_ENTRANCE,
  DP_01_WEST_HALLWAY,
  DP_01_TORCH_ROOM,
  DP_01_TORCH_ITEM,
  DP_01_POT_ROOM,
  DP_01_BIG_CHEST_ROOM,
  DP_01_WEST_ENTRANCE,
  DP_01_FAIRY_ROOM,
  DP_01_BACK_ENTRANCE,
  DP_01_TILE_ROOM,
  DP_02_HALLWAY,
  DP_02_TENTACLE_ROOM,
  DP_02_BEAMOS_ROOM,
  DP_02_TILE_ROOM,
  DP_02_TORCH_ROOM,
  DP_02_BOSS,

  // Tower of Hera
  TOH_02_ENTRANCE,
  TOH_02_LOBBY,
  TOH_01_SMALL_KEY,
  TOH_01_TILE_ROOM,
  TOH_01_MINI_MOLDORM,
  TOH_01_BIG_KEY,
  TOH_03_START,
  TOH_03_BIG_KEY_DOOR,
  TOH_03_END,
  TOH_04_MAIN,
  TOH_04_BIG_CHEST,
  TOH_05_ONLY,
  TOH_06_LEDGE,
  TOH_06_BOSS,

  // Castle Tower
  CT_02_ENTRY,
  CT_02_KNIGHTS,
  CT_02_KEY,
  CT_03_ENTRY,
  CT_03_MAZE,
  CT_03_HALL,
  CT_04_HALL,
  CT_04_TALL,
  CT_04_KEY,
  CT_05_HINT,
  CT_05_GUARDS,
  CT_05_POTS,
  CT_05_RUN,
  CT_06_TINY,
  CT_06_HALL,
  CT_07_ENTRY,
  CT_07_BOSS,

  // Palace of Darkness
  POD_01_ENTRANCE,

  // Swamp Palace
  SP_01_ENTRANCE,
  SP_01_GREETERS,

  // Skull Woods
  SW_01_PIT_WEST,
  SW_01_COMPASS,
  SW_01_KEY_ARMS,
  SW_01_PINBALL_ROOM,
  SW_01_MAP,
  SW_01_POTS,
  SW_01_BIG_CHEST,
  SW_01_SWITCH,
  SW_01_EXIT,
  SW_02_CONNECTOR_RIGHT,
  SW_02_BIG_KEY,
  SW_02_PIT,
  SW_02_CONNECTOR_LEFT,
  SW_02_DANGER,
  SW_03_ENTRANCE,
  SW_03_BUMPER,
  SW_03_PITS,
  SW_03_TORCHES,
  SW_03_CURTAIN,
  SW_03_KEY,
  SW_03_SLIDE,
  SW_03_BOSS,

  // Thieves Town
  TT_B1_BIG_SW,
  TT_B1_BIG_NW,
  TT_B1_BIG_NE,
  TT_B1_BIG_SE,

  // Ice Palace
  IP_01_ENTRANCE,
  IP_01_KEY,

  // Misery Mire
  MM_01_ENTRANCE,
  MM_B1_FIRST_GUARDS,

  // Turtle Rock
  TR_01_ENTRANCE,
  TR_01_HUGE,

  TR_B1_LASER_WALL_ENTRANCE,
  TR_B1_TREASURE_ENTRANCE,
  TR_B1_BIG_CHEST,

  TR_B2_LASER_BRIDGE_ENTRANCE,
  TR_B2_LASER_BRIDGE_ITEMS, // covers the 4 items.

  // Ganons Tower
  GT_02_ENTRANCE,
  GT_02_TORCH_ROOM,
  GT_02_TORCH_ITEM,
}

export default NodeId;
