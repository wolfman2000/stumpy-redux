import { createSelector } from 'reselect';

import { isSwordless } from '../settings';

import { hasBomb } from './bomb';
import { hasBombos } from './bombos';
import { hasBlueBoomerang, hasRedBoomerang } from './boomerangs';
import { hasBow } from './bow-and-silvers';
import { hasByrna } from './byrna';
import { hasFireRod } from './fire-rod';
import { hasHammer } from './hammer';
import { hasIceRod } from './ice-rod';
import { hasLantern } from './lantern';
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

export const hasProjectile = createSelector(
  hasBow,
  hasBomb,
  hasEitherBoomerang,
  hasEitherRod,
  hasSomaria,
  hasMasterSword, // at full health, this shoots a projectile.
  ( bow, bomb, boom, rod, somaria, sword ) => bow || bomb || boom || rod || somaria || sword,
);
