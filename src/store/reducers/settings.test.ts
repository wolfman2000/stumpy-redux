import { Reducer } from 'redux-testkit';

import { doNothing, updateSettings } from '../actions';

import { fallbackSettings, settingReducer } from './settings';

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
} );
