// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../../reducers';

import { makeGetAccessibility } from '../..';

import { fallbackDungeonMaps } from '../../../../../api/dungeon';
import { fallbackInventory } from '../../../../../api/inventory';
import { fallbackSettings } from '../../../../../api/settings';
import { fallbackNodes } from '../../../../../api/traversal';
import { fallbackEdges } from '../../../../../api/traversal/edges';

import InventoryId from '../../../../../api/inventory/inventory-id';
import GameType from '../../../../../api/settings/gameplay/game-type';
import NodeId from '../../../../../api/traversal/nodes/node-id';

import { available, availableWithGlitches, unavailable } from '../../../../../api/traversal/availabilities';

describe( 'The Death Mountain Ascent in Inverted Mode', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      edges: [...fallbackEdges],
      inventory: {...fallbackInventory},
      nodes: fallbackNodes,
      settings: {
        ...fallbackSettings,
        gameType: GameType.Inverted,
      },
    };
  } );

  it( 'is impossible to access at the start.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_DM_ASCENT_ENTRANCE )
      .toReturn( unavailable );
  } );

  it( 'is possible to access the entrance with the gloves.', () => {
    state.inventory![InventoryId.Glove] = 2;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_DM_ASCENT_ENTRANCE )
      .toReturn( available );
  } );

  it( 'is possible to return the old man with the gloves and memorization.', () => {
    state.inventory![InventoryId.Glove] = 2;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_A4_LOWER )
      .toReturn( availableWithGlitches );
  } );
} );
