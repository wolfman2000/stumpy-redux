// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasByrna, nextByrna, prevByrna } from './byrna';

describe( 'The byrna based selectors', () => {
  it( 'can see if we have the byrna.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Byrna] = 0;

    Selector( hasByrna ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the byrna from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Byrna] = 0;

    Selector( nextByrna ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the byrna from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Byrna] = 1;

    Selector( nextByrna ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the byrna from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Byrna] = 0;

    Selector( prevByrna ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the byrna from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Byrna] = 1;

    Selector( prevByrna ).expect( state ).toReturn( 0 );
  } );
} );
