import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getBomb = ( state: StumpyState ) => state.inventory[InventoryId.Bomb];

export const nextBomb = createSelector(
  getBomb,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevBomb = createSelector(
  getBomb,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasBomb = createSelector(
  getBomb,
  ( bomb ) => bomb > 0,
);

export const hasBombsForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBomb,
  hasItemForLightWorld,
);

export const hasBombsForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBomb,
  hasItemForDarkWorld,
);
