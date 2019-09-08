import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasBow, hasBowAndSilvers, hasSilverArrows } from '../inventory';

describe( 'The bow and silver arrow related selectors', () => {
  it( 'can see if we have the bow by itself.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bow] = {
      active: 1,
      current: 1,
      id: InventoryId.Bow,
      max: 1,
    };
    state.inventory![InventoryId.SilverArrows] = {
      active: 1,
      current: 0,
      id: InventoryId.SilverArrows,
      max: 1,
    };

    Selector( hasBow ).expect( state ).toReturn( true );
    Selector( hasSilverArrows ).expect( state ).toReturn( false );
    Selector( hasBowAndSilvers ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have the silver arrows by itself.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bow] = {
      active: 1,
      current: 0,
      id: InventoryId.Bow,
      max: 1,
    };
    state.inventory![InventoryId.SilverArrows] = {
      active: 1,
      current: 1,
      id: InventoryId.SilverArrows,
      max: 1,
    };

    Selector( hasBow ).expect( state ).toReturn( false );
    Selector( hasSilverArrows ).expect( state ).toReturn( true );
    Selector( hasBowAndSilvers ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have the both bow and silver arrows.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bow] = {
      active: 1,
      current: 1,
      id: InventoryId.Bow,
      max: 1,
    };
    state.inventory![InventoryId.SilverArrows] = {
      active: 1,
      current: 1,
      id: InventoryId.SilverArrows,
      max: 1,
    };

    Selector( hasBow ).expect( state ).toReturn( true );
    Selector( hasSilverArrows ).expect( state ).toReturn( true );
    Selector( hasBowAndSilvers ).expect( state ).toReturn( true );
  } );
} );
