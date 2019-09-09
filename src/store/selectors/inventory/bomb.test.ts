// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasBomb, nextBomb, prevBomb } from './bomb';

describe( 'The bomb based selectors', () => {
  it( 'can see if we have the bomb.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bomb] = 0;

    Selector( hasBomb ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the bomb from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bomb] = 0;

    Selector( nextBomb ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the bomb from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bomb] = 1;

    Selector( nextBomb ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the bomb from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bomb] = 0;

    Selector( prevBomb ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the bomb from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bomb] = 1;

    Selector( prevBomb ).expect( state ).toReturn( 0 );
  } );
} );
