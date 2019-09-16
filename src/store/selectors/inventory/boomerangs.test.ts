// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { fallbackInventory } from '../../../api/inventory';
import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';
import {
  hasBlueBoomerang,
  hasBothBoomerangs,
  hasRedBoomerang,
  nextBlueBoomerang,
  nextRedBoomerang,
  prevBlueBoomerang,
  prevRedBoomerang,
} from './boomerangs';

describe( 'The boomerang based selectors', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: fallbackInventory,
    };
  } );

  it( 'can see if we have the blue boomerang by itself.', () => {
    state.inventory![InventoryId.BlueBoomerang] = 1;
    state.inventory![InventoryId.RedBoomerang] = 0;

    Selector( hasBlueBoomerang ).expect( state ).toReturn( true );
    Selector( hasRedBoomerang ).expect( state ).toReturn( false );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( false );

    Selector( nextBlueBoomerang ).expect( state ).toReturn( 0 );
    Selector( nextRedBoomerang ).expect( state ).toReturn( 1 );
  } );

  it( 'can see if we have the red boomerang by itself.', () => {
    state.inventory![InventoryId.BlueBoomerang] = 0;
    state.inventory![InventoryId.RedBoomerang] = 1;

    Selector( hasBlueBoomerang ).expect( state ).toReturn( false );
    Selector( hasRedBoomerang ).expect( state ).toReturn( true );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( false );

    Selector( prevBlueBoomerang ).expect( state ).toReturn( 1 );
    Selector( prevRedBoomerang ).expect( state ).toReturn( 0 );
  } );

  it( 'can see if we have both boomerangs.', () => {
    state.inventory![InventoryId.BlueBoomerang] = 1;
    state.inventory![InventoryId.RedBoomerang] = 1;

    Selector( hasBlueBoomerang ).expect( state ).toReturn( true );
    Selector( hasRedBoomerang ).expect( state ).toReturn( true );
    Selector( hasBothBoomerangs ).expect( state ).toReturn( true );
  } );
} );
