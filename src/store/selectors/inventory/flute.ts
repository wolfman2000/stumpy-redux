import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

const getFlute = ( state: StumpyState ) => state.inventory[InventoryId.Flute];

export const nextFlute = createSelector(
  getFlute,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevFlute = createSelector(
  getFlute,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasFlute = createSelector(
  getFlute,
  ( cur ) => cur > 0,
);
