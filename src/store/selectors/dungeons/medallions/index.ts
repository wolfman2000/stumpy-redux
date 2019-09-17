import { StumpyState } from '../../../reducers';

import { IMedallionDungeon } from '../../../../api/dungeon/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import { Medallion } from '../../../../api/dungeon/medallion';

export const getMiseryMireMedallionEntry = ( state: StumpyState ): Medallion => {
  return ( state.dungeons[DungeonId.MiseryMire] as IMedallionDungeon ).medallion;
};

export const getTurtleRockMedallionEntry = ( state: StumpyState ): Medallion => {
  return ( state.dungeons[DungeonId.TurtleRock] as IMedallionDungeon ).medallion;
};

export const makeGetMedallionEntry = () => {
  return ( state: StumpyState, dungeonId: DungeonId ): Medallion => {
    const dungeon = state && state.dungeons[dungeonId] as IMedallionDungeon;

    if ( !dungeon ) {
      return Medallion.Unknown;
    }
    return dungeon.medallion;
  };
};
