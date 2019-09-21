// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { makeCanDefeatBoss } from '.';

describe( 'The boss Moldorm', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      inventory: {},
      settings: {...fallbackSettings},
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TowerOfHera ).toReturn( false );
  } );

  it( 'can be beaten with the golden sword.', () => {
    state.inventory![InventoryId.Sword] = 4;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TowerOfHera ).toReturn( true );
  } );
} );
