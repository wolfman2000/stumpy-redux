import { createSelector } from 'reselect';

import { StumpyState } from '../reducers';

import DungeonItems from '../../api/settings/logic/dungeon-items';
import Glitches from '../../api/settings/logic/glitches';

import GanonVulernable from '../../api/settings/goal/ganon-vulnerable';
import Goal from '../../api/settings/goal/goal';
import OpenTower from '../../api/settings/goal/open-tower';

import BossShuffle from '../../api/settings/gameplay/boss-shuffle';
import GameType from '../../api/settings/gameplay/game-type';

import ItemPool from '../../api/settings/difficulty/item-pool';
import Swords from '../../api/settings/difficulty/swords';

function getGlitches( state: StumpyState ): Glitches {
  return state.settings.glitches;
}

function getDungeonItems( state: StumpyState ): DungeonItems {
  return state.settings.dungeonItems;
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

// TODO: Move these to constants.
const settingTable = new Map<string, ( state: StumpyState ) => number>( [
  [ 'glitches', getGlitches ],
  [ 'dungeonItems', getDungeonItems ],
  [ 'goal', getGoal ],
  [ 'openTower', getOpenTower ],
  [ 'ganonVulnerable', getGanonVulernable ],
  [ 'gameType', getGameType ],
  [ 'bossShuffle', getBossShuffle ],
  [ 'swords', getSwords ],
  [ 'itemPool', getItemPool ],
] );

export const isNoGlitches = createSelector(
  getGlitches,
  ( glitch ) => glitch === Glitches.None,
);

export const isSwordless = createSelector(
  getSwords,
  ( sword ) => sword === Swords.Swordless,
);

export const isInverted = createSelector(
  getGameType,
  ( type ) => type === GameType.Inverted,
);

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
