import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

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
