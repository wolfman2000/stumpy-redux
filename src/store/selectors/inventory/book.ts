import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';
import { isInverted } from '../settings';
import { hasItemForDarkWorld, hasItemForLightWorld } from './helpers';
import { hasMoonPearl } from './moon-pearl';

const getBook = ( state: StumpyState ) => state.inventory[InventoryId.Book];

export const nextBook = createSelector(
  getBook,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevBook = createSelector(
  getBook,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasBook = createSelector(
  getBook,
  ( cur ) => cur > 0,
);

export const hasBookForLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBook,
  hasItemForLightWorld,
);

export const hasBookForDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBook,
  hasItemForDarkWorld,
);
