import { createSelector } from 'reselect';
import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

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
