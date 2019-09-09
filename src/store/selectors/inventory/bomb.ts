import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getBomb = ( state: StumpyState ) => state.inventory[InventoryId.Bomb];

export const nextBomb = createSelector(
  getBomb,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevBomb = createSelector(
  getBomb,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasBomb = createSelector(
  getBomb,
  ( bomb ) => bomb > 0,
);
