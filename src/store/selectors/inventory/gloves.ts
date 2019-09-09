import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from '.';

const getGlove = ( state: StumpyState ) => state.inventory[InventoryId.Glove];

export const nextGlove = createSelector(
  getGlove,
  ( cur ) => wrap( cur + 1, 0, 2 ),
);

export const prevGlove = createSelector(
  getGlove,
  ( cur ) => wrap( cur - 1, 0, 2 ),
);

export const hasGlove = createSelector(
  getGlove,
  ( glove ) => glove > 0,
);

export const hasTitans = createSelector(
  getGlove,
  ( glove ) => glove > 1,
);
