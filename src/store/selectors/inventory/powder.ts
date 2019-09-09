import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getPowder = ( state: StumpyState ) => state.inventory[InventoryId.Powder];

export const nextPowder = createSelector(
  getPowder,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevPowder = createSelector(
  getPowder,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasPowder = createSelector(
  getPowder,
  ( powder ) => powder > 0,
);
