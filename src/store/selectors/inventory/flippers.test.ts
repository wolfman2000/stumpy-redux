// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasFlippers, nextFlippers, prevFlippers } from './flippers';

describe( 'The flippers based selectors', () => {
  it( 'can see if we have the flippers.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flippers] = 0;

    Selector( hasFlippers ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the flippers from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flippers] = 0;

    Selector( nextFlippers ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the flippers from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flippers] = 1;

    Selector( nextFlippers ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the flippers from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flippers] = 0;

    Selector( prevFlippers ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the flippers from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Flippers] = 1;

    Selector( prevFlippers ).expect( state ).toReturn( 0 );
  } );
} );
