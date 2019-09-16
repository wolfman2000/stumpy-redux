// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../reducers';

import { getFullAccessibleGraph, isNodeOnGraph, makeGetAccessibility } from '.';

import { fallbackSettings } from '../../../api/settings';

import { fallbackDungeonMaps } from '../../../api/dungeon';
import { fallbackInventory } from '../../../api/inventory';
import { fallbackNodes } from '../../../api/traversal';
import { fallbackEdges } from '../../../api/traversal/edges';

import GameType from '../../../api/settings/gameplay/game-type';
import { available, unavailable } from '../../../api/traversal/availabilities';
import NodeId from '../../../api/traversal/nodes/node-id';

describe( 'The player', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: fallbackDungeonMaps,
      edges: fallbackEdges,
      inventory: fallbackInventory,
      nodes: fallbackNodes,
      settings: fallbackSettings,
    };
  } );

  it( 'can access the light world upon leaving the house.', () => {
    const graph = Selector( getFullAccessibleGraph ).execute( state );

    // console.log( graph );
    expect( isNodeOnGraph( graph, NodeId.LIGHT_LINKS_HOUSE_ENTRANCE ) ).toBeTruthy();

    Selector( makeGetAccessibility() ).expect( state, NodeId.StartingHouse ).toReturn( available );
    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_F5 ).toReturn( available );
  } );

  it( 'can access the dark world upon leaving the house if inverted.', () => {
    state.settings!.gameType = GameType.Inverted;
    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_F5 ).toReturn( unavailable );
    Selector( makeGetAccessibility() ).expect( state, NodeId.DARK_F5 ).toReturn( available );
  } );
} );
