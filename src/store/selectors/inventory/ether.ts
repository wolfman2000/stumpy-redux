import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getEther = ( state: StumpyState ) => state.inventory[InventoryId.Ether];

export const nextEther = createSelector(
  getEther,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevEther = createSelector(
  getEther,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasEther = createSelector(
  getEther,
  ( ether ) => ether > 0,
);

export const hasEtherForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasEther,
  hasItemForLightWorld,
);

export const hasEtherForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasEther,
  hasItemForDarkWorld,
);
