import { createSelector } from 'reselect';

import { StumpyState } from '../../../reducers';

import { ZeldaDungeon } from '../../../../api/dungeon';
import { IBossDungeon, IChangingBossDungeon } from '../../../../api/dungeon/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import { Reward } from '../../../../api/dungeon/reward';

import {
  hasEitherBoomerang,
  hasEitherCane,
  hasEitherRod,
  hasFireballInvulnerabilty,
  hasFireSource,
  hasMelee,
  hasMeleeOrBow,
  hasPrimaryMelee,
  hasThreeMagicBars,
  hasTwoMagicBars,
} from '../../inventory/helpers';

import { hasBomb } from '../../inventory/bomb';
import { hasBombos } from '../../inventory/bombos';
import { hasBow, hasBowAndSilvers } from '../../inventory/bow-and-silvers';
import { hasFireRod } from '../../inventory/fire-rod';
import { hasHammer } from '../../inventory/hammer';
import { hasHookshot } from '../../inventory/hookshot';
import { hasIceRod } from '../../inventory/ice-rod';
import { hasNet } from '../../inventory/net';
import { hasMasterSword, hasSword, hasTemperedSword } from '../../inventory/swords';
import { isNormalItemPool, isRestrictedItemPlacement, isSwordless } from '../../settings';

export const canDefeatAgahnim = createSelector(
  hasSword,
  hasNet,
  hasHammer,
  ( sword, net, hammer ) => {
    if ( sword ) {
      return true;
    }
    if ( net ) {
      return true;
    }
    if ( hammer ) {
      return true;
    }
    return false;
  },
);

export const canDefeatArmosKnights = createSelector(
  isNormalItemPool,
  hasEitherBoomerang,
  hasMeleeOrBow,
  hasEitherRod,
  hasEitherCane,
  hasBomb,
  ( normal, boom, meleeBow, rod, cane, bomb ) => {
    if ( boom ) {
      return true;
    }
    if ( meleeBow ) {
      return true;
    }
    if ( rod ) {
      return true;
    }
    if ( cane ) {
      return true;
    }
    if ( bomb && normal ) {
      return true;
    }

    return false;
  },
);

export const canDefeatLanmolas = createSelector(
  hasMeleeOrBow,
  hasEitherRod,
  hasEitherCane,
  hasBomb,
  ( meleeBow, rod, cane, bomb ) => {
    if ( meleeBow ) {
      return true;
    }
    if ( rod ) {
      return true;
    }
    if ( cane ) {
      return true;
    }
    if ( bomb ) {
      return true;
    }

    return false;
  },
);

export const canDefeatMoldorm = ( state: StumpyState ) => hasMelee( state );

export const canDefeatHelmasaurKing = createSelector(
  isRestrictedItemPlacement,
  hasHammer,
  hasBomb,
  hasBow,
  hasSword,
  hasMasterSword,
  ( restricted, hammer, bomb, bow, sword, masterSword ) => {
    if ( !bomb && !hammer ) {
      return false; // Nothing for first phase.
    }
    if ( bow ) {
      return true; // Good for 2nd phase.
    }
    if ( restricted ) {
      return masterSword;
    }
    return sword || hammer;
  },
);

export const canDefeatArrghus = createSelector(
  isRestrictedItemPlacement,
  hasHookshot,
  hasMasterSword,
  hasMeleeOrBow,
  hasEitherRod,
  hasEitherCane,
  hasBomb,
  ( restricted, hookshot, masterSword, meleeBow, rod ) => {
    if ( !hookshot ) {
      return false;
    }

    if ( restricted ) {
      return masterSword;
    }

    if ( meleeBow ) {
      return true;
    }

    if ( rod ) {
      return true;
    }

    return false;
  },
);

export const canDefeatMothula = createSelector(
  isRestrictedItemPlacement,
  hasMasterSword,
  hasMelee,
  hasEitherCane,
  hasFireRod,
  hasTwoMagicBars,
  ( restricted, masterSword, melee, cane, fire, magic ) => {
    const canBeatRestricted = () => {
      if ( masterSword ) {
        return true;
      }
      if ( fire && magic ) {
        return true;
      }
      return false;
    };
    const canBeatUnrestricted = () => {
      if ( melee ) {
        return true;
      }
      if ( cane ) {
        return true;
      }
      if ( fire ) {
        return true;
      }
      return false;
    };

    if ( restricted ) {
      return canBeatRestricted();
    }
    return canBeatUnrestricted();
  },
);

export const canDefeatBlind = createSelector(
  isRestrictedItemPlacement,
  hasSword,
  hasFireballInvulnerabilty,
  hasMelee,
  hasEitherCane,
  ( restricted, sword, invul, melee, cane ) => {
    const canBeatRestricted = () => {
      if ( !sword ) {
        return false;
      }
      if ( !invul ) {
        return false;
      }
      return true;
    };

    const canBeatUnrestricted = () => {
      if ( melee ) {
        return true;
      }
      if ( cane ) {
        return true;
      }

      return false;
    };

    if ( restricted ) {
      return canBeatRestricted();
    }

    return canBeatUnrestricted();
  },
);

export const canDefeatKholdstare = createSelector(
  isRestrictedItemPlacement,
  hasPrimaryMelee,
  hasFireRod,
  hasBombos,
  hasMasterSword,
  hasMelee,
  hasTwoMagicBars,
  hasThreeMagicBars,
  ( restricted, primary, fire, bombos, master, melee, two, three ) => {
    const canBeatIce = () => {
      if ( fire ) {
        return true;
      }
      if ( !bombos ) {
        return false;
      }
      if ( !primary ) {
        return false;
      }
      return true;
    };

    const canBeatRestricted = () => {
      if ( master ) {
        return true;
      }
      if ( fire && three ) {
        return true;
      }
      if ( fire && bombos && two ) {
        return true;
      }
      return false;
    };

    const canBeatUnrestricted = () => {
      if ( fire ) {
        return true;
      }
      if ( melee ) {
        return true;
      }
      return false;
    };

    if ( !canBeatIce() ) {
      return false;
    }
    if ( restricted ) {
      return canBeatRestricted();
    }

    return canBeatUnrestricted();
  },
);

export const canDefeatVitreous = createSelector(
  isRestrictedItemPlacement,
  isNormalItemPool,
  hasMasterSword,
  hasBow,
  hasMeleeOrBow,
  hasBomb,
  ( restricted, normal, master, bow, melee, bomb ) => {
    if ( restricted ) {
      return master || bow;
    }
    return melee || ( normal && bomb );
  },
);

export const canDefeatTrinexx = createSelector(
  isRestrictedItemPlacement,
  hasFireRod,
  hasIceRod,
  hasTemperedSword,
  hasMasterSword,
  hasTwoMagicBars,
  hasMelee,
  ( restricted, fire, ice, tempered, master, two, melee ) => {
    if ( !fire && !ice ) {
      return false;
    }

    if ( restricted ) {
      return tempered || ( master && two );
    }

    return melee;
  },
);

export const canDefeatGanon = createSelector(
  isRestrictedItemPlacement,
  isSwordless,
  hasBowAndSilvers,
  hasFireSource,
  hasTemperedSword,
  hasMasterSword,
  hasHammer,
  ( restricted, swordless, silvers, fire, tempered, master, hammer ) => {
    if ( !fire ) {
      return false;
    }
    const canBeatRestricted = () => {
      if ( !tempered ) {
        return false;
      }

      if ( !silvers ) {
        return false;
      }

      return true;
    };

    if ( restricted ) {
      return canBeatRestricted();
    }

    if ( swordless ) {
      return hammer && silvers;
    }

    return master;
  },
);

const allDungeons = ( _: StumpyState ): ZeldaDungeon[] => {
  const keys = Object.keys( _.dungeons ).map( ( k ) => Number.parseInt( k, 10 ) );
  const dungeons = keys.map( ( d ) => _.dungeons[d] );
  return dungeons;
};

const rewardDungeons = createSelector(
  allDungeons,
  ( dungeons ) => {
    return dungeons
      .map( ( d ) => d as IChangingBossDungeon )
      .filter( ( d ) => d.bossId > DungeonId.CastleTower && d.bossId < DungeonId.GanonsTower );
  },
);

const beatenRewardDungeons = createSelector(
  rewardDungeons,
  ( dungeons ) => dungeons.filter( ( d ) => d.isBossDefeated ),
);

const hasAllRewardDungeonsBeaten = createSelector(
  beatenRewardDungeons,
  ( dungeons ) => dungeons.length === 10,
);

export const hasAllPendants = createSelector(
  beatenRewardDungeons,
  hasAllRewardDungeonsBeaten,
  ( dungeons, done ) => {
    if ( done ) {
      return true;
    }

    return dungeons.filter( ( d ) => d.reward === Reward.Pendant || d.reward === Reward.GreenPendant ).length === 3;
  },
);

export const hasAllCrystals = createSelector(
  beatenRewardDungeons,
  hasAllRewardDungeonsBeaten,
  ( dungeons, done ) => {
    if ( done ) {
      return true;
    }

    return dungeons.filter( ( d ) => d.reward === Reward.Crystal || d.reward === Reward.PyramidCrystal ).length === 7;
  },
);

export const hasGreenPendant = createSelector(
  beatenRewardDungeons,
  hasAllPendants,
  hasAllRewardDungeonsBeaten,
  ( dungeons, pendants, done ) => {
    if ( done || pendants ) {
      return true;
    }

    return dungeons.some( ( d ) => d.reward === Reward.GreenPendant );
  },
);

export const hasAllPyramidCrystals = createSelector(
  beatenRewardDungeons,
  hasAllCrystals,
  hasAllRewardDungeonsBeaten,
  ( dungeons, crystals, done ) => {
    if ( done || crystals ) {
      return true;
    }

    return dungeons.filter( ( d ) => d.reward === Reward.PyramidCrystal ).length === 2;
  },
);

export const makeCanDefeatBoss = () => {
  return ( state: StumpyState, dungeonId: DungeonId ): boolean => {
    if ( dungeonId === DungeonId.CastleTower || dungeonId === DungeonId.GanonsTower ) {
      return canDefeatAgahnim( state );
    }
    const dungeon = state.dungeons[dungeonId] as IChangingBossDungeon;
    switch ( dungeon.bossId ) {
      case DungeonId.EasternPalace:
        return canDefeatArmosKnights( state );
      case DungeonId.DesertPalace:
        return canDefeatLanmolas( state );
      case DungeonId.TowerOfHera:
        return canDefeatMoldorm( state );
      case DungeonId.PalaceOfDarkness:
        return canDefeatHelmasaurKing( state );
      case DungeonId.SwampPalace:
        return canDefeatArrghus( state );
      case DungeonId.SkullWoods:
        return canDefeatMothula( state );
      case DungeonId.ThievesTown:
        return canDefeatBlind( state );
      case DungeonId.IcePalace:
        return canDefeatKholdstare( state );
      case DungeonId.MiseryMire:
        return canDefeatVitreous( state );
      case DungeonId.TurtleRock:
        return canDefeatTrinexx( state );
      default:
        return false;
    }
  };
};

export const isCastleTowerDefeated = ( state: StumpyState ) => {
  const castleTower = ( state.dungeons[DungeonId.CastleTower] as IBossDungeon );
  return castleTower && castleTower.isBossDefeated;
};

export const makeIsBossDefeated = () => {
  return ( state: StumpyState, dungeonId: DungeonId ): boolean => {
    const dungeon = state.dungeons[dungeonId] as IBossDungeon;
    return dungeon.isBossDefeated;
  };
};
