import { createSelector } from 'reselect';

import { getDesertPalace } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getDesertPalaceSmallKeys = createSelector(
  areSmallKeysShuffled,
  getDesertPalace,
  getSmallKeys,
);

export const canEnterEastDesertWing = createSelector(
  getDesertPalaceSmallKeys,
  has1Key,
);

export const hasDesertPalaceBigKey = createSelector(
  areBigKeysShuffled,
  getDesertPalace,
  hasBigKey,
);
