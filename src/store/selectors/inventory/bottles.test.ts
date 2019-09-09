// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';
import { hasBottles, nextBottles, prevBottles } from './bottles';

describe( 'The bottle based selectors', () => {
  it( 'can see if we have a bottle.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bottle] = 0;

    Selector( hasBottles ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for a bottle from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bottle] = 0;

    Selector( nextBottles ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for a bottle from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bottle] = 1;

    Selector( nextBottles ).expect( state ).toReturn( 2 );
  } );

  it( 'can determine the previous valid value for a bottle from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bottle] = 0;

    Selector( prevBottles ).expect( state ).toReturn( 4 );
  } );

  it( 'can determine the previous valid value for a bottle from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bottle] = 1;

    Selector( prevBottles ).expect( state ).toReturn( 0 );
  } );
} );
