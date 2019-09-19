import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';

const getFlute = ( state: StumpyState ) => state.inventory[InventoryId.Flute];

export const nextFlute = createSelector(
  getFlute,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevFlute = createSelector(
  getFlute,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasFlute = createSelector(
  getFlute,
  ( cur ) => cur > 0,
);

export const hasFluteForLightWorld = createSelector(
  isInverted,
  hasFlute,
  ( inverted, flute ) => !inverted && flute,
);

export const hasFluteForDarkWorld = createSelector(
  isInverted,
  hasFlute,
  ( inverted, flute ) => inverted && flute,
);
