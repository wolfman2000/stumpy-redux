import { Selector } from 'redux-testkit';

import InventoryId from '../../api/inventory/inventory-id';

import { StumpyState } from '../reducers';

import { hasBow, hasBowAndSilvers, hasShovel, hasSilverArrows, hasBlueBoomerang, hasRedBoomerang, hasBothBoomerangs } from './inventory';

describe( 'The inventory selectors', () => {
  it( 'can see if we have the shovel.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Shovel] = {
      active: 1,
      current: 0,
      id: InventoryId.Shovel,
      max: 1,
    };

    Selector( hasShovel ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have the blue boomerang by itself.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.BlueBoomerang] = {
      active: 1,
      current: 1,
      id: InventoryId.BlueBoomerang,
      max: 1,
    };
    state.inventory![InventoryId.RedBoomerang] = {
      active: 1,
      current: 0,
      id: InventoryId.RedBoomerang,
      max: 1,
    };

    Selector( hasBlueBoomerang ).expect( state ).toReturn( true );
    Selector( hasRedBoomerang ).expect( state ).toReturn( false );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have the red boomerang by itself.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.BlueBoomerang] = {
      active: 1,
      current: 0,
      id: InventoryId.BlueBoomerang,
      max: 1,
    };
    state.inventory![InventoryId.RedBoomerang] = {
      active: 1,
      current: 1,
      id: InventoryId.RedBoomerang,
      max: 1,
    };

    Selector( hasBlueBoomerang ).expect( state ).toReturn( false );
    Selector( hasRedBoomerang ).expect( state ).toReturn( true );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have both boomerangs.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.BlueBoomerang] = {
      active: 1,
      current: 1,
      id: InventoryId.BlueBoomerang,
      max: 1,
    };
    state.inventory![InventoryId.RedBoomerang] = {
      active: 1,
      current: 1,
      id: InventoryId.RedBoomerang,
      max: 1,
    };

    Selector( hasBlueBoomerang ).expect( state ).toReturn( true );
    Selector( hasRedBoomerang ).expect( state ).toReturn( true );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( true );
  } );
} );
