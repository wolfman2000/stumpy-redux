import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

export const getBottles = ( state: StumpyState ) => state.inventory[InventoryId.Bottle] || 0;

export const nextBottles = createSelector(
  getBottles,
  ( cur ) => wrap( cur + 1, 0, 4 ),
);

export const prevBottles = createSelector(
  getBottles,
  ( cur ) => wrap( cur - 1, 0, 4 ),
);

export const hasBottles = createSelector(
  getBottles,
  ( bot ) => bot > 0,
);
