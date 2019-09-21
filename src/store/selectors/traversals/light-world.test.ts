// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../reducers';

import { makeGetAccessibility } from '.';

import { DungeonId } from '../../../api/dungeon/dungeon-id';
import InventoryId from '../../../api/inventory/inventory-id';
import Swords from '../../../api/settings/difficulty/swords';
import NodeId from '../../../api/traversal/nodes/node-id';

import { fallbackDungeonMaps } from '../../../api/dungeon';
import { fallbackInventory } from '../../../api/inventory';
import { fallbackSettings } from '../../../api/settings';
import { fallbackNodes } from '../../../api/traversal';
import { fallbackEdges } from '../../../api/traversal/edges';

import { available, availableWithGlitches, unavailable, visible } from '../../../api/traversal/availabilities';

describe( 'The light world', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: fallbackDungeonMaps,
      edges: fallbackEdges,
      inventory: fallbackInventory,
      nodes: fallbackNodes,
      settings: fallbackSettings,
    };
  } );

  it( 'has the lake hylia water accessible via fake flippering.', () => {
    state.inventory![InventoryId.Flippers] = 0;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_G6_WATER ).toReturn( availableWithGlitches );
  } );

  it( 'has the lake hylia water accessible via actual flippering.', () => {
    state.inventory![InventoryId.Flippers] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_G6_WATER ).toReturn( available );
  } );

  it( 'can enter the mini moldorm cave with bombs.', () => {
    state.inventory![InventoryId.Bomb] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_MINI_MOLDORM_ENTRANCE ).toReturn( available );
  } );

  it( 'can take you to the dark world if Agahnim is taken out...with nothing?!?', () => {
    state.dungeons![DungeonId.CastleTower] = {
      chestsOpened: 2,
      isBossDefeated: true,
      smallKeysFound: 2,
    };

    Selector( makeGetAccessibility() ).expect( state, NodeId.DARK_D4_OUTER ).toReturn( available );
  } );

  it( 'has the lumberjack tree unavailable even with boots at the start.', () => {
    state.inventory![InventoryId.Boots] = 1;
    state.dungeons![DungeonId.CastleTower] = {
      chestsOpened: 2,
      isBossDefeated: false,
      smallKeysFound: 2,
    };

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_LUMBERJACK_ENTRANCE )
      .toReturn( unavailable );
  } );

  it( 'has the lumberjack tree item visible without Agahnim taken out.', () => {
    state.inventory![InventoryId.Boots] = 1;
    state.dungeons![DungeonId.CastleTower] = {
      chestsOpened: 2,
      isBossDefeated: false,
      smallKeysFound: 2,
    };

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_LUMBERJACK_ITEM )
      .toReturn( visible );
  } );

  it( 'has the lumberjack tree available if Aga 1 is taken out in non-inverted settings.', () => {
    state.inventory![InventoryId.Boots] = 1;
    state.dungeons![DungeonId.CastleTower] = {
      chestsOpened: 2,
      isBossDefeated: true,
      smallKeysFound: 2,
    };

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_LUMBERJACK_ENTRANCE )
      .toReturn( available );
  } );

  // TODO: Fix this test once Hyrule Castle is designed.
  xit( 'has a barrier that can be broken with a hammer in swordless mode.', () => {
    state.settings!.swords = Swords.Swordless;
    state.inventory![InventoryId.Hammer] = 1;
  } );

  it( 'has an accessible waterfall entrance with the flippers.', () => {
    state.inventory![InventoryId.Flippers] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_WATERFALL ).toReturn( available );
  } );

  it( 'has an accessible zora ledge with the flippers.', () => {
    state.inventory![InventoryId.Flippers] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_B8_ZORA_LEDGE ).toReturn( available );
  } );

  it( 'has a visible zora ledge item with the gloves.', () => {
    state.inventory![InventoryId.Flippers] = 0;
    state.inventory![InventoryId.Glove] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_ZORA_LEDGE_ITEM ).toReturn( visible );
  } );

  it( 'has an accessible King Zora with the gloves.', () => {
    state.inventory![InventoryId.Glove] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_B8_ZORA_MAIN ).toReturn( available );
  } );
} );
