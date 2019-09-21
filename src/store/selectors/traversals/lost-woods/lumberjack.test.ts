// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { makeGetAccessibility } from '..';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { fallbackInventory } from '../../../../api/inventory';
import { fallbackSettings } from '../../../../api/settings';
import { fallbackNodes } from '../../../../api/traversal';
import { fallbackEdges } from '../../../../api/traversal/edges';

import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import InventoryId from '../../../../api/inventory/inventory-id';
import GameType from '../../../../api/settings/gameplay/game-type';
import NodeId from '../../../../api/traversal/nodes/node-id';

import { available, unavailable, visible } from '../../../../api/traversal/availabilities';

describe( 'The lumberjack area', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: {...fallbackDungeonMaps},
      edges: [...fallbackEdges],
      inventory: {...fallbackInventory},
      nodes: fallbackNodes,
      settings: {...fallbackSettings},
    };
  } );

  it( 'has an item we can see right away, but not necessarily get.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_LUMBERJACK_ITEM )
      .toReturn( visible );
  } );

  it( 'will not let us get that item yet if we have no equipment.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_LUMBERJACK_TOP )
      .toReturn( unavailable );
  } );

  it( 'will not let us get that item yet if we have the boots but no defeated Aga 1.', () => {
    state.inventory![InventoryId.Boots] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_LUMBERJACK_TOP )
      .toReturn( unavailable );
  } );

  it( 'has the lumberjack tree available if Aga 1 is taken out in non-inverted settings.', () => {
    state.inventory![InventoryId.Boots] = 1;
    state.dungeons![DungeonId.CastleTower] = {
      chestsOpened: 2,
      isBossDefeated: true,
      smallKeysFound: 2,
    };

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_LUMBERJACK_ITEM )
      .toReturn( available );
  } );

  it( 'has the item inaccessible if we are in an inverted seed, but do not have the moon pearl.', () => {
    state.settings!.gameType = GameType.Inverted;
    state.inventory![InventoryId.Boots] = 1;
    state.dungeons![DungeonId.CastleTower] = {
      chestsOpened: 2,
      isBossDefeated: true,
      smallKeysFound: 2,
    };

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.CAVE_LUMBERJACK_TOP )
      .toReturn( unavailable );
  } );
} );
