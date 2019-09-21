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
import NodeId from '../../../../../api/traversal/nodes/node-id';

import { available, availableWithGlitches, unavailable } from '../../../../../api/traversal/availabilities';

describe( 'The Mad Batter', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      edges: [...fallbackEdges],
      inventory: {...fallbackInventory},
      nodes: fallbackNodes,
      settings: {...fallbackSettings},
    };
  } );

  it( 'is unavailable at the start.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_MAD_BATTER_ENTRANCE )
      .toReturn( unavailable );
  } );

  it( 'is unavailable with a hammer.', () => {
    state.inventory![InventoryId.Hammer] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_MAD_BATTER_ENTRANCE )
      .toReturn( available );

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_MAD_BATTER_ITEM )
      .toReturn( unavailable );
  } );

  it( 'is accessible with magic powder.', () => {
    state.inventory![InventoryId.Hammer] = 1;
    state.inventory![InventoryId.Powder] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_MAD_BATTER_ITEM )
      .toReturn( available );
  } );

  it( 'is accessible with the cane of somaria and mushroom through trickery.', () => {
    state.inventory![InventoryId.Hammer] = 1;
    state.inventory![InventoryId.Somaria] = 1;
    state.inventory![InventoryId.Mushroom] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_MAD_BATTER_ITEM )
      .toReturn( availableWithGlitches );
  } );
} );
