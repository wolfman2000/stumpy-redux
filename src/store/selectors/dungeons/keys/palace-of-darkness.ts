import { createSelector } from 'reselect';

import { getPalaceOfDarkness } from '..';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, hasBigKey } from './helpers';

export const getPalaceOfDarknessSmallKeys = createSelector(
  areSmallKeysShuffled,
  getPalaceOfDarkness,
  getSmallKeys,
);

export const hasPalaceOfDarknessBigKey = createSelector(
  areBigKeysShuffled,
  getPalaceOfDarkness,
  hasBigKey,
);
