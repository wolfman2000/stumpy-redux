import { getType } from 'typesafe-actions';

import { StumpyAction, updateSettings } from '../actions';

import ISettings, { fallbackSettings } from '../../api/settings';

export function settingReducer( state: ISettings = fallbackSettings, action: StumpyAction ): ISettings {
  switch ( action.type ) {
    case getType( updateSettings ): {
      const tmp: any = {
        ...state,
      };

      tmp[action.payload.key] = action.payload.value;

      return tmp;
    }
    default:
      return state;
  }
}
