import { Reward } from './reward';

export interface IDungeon {
  chestsOpened: number;
}

export interface IBigKeyDungeon {
  hasBigKey: boolean;
}

export interface ISmallKeyDungeon {
  smallKeysFound: number;
}

export interface IBossDungeon {
  isBossDefeated: boolean;
}

export interface IChangingBossDungeon extends IBossDungeon {
  bossId: number;
  reward: Reward;
}

export interface IMedallionDungeon extends IChangingBossDungeon {
  medallion: number;
}

export type HyruleCastle = IDungeon & ISmallKeyDungeon;
export type CastleTower = IDungeon & ISmallKeyDungeon & IBossDungeon;
export type EasternPalace = IDungeon & IBigKeyDungeon & IChangingBossDungeon;
export type CommonDungeon = IDungeon & ISmallKeyDungeon & IBigKeyDungeon & IChangingBossDungeon;
export type MedallionDungeon = IDungeon & ISmallKeyDungeon & IBigKeyDungeon & IMedallionDungeon;
export type GanonsTower = IDungeon & ISmallKeyDungeon & IBigKeyDungeon & IBossDungeon;

export type ZeldaDungeon = HyruleCastle | CastleTower | EasternPalace | CommonDungeon | MedallionDungeon | GanonsTower;
