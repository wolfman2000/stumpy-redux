import { createSelector } from 'reselect';

import {
  isExpertItemFunctionality,
  isHardItemFunctionality,
  isNormalItemFunctionality,
  isRestrictedItemPlacement,
  isSwordless,
} from '../settings';

import { hasBomb } from './bomb';
import { hasBombos } from './bombos';
import { hasBlueBoomerang, hasRedBoomerang } from './boomerangs';
import { getBottles } from './bottles';
import { hasBow } from './bow-and-silvers';
import { hasByrna } from './byrna';
import { hasCape } from './cape';
import { hasEther } from './ether';
import { hasFireRod } from './fire-rod';
import { hasHammer } from './hammer';
import { hasIceRod } from './ice-rod';
import { hasLantern } from './lantern';
import { hasMagic } from './magic';
import { hasSomaria } from './somaria';
import { hasMasterSword, hasSword } from './swords';

export const hasMelee = createSelector(
  hasSword,
  hasHammer,
  ( sword, hammer ) => sword || hammer,
);

export const hasMeleeOrBow = createSelector(
  hasMelee,
  hasBow,
  ( melee, bow ) => melee || bow,
);

export const hasPrimaryMelee = createSelector(
  isSwordless,
  hasSword,
  hasHammer,
  ( swordless, sword, hammer ) => {
    if ( swordless ) {
      return hammer;
    }
    return sword;
  },
);

export const hasEitherCane = createSelector(
  hasSomaria,
  hasByrna,
  ( somaria, byrna ) => somaria || byrna,
);

export const hasEitherRod = createSelector(
  hasFireRod,
  hasIceRod,
  ( fire, ice ) => fire || ice,
);

export const hasFireSource = createSelector(
  hasFireRod,
  hasLantern,
  ( fire, lamp ) => fire || lamp,
);

export const hasTorchFireSource = createSelector(
  isRestrictedItemPlacement,
  hasFireRod,
  hasLantern,
  ( restricted, rod, lamp ) => lamp || ( !restricted && rod ),
);

export const hasFreezorWeakness = createSelector(
  hasFireRod,
  hasBombos,
  ( fire, bombos ) => fire || bombos,
);

export const hasReliableWeapon = createSelector(
  hasMeleeOrBow,
  hasEitherCane,
  hasFireRod,
  hasBomb,
  ( meleeBow, cane, fire, bomb ) => meleeBow || cane || fire || bomb,
);

export const hasEitherBoomerang = createSelector(
  hasBlueBoomerang,
  hasRedBoomerang,
  ( blue, red ) => blue || red,
);

export const canBreakCastleTowerBarrier = createSelector(
  isSwordless,
  hasCape,
  hasMasterSword,
  hasHammer,
  ( less, cape, sword, hammer ) => {
    if ( cape ) {
      return true;
    }
    return less ? hammer : sword;
  },
);

export const hasProjectile = createSelector(
  hasBow,
  hasBomb,
  hasEitherBoomerang,
  hasEitherRod,
  hasSomaria,
  hasMasterSword, // at full health, this shoots a projectile.
  ( bow, bomb, boom, rod, somaria, sword ) => bow || bomb || boom || rod || somaria || sword,
);

export const getAvailableMagicBars = createSelector(
  isExpertItemFunctionality,
  isHardItemFunctionality,
  hasMagic,
  getBottles,
  ( expert, hard, magic, bottles ) => {
    // Start with your own magic.
    const startingMagic = 1;

    // Add the refills from bottles.
    const bottlePotency = expert ? 0.25 : ( hard ? 0.5 : 1 );
    const adjustedBottles = bottles * bottlePotency;
    let normalCapacity = adjustedBottles + startingMagic;
    if ( magic ) {
      normalCapacity *= 2;
    }
    return normalCapacity;
  },
);

export const hasTwoMagicBars = createSelector(
  getAvailableMagicBars,
  ( magic ) => magic >= 2,
);

export const hasThreeMagicBars = createSelector(
  getAvailableMagicBars,
  ( magic ) => magic >= 3,
);

export const hasFireballInvulnerabilty = createSelector(
  isNormalItemFunctionality,
  hasCape,
  hasByrna,
  ( normal, cape, byrna ) => {
    if ( normal && byrna ) {
      return true;
    }
    return cape;
  },
);

export const hasSpikeProtection = createSelector(
  isNormalItemFunctionality,
  hasCape,
  hasByrna,
  ( normal, cape, byrna ) => cape || ( normal && byrna ),
);

export const hasSpikeCaveProtection = createSelector(
  hasSpikeProtection,
  hasTwoMagicBars,
  ( spikes, magic ) => spikes && magic,
);

export const canCastEtherWhenever = createSelector(
  hasEther,
  hasSword,
  ( ether, sword ) => ether && sword,
);
