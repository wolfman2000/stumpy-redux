// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasIceRod, nextIceRod, prevIceRod } from './ice-rod';

describe( 'The ice rod based selectors', () => {
  it( 'can see if we have the ice rod.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.IceRod] = 0;

    Selector( hasIceRod ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the ice rod from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.IceRod] = 0;

    Selector( nextIceRod ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the ice rod from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.IceRod] = 1;

    Selector( nextIceRod ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the ice rod from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.IceRod] = 0;

    Selector( prevIceRod ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the ice rod from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.IceRod] = 1;

    Selector( prevIceRod ).expect( state ).toReturn( 0 );
  } );
} );
