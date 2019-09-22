import { createSelector } from 'reselect';

import { getIcePalace } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getIcePalaceSmallKeys = createSelector(
  areSmallKeysShuffled,
  getIcePalace,
  getSmallKeys,
);

export const canEnterBigChestRoom = createSelector(
  getIcePalaceSmallKeys,
  has1Key,
);

export const hasIcePalaceBigKey = createSelector(
  areBigKeysShuffled,
  getIcePalace,
  hasBigKey,
);
