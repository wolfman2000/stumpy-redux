// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasHookshot, nextHookshot, prevHookshot } from './hookshot';

describe( 'The hookshot based selectors', () => {
  it( 'can see if we have the hookshot.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hookshot] = 0;

    Selector( hasHookshot ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the hookshot from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hookshot] = 0;

    Selector( nextHookshot ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the hookshot from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hookshot] = 1;

    Selector( nextHookshot ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the hookshot from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hookshot] = 0;

    Selector( prevHookshot ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the hookshot from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Hookshot] = 1;

    Selector( prevHookshot ).expect( state ).toReturn( 0 );
  } );
} );
