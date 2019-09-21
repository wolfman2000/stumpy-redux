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

import { available, unavailable } from '../../../../../api/traversal/availabilities';

describe( 'The Potion Shop', () => {
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

  it( 'is open for buying at least.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_POTION_SHOP_ENTRANCE )
      .toReturn( available );
  } );

  it( 'does not have a free item available if empty handed.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_POTION_SHOP_ITEM )
      .toReturn( unavailable );
  } );

  it( 'does have a free item available if a mushroom is on hand.', () => {
    state.inventory![InventoryId.Mushroom] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_POTION_SHOP_ITEM )
      .toReturn( available );
  } );
} );
