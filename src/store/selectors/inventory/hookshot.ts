import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';
import { wrap } from './';

const getHookshot = ( state: StumpyState ) => state.inventory[InventoryId.Hookshot];

export const nextHookshot = createSelector(
  getHookshot,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevHookshot = createSelector(
  getHookshot,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasHookshot = createSelector(
  getHookshot,
  ( hook ) => hook > 0,
);
