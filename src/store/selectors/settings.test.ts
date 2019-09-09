// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../reducers';

import {
  hasShuffledBosses,
  isInverted,
  isNoGlitches,
  isSwordless,
  makeGetSetting,
} from './settings';

import BossShuffle from '../../api/settings/gameplay/boss-shuffle';
import GameType from '../../api/settings/gameplay/game-type';

import DungeonItems from '../../api/settings/logic/dungeon-items';
import Glitches from '../../api/settings/logic/glitches';

import GanonVulernable from '../../api/settings/goal/ganon-vulnerable';
import Goal from '../../api/settings/goal/goal';
import OpenTower from '../../api/settings/goal/open-tower';

import ItemPool from '../../api/settings/difficulty/item-pool';
import Swords from '../../api/settings/difficulty/swords';

describe( 'The settings selectors', () => {
  const state: Partial<StumpyState> = {
    settings: {
      bossShuffle: BossShuffle.None,
      dungeonItems: DungeonItems.Standard,
      gameType: GameType.Open,
      ganonVulernable: GanonVulernable.Seven,
      glitches: Glitches.None,
      goal: Goal.DefeatGanon,
      itemPool: ItemPool.Normal,
      openTower: OpenTower.Seven,
      swords: Swords.Assured,
    },
  };

  it( 'can confirm if we are not requiring glitches.', () => {
    Selector( isNoGlitches ).expect( state ).toReturn( true );
  } );

  it( 'can confirm we are not in a swordless seed.', () => {
    Selector( isSwordless ).expect( state ).toReturn( false );
  } );

  it( 'can confirm we are not shuffling bosses.', () => {
    Selector( hasShuffledBosses ).expect( state ).toReturn( false );
  } );

  it( 'can confirm we are not in inverted mode directly.', () => {
    Selector( isInverted ).expect( state ).toReturn( false );
  } );

  it( 'can confirm we are not in inverted mode indirectly.', () => {
    const result = Selector( makeGetSetting() ).execute( state, 'gameType' );
    expect( result ).toBe( GameType.Open );
  } );

  it( 'will return a falsy value if an invalid setting comes in.', () => {
    const result = Selector( makeGetSetting() ).execute( state, 'nonExistant' );
    expect( result ).toBeFalsy();
  } );
} );
