// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import { fallbackInventory } from '../../../../api/inventory';
import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

import { makeCanDefeatBoss } from '.';

describe( 'The boss Blind', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: fallbackDungeonMaps,
      inventory: fallbackInventory,
      settings: fallbackSettings,
    };
  } );

  describe( '(on restricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Restricted;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.ThievesTown ).toReturn( false );
    } );

    it( 'cannot be beaten with sword alone.', () => {
      state.inventory![InventoryId.Sword] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.ThievesTown ).toReturn( false );
    } );

    it( 'cannot be beaten with byrna alone.', () => {
      state.inventory![InventoryId.Sword] = 0;
      state.inventory![InventoryId.Byrna] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.ThievesTown ).toReturn( false );
    } );

    it( 'can be beaten with both sword and cape.', () => {
      state.inventory![InventoryId.Cape] = 1;
      state.inventory![InventoryId.Sword] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.ThievesTown ).toReturn( true );
    } );
  } );

  describe( '(on unrestricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Advanced;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      state.inventory![InventoryId.Sword] = 0;
      state.inventory![InventoryId.Byrna] = 0;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.ThievesTown ).toReturn( false );
    } );

    it( 'can be beaten with sword alone.', () => {
      state.inventory![InventoryId.Sword] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.ThievesTown ).toReturn( true );
    } );

    it( 'can be beaten with byrna alone.', () => {
      state.inventory![InventoryId.Sword] = 0;
      state.inventory![InventoryId.Byrna] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.ThievesTown ).toReturn( true );
    } );
  } );
} );
