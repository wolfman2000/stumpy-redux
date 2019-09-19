import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getGlove = ( state: StumpyState ) => state.inventory[InventoryId.Glove];

export const nextGlove = createSelector(
  getGlove,
  ( cur ) => wrap( cur + 1, 0, 2 ),
);

export const prevGlove = createSelector(
  getGlove,
  ( cur ) => wrap( cur - 1, 0, 2 ),
);

export const hasGlove = createSelector(
  getGlove,
  ( glove ) => glove > 0,
);

export const hasTitans = createSelector(
  getGlove,
  ( glove ) => glove > 1,
);

export const hasGloveForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasGlove,
  hasItemForLightWorld,
);

export const hasGloveForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasGlove,
  hasItemForDarkWorld,
);

export const hasTitansForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasTitans,
  hasItemForLightWorld,
);

export const hasTitansForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasTitans,
  hasItemForDarkWorld,
);
