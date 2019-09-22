import { createSelector } from 'reselect';

import { StumpyState } from '../../../reducers';

import { ISmallKeyDungeon } from '../../../../api/dungeon/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';

export const makeGetSmallKeyCount = () => {
  return ( state: StumpyState, dungeonId: DungeonId ): number => {
    const dungeon = state.dungeons[dungeonId] as ISmallKeyDungeon;
    if ( !dungeon ) {
      return 0;
    }
    return dungeon.smallKeysFound;
  };
};
