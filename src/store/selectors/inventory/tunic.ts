import { createSelector } from 'reselect';

import { isNormalItemPool } from '../settings';

import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

const getTunic = ( state: StumpyState ) => state.inventory[InventoryId.Tunic];

export const maxTunic = createSelector(
  isNormalItemPool,
  ( normal ) => {
    if ( normal ) {
      return 2;
    }

    return 0;
  },
);

export const nextTunic = createSelector(
  getTunic,
  maxTunic,
  ( cur, max ) => wrap( cur + 1, 0, max ),
);

export const prevTunic = createSelector(
  getTunic,
  maxTunic,
  ( cur, max ) => wrap( cur - 1, 0, max ),
);

export const hasTunic = ( _: StumpyState ) => true;
