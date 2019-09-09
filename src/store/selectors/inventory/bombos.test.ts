// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasBombos, nextBombos, prevBombos } from './bombos';

describe( 'The bombos based selectors', () => {
  it( 'can see if we have the bombos.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bombos] = 0;

    Selector( hasBombos ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the bombos from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bombos] = 0;

    Selector( nextBombos ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the bombos from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bombos] = 1;

    Selector( nextBombos ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the bombos from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bombos] = 0;

    Selector( prevBombos ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the bombos from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bombos] = 1;

    Selector( prevBombos ).expect( state ).toReturn( 0 );
  } );
} );
