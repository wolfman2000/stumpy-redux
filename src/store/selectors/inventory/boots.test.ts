// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasBoots, nextBoots, prevBoots } from './boots';

describe( 'The boots based selectors', () => {
  it( 'can see if we have the boots.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Boots] = 0;

    Selector( hasBoots ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the boots from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Boots] = 0;

    Selector( nextBoots ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the boots from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Boots] = 1;

    Selector( nextBoots ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the boots from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Boots] = 0;

    Selector( prevBoots ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the boots from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Boots] = 1;

    Selector( prevBoots ).expect( state ).toReturn( 0 );
  } );
} );
