import produce from 'immer';

import { getType } from 'typesafe-actions';

import {
  dungeonSetBigKey,
  dungeonSetBossDead,
  dungeonSetBossId,
  dungeonSetChestsOpened,
  dungeonSetMedallion,
  dungeonSetReward,
  dungeonSetSmallKey,
  StumpyAction,
} from '../actions';

import {
  fallbackDungeonMaps,
  IZeldaDungeonMap as ZeldaDungeonMap,
} from '../../api/dungeon';
import {
  IBigKeyDungeon,
  IBossDungeon,
  IChangingBossDungeon,
  IMedallionDungeon,
  ISmallKeyDungeon,
} from '../../api/dungeon/dungeon';

const dungeonReducer = ( state: ZeldaDungeonMap = fallbackDungeonMaps, action: StumpyAction ) => {
  function produceState( draft: ZeldaDungeonMap ): void {
    switch ( action.type ) {
      case getType( dungeonSetBigKey ): {
        const item = draft[action.payload.key] as IBigKeyDungeon;
        if ( item.hasBigKey !== undefined ) {
          item.hasBigKey = action.payload.value;
        }
        break;
      }
      case getType( dungeonSetBossDead ): {
        const item = draft[action.payload.key] as IBossDungeon;
        if ( item.isBossDefeated !== undefined ) {
          item.isBossDefeated = action.payload.value;
        }
        break;
      }
      case getType( dungeonSetBossId ): {
        const item = draft[action.payload.key] as IChangingBossDungeon;
        if ( item.bossId !== undefined ) {
          item.bossId = action.payload.value;
        }
        break;
      }
      case getType( dungeonSetChestsOpened ): {
        const item = draft[action.payload.key];
        item.chestsOpened = action.payload.value;
        break;
      }
      case getType( dungeonSetMedallion ): {
        const item = draft[action.payload.key] as IMedallionDungeon;
        if ( item.medallion !== undefined ) {
          item.medallion = action.payload.value;
        }
        break;
      }
      case getType( dungeonSetReward ): {
        const item = draft[action.payload.key] as IChangingBossDungeon;
        if ( item.reward !== undefined ) {
          item.reward = action.payload.value;
        }
        break;
      }
      case getType( dungeonSetSmallKey ): {
        const item = draft[action.payload.key] as ISmallKeyDungeon;
        if ( item.smallKeysFound !== undefined ) {
          item.smallKeysFound = action.payload.value;
        }
        break;
      }
    }
  }

  return produce( state, produceState );
};

export { dungeonReducer };
