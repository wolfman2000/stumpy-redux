// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasMoonPearl, nextMoonPearl, prevMoonPearl } from './moon-pearl';

describe( 'The moon pearl based selectors', () => {
  it( 'can see if we have the moon pearl.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.MoonPearl] = 0;

    Selector( hasMoonPearl ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the moon pearl from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.MoonPearl] = 0;

    Selector( nextMoonPearl ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the moon pearl from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.MoonPearl] = 1;

    Selector( nextMoonPearl ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the moon pearl from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.MoonPearl] = 0;

    Selector( prevMoonPearl ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the moon pearl from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.MoonPearl] = 1;

    Selector( prevMoonPearl ).expect( state ).toReturn( 0 );
  } );
} );
