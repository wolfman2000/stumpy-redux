// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasFlute, nextFlute, prevFlute } from './flute';

describe( 'The flute based selectors', () => {
  it( 'can see if we have the flute.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flute] = 0;

    Selector( hasFlute ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the flute from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flute] = 0;

    Selector( nextFlute ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the flute from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flute] = 1;

    Selector( nextFlute ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the flute from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flute] = 0;

    Selector( prevFlute ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the flute from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flute] = 1;

    Selector( prevFlute ).expect( state ).toReturn( 0 );
  } );
} );
