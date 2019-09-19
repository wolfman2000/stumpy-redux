import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getHookshot = ( state: StumpyState ) => state.inventory[InventoryId.Hookshot];

export const nextHookshot = createSelector(
  getHookshot,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevHookshot = createSelector(
  getHookshot,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasHookshot = createSelector(
  getHookshot,
  ( hook ) => hook > 0,
);

export const hasHookshotForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasHookshot,
  hasItemForLightWorld,
);

export const hasHookshotForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasHookshot,
  hasItemForDarkWorld,
);
