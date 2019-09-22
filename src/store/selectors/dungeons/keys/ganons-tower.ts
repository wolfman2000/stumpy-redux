import { createSelector } from 'reselect';

import { getGanonsTower } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getGanonsTowerSmallKeys = createSelector(
  areSmallKeysShuffled,
  getGanonsTower,
  getSmallKeys,
);

export const canEnterBigChestRoom = createSelector(
  getGanonsTowerSmallKeys,
  has1Key,
);

export const hasGanonsTowerBigKey = createSelector(
  areBigKeysShuffled,
  getGanonsTower,
  hasBigKey,
);
