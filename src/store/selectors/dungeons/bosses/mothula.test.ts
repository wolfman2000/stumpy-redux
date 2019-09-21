// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

import { makeCanDefeatBoss } from '.';

describe( 'The boss Mothula', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      inventory: {},
      settings: {...fallbackSettings},
    };
  } );

  describe( '(in the restricted set)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Basic;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SkullWoods ).toReturn( false );
    } );

    it( 'can be beaten with the master sword.', () => {
      state.inventory![InventoryId.Sword] = 2;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SkullWoods ).toReturn( true );
    } );

    it( 'cannot be beaten with a fire rod alone.', () => {
      state.inventory![InventoryId.FireRod] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SkullWoods ).toReturn( false );
    } );

    it( 'can be beaten with a fire rod and 1/2 magic.', () => {
      state.inventory![InventoryId.FireRod] = 1;
      state.inventory![InventoryId.Magic] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SkullWoods ).toReturn( true );
    } );
  } );

  describe( '(in the unrestricted set)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Advanced;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SkullWoods ).toReturn( false );
    } );

    it( 'can be beaten with a sword on hand.', () => {
      state.inventory![InventoryId.Sword] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SkullWoods ).toReturn( true );
    } );

    it( 'can be beaten with a fire rod on hand.', () => {
      state.inventory![InventoryId.FireRod] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SkullWoods ).toReturn( true );
    } );

    it( 'can be beaten with a cane of byrna on hand.', () => {
      state.inventory![InventoryId.Byrna] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SkullWoods ).toReturn( true );
    } );
  } );
} );
