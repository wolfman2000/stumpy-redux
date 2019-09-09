// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { fallbackSettings } from '../../../api/settings';
import ItemPool from '../../../api/settings/difficulty/item-pool';

import { hasHeartContainers, nextHeartContainers, prevHeartContainers } from './heart-containers';

describe( 'The heart container based selectors', () => {
  it( 'can always tell us we have health.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.HeartContainer] = 3;

    Selector( hasHeartContainers ).expect( state ).toReturn( true );
  } );

  it( 'can determine the next valid value for heart containers in the hard pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Hard,
      },
    };

    state.inventory![InventoryId.HeartContainer] = 14;

    Selector( nextHeartContainers ).expect( state ).toReturn( 3 );
  } );

  it( 'can determine the next valid value for heart containers from the expert pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Expert,
      },
    };

    state.inventory![InventoryId.HeartContainer] = 8;

    Selector( nextHeartContainers ).expect( state ).toReturn( 3 );
  } );

  it( 'can determine the previous valid value for magic from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.HeartContainer] = 9;

    Selector( prevHeartContainers ).expect( state ).toReturn( 8 );
  } );
} );
