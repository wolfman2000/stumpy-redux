// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasHammer, nextHammer, prevHammer } from './hammer';

describe( 'The hammer based selectors', () => {
  it( 'can see if we have the hammer.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hammer] = 0;

    Selector( hasHammer ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the hammer from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hammer] = 0;

    Selector( nextHammer ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the hammer from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hammer] = 1;

    Selector( nextHammer ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the hammer from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hammer] = 0;

    Selector( prevHammer ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the hammer from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hammer] = 1;

    Selector( prevHammer ).expect( state ).toReturn( 0 );
  } );
} );
