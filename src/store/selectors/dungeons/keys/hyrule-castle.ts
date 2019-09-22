import { createSelector } from 'reselect';

import { getHyruleCastle } from '..';
import { areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key } from './helpers';

export const getCastleSmallKeys = createSelector(
  areSmallKeysShuffled,
  getHyruleCastle,
  getSmallKeys,
);

export const hasSewerKey = createSelector(
  getCastleSmallKeys,
  has1Key,
);
