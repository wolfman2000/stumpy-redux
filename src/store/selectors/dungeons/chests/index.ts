import { createSelector } from 'reselect';

import { StumpyState } from '../../../reducers';

import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import { areBigKeysShuffled, areMapsCompassesShuffled, areSmallKeysShuffled } from '../../settings';

export const maxChestsFromHyruleCastle = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  ( map, small ) => {
    let max = 8;
    if ( !map ) {
      max -= 1;
    }
    if ( !small ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromCastleTower = createSelector(
  areSmallKeysShuffled,
  ( small ) => {
    let max = 2;
    if ( !small ) {
      max -= 2;
    }
    return max;
  },
);

export const maxChestsFromEasternPalace = createSelector(
  areMapsCompassesShuffled,
  areBigKeysShuffled,
  ( map, big ) => {
    let max = 6;
    if ( !map ) {
      max -= 2;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromDesertPalace = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  areBigKeysShuffled,
  ( map, small, big ) => {
    let max = 6;
    if ( !map ) {
      max -= 2;
    }
    if ( !small ) {
      max -= 1;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromTowerOfHera = maxChestsFromDesertPalace;

export const maxChestsFromPalaceOfDarkness = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  areBigKeysShuffled,
  ( map, small, big ) => {
    let max = 14;
    if ( !map ) {
      max -= 2;
    }
    if ( !small ) {
      max -= 6;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromSwampPalace = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  areBigKeysShuffled,
  ( map, small, big ) => {
    let max = 10;
    if ( !map ) {
      max -= 2;
    }
    if ( !small ) {
      max -= 1;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromSkullWoods = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  areBigKeysShuffled,
  ( map, small, big ) => {
    let max = 8;
    if ( !map ) {
      max -= 2;
    }
    if ( !small ) {
      max -= 3;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromThievesTown = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  areBigKeysShuffled,
  ( map, small, big ) => {
    let max = 8;
    if ( !map ) {
      max -= 2;
    }
    if ( !small ) {
      max -= 1;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromIcePalace = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  areBigKeysShuffled,
  ( map, small, big ) => {
    let max = 8;
    if ( !map ) {
      max -= 2;
    }
    if ( !small ) {
      max -= 2;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromMiseryMire = maxChestsFromSkullWoods;

export const maxChestsFromTurtleRock = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  areBigKeysShuffled,
  ( map, small, big ) => {
    let max = 12;
    if ( !map ) {
      max -= 2;
    }
    if ( !small ) {
      max -= 4;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const maxChestsFromGanonsTower = createSelector(
  areMapsCompassesShuffled,
  areSmallKeysShuffled,
  areBigKeysShuffled,
  ( map, small, big ) => {
    let max = 27;
    if ( !map ) {
      max -= 2;
    }
    if ( !small ) {
      max -= 4;
    }
    if ( !big ) {
      max -= 1;
    }
    return max;
  },
);

export const makeGetMaxChestsFromDungeon = () => {
  return ( state: StumpyState, dungeonId: DungeonId ): number => {
    switch ( dungeonId ) {
      case DungeonId.HyruleCastle:
        return maxChestsFromHyruleCastle( state );
      case DungeonId.CastleTower:
        return maxChestsFromCastleTower( state );
      case DungeonId.EasternPalace:
        return maxChestsFromEasternPalace( state );
      case DungeonId.DesertPalace:
        return maxChestsFromDesertPalace( state );
      case DungeonId.TowerOfHera:
        return maxChestsFromTowerOfHera( state );
      case DungeonId.PalaceOfDarkness:
        return maxChestsFromPalaceOfDarkness( state );
      case DungeonId.SwampPalace:
        return maxChestsFromSwampPalace( state );
      case DungeonId.SkullWoods:
        return maxChestsFromSkullWoods( state );
      case DungeonId.ThievesTown:
        return maxChestsFromThievesTown( state );
      case DungeonId.IcePalace:
        return maxChestsFromIcePalace( state );
      case DungeonId.MiseryMire:
        return maxChestsFromMiseryMire( state );
      case DungeonId.TurtleRock:
        return maxChestsFromTurtleRock( state );
      case DungeonId.GanonsTower:
        return maxChestsFromGanonsTower( state );
      default:
        return 0;
    }
  };
};
