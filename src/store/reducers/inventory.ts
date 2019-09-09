import produce from 'immer';
import { getType } from 'typesafe-actions';

import { decrementInventory, incrementInventory, setInventory, StumpyAction } from '../actions';

import { fallbackInventory } from '../../api/inventory';

import Inventory from '../../api/inventory/inventory';

const inventoryReducer = ( state: Inventory = fallbackInventory, action: StumpyAction ) => {
  function produceState( draft: Inventory ): void {
    switch ( action.type ) {
      case getType( incrementInventory ): {
        draft[action.payload.key] += 1;
        break;
      }
      case getType( decrementInventory ): {
        draft[action.payload.key] -= 1;
        break;
      }
      // TODO: Automatically derive the rest of this using selectors.
      case getType( setInventory ): {
        draft[action.payload.key] = action.payload.value;
        break;
      }
    }
  }

  return produce( state, produceState );
};

export { inventoryReducer };
