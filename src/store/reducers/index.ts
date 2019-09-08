import { combineReducers } from 'redux';

import { settingReducer } from './settings';

const rootReducer = combineReducers( {
  settings: settingReducer,
} );

export default rootReducer;
