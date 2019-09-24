import { makeEdge } from '../helpers';

import NodeConnectionId from '../../nodes/node-connection-id';
import NodeId from '../../nodes/node-id';
import Edge from '../edge';

const darkCaveEdges: Edge[] = [
  // Dark A3 connections
  makeEdge( NodeId.CAVE_DARK_LUMBERJACK, NodeId.DARK_LUMBERJACK_HOUSE_ENTRANCE ),

  // Dark A4 connections
  makeEdge( NodeId.CAVE_DARK_MOUNTAIN_FAIRY, NodeId.DARK_MOUNTAIN_FAIRY_ENTRANCE ),
  makeEdge( NodeId.CAVE_SPIKE_CAVE_ENTRANCE, NodeId.DARK_SPIKE_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_SPIKE_CAVE_ENTRANCE, NodeId.CAVE_SPIKE_CAVE_SPIKES, NodeConnectionId.HasHammerDarkWorld ),
  makeEdge( NodeId.CAVE_SPIKE_CAVE_SPIKES, NodeId.CAVE_SPIKE_CAVE_REWARD, NodeConnectionId.HasSpikeCaveProtection ),

  // Dark A6 connections
  makeEdge( NodeId.CAVE_HOOKSHOT_CAVE_BOTTOM, NodeId.DARK_HOOKSHOT_CAVE_BOTTOM ),
  makeEdge(
    NodeId.CAVE_HOOKSHOT_CAVE_BOTTOM,
    NodeId.CAVE_HOOKSHOT_CAVE_BOOTS,
    NodeConnectionId.HasHookshotOrAdvancedBoots,
   ),
  makeEdge( NodeId.CAVE_HOOKSHOT_CAVE_BOTTOM, NodeId.CAVE_HOOKSHOT_CAVE_PIT, NodeConnectionId.CanCrossInvisibleBridge ),

  makeEdge(
    NodeId.CAVE_HOOKSHOT_CAVE_BOOTS,
    NodeId.CAVE_HOOKSHOT_CAVE_HOOKSHOT,
    NodeConnectionId.HasHookshotOrHover,
  ),

  makeEdge( NodeId.CAVE_HOOKSHOT_CAVE_PIT, NodeId.CAVE_HOOKSHOT_CAVE_TOP, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.CAVE_HOOKSHOT_CAVE_PIT, NodeId.CAVE_HOOKSHOT_CAVE_BOTTOM, NodeConnectionId.CanCrossInvisibleBridge ),

  makeEdge( NodeId.CAVE_HOOKSHOT_CAVE_TOP, NodeId.CAVE_HOOKSHOT_CAVE_PIT, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.CAVE_HOOKSHOT_CAVE_TOP, NodeId.DARK_HOOKSHOT_CAVE_TOP ),

  makeEdge( NodeId.CAVE_SUPERBUNNY_TOP, NodeId.DARK_SUPERBUNNY_CAVE_TOP ),
  makeEdge( NodeId.CAVE_SUPERBUNNY_BOTTOM, NodeId.DARK_SUPERBUNNY_CAVE_TOP ),
  makeEdge( NodeId.CAVE_SUPERBUNNY_BOTTOM, NodeId.DARK_SUPERBUNNY_CAVE_BOTTOM ),

  makeEdge( NodeId.CAVE_DARK_MOUNTAIN_SHOP, NodeId.DARK_MOUNTAIN_SHOP_ENTRANCE ),

  // Dark B3 connections
  makeEdge( NodeId.CAVE_BUMPER_CAVE_BOTTOM, NodeId.CAVE_BUMPER_CAVE_TOP, NodeConnectionId.CanCrossBumperCave ),
  makeEdge( NodeId.CAVE_BUMPER_CAVE_BOTTOM, NodeId.DARK_BUMPER_BOTTOM_ENTRANCE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.CAVE_BUMPER_CAVE_BOTTOM, NodeId.LIGHT_DM_ASCENT_ENTRANCE, NodeConnectionId.IsInverted ),
  makeEdge( NodeId.CAVE_BUMPER_CAVE_TOP, NodeId.CAVE_BUMPER_CAVE_BOTTOM, NodeConnectionId.CanCrossBumperCave ),
  makeEdge( NodeId.CAVE_BUMPER_CAVE_TOP, NodeId.DARK_BUMPER_TOP_ENTRANCE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.CAVE_BUMPER_CAVE_TOP, NodeId.LIGHT_DM_DESCENT_EXIT_CAVE, NodeConnectionId.IsInverted ),

  // Dark C2 connections
  makeEdge( NodeId.CAVE_OUTCAST_FORTUNE_TELLER, NodeId.DARK_FORTUNE_TELLER_ENTRANCE ),

  // Dark C4 connections
  makeEdge( NodeId.CAVE_CHAPEL, NodeId.DARK_DARK_CHAPEL_ENTRANCE ),

  // Dark C7 connections
  makeEdge( NodeId.CAVE_WITCH_HUT, NodeId.DARK_POTION_SHOP_ENTRANCE ),

  // Dark D1 connections
  makeEdge( NodeId.CAVE_CHEST_GAME, NodeId.DARK_CHEST_GAME_ENTRANCE ),
  makeEdge( NodeId.CAVE_C_HOUSE, NodeId.DARK_C_HOUSE_ENTRANCE ),
  makeEdge( NodeId.CAVE_BREWERY, NodeId.DARK_BREWERY_ENTRANCE ),
  makeEdge( NodeId.CAVE_HAMMER_PEG_HOUSE, NodeId.DARK_HAMMER_HOUSE_ENTRANCE ),

  // Dark D3 connections
  makeEdge( NodeId.CAVE_SHIELD_SHOP, NodeId.DARK_SHIELD_SHOP_ENTRANCE ),

  // Dark D4 connections
  makeEdge( NodeId.CAVE_PYRAMID_FAIRY, NodeId.DARK_PYRAMID_WALL_ENTRANCE ),

  // TODO: Verify if the ganon connections are necessary.
  makeEdge( NodeId.CAVE_GANON_ARENA, NodeId.CAVE_GANON_FAILURE ),
  // TODO: Verify for inverted.
  makeEdge( NodeId.CAVE_GANON_FAILURE, NodeId.DARK_PYRAMID_TOP_EXIT ),

  // Dark D7 connections
  makeEdge( NodeId.CAVE_MONKEY_HUT, NodeId.DARK_MONKEY_HUT_ENTRANCE ),

  // Dark E3 connections
  makeEdge( NodeId.CAVE_HAMMER_PEGS, NodeId.DARK_HAMMER_PEG_ENTRANCE ),

  // Dark F2 connections
  makeEdge( NodeId.CAVE_ARCHERY_GAME, NodeId.DARK_ARCHERY_GAME_ENTRANCE ),

  // Dark F4 connections
  makeEdge( NodeId.CAVE_BOMB_SHOP_BONK_ROCKS, NodeId.DARK_BONK_ROCKS_ENTRANCE ),

  // Dark F5 connections
  makeEdge( NodeId.BombShopHouse, NodeId.DARK_BOMB_SHOP_ENTRANCE, NodeConnectionId.IsNotInverted ),
  makeEdge( NodeId.BombShopHouse, NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeConnectionId.IsInverted ),

  // Dark F7 connections
  makeEdge( NodeId.CAVE_DARK_TREE_FAIRY_CAVE, NodeId.DARK_TREES_FAIRY_ENTRANCE ),

  // Dark F8 connections
  makeEdge( NodeId.CAVE_FLUTE_SPOT_FIVE, NodeId.DARK_PEGS_CAVE_ENTRANCE ),

  // Dark G1 connections
  makeEdge( NodeId.CAVE_MIRE_SHED_LEFT, NodeId.DARK_LEFT_MIRE_SHED_ENTRANCE ),
  makeEdge( NodeId.CAVE_MIRE_SHED_RIGHT, NodeId.DARK_RIGHT_MIRE_SHED ),
  makeEdge( NodeId.CAVE_MIRE_CAVE, NodeId.DARK_MIRE_CAVE_ENTRANCE ),

  // Dark G5 connections
  makeEdge( NodeId.CAVE_HYPE_CAVE_ENTRANCE, NodeId.CAVE_HYPE_CAVE_VAULT, NodeConnectionId.HasBombsDarkWorld ),
  makeEdge( NodeId.CAVE_HYPE_CAVE_ENTRANCE, NodeId.DARK_HYPE_CAVE_ENTRANCE ),

  // Dark G6 connections
  makeEdge( NodeId.CAVE_DARK_HYLIA_FORTUNE_TELLER, NodeId.DARK_HYLIA_FORTUNE_TELLER_ENTRANCE ),

  // Dark G8 connections
  makeEdge( NodeId.CAVE_DARK_ICE_ROD_CAVE, NodeId.DARK_ICE_ROD_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_DARK_ICE_BEE_CAVE, NodeId.DARK_ICE_BEE_CAVE_ENTRANCE ),
  makeEdge( NodeId.CAVE_DARK_ICE_ROCK_CAVE, NodeId.DARK_ICE_ROCK_CAVE_ENTRANCE ),
];

export { darkCaveEdges };
