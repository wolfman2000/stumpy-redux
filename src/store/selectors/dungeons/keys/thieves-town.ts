import { createSelector } from 'reselect';

import { getThievesTown } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getThievesTownSmallKeys = createSelector(
  areSmallKeysShuffled,
  getThievesTown,
  getSmallKeys,
);

export const canEnterBigChestRoom = createSelector(
  getThievesTownSmallKeys,
  has1Key,
);

export const hasThievesTownBigKey = createSelector(
  areBigKeysShuffled,
  getThievesTown,
  hasBigKey,
);
