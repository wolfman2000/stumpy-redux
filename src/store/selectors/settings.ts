import { createSelector } from 'reselect';

import { StumpyState } from '../reducers';

import DungeonItems from '../../api/settings/logic/dungeon-items';
import Glitches from '../../api/settings/logic/glitches';
import ItemPlacement from '../../api/settings/logic/item-placement';

import GanonVulernable from '../../api/settings/goal/ganon-vulnerable';
import Goal from '../../api/settings/goal/goal';
import OpenTower from '../../api/settings/goal/open-tower';

import BossShuffle from '../../api/settings/gameplay/boss-shuffle';
import GameType from '../../api/settings/gameplay/game-type';

import ItemFunctionality from '../../api/settings/difficulty/item-functionality';
import ItemPool from '../../api/settings/difficulty/item-pool';
import Swords from '../../api/settings/difficulty/swords';

function getGlitches( state: StumpyState ): Glitches {
  return state.settings.glitches;
}

function getDungeonItems( state: StumpyState ): DungeonItems {
  return state.settings.dungeonItems;
}

function getItemPlacement( state: StumpyState ): ItemPlacement {
  return state.settings.itemPlacement;
}

function getGoal( state: StumpyState ): Goal {
  return state.settings.goal;
}

function getOpenTower( state: StumpyState ): OpenTower {
  return state.settings.openTower;
}

function getGanonVulernable( state: StumpyState ): GanonVulernable {
  return state.settings.ganonVulernable;
}

function getGameType( state: StumpyState ): GameType {
  return state.settings.gameType;
}

function getBossShuffle( state: StumpyState ): BossShuffle {
  return state.settings.bossShuffle;
}

function getSwords( state: StumpyState ): Swords {
  return state.settings.swords;
}

function getItemPool( state: StumpyState ): ItemPool {
  return state.settings.itemPool;
}

const getItemFunctionality = ( state: StumpyState ): ItemFunctionality => {
  return state.settings.itemFunctionality;
};

export const isNoGlitches = createSelector(
  getGlitches,
  ( glitch ) => glitch === Glitches.None,
);

export const isSwordless = createSelector(
  getSwords,
  ( sword ) => sword === Swords.Swordless,
);

export const isStandard = createSelector(
  getGameType,
  ( type ) => type === GameType.Standard,
);

export const isInverted = createSelector(
  getGameType,
  ( type ) => type === GameType.Inverted,
);

export const isEntrance = ( _: StumpyState ) => false;

export const hasShuffledBosses = createSelector(
  getBossShuffle,
  ( boss ) => boss !== BossShuffle.None,
);

export const isNormalItemPool = createSelector(
  getItemPool,
  ( pool ) => pool === ItemPool.Normal,
);

export const isHardItemPool = createSelector(
  getItemPool,
  ( pool ) => pool === ItemPool.Hard,
);

export const isExpertItemPool = createSelector(
  getItemPool,
  ( pool ) => pool === ItemPool.Expert,
);

export const isNormalItemFunctionality = createSelector(
  getItemFunctionality,
  ( func ) => func === ItemFunctionality.Normal,
);

export const isHardItemFunctionality = createSelector(
  getItemFunctionality,
  ( func ) => func === ItemFunctionality.Hard,
);

export const isExpertItemFunctionality = createSelector(
  getItemFunctionality,
  ( func ) => func === ItemFunctionality.Expert,
);

export const isRestrictedItemPlacement = createSelector(
  getItemPlacement,
  ( restricted ) => restricted === ItemPlacement.Basic,
);

export const areMapsCompassesShuffled = createSelector(
  getDungeonItems,
  ( item ) => item !== DungeonItems.Standard,
);

export const areSmallKeysShuffled = createSelector(
  getDungeonItems,
  ( item ) => item === DungeonItems.Mcs || item === DungeonItems.Full,
);

export const areBigKeysShuffled = createSelector(
  getDungeonItems,
  ( item ) => item === DungeonItems.Full,
);

// TODO: Move these to constants.
const settingTable = new Map<string, ( state: StumpyState ) => number>( [
  [ 'glitches', getGlitches ],
  [ 'dungeonItems', getDungeonItems ],
  [ 'itemPlacement', getItemPlacement ],
  [ 'goal', getGoal ],
  [ 'openTower', getOpenTower ],
  [ 'ganonVulnerable', getGanonVulernable ],
  [ 'gameType', getGameType ],
  [ 'bossShuffle', getBossShuffle ],
  [ 'swords', getSwords ],
  [ 'itemPool', getItemPool ],
  [ 'itemFunctionality', getItemFunctionality ],
] );

export const makeGetSetting = () => {
  return ( state: StumpyState, setting: string ): number => {
    // console.log( `getSetting ${setting}`);
    const item = settingTable.get( setting );
    if ( !!item ) {
      return item( state );
    }

    return 0;
  };
};
