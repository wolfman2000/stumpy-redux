import { createSelector } from 'reselect';

import { getCastleTower } from '..';
import { areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, has2Key } from './helpers';

export const getCastleTowerSmallKeys = createSelector(
  areSmallKeysShuffled,
  getCastleTower,
  getSmallKeys,
);

export const canAccessSecondChest = createSelector(
  getCastleTowerSmallKeys,
  has1Key,
);

export const canAccessAgahnim = createSelector(
  getCastleTowerSmallKeys,
  has2Key,
);
