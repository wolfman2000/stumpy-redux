import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getIceRod = ( state: StumpyState ) => state.inventory[InventoryId.IceRod];

export const nextIceRod = createSelector(
  getIceRod,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevIceRod = createSelector(
  getIceRod,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasIceRod = createSelector(
  getIceRod,
  ( ice ) => ice > 0,
);
