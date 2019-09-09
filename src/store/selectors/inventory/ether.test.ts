// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasEther, nextEther, prevEther } from './ether';

describe( 'The ether based selectors', () => {
  it( 'can see if we have the ether.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Ether] = 0;

    Selector( hasEther ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the ether from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Ether] = 0;

    Selector( nextEther ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the ether from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Ether] = 1;

    Selector( nextEther ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the ether from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Ether] = 0;

    Selector( prevEther ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the ether from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Ether] = 1;

    Selector( prevEther ).expect( state ).toReturn( 0 );
  } );
} );
