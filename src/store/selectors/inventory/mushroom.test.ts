// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasMushroom, nextMushroom, prevMushroom } from './mushroom';

describe( 'The mushroom based selectors', () => {
  it( 'can see if we have the mushroom.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mushroom] = 0;

    Selector( hasMushroom ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the mushroom from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mushroom] = 0;

    Selector( nextMushroom ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the mushroom from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mushroom] = 1;

    Selector( nextMushroom ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the mushroom from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mushroom] = 0;

    Selector( prevMushroom ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the mushroom from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mushroom] = 1;

    Selector( prevMushroom ).expect( state ).toReturn( 0 );
  } );
} );
