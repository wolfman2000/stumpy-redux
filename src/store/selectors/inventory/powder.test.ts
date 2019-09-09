// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasPowder, nextPowder, prevPowder } from './powder';

describe( 'The powder based selectors', () => {
  it( 'can see if we have the powder.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Powder] = 0;

    Selector( hasPowder ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the powder from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Powder] = 0;

    Selector( nextPowder ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the powder from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Powder] = 1;

    Selector( nextPowder ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the powder from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Powder] = 0;

    Selector( prevPowder ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the powder from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Powder] = 1;

    Selector( prevPowder ).expect( state ).toReturn( 0 );
  } );
} );
