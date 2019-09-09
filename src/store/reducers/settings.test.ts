// tslint:disable-next-line: no-implicit-dependencies
import { Reducer } from 'redux-testkit';

import { fallbackSettings } from '../../api/settings';
import Swords from '../../api/settings/difficulty/swords';
import BossShuffle from '../../api/settings/gameplay/boss-shuffle';

import { doNothing, updateSettings } from '../actions';

import { settingReducer } from './settings';

describe( 'The setting reducer', () => {
  it( 'should return the initial state', () => {
    Reducer( settingReducer ).expect( doNothing() ).toReturnState( fallbackSettings );
  } );

  it( 'should allow updating the game mode setting.', () => {
    const payload = {
      key: 'gameType',
      value: 2,
    };
    const result = settingReducer( undefined, updateSettings( payload ) );

    expect( result.gameType ).toBe( 2 );
  } );

  it( 'should allow updating two settings consecutively, preserving state.', () => {
    const firstGo = settingReducer( undefined, updateSettings( {
      key: 'bossShuffle',
      value: BossShuffle.Full,
    } ) );

    const secondGo = settingReducer( firstGo, updateSettings( {
      key: 'swords',
      value: Swords.Swordless,
    } ) );

    expect( secondGo.bossShuffle ).toBe( BossShuffle.Full );
    expect( secondGo.swords ).toBe( Swords.Swordless );
  } );
} );
