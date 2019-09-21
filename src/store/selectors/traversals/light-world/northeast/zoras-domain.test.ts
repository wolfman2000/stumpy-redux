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

import { available, availableWithGlitches, visible } from '../../../../../api/traversal/availabilities';

describe( 'Zora\'s Domain', () => {
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

  it( 'has an accessible (with glitches) king with nothing.', () => {
    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_B8_ZORA_MAIN ).toReturn( availableWithGlitches );
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
    state.inventory![InventoryId.Glove] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_ZORA_LEDGE_ITEM ).toReturn( visible );
  } );

  it( 'has an accessible King Zora with the gloves.', () => {
    state.inventory![InventoryId.Glove] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_B8_ZORA_MAIN ).toReturn( available );
  } );
} );
