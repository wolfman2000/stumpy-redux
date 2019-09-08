import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { settingReducer } from './settings';

const rootReducer = combineReducers( {
  settings: settingReducer,
} );

export type StumpyState = StateType<typeof rootReducer>;

export default rootReducer;
