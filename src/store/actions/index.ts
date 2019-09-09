import { ActionType, createStandardAction } from 'typesafe-actions';
import InventoryId from '../../api/inventory/inventory-id';

interface IInventoryKey {
  key: InventoryId;
}

const SETTING_UPDATE = 'settings/UPDATE';
const INVENTORY_INCREMENT = 'inventory/INCREMENT';
const INVENTORY_DECREMENT = 'inventory/DECREMENT';
const INVENTORY_SET = 'inventory/SET';

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

type doNothingType = ActionType<typeof doNothing>;

export type StumpyAction =
  ActionType<typeof updateSettings> |
  ActionType<typeof incrementInventory> |
  ActionType<typeof decrementInventory> |
  ActionType<typeof setInventory> |
  doNothingType;
