// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { makeCanDefeatBoss } from '.';

describe( 'The boss Lanmolas', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: fallbackDungeonMaps,
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.DesertPalace ).toReturn( false );
  } );

  it( 'can be beaten with bombs if lucky.', () => {
    state.inventory![InventoryId.Bomb] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.DesertPalace ).toReturn( true );
  } );

  it( 'can be beaten with the fire rod.', () => {
    state.inventory![InventoryId.FireRod] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.DesertPalace ).toReturn( true );
  } );

  it( 'can be beaten with the hammer.', () => {
    state.inventory![InventoryId.Hammer] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.DesertPalace ).toReturn( true );
  } );

  it( 'can be beaten with the cane of somaria.', () => {
    state.inventory![InventoryId.Somaria] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.DesertPalace ).toReturn( true );
  } );
} );
