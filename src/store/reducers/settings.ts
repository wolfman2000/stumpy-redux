import { getType } from 'typesafe-actions';

import { StumpyAction, updateSettings } from '../actions';

enum GameType {
  Standard,
  Open,
  Inverted,
}

interface ISettings {
  gameType: GameType;
}

const fallbackSettings: ISettings = {
  gameType: GameType.Open,
};

export { fallbackSettings };

export function settingReducer( state: ISettings = fallbackSettings, action: StumpyAction ): ISettings {
  switch ( action.type ) {
    case getType( updateSettings ): {
      const tmp = {
        ...state,
      };

      switch ( action.payload.key ) {
        case 'gameType': {
          tmp.gameType = action.payload.value;
        }
      }

      return tmp;
    }
    default:
      return state;
  }
}
