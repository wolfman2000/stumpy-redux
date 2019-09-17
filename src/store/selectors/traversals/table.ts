import { createSelector } from 'reselect';

import { StumpyState } from '../../reducers';

import {
  available,
  availableWithGlitches,
  possible,
  unavailable,
  visible,
} from '../../../api/traversal/availabilities';
import AvailabilityLogic from '../../../api/traversal/availabilities/availability-logic';
import NodeConnectionId from '../../../api/traversal/nodes/node-connection-id';

import { isInverted, isSwordless } from '../settings';

import { Medallion } from '../../../api/dungeon/medallion';
import { hasAllCrystals, hasAllPendants, isCastleTowerDefeated, hasAllPyramidCrystals } from '../dungeons/bosses';
import { getMiseryMireMedallionEntry, getTurtleRockMedallionEntry } from '../dungeons/medallions';
import { hasBomb } from '../inventory/bomb';
import { hasBombos } from '../inventory/bombos';
import { hasBook } from '../inventory/book';
import { hasBoots } from '../inventory/boots';
import { hasEther } from '../inventory/ether';
import { hasFireRod } from '../inventory/fire-rod';
import { hasFlippers } from '../inventory/flippers';
import { hasFlute } from '../inventory/flute';
import { hasGlove, hasTitans } from '../inventory/gloves';
import { hasHammer } from '../inventory/hammer';
import { canBreakCastleTowerBarrier, hasPrimaryMelee } from '../inventory/helpers';
import { hasHookshot } from '../inventory/hookshot';
import { hasMirror } from '../inventory/mirror';
import { hasMoonPearl } from '../inventory/moon-pearl';
import { hasQuake } from '../inventory/quake';
import { hasShovel } from '../inventory/shovel';
import { hasMasterSword } from '../inventory/swords';

const always = ( _: StumpyState ): AvailabilityLogic => {
  return available;
};

const alwaysVisible = ( _: StumpyState ): AvailabilityLogic => {
  return visible;
};

const isGoodOrUnavailable = ( good: boolean ): AvailabilityLogic => {
  if ( good ) {
    return available;
  }

  return unavailable;
};

const isGoodOrGlitched = ( good: boolean ): AvailabilityLogic => {
  if ( good ) {
    return available;
  }
  return availableWithGlitches;
};

const isInvertedMode = createSelector(
  isInverted,
  isGoodOrUnavailable,
);

const isNotInvertedMode = createSelector(
  isInverted,
  ( inverted ) => isGoodOrUnavailable( !inverted ),
);

const hasMirrorItem = createSelector(
  hasMirror,
  isInverted,
  ( mirror, inverted ) => isGoodOrUnavailable( mirror && !inverted ),
);

const hasMirrorInvertedItem = createSelector(
  hasMirror,
  isInverted,
  ( mirror, inverted ) => isGoodOrUnavailable( mirror && inverted ),
);

const canActInLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  ( inverted, moon ) => isGoodOrUnavailable( !inverted || moon ),
);

const canActInDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  ( inverted, moon ) => isGoodOrUnavailable( inverted || moon ),
);

const isTabletAccessible = createSelector(
  isSwordless,
  isInverted,
  hasBook,
  hasMasterSword,
  hasHammer,
  hasMoonPearl,
  ( less, inverted, book, master, hammer, moon ): AvailabilityLogic => {
    if ( !book ) {
      return unavailable;
    }

    if ( inverted && !moon ) {
      return unavailable;
    }

    const hasWeapon = less ? hammer : master;
    if ( hasWeapon ) {
      return available;
    }

    return visible;
  },
);

const hasGoodLightWorldInternal = ( inverted: boolean, moon: boolean, item: boolean ): AvailabilityLogic => {
  const isGood = item && ( !inverted || moon );

  return isGoodOrUnavailable( isGood );
};

const hasGoodDarkWorldInternal = ( inverted: boolean, moon: boolean, item: boolean ): AvailabilityLogic => {
  const isGood = item && ( inverted || moon );
  return isGoodOrUnavailable( isGood );
};

const hasBombsLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBomb,
  hasGoodLightWorldInternal,
);

const hasBombsDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBomb,
  hasGoodDarkWorldInternal,
);

const hasHookshotLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasHookshot,
  hasGoodLightWorldInternal,
);

const hasHookshotDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasHookshot,
  hasGoodDarkWorldInternal,
);

const hasFireRodDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasFireRod,
  hasGoodDarkWorldInternal,
);

const hasShovelLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasShovel,
  hasGoodLightWorldInternal,
);

const hasHammerLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasHammer,
  hasGoodLightWorldInternal,
);

const hasHammerDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasHammer,
  hasGoodDarkWorldInternal,
);

const hasFluteNotInverted = createSelector(
  isInverted,
  hasFlute,
  ( inverted, flute ) => isGoodOrUnavailable( !inverted && flute ),
);

const hasFluteInverted = createSelector(
  isInverted,
  hasFlute,
  ( inverted, flute ) => isGoodOrUnavailable( inverted && flute ),
);

const hasBookLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasHammer,
  hasGoodLightWorldInternal,
);

const hasGloveLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasGlove,
  hasGoodLightWorldInternal,
);

const hasGloveDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasGlove,
  hasGoodDarkWorldInternal,
);

const hasTitansLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasTitans,
  hasGoodLightWorldInternal,
);

const hasTitansDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasTitans,
  hasGoodDarkWorldInternal,
);

const hasBootsLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBoots,
  hasGoodLightWorldInternal,
);

const hasBootsDarkWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBoots,
  hasGoodDarkWorldInternal,
);

const hasFlippersItem = createSelector(
  hasFlippers,
  isGoodOrUnavailable,
);

const hasFakableFlippers = createSelector(
  hasFlippers,
  isGoodOrGlitched,
);

const canPullPedestal = createSelector(
  hasAllPendants,
  hasBook,
  ( pendants, book ) => {
    if ( pendants ) {
      return available;
    }
    if ( book ) {
      return visible;
    }

    return unavailable;
  },
);

const canEnterPyramidWall = createSelector(
  isInverted,
  hasMoonPearl,
  hasAllPyramidCrystals,
  ( inverted, moon, crystals ) => {
    if ( !crystals ) {
      return unavailable;
    }

    return isGoodOrUnavailable( inverted || moon );
  },
);

const canEnterDarkWorldViaAgahnim = createSelector(
  isInverted,
  isCastleTowerDefeated,
  hasMirror,
  ( inverted, aga1, mirror ): AvailabilityLogic => {
    if ( !inverted && aga1 ) {
      return available;
    }

    return isGoodOrUnavailable( mirror && inverted );
  },
);

const canEnterLightWorldViaAgahnim = createSelector(
  isInverted,
  isCastleTowerDefeated,
  hasMirror,
  ( inverted, aga1, mirror ): AvailabilityLogic => {
    if ( inverted && aga1 ) {
      return available;
    }

    return isGoodOrUnavailable( mirror && !inverted );
  },
);

const hasNotBeatenAgahnimForDarkWorld = createSelector(
  isInverted,
  isCastleTowerDefeated,
  ( inverted, aga1 ): AvailabilityLogic => {
    return isGoodOrUnavailable( inverted || !aga1 );
  },
);

const canEnterLumberjackTree = createSelector(
  isInverted,
  hasMoonPearl,
  hasBoots,
  isCastleTowerDefeated,
  ( inverted, moon, boots, aga1 ): AvailabilityLogic => {
    if ( !boots ) {
      return unavailable;
    }
    if ( inverted && !moon ) {
      return unavailable;
    }
    return aga1 ? available : unavailable;
  },
);

const canEnterCastleTower = createSelector(
  isInverted,
  canBreakCastleTowerBarrier,
  hasAllCrystals,
  ( inverted, barrier, crystals ): AvailabilityLogic => {
    const isGood = inverted ? crystals : barrier;
    return isGoodOrUnavailable( isGood );
  },
);

const canLiftToOtherWorldInternal = ( inverted: boolean, glove: boolean, mirror: boolean ): AvailabilityLogic => {
  if ( !inverted && glove ) {
    return available;
  }

  return isGoodOrUnavailable( mirror && inverted );
};

const canLiftToDarkWorld = createSelector(
  isInverted,
  hasGlove,
  hasMirror,
  canLiftToOtherWorldInternal,
);

const canLiftToLightWorld = createSelector(
  isInverted,
  hasGlove,
  hasMirror,
  ( inverted, glove, mirror ) => canLiftToOtherWorldInternal( !inverted, glove, mirror ),
);

const canHeavyLiftToDarkWorld = createSelector(
  isInverted,
  hasTitans,
  hasMirror,
  canLiftToOtherWorldInternal,
);

const canHeavyLiftToLightWorld = createSelector(
  isInverted,
  hasTitans,
  hasMirror,
  ( inverted, glove, mirror ) => canLiftToOtherWorldInternal( !inverted, glove, mirror ),
);

const canWalkToUpperTurtleRockSurface = createSelector(
  isInverted,
  hasTitans,
  hasHammer,
  ( inverted, titans, hammer ): AvailabilityLogic => {
    const isGood = inverted ? ( titans && hammer ) : titans;
    return isGoodOrUnavailable( isGood );
  },
);

const canLeaveUpperTurtleRockSurface = createSelector(
  isInverted,
  hasHammer,
  ( inverted, hammer ): AvailabilityLogic => {
    if ( !inverted ) {
      return available;
    }
    return isGoodOrUnavailable( hammer );
  },
);

const canWarpToDarkFromUpperTurtleRock = createSelector(
  isInverted,
  hasHammer,
  hasMirror,
  ( inverted, hammer, mirror ): AvailabilityLogic => {
    const isGood = inverted ? mirror : hammer;
    return isGoodOrUnavailable( isGood );
  },
);

const canGetItemsAfterWaterfall = createSelector(
  isInverted,
  hasFlippers,
  hasMoonPearl,
  hasBoots,
  ( inverted, flippers, moon, boots ): AvailabilityLogic => {
    if ( flippers ) {
      return available;
    }

    // no matter if inverted or not, moon pearl allows sequence breaking.
    if ( moon ) {
      return availableWithGlitches;
    }

    // If we don't have the moon pearl, that makes inverted tricky.
    if ( boots && !inverted ) {
      return availableWithGlitches;
    }

    return unavailable;
  },
);

const canEnterMedallionDungeon = (
  bombos: boolean,
  ether: boolean,
  quake: boolean,
  melee: boolean,
  key: Medallion,
): AvailabilityLogic => {
  if ( !melee ) {
    return unavailable;
  }

  if ( bombos && quake && ether ) {
    return available;
  }

  switch ( key ) {
    case Medallion.Unknown:
      return possible;
    case Medallion.Bombos:
      return bombos ? available : unavailable;
    case Medallion.Ether:
      return ether ? available : unavailable;
    case Medallion.Quake:
      return quake ? available : unavailable;
  }
};

const canEnterMiseryMire = createSelector(
  hasBombos,
  hasEther,
  hasQuake,
  hasPrimaryMelee,
  getMiseryMireMedallionEntry,
  canEnterMedallionDungeon,
);

const canEnterTurtleRock = createSelector(
  hasBombos,
  hasEther,
  hasQuake,
  hasPrimaryMelee,
  getTurtleRockMedallionEntry,
  canEnterMedallionDungeon,
);

const traversalTable = new Map<NodeConnectionId, ( state: StumpyState ) => AvailabilityLogic>( [
  [ NodeConnectionId.Always, always ],
  [ NodeConnectionId.AlwaysVisible, alwaysVisible ],

  [ NodeConnectionId.IsInverted, isInvertedMode ],
  [ NodeConnectionId.IsNotInverted, isNotInvertedMode ],

  [ NodeConnectionId.HasBombsLightWorld, hasBombsLightWorld ],
  [ NodeConnectionId.HasBombsDarkWorld, hasBombsDarkWorld ],
  [ NodeConnectionId.HasHookshotLightWorld, hasHookshotLightWorld ],
  [ NodeConnectionId.HasHookshotDarkWorld, hasHookshotDarkWorld ],
  [ NodeConnectionId.HasShovelLightWorld, hasShovelLightWorld ],
  [ NodeConnectionId.HasFireRodDarkWorld, hasFireRodDarkWorld ],
  [ NodeConnectionId.HasHammerLightWorld, hasHammerLightWorld ],
  [ NodeConnectionId.HasHammerDarkWorld, hasHammerDarkWorld ],
  [ NodeConnectionId.HasFluteNotInverted, hasFluteNotInverted ],
  [ NodeConnectionId.HasFluteInverted, hasFluteInverted ],
  [ NodeConnectionId.HasBookLightWorld, hasBookLightWorld ],
  [ NodeConnectionId.HasMirror, hasMirrorItem ],
  [ NodeConnectionId.HasMirrorInverted, hasMirrorInvertedItem ],
  [ NodeConnectionId.HasGloveLightWorld, hasGloveLightWorld ],
  [ NodeConnectionId.HasGloveDarkWorld, hasGloveDarkWorld ],
  [ NodeConnectionId.HasTitansLightWorld, hasTitansLightWorld ],
  [ NodeConnectionId.HasTitansDarkWorld, hasTitansDarkWorld ],
  [ NodeConnectionId.HasBootsLightWorld, hasBootsLightWorld ],
  [ NodeConnectionId.HasBootsDarkWorld, hasBootsDarkWorld ],
  [ NodeConnectionId.HasFlippers, hasFlippersItem ],
  [ NodeConnectionId.HasFakableFlippers, hasFakableFlippers ],

  [ NodeConnectionId.CanActInLightWorld, canActInLightWorld ],
  [ NodeConnectionId.CanActInDarkWorld, canActInDarkWorld ],

  [ NodeConnectionId.CanPullPedestal, canPullPedestal ],
  [ NodeConnectionId.CanEnterPyramidWall, canEnterPyramidWall ],
  [ NodeConnectionId.HasNotBeatenAgahnimForDarkWorld, hasNotBeatenAgahnimForDarkWorld ],
  [ NodeConnectionId.CanEnterDarkWorldViaAgahnim, canEnterDarkWorldViaAgahnim ],
  [ NodeConnectionId.CanEnterLightWorldViaAgahnim, canEnterLightWorldViaAgahnim ],
  [ NodeConnectionId.CanEnterLumberjackTree, canEnterLumberjackTree ],
  [ NodeConnectionId.CanEnterCastleTower, canEnterCastleTower ],
  [ NodeConnectionId.CanWalkToUpperTurtleRockSurface, canWalkToUpperTurtleRockSurface ],
  [ NodeConnectionId.CanLiftToDarkWorld, canLiftToDarkWorld ],
  [ NodeConnectionId.CanLiftToDarkWorld, canLiftToLightWorld ],
  [ NodeConnectionId.CanHeavyLiftToDarkWorld, canHeavyLiftToDarkWorld ],
  [ NodeConnectionId.CanHeavyLiftToLightWorld, canHeavyLiftToLightWorld ],
  [ NodeConnectionId.CanLeaveUpperTurtleRockSurface, canLeaveUpperTurtleRockSurface ],
  [ NodeConnectionId.CanWarpToDarkFromUpperTurtleRock, canWarpToDarkFromUpperTurtleRock ],
  [ NodeConnectionId.IsTabletAccessible, isTabletAccessible ],
  [ NodeConnectionId.CanGetItemsAfterWaterfall, canGetItemsAfterWaterfall ],
  [ NodeConnectionId.CanEnterMiseryMire, canEnterMiseryMire ],
  [ NodeConnectionId.CanEnterTurtleRock, canEnterTurtleRock ],
] );

export default traversalTable;
