// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasFireRod, nextFireRod, prevFireRod } from './fire-rod';

describe( 'The fire rod based selectors', () => {
  it( 'can see if we have the fire rod.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.FireRod] = 0;

    Selector( hasFireRod ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the fire rod from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.FireRod] = 0;

    Selector( nextFireRod ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the fire rod from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.FireRod] = 1;

    Selector( nextFireRod ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the fire rod from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.FireRod] = 0;

    Selector( prevFireRod ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the fire rod from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.FireRod] = 1;

    Selector( prevFireRod ).expect( state ).toReturn( 0 );
  } );
} );
