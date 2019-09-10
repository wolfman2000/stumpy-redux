import DungeonItems from './logic/dungeon-items';
import Glitches from './logic/glitches';
import ItemPlacement from './logic/item-placement';

import GanonVulernable from './goal/ganon-vulnerable';
import Goal from './goal/goal';
import OpenTower from './goal/open-tower';

import BossShuffle from './gameplay/boss-shuffle';
import GameType from './gameplay/game-type';

import ItemFunctionality from './difficulty/item-functionality';
import ItemPool from './difficulty/item-pool';
import Swords from './difficulty/swords';

interface ISettings {
  bossShuffle: BossShuffle;
  dungeonItems: DungeonItems;
  gameType: GameType;
  ganonVulernable: GanonVulernable;
  glitches: Glitches;
  goal: Goal;
  itemFunctionality: ItemFunctionality;
  itemPlacement: ItemPlacement;
  itemPool: ItemPool;
  openTower: OpenTower;
  swords: Swords;
}

const fallbackSettings: ISettings = {
  bossShuffle: BossShuffle.None,
  dungeonItems: DungeonItems.Standard,
  gameType: GameType.Open,
  ganonVulernable: GanonVulernable.Seven,
  glitches: Glitches.None,
  goal: Goal.DefeatGanon,
  itemFunctionality: ItemFunctionality.Normal,
  itemPlacement: ItemPlacement.Advanced,
  itemPool: ItemPool.Normal,
  openTower: OpenTower.Seven,
  swords: Swords.Randomized,
};

export default ISettings;

export { fallbackSettings };
