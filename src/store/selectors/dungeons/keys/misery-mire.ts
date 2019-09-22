import { createSelector } from 'reselect';

import { getMiseryMire } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getMiseryMireSmallKeys = createSelector(
  areSmallKeysShuffled,
  getMiseryMire,
  getSmallKeys,
);

export const canEnterBigChestRoom = createSelector(
  getMiseryMireSmallKeys,
  has1Key,
);

export const hasMiseryMireBigKey = createSelector(
  areBigKeysShuffled,
  getMiseryMire,
  hasBigKey,
);
