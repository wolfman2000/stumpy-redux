// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasMagic, nextMagic, prevMagic } from './magic';

describe( 'The magic based selectors', () => {
  it( 'can see if we have magic.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Magic] = 0;

    Selector( hasMagic ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for magic from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Magic] = 0;

    Selector( nextMagic ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for magic from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Magic] = 1;

    Selector( nextMagic ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for magic from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Magic] = 0;

    Selector( prevMagic ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for magic from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Magic] = 1;

    Selector( prevMagic ).expect( state ).toReturn( 0 );
  } );
} );
