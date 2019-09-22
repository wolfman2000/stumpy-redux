import { createSelector } from 'reselect';

import { getTurtleRock } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getTurtleRockSmallKeys = createSelector(
  areSmallKeysShuffled,
  getTurtleRock,
  getSmallKeys,
);

export const canEnterBigChestRoom = createSelector(
  getTurtleRockSmallKeys,
  has1Key,
);

export const hasTurtleRockBigKey = createSelector(
  areBigKeysShuffled,
  getTurtleRock,
  hasBigKey,
);
