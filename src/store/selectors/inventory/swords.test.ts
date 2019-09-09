// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasGoldenSword, hasMasterSword, hasSword, hasTemperedSword, nextSword, prevSword } from './swords';

import { fallbackSettings } from '../../../api/settings';
import ItemPool from '../../../api/settings/difficulty/item-pool';
import Swords from '../../../api/settings/difficulty/swords';

describe( 'The sword based selectors', () => {
  it( 'cannot allow for a sword if we are in a swordless seed.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        swords: Swords.Swordless,
      },
    };

    state.inventory![InventoryId.Sword] = 0;

    Selector( hasMasterSword ).expect( state ).toReturn( false );
    Selector( hasTemperedSword ).expect( state ).toReturn( false );
    Selector( hasGoldenSword ).expect( state ).toReturn( false );
    Selector( nextSword ).expect( state ).toReturn( 0 );
    Selector( prevSword ).expect( state ).toReturn( 0 );
  } );

  it( 'can see if we have anything higher than a fighter\'s sword.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.Sword] = 1;

    Selector( hasSword ).expect( state ).toReturn( true );
  } );

  it( 'can determine the next valid value for the sword on the normal item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.Sword] = 0;

    Selector( nextSword ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the sword on the hard item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Hard,
      },
    };

    state.inventory![InventoryId.Sword] = 2;

    Selector( nextSword ).expect( state ).toReturn( 3 );
  } );

  it( 'can determine the next valid value for the sword on the expert item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Expert,
      },
    };

    state.inventory![InventoryId.Sword] = 1;

    Selector( nextSword ).expect( state ).toReturn( 2 );
  } );

  it( 'can determine the previous valid value for the sword from the normal item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.Sword] = 0;

    Selector( prevSword ).expect( state ).toReturn( 4 );
  } );
} );
