import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { isExpertItemPool, isHardItemPool } from '../settings';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

export const getHeartContainers = ( state: StumpyState ) => state.inventory[InventoryId.HeartContainer];

export const maxHeartContainers = createSelector(
  isExpertItemPool,
  isHardItemPool,
  ( expert, hard ) => {
    if ( expert ) {
      return 8;
    }
    if ( hard ) {
      return 14;
    }
    return 20;
  },
);

export const nextHeartContainers = createSelector(
  getHeartContainers,
  maxHeartContainers,
  ( cur, max ) => wrap( cur + 1, 3, max ),
);

export const prevHeartContainers = createSelector(
  getHeartContainers,
  maxHeartContainers,
  ( cur, max ) => wrap( cur - 1, 3, max ),
);

export const hasHeartContainers = ( _: StumpyState ) => true;
