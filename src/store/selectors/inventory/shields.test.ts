// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasShield, nextShield, prevShield } from './shields';

import { fallbackSettings } from '../../../api/settings';
import ItemPool from '../../../api/settings/difficulty/item-pool';

describe( 'The shields based selectors', () => {
  it( 'can see if we have anything higher than a fighter\'s shield.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.Shield] = 1;

    Selector( hasShield ).expect( state ).toReturn( true );
  } );

  it( 'can determine the next valid value for the shield on the normal item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.Shield] = 0;

    Selector( nextShield ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the shield on the hard item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Hard,
      },
    };

    state.inventory![InventoryId.Shield] = 2;

    Selector( nextShield ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the next valid value for the shield on the expert item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Expert,
      },
    };

    state.inventory![InventoryId.Shield] = 1;

    Selector( nextShield ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the shield from the normal item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.Shield] = 0;

    Selector( prevShield ).expect( state ).toReturn( 3 );
  } );
} );
