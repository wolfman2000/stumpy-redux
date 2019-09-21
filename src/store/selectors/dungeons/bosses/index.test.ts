// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { fallbackSettings } from '../../../../api/settings';

import { hasAllPyramidCrystals, hasGreenPendant } from '.';

describe( 'The dungeons', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      settings: {...fallbackSettings},
    };
  } );

  it( 'do not part with their items if the bosses are alive.', () => {
    Selector( hasGreenPendant ).expect( state ).toReturn( false );
    Selector( hasAllPyramidCrystals ).expect( state ).toReturn( false );
  } );
} );
