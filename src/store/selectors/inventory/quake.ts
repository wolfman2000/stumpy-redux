import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

const getQuake = ( state: StumpyState ) => state.inventory[InventoryId.Quake];

export const nextQuake = createSelector(
  getQuake,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevQuake = createSelector(
  getQuake,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasQuake = createSelector(
  getQuake,
  ( cur ) => cur > 0,
);