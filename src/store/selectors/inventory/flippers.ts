import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getFlippers = ( state: StumpyState ) => state.inventory[InventoryId.Flippers];

export const nextFlippers = createSelector(
  getFlippers,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevFlippers = createSelector(
  getFlippers,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasFlippers = createSelector(
  getFlippers,
  ( cur ) => cur > 0,
);
