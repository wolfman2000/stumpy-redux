// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasShovel, nextShovel, prevShovel } from './shovel';

describe( 'The shovel based selectors', () => {
  it( 'can see if we have the shovel.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Shovel] = 0;

    Selector( hasShovel ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the shovel from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Shovel] = 0;

    Selector( nextShovel ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the shovel from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Shovel] = 1;

    Selector( nextShovel ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the shovel from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Shovel] = 0;

    Selector( prevShovel ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the shovel from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Shovel] = 1;

    Selector( prevShovel ).expect( state ).toReturn( 0 );
  } );
} );
