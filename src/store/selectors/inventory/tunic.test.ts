// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasTunic, nextTunic, prevTunic } from './tunic';

import { fallbackSettings } from '../../../api/settings';
import ItemPool from '../../../api/settings/difficulty/item-pool';

describe( 'The tunic based selectors', () => {
  it( 'can see if we have anything higher than a green tunic.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Tunic] = 1;

    Selector( hasTunic ).expect( state ).toReturn( true );
  } );

  it( 'can determine the next valid value for the tunic on the normal item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.Tunic] = 0;

    Selector( nextTunic ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the tunic on the hard item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Hard,
      },
    };

    state.inventory![InventoryId.Tunic] = 0;

    Selector( nextTunic ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the tunic from the normal item pool.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
      settings: {
        ...fallbackSettings,
        itemPool: ItemPool.Normal,
      },
    };

    state.inventory![InventoryId.Tunic] = 0;

    Selector( prevTunic ).expect( state ).toReturn( 2 );
  } );
} );
