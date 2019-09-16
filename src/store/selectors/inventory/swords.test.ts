// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasGoldenSword, hasMasterSword, hasSword, hasTemperedSword, nextSword, prevSword } from './swords';

import { fallbackInventory } from '../../../api/inventory';
import { fallbackSettings } from '../../../api/settings';
import ItemPool from '../../../api/settings/difficulty/item-pool';
import Swords from '../../../api/settings/difficulty/swords';
import { canBreakCastleTowerBarrier, hasProjectile, hasReliableWeapon } from './helpers';

describe( 'The sword based selectors', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: fallbackInventory,
      settings: fallbackSettings,
    };
  } );

  it( 'cannot allow for a sword if we are in a swordless seed.', () => {
    state.settings!.swords = Swords.Swordless;

    Selector( hasMasterSword ).expect( state ).toReturn( false );
    Selector( hasTemperedSword ).expect( state ).toReturn( false );
    Selector( hasGoldenSword ).expect( state ).toReturn( false );
    Selector( nextSword ).expect( state ).toReturn( 0 );
    Selector( prevSword ).expect( state ).toReturn( 0 );
  } );

  describe( '(and not in swordless mode)', () => {
    beforeEach( () => {
      state.settings!.swords = Swords.Randomized;
    } );

    it( 'can see if we have anything higher than a fighter\'s sword.', () => {
      state.inventory![InventoryId.Sword] = 1;

      Selector( hasSword ).expect( state ).toReturn( true );
    } );

    it( 'can determine the next valid value for the sword on the normal item pool.', () => {
      state.inventory![InventoryId.Sword] = 0;

      Selector( nextSword ).expect( state ).toReturn( 1 );
    } );

    it( 'can determine the next valid value for the sword on the hard item pool.', () => {
      state.settings!.itemPool = ItemPool.Hard;
      state.inventory![InventoryId.Sword] = 2;

      Selector( nextSword ).expect( state ).toReturn( 3 );
    } );

    it( 'can determine the next valid value for the sword on the expert item pool.', () => {
      state.settings!.itemPool = ItemPool.Expert;
      state.inventory![InventoryId.Sword] = 1;

      Selector( nextSword ).expect( state ).toReturn( 2 );
    } );

    it( 'can determine the previous valid value for the sword from the normal item pool.', () => {
      state.settings!.itemPool = ItemPool.Normal;
      state.inventory![InventoryId.Sword] = 0;

      Selector( prevSword ).expect( state ).toReturn( 4 );
    } );
  } );
} );

describe( 'Swords themselves', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: fallbackInventory,
      settings: fallbackSettings,
    };
  } );

  it( 'are not reliable weapons if none are equipped.', () => {
    Selector( hasReliableWeapon ).expect( state ).toReturn( false );
  } );

  it( 'is reliable if equipped.', () => {
    state.inventory![InventoryId.Sword] = 1;

    Selector( hasReliableWeapon ).expect( state ).toReturn( true );
  } );

  it( 'cannot break open the castle tower barrier if a basic sword.', () => {
    state.inventory![InventoryId.Sword] = 1;

    Selector( canBreakCastleTowerBarrier ).expect( state ).toReturn( false );
  } );

  it( 'can break open the castle tower barrier if a master sword.', () => {
    state.inventory![InventoryId.Sword] = 2;

    Selector( canBreakCastleTowerBarrier ).expect( state ).toReturn( true );
  } );

  it( 'can fire projectiles if a golden sword (and full health).', () => {
    state.inventory![InventoryId.Sword] = 4;

    Selector( hasProjectile ).expect( state ).toReturn( true );
  } );
} );
