import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getQuake = ( state: StumpyState ) => state.inventory[InventoryId.Quake];

export const nextQuake = createSelector(
  getQuake,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevQuake = createSelector(
  getQuake,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasQuake = createSelector(
  getQuake,
  ( cur ) => cur > 0,
);

export const hasQuakeForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasQuake,
  hasItemForLightWorld,
);

export const hasQuakeForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasQuake,
  hasItemForDarkWorld,
);
