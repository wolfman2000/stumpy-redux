import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

const getCape = ( state: StumpyState ) => state.inventory[InventoryId.Cape];

export const nextCape = createSelector(
  getCape,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevCape = createSelector(
  getCape,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasCape = createSelector(
  getCape,
  ( cur ) => cur > 0,
);
