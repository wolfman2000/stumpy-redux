import { createSelector } from 'reselect';

import { StumpyState } from '../../reducers';

import { available, unavailable } from '../../../api/traversal/availabilities';
import Availability from '../../../api/traversal/availabilities/availability';
import IAvailabilityLogic from '../../../api/traversal/availabilities/availability-logic';
import NodeConnectionId from '../../../api/traversal/nodes/node-connection-id';

import { isInverted, isSwordless } from '../settings';

import { hasAllCrystals, isCastleTowerDefeated, makeIsBossDefeated } from '../dungeons/bosses';
import { hasBomb } from '../inventory/bomb';
import { hasBook } from '../inventory/book';
import { hasBoots } from '../inventory/boots';
import { hasFlippers } from '../inventory/flippers';
import { hasFlute } from '../inventory/flute';
import { hasGlove, hasTitans } from '../inventory/gloves';
import { hasHammer } from '../inventory/hammer';
import { canBreakCastleTowerBarrier } from '../inventory/helpers';
import { hasHookshot } from '../inventory/hookshot';
import { hasMirror } from '../inventory/mirror';
import { hasMoonPearl } from '../inventory/moon-pearl';
import { hasShovel } from '../inventory/shovel';
import { hasMasterSword } from '../inventory/swords';

const always = ( _: StumpyState ): IAvailabilityLogic => {
  return available;
};

const alwaysVisible = ( _: StumpyState ): IAvailabilityLogic => {
  return {
    availability: Availability.Visible,
    usesGlitches: false,
  };
};

const isGoodOrUnavailable = ( good: boolean ): IAvailabilityLogic => {
  if ( good ) {
    return {
      availability: Availability.Available,
      usesGlitches: false,
    };
  }

  return {
    availability: Availability.Unavailable,
    usesGlitches: false,
  };
};

const isGoodOrGlitched = ( good: boolean ): IAvailabilityLogic => {
  return {
    availability: Availability.Available,
    usesGlitches: !good,
  };
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

const isTabletAccessible = createSelector(
  isSwordless,
  isInverted,
  hasBook,
  hasMasterSword,
  hasHammer,
  hasMoonPearl,
  ( less, inverted, book, master, hammer, moon ): IAvailabilityLogic => {
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

    return {
      availability: Availability.Visible,
      usesGlitches: false,
    };
  },
);

const hasGoodLightWorldInternal = ( inverted: boolean, moon: boolean, item: boolean ): IAvailabilityLogic => {
  const isGood = item && ( !inverted || moon );

  return isGoodOrUnavailable( isGood );
};

const hasBombsLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBomb,
  hasGoodLightWorldInternal,
);

const hasHookshotLightWorldItem = createSelector(
  isInverted,
  hasMoonPearl,
  hasHookshot,
  hasGoodLightWorldInternal,
);

const hasShovelLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasShovel,
  hasGoodLightWorldInternal,
);

const hasHammerLightWorldItem = createSelector(
  isInverted,
  hasMoonPearl,
  hasHammer,
  hasGoodLightWorldInternal,
);

const hasFluteNotInverted = createSelector(
  isInverted,
  hasFlute,
  ( inverted, flute ) => isGoodOrUnavailable( !inverted && flute ),
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

const hasTitansLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasTitans,
  hasGoodLightWorldInternal,
);

const hasBootsLightWorld = createSelector(
  isInverted,
  hasMoonPearl,
  hasBoots,
  hasGoodLightWorldInternal,
);

const hasFlippersItem = createSelector(
  hasFlippers,
  isGoodOrUnavailable,
);

const hasFakableFlippers = createSelector(
  hasFlippers,
  isGoodOrGlitched,
);

const canEnterDarkWorldViaAgahnim = createSelector(
  isInverted,
  isCastleTowerDefeated,
  hasMirror,
  ( inverted, aga1, mirror ): IAvailabilityLogic => {
    if ( !inverted && aga1 ) {
      return available;
    }

    return isGoodOrUnavailable( mirror && inverted );
  },
);

const hasNotBeatenAgahnimForDarkWorld = createSelector(
  isInverted,
  isCastleTowerDefeated,
  ( inverted, aga1 ): IAvailabilityLogic => {
    return isGoodOrUnavailable( inverted || !aga1 );
  },
);

const canEnterLumberjackTree = createSelector(
  isInverted,
  hasMoonPearl,
  hasBoots,
  isCastleTowerDefeated,
  ( inverted, moon, boots, aga1 ): IAvailabilityLogic => {
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
  ( inverted, barrier, crystals ): IAvailabilityLogic => {
    const isGood = inverted ? crystals : barrier;
    return isGoodOrUnavailable( isGood );
  },
);

const canLiftToDarkWorldInternal = ( inverted: boolean, glove: boolean, mirror: boolean ): IAvailabilityLogic => {
  if ( !inverted && glove ) {
    return available;
  }

  return isGoodOrUnavailable( mirror && inverted );
};

const canLiftToDarkWorld = createSelector(
  isInverted,
  hasGlove,
  hasMirror,
  canLiftToDarkWorldInternal,
);

const canHeavyLiftToDarkWorld = createSelector(
  isInverted,
  hasTitans,
  hasMirror,
  canLiftToDarkWorldInternal,
);

const canWalkToUpperTurtleRockSurface = createSelector(
  isInverted,
  hasTitans,
  hasHammer,
  ( inverted, titans, hammer ): IAvailabilityLogic => {
    const isGood = inverted ? ( titans && hammer ) : titans;
    return isGoodOrUnavailable( isGood );
  },
);

const canLeaveUpperTurtleRockSurface = createSelector(
  isInverted,
  hasHammer,
  ( inverted, hammer ): IAvailabilityLogic => {
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
  ( inverted, hammer, mirror ): IAvailabilityLogic => {
    const isGood = inverted ? mirror : hammer;
    return isGoodOrUnavailable( isGood );
  },
);

const canGetItemsAfterWaterfall = createSelector(
  isInverted,
  hasFlippers,
  hasMoonPearl,
  hasBoots,
  ( inverted, flippers, moon, boots ): IAvailabilityLogic => {
    if ( flippers ) {
      return available;
    }

    // no matter if inverted or not, moon pearl allows sequence breaking.
    if ( moon ) {
      return {
        availability: Availability.Available,
        usesGlitches: true,
      };
    }

    // If we don't have the moon pearl, that makes inverted tricky.
    if ( boots && !inverted ) {
      return {
        availability: Availability.Available,
        usesGlitches: true,
      };
    }

    return unavailable;
  },
);

const traversalTable = new Map<NodeConnectionId, ( state: StumpyState ) => IAvailabilityLogic>( [
  [ NodeConnectionId.Always, always ],
  [ NodeConnectionId.AlwaysVisible, alwaysVisible ],

  [ NodeConnectionId.IsInverted, isInvertedMode ],
  [ NodeConnectionId.IsNotInverted, isNotInvertedMode ],

  [ NodeConnectionId.HasBombsLightWorld, hasBombsLightWorld ],
  [ NodeConnectionId.HasHookshotLightWorld, hasHookshotLightWorldItem ],
  [ NodeConnectionId.HasShovelLightWorld, hasShovelLightWorld ],
  [ NodeConnectionId.HasHammerLightWorld, hasHammerLightWorldItem ],
  [ NodeConnectionId.HasFluteNotInverted, hasFluteNotInverted ],
  [ NodeConnectionId.HasBookLightWorld, hasBookLightWorld ],
  [ NodeConnectionId.HasMirror, hasMirrorItem ],
  [ NodeConnectionId.HasMirrorInverted, hasMirrorInvertedItem ],
  [ NodeConnectionId.HasGloveLightWorld, hasGloveLightWorld ],
  [ NodeConnectionId.HasTitansLightWorld, hasTitansLightWorld ],
  [ NodeConnectionId.HasBootsLightWorld, hasBootsLightWorld ],
  [ NodeConnectionId.HasFlippers, hasFlippersItem ],
  [ NodeConnectionId.HasFakableFlippers, hasFakableFlippers ],

  [ NodeConnectionId.CanActInLightWorld, canActInLightWorld ],

  [ NodeConnectionId.HasNotBeatenAgahnimForDarkWorld, hasNotBeatenAgahnimForDarkWorld ],
  [ NodeConnectionId.CanEnterDarkWorldViaAgahnim, canEnterDarkWorldViaAgahnim ],
  [ NodeConnectionId.CanEnterLumberjackTree, canEnterLumberjackTree ],
  [ NodeConnectionId.CanEnterCastleTower, canEnterCastleTower ],
  [ NodeConnectionId.CanWalkToUpperTurtleRockSurface, canWalkToUpperTurtleRockSurface ],
  [ NodeConnectionId.CanLiftToDarkWorld, canLiftToDarkWorld ],
  [ NodeConnectionId.CanHeavyLiftToDarkWorld, canHeavyLiftToDarkWorld ],
  [ NodeConnectionId.CanLeaveUpperTurtleRockSurface, canLeaveUpperTurtleRockSurface ],
  [ NodeConnectionId.CanWarpToDarkFromUpperTurtleRock, canWarpToDarkFromUpperTurtleRock ],
  [ NodeConnectionId.IsTabletAccessible, isTabletAccessible ],
  [ NodeConnectionId.CanGetItemsAfterWaterfall, canGetItemsAfterWaterfall ],
] );

export default traversalTable;
