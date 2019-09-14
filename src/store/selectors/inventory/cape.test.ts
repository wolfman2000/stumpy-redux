// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasCape, nextCape, prevCape } from './cape';
import { canBreakCastleTowerBarrier } from './helpers';

import { fallbackInventory } from '../../../api/inventory';
import { fallbackSettings } from '../../../api/settings';

describe( 'The cape based selectors', () => {
  it( 'can see if we have the cape.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Cape] = 0;

    Selector( hasCape ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the cape from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Cape] = 0;

    Selector( nextCape ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the cape from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Cape] = 1;

    Selector( nextCape ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the cape from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Cape] = 0;

    Selector( prevCape ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the cape from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Cape] = 1;

    Selector( prevCape ).expect( state ).toReturn( 0 );
  } );
} );

describe( 'The cape itself', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: fallbackInventory,
      settings: fallbackSettings,
    };
  } );

  it( 'can go past the castle tower barrier.', () => {
    state.inventory![InventoryId.Cape] = 1;

    Selector( canBreakCastleTowerBarrier ).expect( state ).toReturn( true );
  } );
} );
