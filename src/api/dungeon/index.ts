import { CastleTower, CommonDungeon, EasternPalace, GanonsTower, HyruleCastle, MedallionDungeon } from './dungeon';
import { DungeonId } from './dungeon-id';
import { Medallion } from './medallion';
import { Reward } from './reward';

export type ZeldaDungeon = HyruleCastle | CastleTower | EasternPalace | CommonDungeon | MedallionDungeon | GanonsTower;

export interface IZeldaDungeonMap {
  [x: number]: ZeldaDungeon;
}

const fallbackDungeonMaps: IZeldaDungeonMap = {};
fallbackDungeonMaps[DungeonId.HyruleCastle] = {
  chestsOpened: 0,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.CastleTower] = {
  chestsOpened: 0,
  isBossDefeated: false,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.EasternPalace] = {
  bossId: DungeonId.EasternPalace,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  reward: Reward.Unknown,
};
fallbackDungeonMaps[DungeonId.DesertPalace] = {
  bossId: DungeonId.DesertPalace,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.TowerOfHera] = {
  bossId: DungeonId.TowerOfHera,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.PalaceOfDarkness] = {
  bossId: DungeonId.PalaceOfDarkness,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.SwampPalace] = {
  bossId: DungeonId.SwampPalace,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.SkullWoods] = {
  bossId: DungeonId.SkullWoods,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.ThievesTown] = {
  bossId: DungeonId.ThievesTown,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.IcePalace] = {
  bossId: DungeonId.IcePalace,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.MiseryMire] = {
  bossId: DungeonId.MiseryMire,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  medallion: Medallion.Unknown,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.TurtleRock] = {
  bossId: DungeonId.TurtleRock,
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  medallion: Medallion.Unknown,
  reward: Reward.Unknown,
  smallKeysFound: 0,
};
fallbackDungeonMaps[DungeonId.GanonsTower] = {
  chestsOpened: 0,
  hasBigKey: false,
  isBossDefeated: false,
  smallKeysFound: 0,
};

export { fallbackDungeonMaps };
