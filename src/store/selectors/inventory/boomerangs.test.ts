import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';
import { hasBlueBoomerang, hasBothBoomerangs, hasRedBoomerang } from './boomerangs';

describe( 'The boomerang based selectors', () => {
  it( 'can see if we have the blue boomerang by itself.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.BlueBoomerang] = 1;
    state.inventory![InventoryId.RedBoomerang] = 0;

    Selector( hasBlueBoomerang ).expect( state ).toReturn( true );
    Selector( hasRedBoomerang ).expect( state ).toReturn( false );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have the red boomerang by itself.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.BlueBoomerang] = 0;
    state.inventory![InventoryId.RedBoomerang] = 1;

    Selector( hasBlueBoomerang ).expect( state ).toReturn( false );
    Selector( hasRedBoomerang ).expect( state ).toReturn( true );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have both boomerangs.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.BlueBoomerang] = 1;
    state.inventory![InventoryId.RedBoomerang] = 1;

    Selector( hasBlueBoomerang ).expect( state ).toReturn( true );
    Selector( hasRedBoomerang ).expect( state ).toReturn( true );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( true );
  } );
} );
