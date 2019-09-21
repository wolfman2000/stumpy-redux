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

import { available, visible } from '../../../../../api/traversal/availabilities';

describe( 'The Kakariko Library', () => {
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

  it( 'has a visible item on top of the shelf.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_LIBRARY_ITEM )
      .toReturn( visible );
  } );

  it( 'has an item we can bonk off the shelf.', () => {
    state.inventory![InventoryId.Boots] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_LIBRARY_ITEM )
      .toReturn( available );
  } );
} );
