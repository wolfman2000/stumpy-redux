import { createSelector } from 'reselect';

import { StumpyState } from '../../reducers';

import { CastleTower, CommonDungeon, EasternPalace, GanonsTower, HyruleCastle, MedallionDungeon, ZeldaDungeon } from '../../../api/dungeon/dungeon';
import { DungeonId } from '../../../api/dungeon/dungeon-id';

export const getHyruleCastle = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.HyruleCastle] as HyruleCastle;
};

export const getCastleTower = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.CastleTower] as CastleTower;
};

export const getEasternPalace = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.EasternPalace] as EasternPalace;
};

export const getDesertPalace = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.DesertPalace] as CommonDungeon;
};

export const getTowerOfHera = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.TowerOfHera] as CommonDungeon;
};

export const getPalaceOfDarkness = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.PalaceOfDarkness] as CommonDungeon;
};

export const getSwampPalace = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.SwampPalace] as CommonDungeon;
};

export const getSkullWoods = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.SkullWoods] as CommonDungeon;
};

export const getThievesTown = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.ThievesTown] as CommonDungeon;
};

export const getIcePalace = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.IcePalace] as CommonDungeon;
};

export const getMiseryMire = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.MiseryMire] as MedallionDungeon;
};

export const getTurtleRock = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.TurtleRock] as MedallionDungeon;
};

export const getGanonsTower = ( state: StumpyState ) => {
  return state.dungeons[DungeonId.GanonsTower] as GanonsTower;
};

export const makeGetDungeon = () => {
  return ( state: StumpyState, id: DungeonId ): ZeldaDungeon | null => {
    switch ( id ) {
      case DungeonId.CastleTower:
        return getCastleTower( state );
      case DungeonId.DesertPalace:
        return getDesertPalace( state );
      case DungeonId.EasternPalace:
        return getEasternPalace( state );
      case DungeonId.GanonsTower:
        return getGanonsTower( state );
      case DungeonId.HyruleCastle:
        return getHyruleCastle( state );
      case DungeonId.IcePalace:
        return getIcePalace( state );
      case DungeonId.MiseryMire:
        return getMiseryMire( state );
      case DungeonId.PalaceOfDarkness:
        return getPalaceOfDarkness( state );
      case DungeonId.SkullWoods:
        return getSkullWoods( state );
      case DungeonId.SwampPalace:
        return getSwampPalace( state );
      case DungeonId.ThievesTown:
        return getThievesTown( state );
      case DungeonId.TowerOfHera:
        return getTowerOfHera( state );
      case DungeonId.TurtleRock:
        return getTurtleRock( state );
    }

    return null;
  };
};
