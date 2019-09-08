import { createSelector } from 'reselect';

import { isExpertItemPool, isHardItemPool, isNormalItemPool, isSwordless } from './settings';

import { StumpyState } from '../reducers';

import InventoryId from '../../api/inventory/inventory-id';

const getBow = ( state: StumpyState ) => state.inventory[InventoryId.Bow].current;

export const hasBow = createSelector(
  getBow,
  ( bow ) => bow > 0,
);

const getSilverArrows = ( state: StumpyState ) => state.inventory[InventoryId.SilverArrows].current;

export const hasSilverArrows = createSelector(
  getSilverArrows,
  ( silvers ) => silvers > 0,
);

export const hasBowAndSilvers = createSelector(
  hasBow,
  hasSilverArrows,
  ( bow, silvers ) => bow && silvers,
);

const getBlueBoomerang = ( state: StumpyState ) => state.inventory[InventoryId.BlueBoomerang].current;

export const hasBlueBoomerang = createSelector(
  getBlueBoomerang,
  ( boom ) => boom > 0,
);

const getRedBoomerang = ( state: StumpyState ) => state.inventory[InventoryId.RedBoomerang].current;

export const hasRedBoomerang = createSelector(
  getRedBoomerang,
  ( boom ) => boom > 0,
);

export const hasBothBoomerangs = createSelector(
  hasBlueBoomerang,
  hasRedBoomerang,
  ( blue, red ) => blue && red,
);

const getHookshot = ( state: StumpyState ) => state.inventory[InventoryId.Hookshot].current;

export const hasHookshot = createSelector(
  getHookshot,
  ( hook ) => hook > 0,
);

const getBomb = ( state: StumpyState ) => state.inventory[InventoryId.Bomb].current;

export const hasBomb = createSelector(
  getBomb,
  ( bomb ) => bomb > 0,
);

const getMushroom = ( state: StumpyState ) => state.inventory[InventoryId.Mushroom].current;

export const hasMushroom = createSelector(
  getMushroom,
  ( mush ) => mush > 0,
);

const getPowder = ( state: StumpyState ) => state.inventory[InventoryId.Powder].current;

export const hasPowder = createSelector(
  getPowder,
  ( powder ) => powder > 0,
);

const getFireRod = ( state: StumpyState ) => state.inventory[InventoryId.FireRod].current;

export const hasFireRod = createSelector(
  getFireRod,
  ( fire ) => fire > 0,
);

const getIceRod = ( state: StumpyState ) => state.inventory[InventoryId.IceRod].current;

export const hasIceRod = createSelector(
  getIceRod,
  ( ice ) => ice > 0,
);

const getBombos = ( state: StumpyState ) => state.inventory[InventoryId.Bombos].current;

export const hasBombos = createSelector(
  getBombos,
  ( bombos ) => bombos > 0,
);

const getEther = ( state: StumpyState ) => state.inventory[InventoryId.Ether].current;

export const hasEther = createSelector(
  getEther,
  ( ether ) => ether > 0,
);

const getQuake = ( state: StumpyState ) => state.inventory[InventoryId.Quake].current;

export const hasQuake = createSelector(
  getQuake,
  ( quake ) => quake > 0,
);

const getMagic = ( state: StumpyState ) => state.inventory[InventoryId.Magic].current;

// Note that Quarter magic may be gone now...
export const hasMagic = createSelector(
  getMagic,
  ( magic ) => magic > 0,
);

const getLantern = ( state: StumpyState ) => state.inventory[InventoryId.Lantern].current;

export const hasLantern = createSelector(
  getLantern,
  ( lamp ) => lamp > 0,
);

const getHammer = ( state: StumpyState ) => state.inventory[InventoryId.Hammer].current;

export const hasHammer = createSelector(
  getHammer,
  ( hammer ) => hammer > 0,
);

const getFlute = ( state: StumpyState ) => state.inventory[InventoryId.Flute].current;

export const hasFlute = createSelector(
  getFlute,
  ( flute ) => flute > 0,
);

const getNet = ( state: StumpyState ) => state.inventory[InventoryId.Net].current;

export const hasNet = createSelector(
  getNet,
  ( net ) => net > 0,
);

const getBook = ( state: StumpyState ) => state.inventory[InventoryId.Book].current;

export const hasBook = createSelector(
  getBook,
  ( book ) => book > 0,
);

export const getTunic = ( state: StumpyState ) => state.inventory[InventoryId.Tunic].current;

export const hasTunic = ( _: StumpyState ) => true;

export const getBottles = ( state: StumpyState ) => state.inventory[InventoryId.Bottle].current;

export const hasBottles = createSelector(
  getBottles,
  ( bot ) => bot > 0,
);

const getSomaria = ( state: StumpyState ) => state.inventory[InventoryId.Somaria].current;

export const hasSomaria = createSelector(
  getSomaria,
  ( somaria ) => somaria > 0,
);

const getByrna = ( state: StumpyState ) => state.inventory[InventoryId.Byrna].current;

export const hasByrna = createSelector(
  getByrna,
  ( byrna ) => byrna > 0,
);

const getCape = ( state: StumpyState ) => state.inventory[InventoryId.Cape].current;

export const hasCape = createSelector(
  getCape,
  ( cape ) => cape > 0,
);

const getMirror = ( state: StumpyState ) => state.inventory[InventoryId.Mirror].current;

export const hasMirror = createSelector(
  getMirror,
  ( mirror ) => mirror > 0,
);

const getShield = ( state: StumpyState ) => state.inventory[InventoryId.Shield].current;

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

const getShovel = ( state: StumpyState ) => state.inventory[InventoryId.Shovel].current;

const maxShovel = ( _: StumpyState ) => 1;

export const hasShovel = createSelector(
  getShovel,
  ( shovel ) => shovel > 0,
);

const getBoots = ( state: StumpyState ) => state.inventory[InventoryId.Boots].current;

export const hasBoots = createSelector(
  getBoots,
  ( boots ) => boots > 0,
);

const getGlove = ( state: StumpyState ) => state.inventory[InventoryId.Glove].current;

export const hasGlove = createSelector(
  getGlove,
  ( glove ) => glove > 0,
);

export const hasTitans = createSelector(
  getGlove,
  ( glove ) => glove > 1,
);

const getFlippers = ( state: StumpyState ) => state.inventory[InventoryId.Flippers].current;

export const hasFlippers = createSelector(
  getFlippers,
  ( flips ) => flips > 0,
);

const getMoonPearl = ( state: StumpyState ) => state.inventory[InventoryId.MoonPearl].current;

export const hasMoonPearl = createSelector(
  getMoonPearl,
  ( pearl ) => pearl > 0,
);

const getSword = ( state: StumpyState ) => state.inventory[InventoryId.Sword].current;

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

export const getHeartContainers = ( state: StumpyState ) => state.inventory[InventoryId.HeartContainer].current;

export const hasHeartContainers = ( _: StumpyState ) => true;
