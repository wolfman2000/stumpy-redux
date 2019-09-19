import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getBoots = ( state: StumpyState ) => state.inventory[InventoryId.Boots];

export const nextBoots = createSelector(
  getBoots,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevBoots = createSelector(
  getBoots,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasBoots = createSelector(
  getBoots,
  ( cur ) => cur > 0,
);

export const hasBootsForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBoots,
  hasItemForLightWorld,
);

export const hasBootsForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBoots,
  hasItemForDarkWorld,
);
