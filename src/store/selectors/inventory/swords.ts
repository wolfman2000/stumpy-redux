import { createSelector } from 'reselect';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';
import { isExpertItemPool, isHardItemPool, isNormalItemPool, isSwordless } from '../settings';

import { wrap } from '.';

const getSword = ( state: StumpyState ) => state.inventory[InventoryId.Sword];

export const maxSword = createSelector(
  isSwordless,
  isExpertItemPool,
  isHardItemPool,
  ( none, expert, hard ) => {
    if ( none ) {
      return 0;
    }
    if ( expert ) {
      return 2;
    }
    if ( hard ) {
      return 3;
    }
    return 4;
  },
);

export const nextSword = createSelector(
  getSword,
  maxSword,
  ( cur, max ) => wrap( cur + 1, 0, max ),
);

export const prevSword = createSelector(
  getSword,
  maxSword,
  ( cur, max ) => wrap( cur - 1, 0, max ),
);

export const hasSword = createSelector(
  getSword,
  isSwordless,
  ( sword, less ) => !less && sword > 0,
);

export const hasMasterSword = createSelector(
  getSword,
  hasSword,
  ( sword, has ) => has && sword > 1,
);

export const hasTemperedSword = createSelector(
  isExpertItemPool,
  getSword,
  hasSword,
  ( expert, sword, has ) => !expert && has && sword > 2,
);

export const hasGoldenSword = createSelector(
  isNormalItemPool,
  getSword,
  hasSword,
  ( normal, sword, has ) => normal && has && sword > 3,
);
