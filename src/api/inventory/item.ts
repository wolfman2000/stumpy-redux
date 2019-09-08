import InventoryId from './inventory-id';

// TODO: Consider making the max and active derived.
interface IItem {
  id: InventoryId;
  max: number; // 0 based.
  current: number; // 0 based.
  active: number; // 0 based, normally 1.
}

export default IItem;
