// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { makeGetAccessibility } from '..';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { fallbackInventory } from '../../../../api/inventory';
import { fallbackSettings } from '../../../../api/settings';
import { fallbackNodes } from '../../../../api/traversal';
import { fallbackEdges } from '../../../../api/traversal/edges';

import InventoryId from '../../../../api/inventory/inventory-id';
import NodeId from '../../../../api/traversal/nodes/node-id';

import { available, availableWithGlitches, unavailable } from '../../../../api/traversal/availabilities';

describe( 'Lake Hylia', () => {
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

  it( 'has the water accessible via fake flippering.', () => {
    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_G6_WATER ).toReturn( availableWithGlitches );
  } );

  it( 'has the water accessible via actual flippering.', () => {
    state.inventory![InventoryId.Flippers] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_G6_WATER ).toReturn( available );
  } );

  it( 'has an inaccessible ice rod cave at the start.', () => {
    Selector( makeGetAccessibility() ).expect( state, NodeId.CAVE_ICE_ROD_CAVE ).toReturn( unavailable );
  } );

  it( 'has an accessible ice rod cave at the start with bombs.', () => {
    state.inventory![InventoryId.Bomb] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.CAVE_ICE_ROD_CAVE ).toReturn( available );
  } );

  it( 'has an inaccessible ice rock cave at the start.', () => {
    Selector( makeGetAccessibility() ).expect( state, NodeId.CAVE_ICE_FAIRY_CAVE ).toReturn( unavailable );
  } );

  it( 'has an accessible ice rock cave at the start with a glove.', () => {
    state.inventory![InventoryId.Glove] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.CAVE_ICE_FAIRY_CAVE ).toReturn( available );
  } );
} );
