// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasSomaria, nextSomaria, prevSomaria } from './somaria';

describe( 'The somaria based selectors', () => {
  it( 'can see if we have the somaria.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Somaria] = 0;

    Selector( hasSomaria ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the somaria from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Somaria] = 0;

    Selector( nextSomaria ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the somaria from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Somaria] = 1;

    Selector( nextSomaria ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the somaria from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Somaria] = 0;

    Selector( prevSomaria ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the somaria from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Somaria] = 1;

    Selector( prevSomaria ).expect( state ).toReturn( 0 );
  } );
} );
