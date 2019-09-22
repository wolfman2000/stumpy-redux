import { createSelector } from 'reselect';

import { getTowerOfHera } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, hasBigKey } from './helpers';

export const getTowerOfHeraSmallKeys = createSelector(
  areSmallKeysShuffled,
  getTowerOfHera,
  getSmallKeys,
);

export const canEnterBackBasement = createSelector(
  getTowerOfHeraSmallKeys,
  has1Key,
);

export const hasTowerOfHeraBigKey = createSelector(
  areBigKeysShuffled,
  getTowerOfHera,
  hasBigKey,
);
