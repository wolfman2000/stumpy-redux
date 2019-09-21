// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../../reducers';

import { makeGetAccessibility } from '../..';

import { fallbackDungeonMaps } from '../../../../../api/dungeon';
import { fallbackInventory } from '../../../../../api/inventory';
import { fallbackSettings } from '../../../../../api/settings';
import { fallbackNodes } from '../../../../../api/traversal';
import { fallbackEdges } from '../../../../../api/traversal/edges';

import InventoryId from '../../../../../api/inventory/inventory-id';
import Swords from '../../../../../api/settings/difficulty/swords';
import NodeId from '../../../../../api/traversal/nodes/node-id';

import { available, availableWithGlitches, unavailable, visible, visibleWithGlitches } from '../../../../../api/traversal/availabilities';

describe( 'The Ether Tablet', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      edges: [...fallbackEdges],
      inventory: {...fallbackInventory},
      nodes: fallbackNodes,
      settings: {...fallbackSettings},
    };
    state.inventory![InventoryId.Glove] = 1;
    state.inventory![InventoryId.Mirror] = 1;
  } );

  it( 'is inaccessible without the book', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_ETHER_TABLET )
      .toReturn( unavailable );
  } );

  describe( 'when exposed to the book', () => {
    beforeEach( () => {
      state.inventory![InventoryId.Book] = 1;
    } );

    it( 'lets us see the item inside...via sequence breaking', () => {
      Selector( makeGetAccessibility() )
        .expect( state, NodeId.LIGHT_ETHER_TABLET )
        .toReturn( visibleWithGlitches );
    } );

    it( 'lets us see the item inside', () => {
      state.inventory![InventoryId.Lantern] = 1;

      Selector( makeGetAccessibility() )
        .expect( state, NodeId.LIGHT_ETHER_TABLET )
        .toReturn( visible );
    } );

    it( 'lets us claim the item inside with a master sword', () => {
      state.inventory![InventoryId.Sword] = 3;

      Selector( makeGetAccessibility() )
        .expect( state, NodeId.LIGHT_ETHER_TABLET )
        .toReturn( availableWithGlitches );
    } );

    it( 'lets us claim the item inside with a hammer in swordless mode', () => {
      state.settings!.swords = Swords.Swordless;
      state.inventory![InventoryId.Lantern] = 1;
      state.inventory![InventoryId.Hammer] = 1;

      Selector( makeGetAccessibility() )
        .expect( state, NodeId.LIGHT_ETHER_TABLET )
        .toReturn( available );
    } );
  } );
} );
