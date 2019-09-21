// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

import { makeCanDefeatBoss } from '.';

describe( 'The boss Helmasaur King', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      inventory: {},
      settings: {...fallbackSettings},
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.PalaceOfDarkness ).toReturn( false );
  } );

  it( 'cannot be beaten with a sword alone.', () => {
    state.inventory![InventoryId.Sword] = 3;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.PalaceOfDarkness ).toReturn( false );
  } );

  it( 'cannot be beaten with bombs alone.', () => {
    state.inventory![InventoryId.Bomb] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.PalaceOfDarkness ).toReturn( false );
  } );

  it( 'can be beaten with a hammer alone.', () => {
    state.inventory![InventoryId.Hammer] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.PalaceOfDarkness ).toReturn( true );
  } );

  it( 'can be beaten with a hammer and a sword.', () => {
    state.inventory![InventoryId.Hammer] = 1;
    state.inventory![InventoryId.Sword] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.PalaceOfDarkness ).toReturn( true );
  } );

  it( 'can be beaten with a hammer and a bow.', () => {
    state.inventory![InventoryId.Hammer] = 1;
    state.inventory![InventoryId.Bow] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.PalaceOfDarkness ).toReturn( true );
  } );

  it( 'can be beaten (expectedly) with a hammer and Master Sword.', () => {
    state.inventory![InventoryId.Hammer] = 1;
    state.inventory![InventoryId.Sword] = 2;
    state.settings!.itemPlacement = ItemPlacement.Basic;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.PalaceOfDarkness ).toReturn( true );
  } );
} );
