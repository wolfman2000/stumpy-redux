import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getMagic = ( state: StumpyState ) => state.inventory[InventoryId.Magic];

// TODO: Confirm if quarter magic is still in the new version.
export const nextMagic = createSelector(
  getMagic,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevMagic = createSelector(
  getMagic,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasMagic = createSelector(
  getMagic,
  ( cur ) => cur > 0,
);
