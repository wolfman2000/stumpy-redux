import { createSelector } from 'reselect';

import { isHardItemPool, isNormalItemPool } from '../settings';

import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getShield = ( state: StumpyState ) => state.inventory[InventoryId.Shield];

const maxShield = createSelector(
  isNormalItemPool,
  isHardItemPool,
  ( norm, hard ) => {
    if ( norm ) {
      return 3;
    }
    if ( hard ) {
      return 2;
    }
    return 1;
  },
);

export const nextShield = createSelector(
  getShield,
  maxShield,
  ( cur, max ) => wrap( cur + 1, 0, max ),
);

export const prevShield = createSelector(
  getShield,
  maxShield,
  ( cur, max ) => wrap( cur - 1, 0, max ),
);

export const hasShield = createSelector(
  getShield,
  maxShield,
  ( shield, max ) => shield > 0 && shield <= max,
);

export const hasMirrorShield = createSelector(
  getShield,
  ( shield ) => shield === 3,
);
