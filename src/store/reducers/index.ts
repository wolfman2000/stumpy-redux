import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { dungeonReducer } from './dungeons';
import { inventoryReducer } from './inventory';
import { settingReducer } from './settings';

const rootReducer = combineReducers( {
  dungeons: dungeonReducer,
  inventory: inventoryReducer,
  settings: settingReducer,
} );

export type StumpyState = StateType<typeof rootReducer>;

export default rootReducer;
