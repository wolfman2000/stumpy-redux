import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { inventoryReducer } from './inventory';
import { settingReducer } from './settings';

const rootReducer = combineReducers( {
  inventory: inventoryReducer,
  settings: settingReducer,
} );

export type StumpyState = StateType<typeof rootReducer>;

export default rootReducer;
