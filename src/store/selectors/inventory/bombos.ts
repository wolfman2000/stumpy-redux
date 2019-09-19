import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getBombos = ( state: StumpyState ) => state.inventory[InventoryId.Bombos];

export const nextBombos = createSelector(
  getBombos,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevBombos = createSelector(
  getBombos,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasBombos = createSelector(
  getBombos,
  ( bombos ) => bombos > 0,
);

export const hasBombosForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBombos,
  hasItemForLightWorld,
);

export const hasBombosForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBombos,
  hasItemForDarkWorld,
);
