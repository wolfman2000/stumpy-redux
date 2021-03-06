import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getLantern = ( state: StumpyState ) => state.inventory[InventoryId.Lantern];

export const nextLantern = createSelector(
  getLantern,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevLantern = createSelector(
  getLantern,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasLantern = createSelector(
  getLantern,
  ( cur ) => cur > 0,
);
