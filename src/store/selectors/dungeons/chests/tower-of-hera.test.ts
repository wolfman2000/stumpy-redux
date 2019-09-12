// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { makeGetMaxChestsFromDungeon } from '.';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import { fallbackSettings } from '../../../../api/settings';
import DungeonItems from '../../../../api/settings/logic/dungeon-items';

const dungeonId = DungeonId.TowerOfHera;

describe( 'The Tower of Hera', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      settings: fallbackSettings,
    };
  } );

  it( 'has 2 items available normally.', () => {
    state.settings!.dungeonItems = DungeonItems.Standard;

    Selector( makeGetMaxChestsFromDungeon() ).expect( state, dungeonId ).toReturn( 2 );
  } );

  it( 'has 4 items available if maps and compasses are shuffled outside.', () => {
    state.settings!.dungeonItems = DungeonItems.Mc;

    Selector( makeGetMaxChestsFromDungeon() ).expect( state, dungeonId ).toReturn( 4 );
  } );

  it( 'has 5 items available if maps and compasses, & small keys are shuffled outside.', () => {
    state.settings!.dungeonItems = DungeonItems.Mcs;

    Selector( makeGetMaxChestsFromDungeon() ).expect( state, dungeonId ).toReturn( 5 );
  } );

  it( 'has 6 items available if all dungeon based items are shuffled outside.', () => {
    state.settings!.dungeonItems = DungeonItems.Full;

    Selector( makeGetMaxChestsFromDungeon() ).expect( state, dungeonId ).toReturn( 6 );
  } );
} );
