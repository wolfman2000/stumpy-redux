import produce from 'immer';
import { getType } from 'typesafe-actions';

import { decrementInventory, incrementInventory, setInventory, StumpyAction } from '../actions';

import { fallbackInventory } from '../../api/inventory';

import Inventory from '../../api/inventory/inventory';

const inventoryReducer = ( state: Inventory = fallbackInventory, action: StumpyAction ) => {
  function produceState( draft: Inventory ): void {
    switch ( action.type ) {
      case getType( incrementInventory ): {
        const item = draft[action.payload.key];
        let current = item.current + 1;
        if ( current > item.max ) {
          current = 0;
        }

        item.current = current;
        break;
      }
      case getType( decrementInventory ): {
        const item = draft[action.payload.key];
        let current = item.current - 1;
        if ( current < 0 ) {
          current = item.max;
        }

        item.current = current;
        break;
      }
      // TODO: Automatically derive the rest of this using selectors.
      case getType( setInventory ): {
        const item = draft[action.payload.key];
        item.current = action.payload.value;
        break;
      }
    }
  }

  return produce( state, produceState );
};

export { inventoryReducer };
