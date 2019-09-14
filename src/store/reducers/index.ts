import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { dungeonReducer } from './dungeons';
import { inventoryReducer } from './inventory';
import { settingReducer } from './settings';
import { edgeReducer, nodeReducer } from './traversals';

const rootReducer = combineReducers( {
  dungeons: dungeonReducer,
  edges: edgeReducer,
  inventory: inventoryReducer,
  nodes: nodeReducer,
  settings: settingReducer,
} );

export type StumpyState = StateType<typeof rootReducer>;

export default rootReducer;
