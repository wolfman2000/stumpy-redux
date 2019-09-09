import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from '.';

const getShovel = ( state: StumpyState ) => state.inventory[InventoryId.Shovel];

export const nextShovel = createSelector(
  getShovel,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevShovel = createSelector(
  getShovel,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasShovel = createSelector(
  getShovel,
  ( cur ) => cur > 0,
);
