import { createSelector } from 'reselect';

import { getPalaceOfDarkness } from '..';
import { hasBow } from '../../inventory/bow-and-silvers';
import { hasHammer } from '../../inventory/hammer';
import { areBigKeysShuffled, areSmallKeysShuffled } from '../../settings';
import { getSmallKeys, has1Key, has2Key, has3Key, has4Key, has5Key, has6Key, hasBigKey } from './helpers';

export const getPalaceOfDarknessSmallKeys = createSelector(
  areSmallKeysShuffled,
  getPalaceOfDarkness,
  getSmallKeys,
);

export const getPodKeysWithBowPenalty = createSelector(
  getPalaceOfDarknessSmallKeys,
  hasBow,
  hasHammer,
  ( pod, bow, hammer ) => {
    let keys = pod;
    if ( !( bow && hammer ) ) {
      keys -= 1;
    }

    return keys;
  },
);

export const canEnterPodFrontDoor = createSelector(
  getPalaceOfDarknessSmallKeys,
  has1Key,
);

export const canReachBack = createSelector(
  getPodKeysWithBowPenalty,
  has2Key,
);

export const canReachDarkMaze = createSelector(
  getPodKeysWithBowPenalty,
  has3Key,
);

export const canReachTurtleArena = createSelector(
  getPodKeysWithBowPenalty,
  has4Key,
);

export const canAccessHarmlessHallway = createSelector(
  getPodKeysWithBowPenalty,
  has5Key,
);

export const canGetPodBigKey = createSelector(
  getPodKeysWithBowPenalty,
  has6Key,
);

export const hasPalaceOfDarknessBigKey = createSelector(
  areBigKeysShuffled,
  getPalaceOfDarkness,
  hasBigKey,
);
