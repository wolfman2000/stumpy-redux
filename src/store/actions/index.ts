import { ActionType, createStandardAction } from 'typesafe-actions';
import { DungeonId } from '../../api/dungeon/dungeon-id';
import InventoryId from '../../api/inventory/inventory-id';

interface IInventoryKey {
  key: InventoryId;
}

const SETTING_UPDATE = 'settings/UPDATE';
const INVENTORY_INCREMENT = 'inventory/INCREMENT';
const INVENTORY_DECREMENT = 'inventory/DECREMENT';
const INVENTORY_SET = 'inventory/SET';
const DUNGEON_SET_CHESTS_OPENED = 'dungeon/SET_CHESTS_OPENED';
const DUNGEON_SET_BIG_KEY = 'dungeon/SET_BIG_KEY';
const DUNGEON_SET_SMALL_KEY = 'dungeon/SET_SMALL_KEY';
const DUNGEON_SET_BOSS_DEAD = 'dungeon/SET_BOSS_DEAD';
const DUNGEON_SET_BOSS_ID = 'dungeon/SET_BOSS_ID';
const DUNGEON_SET_MEDALLION = 'dungeon/SET_MEDALLION';
const DUNGEON_SET_REWARD = 'dungeon/SET_REWARD';

export const updateSettings = createStandardAction( SETTING_UPDATE )<{
  key: string,
  value: number,
}>();

export const incrementInventory = createStandardAction( INVENTORY_INCREMENT )<IInventoryKey>();

export const decrementInventory = createStandardAction( INVENTORY_DECREMENT )<IInventoryKey>();

export const setInventory = createStandardAction( INVENTORY_SET )<{
  key: InventoryId,
  value: number,
}>();

export const doNothing = createStandardAction( 'do/NOTHING' )();

interface IDungeonFlag {
  key: DungeonId;
  value: boolean;
}

interface IDungeonValue {
  key: DungeonId;
  value: number;
}

export const dungeonSetBigKey = createStandardAction( DUNGEON_SET_BIG_KEY )<IDungeonFlag>();

export const dungeonSetBossDead = createStandardAction( DUNGEON_SET_BOSS_DEAD )<IDungeonFlag>();

export const dungeonSetBossId = createStandardAction( DUNGEON_SET_BOSS_ID )<IDungeonValue>();

export const dungeonSetChestsOpened = createStandardAction( DUNGEON_SET_CHESTS_OPENED )<IDungeonValue>();

export const dungeonSetMedallion = createStandardAction( DUNGEON_SET_MEDALLION )<IDungeonValue>();

export const dungeonSetReward = createStandardAction( DUNGEON_SET_REWARD )<IDungeonValue>();

export const dungeonSetSmallKey = createStandardAction( DUNGEON_SET_SMALL_KEY )<IDungeonValue>();

type doNothingType = ActionType<typeof doNothing>;

export type StumpyAction =
  ActionType<typeof updateSettings> |
  ActionType<typeof incrementInventory> |
  ActionType<typeof decrementInventory> |
  ActionType<typeof setInventory> |
  ActionType<typeof dungeonSetBigKey> |
  ActionType<typeof dungeonSetBossDead> |
  ActionType<typeof dungeonSetBossId> |
  ActionType<typeof dungeonSetChestsOpened> |
  ActionType<typeof dungeonSetMedallion> |
  ActionType<typeof dungeonSetReward> |
  ActionType<typeof dungeonSetSmallKey> |
  doNothingType;
