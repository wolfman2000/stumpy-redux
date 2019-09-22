import { createSelector } from 'reselect';

import { getEasternPalace } from '..';
import { areBigKeysShuffled } from '../../settings';
import { hasBigKey } from './helpers';

export const hasEasternPalaceBigKey = createSelector(
  areBigKeysShuffled,
  getEasternPalace,
  hasBigKey,
);
