import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getMushroom = ( state: StumpyState ) => state.inventory[InventoryId.Mushroom];

export const nextMushroom = createSelector(
  getMushroom,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevMushroom = createSelector(
  getMushroom,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasMushroom = createSelector(
  getMushroom,
  ( mush ) => mush > 0,
);
