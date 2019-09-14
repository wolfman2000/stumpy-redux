// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../reducers';

import { makeGetAccessibility } from '.';

import { fallbackSettings } from '../../../api/settings';
import GameType from '../../../api/settings/gameplay/game-type';

import { fallbackDungeonMaps } from '../../../api/dungeon';
import { fallbackNodes } from '../../../api/traversal';
import { available, unavailable } from '../../../api/traversal/availabilities';
import { fallbackEdges } from '../../../api/traversal/edges';
import NodeId from '../../../api/traversal/nodes/node-id';

describe( 'The player', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: fallbackDungeonMaps,
      edges: fallbackEdges,
      inventory: {},
      nodes: fallbackNodes,
      settings: fallbackSettings,
    };
  } );

  it( 'can access the light world upon leaving the house.', () => {
    Selector( makeGetAccessibility() ).expect( state, NodeId.StartingHouse ).toReturn( available );
    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_F5 ).toReturn( available );
  } );

  it( 'can access the dark world upon leaving the house if inverted.', () => {
    state.settings!.gameType = GameType.Inverted;
    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_F5 ).toReturn( unavailable );
    Selector( makeGetAccessibility() ).expect( state, NodeId.DARK_F5 ).toReturn( available );
  } );
} );
