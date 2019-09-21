// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';
import ItemPool from '../../../../api/settings/difficulty/item-pool';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

import { makeCanDefeatBoss } from '.';

describe( 'The boss Vitreous', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      inventory: {},
      settings: {...fallbackSettings},
    };
  } );

  describe( '(in restricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Basic;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.MiseryMire ).toReturn( false );
    } );

    it( 'can be beaten with the master sword.', () => {
      state.inventory![InventoryId.Sword] = 2;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.MiseryMire ).toReturn( true );
    } );

    it( 'can be beaten with the bow.', () => {
      state.inventory![InventoryId.Bow] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.MiseryMire ).toReturn( true );
    } );
  } );

  describe( '(in unrestricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Advanced;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.MiseryMire ).toReturn( false );
    } );

    it( 'can be beaten with the hammer.', () => {
      state.inventory![InventoryId.Hammer] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.MiseryMire ).toReturn( true );
    } );

    it( 'can be beaten with bombs in normal difficulty pools only.', () => {
      state.inventory![InventoryId.Bomb] = 1;
      state.settings!.itemPool = ItemPool.Normal;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.MiseryMire ).toReturn( true );
    } );

    it( 'cannot be beaten with bombs in hard difficulty pools.', () => {
      state.inventory![InventoryId.Bomb] = 1;
      state.settings!.itemPool = ItemPool.Hard;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.MiseryMire ).toReturn( false );
    } );
  } );
} );
