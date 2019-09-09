import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

const getByrna = ( state: StumpyState ) => state.inventory[InventoryId.Byrna];

export const nextByrna = createSelector(
  getByrna,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevByrna = createSelector(
  getByrna,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasByrna = createSelector(
  getByrna,
  ( cur ) => cur > 0,
);
