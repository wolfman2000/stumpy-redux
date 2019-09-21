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

describe( 'The Death Mountain NE Area', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      edges: [...fallbackEdges],
      inventory: {...fallbackInventory},
      nodes: fallbackNodes,
      settings: {...fallbackSettings},
    };

    state.inventory![InventoryId.Flute] = 1;
  } );

  it( 'is not accessible immediately.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_A6_UPPER )
      .toReturn( unavailable );
  } );

  it( 'is accessible with the mirror and hammer.', () => {
    state.inventory![InventoryId.Mirror] = 1;
    state.inventory![InventoryId.Hammer] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_A6_UPPER )
      .toReturn( available );
  } );

  it( 'is accessible with the hookshot.', () => {
    state.inventory![InventoryId.Hookshot] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_A6_UPPER )
      .toReturn( available );
  } );
} );
