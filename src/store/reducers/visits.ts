import produce from 'immer';
import { getType } from 'typesafe-actions';

import { fallbackVisitMap, IVisitMap } from '../../api/traversal';

import { locationFlip, StumpyAction } from '../actions';

const visitReducer = ( state = fallbackVisitMap, action: StumpyAction ) => {
  const produceState = ( draft: IVisitMap ): void => {
    switch ( action.type ) {
      case getType( locationFlip ): {
        const hasItem = Object.prototype.hasOwnProperty.call( draft, action.payload.key );
        draft[action.payload.key] = hasItem ? !draft[action.payload.key] : true;
      }
    }
  };

  return produce( state, produceState );
};

export { visitReducer };
