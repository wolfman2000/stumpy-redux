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

import { isInverted, isRestrictedItemPlacement, isStandard, isSwordless } from '../settings';

import { Medallion } from '../../../api/dungeon/medallion';
import { hasAllCrystals, hasAllPendants, hasAllPyramidCrystals, hasGreenPendant, isCastleTowerDefeated } from '../dungeons/bosses';
import { canAccessAgahnim, canAccessSecondChest } from '../dungeons/keys/castle-tower';
import { canEnterEastDesertWing, hasDesertPalaceBigKey } from '../dungeons/keys/desert-palace';
import { hasEasternPalaceBigKey } from '../dungeons/keys/eastern-palace';
import { hasSewerKey } from '../dungeons/keys/hyrule-castle';
import { canEnterBackBasement, hasTowerOfHeraBigKey } from '../dungeons/keys/tower-of-hera';
import { getMiseryMireMedallionEntry, getTurtleRockMedallionEntry } from '../dungeons/medallions';

import { hasGanonsTowerBigKey } from '../dungeons/keys/ganons-tower';
import { hasIcePalaceBigKey } from '../dungeons/keys/ice-palace';
import { hasMiseryMireBigKey } from '../dungeons/keys/misery-mire';
import { canEnterPodFrontDoor, canReachBack, canReachDarkMaze, hasPalaceOfDarknessBigKey } from '../dungeons/keys/palace-of-darkness';
import { hasSkullWoodsBigKey } from '../dungeons/keys/skull-woods';
import { canEnterFrontSwampDoor, hasSwampPalaceBigKey } from '../dungeons/keys/swamp-palace';
import { canEnterThievesBigChestRoom, hasThievesTownBigKey } from '../dungeons/keys/thieves-town';
import { hasTurtleRockBigKey } from '../dungeons/keys/turtle-rock';
import {
  canBreakCastleTowerBarrier,
  canCastEtherWhenever,
  hasEitherCane,
  hasFireSource,
  hasFreezorWeakness,
  hasLaserProtection,
  hasPrimaryMelee,
  hasProjectile,
  hasReliableWeapon,
  hasSpikeCaveProtection,
  hasSpikeProtection,
  hasTorchFireSource,
} from '../inventory';
import { hasBomb, hasBombsForDarkWorld, hasBombsForLightWorld } from '../inventory/bomb';
import { hasBombosForDarkWorld } from '../inventory/bombos';
import { hasBook, hasBookForLightWorld } from '../inventory/book';
import { hasBoots, hasBootsForDarkWorld, hasBootsForLightWorld } from '../inventory/boots';
import { hasBottles } from '../inventory/bottles';
import { hasBow } from '../inventory/bow-and-silvers';
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
import { hasMasterSword, hasSword, hasSwordOrSwordless } from '../inventory/swords';

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

const hasReliableWeaponCheck = createSelector(
  hasReliableWeapon,
  isGoodOrUnavailable,
);

const canCutCurtainWall = createSelector(
  hasSwordOrSwordless,
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

const hasStandardTorchLightSource = createSelector(
  isStandard,
  hasTorchFireSource,
  ( standard, fire ) => isGoodOrGlitched( standard || fire ),
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

const hasGreenPendantItem = createSelector(
  hasGreenPendant,
  isGoodOrUnavailable,
);

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

const hasHookshotOrAdvancedBoots = createSelector(
  isRestrictedItemPlacement,
  hasBoots,
  hasHookshot,
  ( basic, boot, hook ) => {
    if ( hook ) {
      return available;
    }

    if ( boot ) {
      return basic ? availableWithGlitches : available;
    }

    return unavailable;
  },
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

const hasHookshotOrBombHover = createSelector(
  hasHookshot,
  hasBoots,
  hasBomb,
  ( hook, boot, bomb ) => {
    if ( hook ) {
      return available;
    }
    if ( boot || bomb ) {
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

const canOpenLockedDoorInSewers = createSelector(
  isStandard,
  hasSewerKey,
  hasTorchFireSource,
  ( standard, key, fire ) => {
    if ( standard ) {
      return available;
    }
    if ( !key ) {
      return unavailable;
    }
    return isGoodOrGlitched( fire );
  },
);

const canAccessTowerMaze = createSelector(
  canAccessSecondChest,
  isGoodOrUnavailable,
);

const canAccessTopOfCastleTower = createSelector(
  canAccessAgahnim,
  hasFireSource,
  ( key, fire ) => {
    if ( !key ) {
      return unavailable;
    }

    return isGoodOrGlitched( fire );
  },
);

const hasBigKeyForEastern = createSelector(
  hasEasternPalaceBigKey,
  isGoodOrUnavailable,
);

// TODO: Maybe add the enemizer flag set?
const canDefeatRedEyegores = createSelector(
  hasBow,
  isGoodOrUnavailable,
);

const hasKeyForDesertDungeonItems = createSelector(
  canEnterEastDesertWing,
  isGoodOrUnavailable,
);

const hasBigKeyForDesert = createSelector(
  hasDesertPalaceBigKey,
  isGoodOrUnavailable,
);

const hasKeyForHeraBasement = createSelector(
  canEnterBackBasement,
  isGoodOrUnavailable,
);

const hasBigKeyForHera = createSelector(
  hasTowerOfHeraBigKey,
  isGoodOrUnavailable,
);

// TODO: Double check enemizer settings.
const canMimicBottleClip = createSelector(
  hasBottles,
  hasBow,
  ( bottle, bow ) => {
    if ( bow ) {
      return available;
    }

    // TODO: Look into excluding either trick with options.
    if ( bottle ) {
      return availableWithGlitches;
    }

    return availableWithGlitches;
  },
);

// TODO: Double check enemizer settings.
const canMimicClip = createSelector(
  hasBow,
  ( bow ) => {
    if ( bow ) {
      return available;
    }

    return availableWithGlitches;
  },
);

const canEnterFrontPodDoor = createSelector(
  canEnterPodFrontDoor,
  isGoodOrUnavailable,
);

const canAccessPodParty = createSelector(
  canReachBack,
  isGoodOrUnavailable,
);

const canAccessPodMaze = createSelector(
  canReachDarkMaze,
  hasLantern,
  ( keys, lamp ) => {
    if ( !keys ) {
      return unavailable;
    }
    return isGoodOrGlitched( lamp );
  },
);

const canAccessPodMazeBackward = createSelector(
  hasBomb,
  hasLantern,
  ( bomb, lamp ) => {
    if ( !bomb ) {
      return unavailable;
    }

    return isGoodOrGlitched( lamp );
  },
);

const canShootEyeStatue = createSelector(
  hasBow,
  isGoodOrUnavailable,
);

const hasBigKeyForPod = createSelector(
  hasPalaceOfDarknessBigKey,
  isGoodOrUnavailable,
);

const canAccessFinalPodSection = createSelector(
  hasHammer,
  hasLantern,
  hasProjectile,
  ( hammer, lamp, projectile ) => {
    if ( !hammer || !projectile ) {
      return unavailable;
    }

    return isGoodOrGlitched( lamp );
  },
);

const canSwimToSwampStart = createSelector(
  hasMirror,
  hasFlippers,
  ( mirror, flippers ) => {
    if ( !flippers ) {
      return unavailable;
    }
    // TODO: Look into alternatives for entrance rando.
    return isGoodOrUnavailable( mirror );
  },
);

const canEnterInfernalSwampDoor = createSelector(
  canEnterFrontSwampDoor,
  isGoodOrUnavailable,
);

const hasBigKeyForSwamp = createSelector(
  hasSwampPalaceBigKey,
  isGoodOrUnavailable,
);

const canLightRodTorches = createSelector(
  hasFireRod,
  hasLantern,
  hasBomb,
  hasBoots,
  ( rod, lamp, bomb, boots ) => {
    if ( rod ) {
      return available;
    }
    if ( lamp && ( bomb || boots ) ) {
      return availableWithGlitches;
    }
    return unavailable;
  },
);

const hasBigKeyForSkull = createSelector(
  hasSkullWoodsBigKey,
  isGoodOrUnavailable,
);

const hasSmallKeyForThieves = createSelector(
  canEnterThievesBigChestRoom,
  isGoodOrUnavailable,
);

const hasBigKeyForThieves = createSelector(
  hasThievesTownBigKey,
  isGoodOrUnavailable,
);

const canDefeatFreezors = createSelector(
  hasFreezorWeakness,
  isGoodOrUnavailable,
);

const canCrossIceSpikeField = createSelector(
  hasSpikeProtection,
  hasHookshot,
  ( spike, hook ) => isGoodOrGlitched( spike || hook ),
);

const canHookshotThroughBlocks = createSelector(
  hasHookshot,
  ( hook ) => hook ? availableWithGlitches : unavailable,
);

const hasBigKeyForIce = createSelector(
  hasIcePalaceBigKey,
  isGoodOrUnavailable,
);

const canLightTorch = createSelector(
  hasFireSource,
  isGoodOrUnavailable,
);

const hasCaneOfSomaria = createSelector(
  hasSomaria,
  isGoodOrUnavailable,
);

const hasBigKeyForMire = createSelector(
  hasMiseryMireBigKey,
  isGoodOrUnavailable,
);

const canCrossHugeSomariaGaps = createSelector(
  hasSomaria,
  hasBoots,
  ( somaria, boots ) => {
    if ( somaria ) {
      return available;
    }
    return boots ? availableWithGlitches : unavailable;
  },
);

const canCrossDarkSomariaGaps = createSelector(
  hasSomaria,
  hasLantern,
  hasBoots,
  ( somaria, lantern, boots ) => {
    if ( somaria && lantern ) {
      return available;
    }
    return ( boots ) ? availableWithGlitches : unavailable;
  },
);

const canCrossSmallSomariaGaps = createSelector(
  hasSomaria,
  hasBoots,
  hasBomb,
  ( somaria, boots, bombs ) => {
    if ( somaria ) {
      return available;
    }
    return ( boots || bombs ) ? availableWithGlitches : unavailable;
  },
);

const canLightTorchGaps = createSelector(
  hasSomaria,
  hasFireRod,
  ( somaria, rod ) => isGoodOrUnavailable( somaria && rod ),
);

const hasLaserEyeProtection = createSelector(
  hasLaserProtection,
  isGoodOrGlitched,
);

const hasBigKeyForTurtle = createSelector(
  hasTurtleRockBigKey,
  isGoodOrUnavailable,
);

const hasBigKeyForGanon = createSelector(
  hasGanonsTowerBigKey,
  isGoodOrUnavailable,
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

  [ NodeConnectionId.HasReliableWeapon, hasReliableWeaponCheck ],
  [ NodeConnectionId.CanCutCurtainWall, canCutCurtainWall ],

  [ NodeConnectionId.HasGreenPendant, hasGreenPendantItem ],
  [ NodeConnectionId.CanDefeatMiniMoldorms, canDefeatMiniMoldorms ],
  [ NodeConnectionId.CanKnockItemOffTorch, canKnockItemOffTorch ],
  [ NodeConnectionId.HasSpikeCaveProtection, canCrossSpikeCave ],
  [ NodeConnectionId.HasLightSource, hasLightSource ],
  [ NodeConnectionId.HasTorchLightSource, hasTorchLightSource ],
  [ NodeConnectionId.HasStandardTorchLightSource, hasStandardTorchLightSource ],
  [ NodeConnectionId.CanMakeBlocksDisappear, canMakeBlocksDisappear ],
  [ NodeConnectionId.HasReliableProjectile, hasReliableProjectile ],

  [ NodeConnectionId.CanBombJumpOrHover, canBombJumpOrHover ],
  [ NodeConnectionId.HasBootsOrBombs, hasBootsOrBombs ],
  [ NodeConnectionId.HasHookshotOrAdvancedBoots, hasHookshotOrAdvancedBoots ],
  [ NodeConnectionId.HasHookshotOrHover, hasHookshotOrHover ],
  [ NodeConnectionId.HasHookshotOrBombHover, hasHookshotOrBombHover ],
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

  [ NodeConnectionId.CanOpenLockedDoorInSewers, canOpenLockedDoorInSewers ],

  [ NodeConnectionId.CanAccessTowerMaze, canAccessTowerMaze ],
  [ NodeConnectionId.CanAccessTopOfCastleTower, canAccessTopOfCastleTower ],

  [ NodeConnectionId.HasBigKeyForEastern, hasBigKeyForEastern ],
  [ NodeConnectionId.CanDefeatRedEyegores, canDefeatRedEyegores ],

  [ NodeConnectionId.HasKeyForDesertDungeonItems, hasKeyForDesertDungeonItems ],
  [ NodeConnectionId.HasBigKeyForDesert, hasBigKeyForDesert ],

  [ NodeConnectionId.HasKeyForHeraBasement, hasKeyForHeraBasement ],
  [ NodeConnectionId.HasBigKeyForHera, hasBigKeyForHera ],

  [ NodeConnectionId.CanMimicBottleClip, canMimicBottleClip ],
  [ NodeConnectionId.CanMimicClip, canMimicClip ],
  [ NodeConnectionId.CanEnterFrontPodDoor, canEnterFrontPodDoor ],
  [ NodeConnectionId.CanAccessPodParty, canAccessPodParty ],
  [ NodeConnectionId.CanAccessPodMaze, canAccessPodMaze ],
  [ NodeConnectionId.CanAccessPodMazeBackward, canAccessPodMazeBackward ],
  [ NodeConnectionId.HasBigKeyForPod, hasBigKeyForPod ],
  [ NodeConnectionId.CanAccessFinalPodSection, canAccessFinalPodSection ],
  [ NodeConnectionId.CanShootEyeStatue, canShootEyeStatue ],

  [ NodeConnectionId.CanSwimToSwampStart, canSwimToSwampStart ],
  [ NodeConnectionId.CanEnterInfernalSwampDoor, canEnterInfernalSwampDoor ],
  [ NodeConnectionId.HasBigKeyForSwamp, hasBigKeyForSwamp ],

  [ NodeConnectionId.CanLightRodTorches, canLightRodTorches ],
  [ NodeConnectionId.HasBigKeyForSkull, hasBigKeyForSkull ],

  [ NodeConnectionId.HasSmallKeyForThieves, hasSmallKeyForThieves ],
  [ NodeConnectionId.HasBigKeyForThieves, hasBigKeyForThieves ],

  [ NodeConnectionId.CanDefeatFreezors, canDefeatFreezors ],
  [ NodeConnectionId.CanCrossIceSpikeField, canCrossIceSpikeField ],
  [ NodeConnectionId.CanHookshotThroughBlocks, canHookshotThroughBlocks ],
  [ NodeConnectionId.HasBigKeyForIce, hasBigKeyForIce ],

  [ NodeConnectionId.CanLightTorch, canLightTorch ],
  [ NodeConnectionId.HasCaneOfSomaria, hasCaneOfSomaria ],
  [ NodeConnectionId.HasBigKeyForMire, hasBigKeyForMire ],

  [ NodeConnectionId.CanCrossHugeSomariaGaps, canCrossHugeSomariaGaps ],
  [ NodeConnectionId.CanCrossSmallSomariaGaps, canCrossSmallSomariaGaps ],
  [ NodeConnectionId.CanCrossDarkSomariaGaps, canCrossDarkSomariaGaps ],
  [ NodeConnectionId.CanLightTorchGaps, canLightTorchGaps ],
  [ NodeConnectionId.HasLaserEyeProtection, hasLaserEyeProtection ],
  [ NodeConnectionId.HasBigKeyForTurtle, hasBigKeyForTurtle ],

  [ NodeConnectionId.HasBigKeyForGanon, hasBigKeyForGanon ],
] );

export default traversalTable;
