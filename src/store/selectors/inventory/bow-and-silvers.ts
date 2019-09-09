import { createSelector } from 'reselect';

import { StumpyState } from '../../reducers';

import { wrap } from '../../../api/helpers';
import InventoryId from '../../../api/inventory/inventory-id';

const getBow = ( state: StumpyState ) => state.inventory[InventoryId.Bow];

const maxBow = ( _: StumpyState ) => 1;

export const nextBow = createSelector(
  getBow,
  maxBow,
  ( bow, max ) => wrap( bow + 1, 0, max ),
);

export const prevBow = createSelector(
  getBow,
  maxBow,
  ( bow, max ) => wrap( bow - 1, 0, max ),
);

export const hasBow = createSelector(
  getBow,
  ( bow ) => bow > 0,
);

const getSilverArrows = ( state: StumpyState ) => state.inventory[InventoryId.SilverArrows];

export const nextSilverArrows = createSelector(
  getSilverArrows,
  ( cur ) => wrap( cur + 1, 0, 1 ),
);

export const prevSilverArrows = createSelector(
  getSilverArrows,
  ( cur ) => wrap( cur - 1, 0, 1 ),
);

export const hasSilverArrows = createSelector(
  getSilverArrows,
  ( silvers ) => silvers > 0,
);

export const hasBowAndSilvers = createSelector(
  hasBow,
  hasSilverArrows,
  ( bow, silvers ) => bow && silvers,
);
