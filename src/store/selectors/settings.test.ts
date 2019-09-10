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

import GameType from '../../api/settings/gameplay/game-type';

import { fallbackSettings } from '../../api/settings';

describe( 'The settings selectors', () => {
  const state: Partial<StumpyState> = {
    settings: fallbackSettings,
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
