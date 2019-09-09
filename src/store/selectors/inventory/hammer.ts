import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

const getHammer = ( state: StumpyState ) => state.inventory[InventoryId.Hammer];

export const nextHammer = createSelector(
  getHammer,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevHammer = createSelector(
  getHammer,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasHammer = createSelector(
  getHammer,
  ( cur ) => cur > 0,
);
