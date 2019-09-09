import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

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
