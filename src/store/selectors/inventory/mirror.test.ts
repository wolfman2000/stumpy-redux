// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasMirror, nextMirror, prevMirror } from './mirror';

describe( 'The mirror based selectors', () => {
  it( 'can see if we have the mirror.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mirror] = 0;

    Selector( hasMirror ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the mirror from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mirror] = 0;

    Selector( nextMirror ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the mirror from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mirror] = 1;

    Selector( nextMirror ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the mirror from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mirror] = 0;

    Selector( prevMirror ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the mirror from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Mirror] = 1;

    Selector( prevMirror ).expect( state ).toReturn( 0 );
  } );
} );
