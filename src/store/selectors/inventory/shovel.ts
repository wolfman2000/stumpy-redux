import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getShovel = ( state: StumpyState ) => state.inventory[InventoryId.Shovel];

export const nextShovel = createSelector(
  getShovel,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevShovel = createSelector(
  getShovel,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasShovel = createSelector(
  getShovel,
  ( cur ) => cur > 0,
);

export const hasShovelForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasShovel,
  hasItemForLightWorld,
);

export const hasShovelForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasShovel,
  hasItemForDarkWorld,
);
