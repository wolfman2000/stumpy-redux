import { createSelector } from 'reselect';

import { getSkullWoods } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getSkullWoodsSmallKeys = createSelector(
  areSmallKeysShuffled,
  getSkullWoods,
  getSmallKeys,
);

export const canEnterFrontDoor = createSelector(
  getSkullWoodsSmallKeys,
  has1Key,
);

export const hasSkullWoodsBigKey = createSelector(
  areBigKeysShuffled,
  getSkullWoods,
  hasBigKey,
);
