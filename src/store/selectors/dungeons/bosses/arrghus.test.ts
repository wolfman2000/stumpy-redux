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

describe( 'The boss Arrghus', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      inventory: {...fallbackInventory},
      settings: {...fallbackSettings},
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SwampPalace ).toReturn( false );
  } );

  describe( '', () => {
    beforeEach( () => {
      state.inventory![InventoryId.Hookshot] = 1;
      state.settings!.itemPlacement = ItemPlacement.Advanced;
    } );

    it( 'cannot be beaten with hookshot alone.', () => {
      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SwampPalace ).toReturn( false );
    } );

    it( 'can be beaten (expectedly) with the hookshot & Master Sword.', () => {
      state.inventory![InventoryId.Sword] = 3;
      state.settings!.itemPlacement = ItemPlacement.Basic;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SwampPalace ).toReturn( true );
    } );

    it( 'can be beaten with the hookshot and the bow.', () => {
      state.inventory![InventoryId.Bow] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SwampPalace ).toReturn( true );
    } );

    it( 'can be beaten with the hookshot and the ice rod.', () => {
      state.inventory![InventoryId.IceRod] = 1;

      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.SwampPalace ).toReturn( true );
    } );
  } );
} );
