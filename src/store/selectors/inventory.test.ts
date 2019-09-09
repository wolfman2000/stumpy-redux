import { Selector } from 'redux-testkit';

import InventoryId from '../../api/inventory/inventory-id';

import { StumpyState } from '../reducers';

import { hasShovel } from './inventory';

describe( 'The inventory selectors', () => {
  it( 'can see if we have the shovel.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Shovel] = 0;

    Selector( hasShovel ).expect( state ).toReturn( false );
  } );
} );
