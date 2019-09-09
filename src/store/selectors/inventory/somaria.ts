import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

const getSomaria = ( state: StumpyState ) => state.inventory[InventoryId.Somaria];

export const nextSomaria = createSelector(
  getSomaria,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevSomaria = createSelector(
  getSomaria,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasSomaria = createSelector(
  getSomaria,
  ( cur ) => cur > 0,
);
