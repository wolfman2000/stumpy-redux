// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasLantern, nextLantern, prevLantern } from './lantern';

describe( 'The lantern based selectors', () => {
  it( 'can see if we have the lantern.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Lantern] = 0;

    Selector( hasLantern ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the lantern from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Lantern] = 0;

    Selector( nextLantern ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the lantern from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Lantern] = 1;

    Selector( nextLantern ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the lantern from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Lantern] = 0;

    Selector( prevLantern ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the lantern from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Lantern] = 1;

    Selector( prevLantern ).expect( state ).toReturn( 0 );
  } );
} );
