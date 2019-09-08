import { ActionType, createStandardAction } from 'typesafe-actions';

const SETTING_UPDATE = 'settings/UPDATE';

export const updateSettings = createStandardAction( SETTING_UPDATE )<{
  key: string,
  value: number,
}>();

export const doNothing = createStandardAction( 'do/NOTHING' )();

type doNothingType = ActionType<typeof doNothing>;

export type StumpyAction =
  ActionType<typeof updateSettings> |
  doNothingType;
