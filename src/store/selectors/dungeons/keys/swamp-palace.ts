import { createSelector } from 'reselect';

import { getSwampPalace } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getSwampPalaceSmallKeys = createSelector(
  areSmallKeysShuffled,
  getSwampPalace,
  getSmallKeys,
);

export const canEnterFrontSwampDoor = createSelector(
  getSwampPalaceSmallKeys,
  has1Key,
);

export const hasSwampPalaceBigKey = createSelector(
  areBigKeysShuffled,
  getSwampPalace,
  hasBigKey,
);
