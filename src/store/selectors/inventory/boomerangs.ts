import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from './';

import InventoryId from '../../../api/inventory/inventory-id';

const getBlueBoomerang = ( state: StumpyState ) => state.inventory[InventoryId.BlueBoomerang];

export const nextBlueBoomerang = createSelector(
  getBlueBoomerang,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevBlueBoomerang = createSelector(
  getBlueBoomerang,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasBlueBoomerang = createSelector(
  getBlueBoomerang,
  ( boom ) => boom > 0,
);

const getRedBoomerang = ( state: StumpyState ) => state.inventory[InventoryId.RedBoomerang];

export const nextRedBoomerang = createSelector(
  getRedBoomerang,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevRedBoomerang = createSelector(
  getRedBoomerang,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasRedBoomerang = createSelector(
  getRedBoomerang,
  ( boom ) => boom > 0,
);

export const hasBothBoomerangs = createSelector(
  hasBlueBoomerang,
  hasRedBoomerang,
  ( blue, red ) => blue && red,
);
