import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';

const getMoonPearl = ( state: StumpyState ) => state.inventory[InventoryId.MoonPearl];

export const nextMoonPearl = createSelector(
  getMoonPearl,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevMoonPearl = createSelector(
  getMoonPearl,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasMoonPearl = createSelector(
  getMoonPearl,
  ( cur ) => cur > 0,
);

export const hasMoonPearlForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  ( inverted, moon ) => !inverted || moon,
);

export const hasMoonPearlForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  ( inverted, moon ) => inverted || moon,
);
