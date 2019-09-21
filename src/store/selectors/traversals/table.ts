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

import { isInverted, isRestrictedItemPlacement, isSwordless } from '../settings';

import { Medallion } from '../../../api/dungeon/medallion';
import { hasAllCrystals, hasAllPendants, hasAllPyramidCrystals, isCastleTowerDefeated } from '../dungeons/bosses';
import { getMiseryMireMedallionEntry, getTurtleRockMedallionEntry } from '../dungeons/medallions';
import {
  canBreakCastleTowerBarrier,
  canCastEtherWhenever,
  hasEitherCane,
  hasFireSource,
  hasPrimaryMelee,
  hasProjectile,
  hasSpikeCaveProtection,
} from '../inventory';
import { hasBomb, hasBombsForDarkWorld, hasBombsForLightWorld } from '../inventory/bomb';
import { hasBombosForDarkWorld } from '../inventory/bombos';
import { hasBook, hasBookForLightWorld } from '../inventory/book';
import { hasBoots, hasBootsForDarkWorld, hasBootsForLightWorld } from '../inventory/boots';
import { hasBottles } from '../inventory/bottles';
import { hasCape } from '../inventory/cape';
import { hasEtherForDarkWorld } from '../inventory/ether';
import { hasFireRod, hasFireRodForDarkWorld } from '../inventory/fire-rod';
import { hasFlippers } from '../inventory/flippers';
import { hasFluteForDarkWorld, hasFluteForLightWorld } from '../inventory/flute';
import {
  hasGlove,
  hasGloveForDarkWorld,
  hasGloveForLightWorld,
  hasTitans,
  hasTitansForDarkWorld,
  hasTitansForLightWorld,
} from '../inventory/gloves';
import { hasHammer, hasHammerForDarkWorld, hasHammerForLightWorld } from '../inventory/hammer';
import { hasHookshot, hasHookshotForDarkWorld, hasHookshotForLightWorld } from '../inventory/hookshot';
import { hasLantern } from '../inventory/lantern';
import { hasMirror } from '../inventory/mirror';
import { hasMoonPearl, hasMoonPearlForDarkWorld, hasMoonPearlForLightWorld } from '../inventory/moon-pearl';
import { hasMushroom } from '../inventory/mushroom';
import { hasPowder } from '../inventory/powder';
import { hasQuakeForDarkWorld } from '../inventory/quake';
import { hasShovelForLightWorld } from '../inventory/shovel';
import { hasSomaria } from '../inventory/somaria';
import { hasMasterSword, hasSword } from '../inventory/swords';

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

const hasBottleItem = createSelector(
  hasBottles,
  isGoodOrUnavailable,
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
  hasMoonPearlForLightWorld,
  isGoodOrUnavailable,
);

const canActInDarkWorld = createSelector(
  hasMoonPearlForDarkWorld,
  isGoodOrUnavailable,
);

const canCrossSpikeCave = createSelector(
  hasSpikeCaveProtection,
  hasGlove,
  ( spikes, glove ) => isGoodOrUnavailable( spikes && glove ),
);

const hasLightSource = createSelector(
  hasLantern,
  isGoodOrGlitched,
);

const hasTorchLightSource = createSelector(
  hasFireSource,
  isGoodOrGlitched,
);

const isTabletAccessible = createSelector(
  isSwordless,
  canActInLightWorld,
  hasBook,
  hasMasterSword,
  hasHammer,
  ( less, light, book, master, hammer ): AvailabilityLogic => {
    if ( !book ) {
      return unavailable;
    }

    if ( !light ) {
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
  hasBombsForLightWorld,
  isGoodOrUnavailable,
);

const hasBombsDarkWorld = createSelector(
  hasBombsForDarkWorld,
  isGoodOrUnavailable,
);

const hasHookshotLightWorld = createSelector(
  hasHookshotForLightWorld,
  isGoodOrUnavailable,
);

const hasHookshotDarkWorld = createSelector(
  hasHookshotForDarkWorld,
  isGoodOrUnavailable,
);

const hasMushroomItem = createSelector(
  hasMushroom,
  isGoodOrUnavailable,
);

const hasFireRodDarkWorld = createSelector(
  hasFireRodForDarkWorld,
  isGoodOrUnavailable,
);

const hasShovelLightWorld = createSelector(
  hasShovelForLightWorld,
  isGoodOrUnavailable,
);

const hasHammerLightWorld = createSelector(
  hasHammerForLightWorld,
  isGoodOrUnavailable,
);

const hasHammerDarkWorld = createSelector(
  hasHammerForDarkWorld,
  isGoodOrUnavailable,
);

const hasFluteNotInverted = createSelector(
  hasFluteForLightWorld,
  isGoodOrUnavailable,
);

const hasFluteInverted = createSelector(
  hasFluteForDarkWorld,
  isGoodOrUnavailable,
);

const hasBookLightWorld = createSelector(
  hasBookForLightWorld,
  isGoodOrUnavailable,
);

const hasGloveLightWorld = createSelector(
  hasGloveForLightWorld,
  isGoodOrUnavailable,
);

const hasGloveDarkWorld = createSelector(
  hasGloveForDarkWorld,
  isGoodOrUnavailable,
);

const hasTitansLightWorld = createSelector(
  hasTitansForLightWorld,
  isGoodOrUnavailable,
);

const hasTitansDarkWorld = createSelector(
  hasTitansForDarkWorld,
  isGoodOrUnavailable,
);

const hasBootsLightWorld = createSelector(
  hasBootsForLightWorld,
  isGoodOrUnavailable,
);

const hasBootsDarkWorld = createSelector(
  hasBootsForDarkWorld,
  isGoodOrUnavailable,
);

const hasFlippersItem = createSelector(
  hasFlippers,
  isGoodOrUnavailable,
);

const hasFakableFlippers = createSelector(
  hasFlippers,
  isGoodOrGlitched,
);

const canBombJumpOrHover = createSelector(
  hasBomb,
  hasBoots,
  ( bomb, boot ) => ( bomb || boot ) ? availableWithGlitches : unavailable,
);

const hasBootsOrBombs = createSelector(
  hasBomb,
  hasBoots,
  ( bomb, boot ) => isGoodOrUnavailable( bomb || boot ),
);

const hasBootsOrHookshot = createSelector(
  hasBoots,
  hasHookshot,
  ( boot, hook ) => isGoodOrUnavailable( boot || hook ),
);

const hasHookshotOrHover = createSelector(
  hasHookshot,
  hasBoots,
  ( hook, boot ) => {
    if ( hook ) {
      return available;
    }
    if ( boot ) {
      return availableWithGlitches;
    }
    return unavailable;
  },
);

const canCrossInvisibleBridge = createSelector(
  isRestrictedItemPlacement,
  canCastEtherWhenever,
  ( restricted, ether ) => {
    if ( !restricted ) {
      return available;
    }

    return isGoodOrUnavailable( ether );
  },
);

const canCrossBumperCave = createSelector(
  isRestrictedItemPlacement,
  hasCape,
  hasHookshot,
  ( restricted, cape, hookshot ) => {
    if ( !cape ) {
      return unavailable;
    }

    return isGoodOrUnavailable( !restricted || hookshot );
  },
);

const canDefeatMiniMoldorms = createSelector(
  hasSword,
  hasHammer,
  hasFireRod,
  hasEitherCane,
  hasBomb,
  hasHookshot,
  ( sword, hammer, rod, cane, bomb, hook ) => {
    return isGoodOrUnavailable( sword || hammer || rod || cane || bomb || hook );
  },
);

const canKnockItemOffTorch = createSelector(
  hasBoots,
  ( boots ) => boots ? available : visible,
);

const hasPowderOrFake = createSelector(
  hasPowder,
  hasSomaria,
  hasMushroom,
  ( powder, somaria, mushroom ) => {
    if ( powder ) {
      return available;
    }
    if ( somaria && mushroom ) {
      return availableWithGlitches;
    }
    return unavailable;
  },
);

const canHoverInLightWorld = createSelector(
  hasBootsForLightWorld,
  ( boots ) => boots ? availableWithGlitches : unavailable,
);

const canHoverInDarkWorld = createSelector(
  hasBootsForDarkWorld,
  ( boots ) => boots ? availableWithGlitches : unavailable,
);

const canMakeBlocksDisappear = createSelector(
  hasMirror,
  ( mirror ) => mirror ? availableWithGlitches : unavailable,
);

const hasReliableProjectile = createSelector(
  hasProjectile,
  isGoodOrUnavailable,
);

const canPullPedestal = createSelector(
  isRestrictedItemPlacement,
  hasAllPendants,
  hasBook,
  ( basic, pendants, book ) => {
    const canPull = pendants && ( !basic || book );
    if ( canPull ) {
      return available;
    }
    if ( book ) {
      return visible;
    }

    return unavailable;
  },
);

const canEnterPyramidWall = createSelector(
  hasMoonPearlForDarkWorld,
  hasAllPyramidCrystals,
  ( moon, crystals ) => {
    if ( !crystals ) {
      return unavailable;
    }

    return isGoodOrUnavailable( moon );
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
  hasMoonPearlForLightWorld,
  hasBoots,
  isCastleTowerDefeated,
  ( light, boots, aga1 ): AvailabilityLogic => {
    if ( !boots ) {
      return unavailable;
    }
    if ( !light ) {
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
  hasBombosForDarkWorld,
  hasEtherForDarkWorld,
  hasQuakeForDarkWorld,
  hasPrimaryMelee,
  getMiseryMireMedallionEntry,
  canEnterMedallionDungeon,
);

const canEnterTurtleRock = createSelector(
  hasBombosForDarkWorld,
  hasEtherForDarkWorld,
  hasQuakeForDarkWorld,
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
  [ NodeConnectionId.HasMushroom, hasMushroomItem ],
  [ NodeConnectionId.HasShovelLightWorld, hasShovelLightWorld ],
  [ NodeConnectionId.HasFireRodDarkWorld, hasFireRodDarkWorld ],
  [ NodeConnectionId.HasHammerLightWorld, hasHammerLightWorld ],
  [ NodeConnectionId.HasHammerDarkWorld, hasHammerDarkWorld ],
  [ NodeConnectionId.HasFluteNotInverted, hasFluteNotInverted ],
  [ NodeConnectionId.HasFluteInverted, hasFluteInverted ],
  [ NodeConnectionId.HasBookLightWorld, hasBookLightWorld ],
  [ NodeConnectionId.HasBottle, hasBottleItem ],
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

  [ NodeConnectionId.CanDefeatMiniMoldorms, canDefeatMiniMoldorms ],
  [ NodeConnectionId.CanKnockItemOffTorch, canKnockItemOffTorch ],
  [ NodeConnectionId.HasSpikeCaveProtection, canCrossSpikeCave ],
  [ NodeConnectionId.HasLightSource, hasLightSource ],
  [ NodeConnectionId.HasTorchLightSource, hasTorchLightSource ],
  [ NodeConnectionId.CanMakeBlocksDisappear, canMakeBlocksDisappear ],
  [ NodeConnectionId.HasReliableProjectile, hasReliableProjectile ],

  [ NodeConnectionId.CanBombJumpOrHover, canBombJumpOrHover ],
  [ NodeConnectionId.HasBootsOrBombs, hasBootsOrBombs ],
  [ NodeConnectionId.HasBootsOrHookshot, hasBootsOrHookshot ],
  [ NodeConnectionId.HasHookshotOrHover, hasHookshotOrHover ],
  [ NodeConnectionId.CanCrossInvisibleBridge, canCrossInvisibleBridge ],
  [ NodeConnectionId.CanCrossBumperCave, canCrossBumperCave ],
  [ NodeConnectionId.HasPowderOrFake, hasPowderOrFake ],
  [ NodeConnectionId.CanHoverInLightWorld, canHoverInLightWorld ],
  [ NodeConnectionId.CanHoverInDarkWorld, canHoverInDarkWorld ],
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
