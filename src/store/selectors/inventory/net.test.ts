// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasNet, nextNet, prevNet } from './net';

describe( 'The net based selectors', () => {
  it( 'can see if we have the net.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Net] = 0;

    Selector( hasNet ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the net from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Net] = 0;

    Selector( nextNet ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the net from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Net] = 1;

    Selector( nextNet ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the net from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Net] = 0;

    Selector( prevNet ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the net from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Net] = 1;

    Selector( prevNet ).expect( state ).toReturn( 0 );
  } );
} );
