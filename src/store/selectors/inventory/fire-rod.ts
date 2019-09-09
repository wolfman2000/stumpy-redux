import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getFireRod = ( state: StumpyState ) => state.inventory[InventoryId.FireRod];

export const nextFireRod = createSelector(
  getFireRod,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevFireRod = createSelector(
  getFireRod,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasFireRod = createSelector(
  getFireRod,
  ( fire ) => fire > 0,
);
