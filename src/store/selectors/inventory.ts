import { createSelector } from 'reselect';

import { isExpertItemPool, isHardItemPool, isNormalItemPool, isSwordless } from './settings';

import { StumpyState } from '../reducers';

import InventoryId from '../../api/inventory/inventory-id';

import { wrap } from './inventory/';

const getBook = ( state: StumpyState ) => state.inventory[InventoryId.Book];

export const hasBook = createSelector(
  getBook,
  ( book ) => book > 0,
);

export const getTunic = ( state: StumpyState ) => state.inventory[InventoryId.Tunic];

export const hasTunic = ( _: StumpyState ) => true;

export const getBottles = ( state: StumpyState ) => state.inventory[InventoryId.Bottle];

export const hasBottles = createSelector(
  getBottles,
  ( bot ) => bot > 0,
);

const getSomaria = ( state: StumpyState ) => state.inventory[InventoryId.Somaria];

export const hasSomaria = createSelector(
  getSomaria,
  ( somaria ) => somaria > 0,
);

const getByrna = ( state: StumpyState ) => state.inventory[InventoryId.Byrna];

export const hasByrna = createSelector(
  getByrna,
  ( byrna ) => byrna > 0,
);

const getCape = ( state: StumpyState ) => state.inventory[InventoryId.Cape];

export const hasCape = createSelector(
  getCape,
  ( cape ) => cape > 0,
);

const getMirror = ( state: StumpyState ) => state.inventory[InventoryId.Mirror];

export const hasMirror = createSelector(
  getMirror,
  ( mirror ) => mirror > 0,
);

const getShield = ( state: StumpyState ) => state.inventory[InventoryId.Shield];

const maxShield = createSelector(
  isNormalItemPool,
  isHardItemPool,
  ( norm, hard ) => {
    if ( norm ) {
      return 3;
    }
    if ( hard ) {
      return 2;
    }
    return 1;
  },
);

export const hasShield = createSelector(
  getShield,
  maxShield,
  ( shield, max ) => shield > 0 && shield <= max,
);

const getShovel = ( state: StumpyState ) => state.inventory[InventoryId.Shovel];

const maxShovel = ( _: StumpyState ) => 1;

export const hasShovel = createSelector(
  getShovel,
  ( shovel ) => shovel > 0,
);

const getBoots = ( state: StumpyState ) => state.inventory[InventoryId.Boots];

export const hasBoots = createSelector(
  getBoots,
  ( boots ) => boots > 0,
);

const getGlove = ( state: StumpyState ) => state.inventory[InventoryId.Glove];

export const hasGlove = createSelector(
  getGlove,
  ( glove ) => glove > 0,
);

export const hasTitans = createSelector(
  getGlove,
  ( glove ) => glove > 1,
);

const getFlippers = ( state: StumpyState ) => state.inventory[InventoryId.Flippers];

export const hasFlippers = createSelector(
  getFlippers,
  ( flips ) => flips > 0,
);

const getMoonPearl = ( state: StumpyState ) => state.inventory[InventoryId.MoonPearl];

export const hasMoonPearl = createSelector(
  getMoonPearl,
  ( pearl ) => pearl > 0,
);

const getSword = ( state: StumpyState ) => state.inventory[InventoryId.Sword];

export const maxSword = createSelector(
  isSwordless,
  isExpertItemPool,
  isHardItemPool,
  ( none, expert, hard ) => {
    if ( none ) {
      return 0;
    }
    if ( expert ) {
      return 2;
    }
    if ( hard ) {
      return 3;
    }
    return 4;
  },
);

export const nextSword = createSelector(
  getSword,
  maxSword,
  ( cur, max ) => wrap( cur + 1, 0, max ),
);

export const prevSword = createSelector(
  getSword,
  maxSword,
  ( cur, max ) => wrap( cur - 1, 0, max ),
);

export const hasSword = createSelector(
  getSword,
  isSwordless,
  ( sword, less ) => !less && sword > 0,
);

export const hasMasterSword = createSelector(
  getSword,
  hasSword,
  ( sword, has ) => has && sword > 1,
);

export const hasTemperedSword = createSelector(
  isExpertItemPool,
  getSword,
  hasSword,
  ( expert, sword, has ) => !expert && has && sword > 2,
);

export const hasGoldenSword = createSelector(
  isNormalItemPool,
  getSword,
  hasSword,
  ( normal, sword, has ) => normal && has && sword > 3,
);

export const getHeartContainers = ( state: StumpyState ) => state.inventory[InventoryId.HeartContainer];

export const maxHeartContainers = createSelector(
  isExpertItemPool,
  isHardItemPool,
  ( expert, hard ) => {
    if ( expert ) {
      return 8;
    }
    if ( hard ) {
      return 14;
    }
    return 20;
  },
);

export const nextHeartContainers = createSelector(
  getHeartContainers,
  maxHeartContainers,
  ( cur, max ) => wrap( cur + 1, 3, max ),
);

export const prevHeartContainers = createSelector(
  getHeartContainers,
  maxHeartContainers,
  ( cur, max ) => wrap( cur - 1, 3, max ),
);

export const hasHeartContainers = ( _: StumpyState ) => true;
