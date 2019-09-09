import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';

import { wrap } from './';

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
