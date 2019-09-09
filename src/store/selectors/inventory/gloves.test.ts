// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';
import { hasGlove, hasTitans, nextGlove, prevGlove } from './gloves';

describe( 'The bottle based selectors', () => {
  it( 'can see if we have a glove...albiet, not a Titan\'s Mitt.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Glove] = 1;

    Selector( hasGlove ).expect( state ).toReturn( true );

    Selector( hasTitans ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for a bottle from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Glove] = 0;

    Selector( nextGlove ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for a bottle from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Glove] = 1;

    Selector( nextGlove ).expect( state ).toReturn( 2 );
  } );

  it( 'can determine the previous valid value for a bottle from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Glove] = 0;

    Selector( prevGlove ).expect( state ).toReturn( 2 );
  } );

  it( 'can determine the previous valid value for a bottle from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Glove] = 1;

    Selector( prevGlove ).expect( state ).toReturn( 0 );
  } );
} );
