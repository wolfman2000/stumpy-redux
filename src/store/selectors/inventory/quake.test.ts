// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasQuake, nextQuake, prevQuake } from './quake';

describe( 'The quake based selectors', () => {
  it( 'can see if we have the quake.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Quake] = 0;

    Selector( hasQuake ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the quake from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Quake] = 0;

    Selector( nextQuake ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the quake from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Quake] = 1;

    Selector( nextQuake ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the quake from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Quake] = 0;

    Selector( prevQuake ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the quake from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Quake] = 1;

    Selector( prevQuake ).expect( state ).toReturn( 0 );
  } );
} );
