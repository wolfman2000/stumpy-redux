import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getMirror = ( state: StumpyState ) => state.inventory[InventoryId.Mirror];

export const nextMirror = createSelector(
  getMirror,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevMirror = createSelector(
  getMirror,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasMirror = createSelector(
  getMirror,
  ( cur ) => cur > 0,
);
