import { IBigKeyDungeon, ISmallKeyDungeon } from '../../../../api/dungeon/dungeon';

export const getSmallKeys = ( isSmallKeysanity: boolean, dungeon: ISmallKeyDungeon ) => {
  if ( isSmallKeysanity ) {
    return dungeon.smallKeysFound;
  }

  return 100;
};

export const has1Key = ( keyCount: number ) => keyCount > 0;

export const has2Key = ( keyCount: number ) => keyCount > 1;

export const has3Key = ( keyCount: number ) => keyCount > 2;

export const has4Key = ( keyCount: number ) => keyCount > 3;

export const has5Key = ( keyCount: number ) => keyCount > 4;

export const has6Key = ( keyCount: number ) => keyCount > 5;

export const hasBigKey = ( isBigKeysanity: boolean, dungeon: IBigKeyDungeon ) => {
  return !isBigKeysanity || dungeon.hasBigKey;
};
