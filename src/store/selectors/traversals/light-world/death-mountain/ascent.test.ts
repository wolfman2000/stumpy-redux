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

describe( 'The Death Mountain Ascent', () => {
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

  it( 'is inaccessible at the start.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_DM_MAN_FRONT )
      .toReturn( unavailable );
  } );

  it( 'is accessible with the glove if you can handle dark rooms.', () => {
    state.inventory![InventoryId.Glove] = 2;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_DM_MAN_FRONT )
      .toReturn( availableWithGlitches );
  } );

  it( 'is accessible with the glove and lantern.', () => {
    state.inventory![InventoryId.Glove] = 2;
    state.inventory![InventoryId.Lantern] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_DM_MAN_FRONT )
      .toReturn( available );
  } );
} );
