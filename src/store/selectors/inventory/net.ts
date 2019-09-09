import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getNet = ( state: StumpyState ) => state.inventory[InventoryId.Net];

export const nextNet = createSelector(
  getNet,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevNet = createSelector(
  getNet,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasNet = createSelector(
  getNet,
  ( cur ) => cur > 0,
);
