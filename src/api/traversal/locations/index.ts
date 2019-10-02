import CssLocation from '../nodes/css-location';
import EntranceType from '../nodes/entrance-type';
import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';

const makeSingleAlwaysLocation = ( left: number, top: number, treasureNodes: NodeId[] = [] ): CssLocation => {
  return {
    entranceType: EntranceType.Single,
    left,
    top,
    treasureNodes,
    visibility: NodeConnectionId.Always,
  };
};

const makeMultipleAlwaysLocation = ( left: number, top: number, treasureNodes: NodeId[] = [] ): CssLocation => {
  return {
    entranceType: EntranceType.Multiple,
    left,
    top,
    treasureNodes,
    visibility: NodeConnectionId.Always,
  };
};

const makePitEntranceAlwaysLocation = ( left: number, top: number, treasureNodes: NodeId[] = [] ): CssLocation => {
  return {
    entranceType: EntranceType.PitEntrance,
    left,
    top,
    treasureNodes,
    visibility: NodeConnectionId.Always,
  };
};

const makeOutsideAlwaysLocation = ( left: number, top: number, treasureNodes: NodeId[] = [] ): CssLocation => {
  return {
    entranceType: EntranceType.Outside,
    left,
    top,
    treasureNodes,
    visibility: NodeConnectionId.Always,
  };
};

const entranceLocations: Map<NodeId, CssLocation> = new Map<NodeId, CssLocation>( [
  [
    NodeId.LIGHT_KINGS_TOMB_ENTRANCE,
    makeSingleAlwaysLocation( 61.6, 29.6, [ NodeId.CAVE_KINGS_TOMB] ),
  ],
  [
    NodeId.LIGHT_DAM_ENTRANCE,
    makeSingleAlwaysLocation( 46.8, 93.4, [
      NodeId.CAVE_DAM_RELEASE,
    ] ),
  ],
  [
    NodeId.LIGHT_SWAMP_ITEM,
    makeOutsideAlwaysLocation( 44.8, 93.4, [
      NodeId.LIGHT_SWAMP_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_LINKS_HOUSE_ENTRANCE,
    makeSingleAlwaysLocation( 54.8, 67.9, [NodeId.StartingHouse] ),
  ],
  [
    NodeId.LIGHT_SPIRAL_CAVE_ENTRANCE,
    makeMultipleAlwaysLocation( 85.2, 9.3, [NodeId.CAVE_SPIRAL_CAVE_ITEM] ),
  ],
  [
    NodeId.LIGHT_TAVERN_BACK_ENTRANCE,
    makeSingleAlwaysLocation( 16.2, 57.8, [NodeId.CAVE_TAVERN_BACK] ),
  ],
  [
    NodeId.LIGHT_CUCCO_HOUSE_ENTRANCE,
    makeSingleAlwaysLocation( 8.8, 54.2, [NodeId.CAVE_CUCCO_ITEM] ),
  ],
  [
    NodeId.LIGHT_AGINAH_ENTRANCE,
    makeSingleAlwaysLocation( 20, 82.6, [NodeId.CAVE_AGINAH_CAVE_ITEM] ),
  ],
  [
    NodeId.LIGHT_SAHASRAHLA_ENTRANCE,
    makeSingleAlwaysLocation( 81.4, 41.4, [
      NodeId.CAVE_SAHAS_CLOSET,
      NodeId.CAVE_SAHAS_PENDANT,
    ] ),
  ],
  [
    NodeId.LIGHT_WELL_ENTRANCE,
    makePitEntranceAlwaysLocation( 3, 41, [
      NodeId.CAVE_WELL_TOP,
      NodeId.CAVE_WELL_HIDDEN,
    ] ),
  ],
  [
    NodeId.LIGHT_BLINDS_HOUSE_ENTRANCE,
    makeSingleAlwaysLocation( 12.8, 41, [
      NodeId.CAVE_BLINDS_HIDEOUT_BOTTOM,
      NodeId.CAVE_BLINDS_HIDEOUT_HIDDEN,
    ] ),
  ],
  [
    NodeId.LIGHT_PARADOX_TOP_ENTRANCE,
    makeMultipleAlwaysLocation( 85.8, 20.1, [
      NodeId.CAVE_PARADOX_SMALL_VAULT,
      NodeId.CAVE_PARADOX_LARGE_VAULT,
    ] ),
  ],
  [
    NodeId.LIGHT_SANCTUARY_BONK_ROCKS_ENTRANCE,
    makeSingleAlwaysLocation( 39, 29.3, [
      NodeId.CAVE_SANCTUARY_BONK_ROCKS,
    ] ),
  ],
  [
    NodeId.LIGHT_MINI_MOLDORM_ENTRANCE,
    makeSingleAlwaysLocation( 65.2, 93.4, [
      NodeId.CAVE_MINI_MOLDORM_VAULT,
    ] ),
  ],
  [
    NodeId.LIGHT_ICE_ROD_CAVE_ENTRANCE,
    makeSingleAlwaysLocation( 89.2, 76.9, [
      NodeId.CAVE_ICE_ROD_CAVE,
    ] ),
  ],
  [
    NodeId.LIGHT_BOTTLE_PURCHASE,
    makeOutsideAlwaysLocation( 9, 46.8, [
      NodeId.LIGHT_BOTTLE_PURCHASE,
    ] ),
  ],
  [
    NodeId.LIGHT_SICK_KID_ENTRANCE,
    makeSingleAlwaysLocation( 15.6, 52.1, [
      NodeId.CAVE_SICK_KID_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_BIRD_LOVER,
    makeOutsideAlwaysLocation( 70.8, 69.7, [
      NodeId.LIGHT_BIRD_LOVER,
    ] ),
  ],
  [
    NodeId.LIGHT_ETHER_TABLET,
    makeOutsideAlwaysLocation( 42, 3, [
      NodeId.LIGHT_ETHER_TABLET,
    ] ),
  ],
  [
    NodeId.LIGHT_BOMBOS_TABLET,
    makeOutsideAlwaysLocation( 22, 92.2, [
      NodeId.LIGHT_BOMBOS_TABLET,
    ] ),
  ],
  [
    NodeId.LIGHT_B8_ZORA_MAIN,
    makeOutsideAlwaysLocation( 96, 12.1, [
      NodeId.LIGHT_B8_ZORA_MAIN,
      NodeId.LIGHT_ZORA_LEDGE_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_DM_ASCENT_EXIT_CAVE,
    makeMultipleAlwaysLocation( 41.6, 20.4, [
      NodeId.CAVE_DM_ASCENT_DARK,
    ] ),
  ],
  [
    NodeId.LIGHT_POTION_SHOP_ENTRANCE,
    makeSingleAlwaysLocation( 81.6, 32.5, [
      NodeId.CAVE_POTION_SHOP_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_FOREST_HIDEOUT_ENTRANCE,
    makePitEntranceAlwaysLocation( 18.8, 13, [
      NodeId.CAVE_WOODS_HIDEOUT_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_LUMBERJACK_ENTRANCE,
    makePitEntranceAlwaysLocation( 30.4, 7.6, [
      NodeId.CAVE_LUMBERJACK_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_SPECTACLE_ROCK_LOOKOUT_CAVE,
    makeMultipleAlwaysLocation( 48.6, 14.8, [
      NodeId.CAVE_SPECTACLE_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_VT_CAVE_ENTRANCE,
    makeSingleAlwaysLocation( 28.8, 84.1, [
      NodeId.CAVE_VT_CAVE,
    ] ),
  ],
  [
    NodeId.LIGHT_GRAVEYARD_LEDGE_ENTRANCE,
    makeSingleAlwaysLocation( 56.2, 27, [
      NodeId.CAVE_GRAVEYARD_LEDGE_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_CHECKERBOARD_ENTRANCE,
    makeSingleAlwaysLocation( 17.6, 77.3, [
      NodeId.CAVE_CHECKERBOARD_CAVE,
    ] ),
  ],
  [
    NodeId.LIGHT_LIBRARY_ENTRANCE,
    makeSingleAlwaysLocation( 15.4, 65.9, [
      NodeId.CAVE_LIBRARY_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_MUSHROOM_SPOT,
    makeOutsideAlwaysLocation( 12.4, 8.6, [
      NodeId.LIGHT_MUSHROOM_SPOT,
    ] ),
  ],
  [
    NodeId.LIGHT_A4_SPECTACLE_ROCK,
    makeOutsideAlwaysLocation( 50.8, 8.5, [
      NodeId.LIGHT_A4_SPECTACLE_ROCK, // TODO: May need a new connection.
    ] ),
  ],
  [
    NodeId.LIGHT_DESERT_LEDGE_ITEM,
    makeOutsideAlwaysLocation( 3, 91, [
      NodeId.LIGHT_DESERT_LEDGE_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_A6_ISLAND,
    makeOutsideAlwaysLocation( 80.4, 3, [
      NodeId.LIGHT_MOUNTAIN_ISLAND_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_RACE_GAME_ITEM,
    makeOutsideAlwaysLocation( 3.6, 69.8, [
      NodeId.LIGHT_RACE_GAME_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_LAKE_ISLAND_ITEM,
    makeOutsideAlwaysLocation( 72.2, 82.9, [
      NodeId.LIGHT_LAKE_ISLAND_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_SHOVEL_SPOT,
    makeOutsideAlwaysLocation( 28.8, 66.2, [
      NodeId.LIGHT_SHOVEL_SPOT,
    ] ),
  ],
  [
    NodeId.LIGHT_MAD_BATTER_ENTRANCE,
    makePitEntranceAlwaysLocation( 33, 56, [
      NodeId.CAVE_MAD_BATTER_ITEM,
    ] ),
  ],
  [
    NodeId.LIGHT_MASTER_SWORD_PEDESTAL,
    makeOutsideAlwaysLocation( 5, 3.2, [
      NodeId.LIGHT_MASTER_SWORD_PEDESTAL,
    ] ),
  ],
  [
    NodeId.LIGHT_WATERFALL,
    makeSingleAlwaysLocation( 89.8, 14.7, [
      NodeId.LIGHT_WATERFALL,
    ] ),
  ],
  [
    NodeId.LIGHT_UNCLE_ENTRANCE,
    makePitEntranceAlwaysLocation( 59.6, 41.8, [
      NodeId.CAVE_UNCLE_ENTRANCE,
      NodeId.CAVE_UNCLE_EXIT,
    ] ),
  ],

  [
    NodeId.DARK_BREWERY_ENTRANCE,
    makeSingleAlwaysLocation( 10.8, 57.8, [
      NodeId.CAVE_BREWERY,
    ] ),
  ],
  [
    NodeId.DARK_C_HOUSE_ENTRANCE,
    makeSingleAlwaysLocation( 21.6, 47.9, [
      NodeId.CAVE_C_HOUSE,
    ] ),
  ],
  [
    NodeId.DARK_LEFT_MIRE_SHED_ENTRANCE,
    makeSingleAlwaysLocation( 3.4, 79.5, [
      NodeId.CAVE_MIRE_SHED_LEFT,
    ] ),
  ],
  [
    NodeId.DARK_SUPERBUNNY_CAVE_TOP,
    makeMultipleAlwaysLocation( 85.6, 14.7, [
      NodeId.CAVE_SUPERBUNNY_TOP,
    ] ),
  ],
] );

export default entranceLocations;
