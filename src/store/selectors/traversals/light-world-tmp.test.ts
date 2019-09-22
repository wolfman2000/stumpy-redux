// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../reducers';

import { makeGetAccessibility } from '.';

import { DungeonId } from '../../../api/dungeon/dungeon-id';
import InventoryId from '../../../api/inventory/inventory-id';
import Swords from '../../../api/settings/difficulty/swords';
import NodeId from '../../../api/traversal/nodes/node-id';

import { fallbackDungeonMaps } from '../../../api/dungeon';
import { fallbackInventory } from '../../../api/inventory';
import { fallbackSettings } from '../../../api/settings';
import { fallbackNodes } from '../../../api/traversal';
import { fallbackEdges } from '../../../api/traversal/edges';

import { available, availableWithGlitches, visible } from '../../../api/traversal/availabilities';

describe( 'The light world', () => {
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

  it( 'can enter the mini moldorm cave with bombs.', () => {
    state.inventory![InventoryId.Bomb] = 1;

    Selector( makeGetAccessibility() ).expect( state, NodeId.LIGHT_MINI_MOLDORM_ENTRANCE ).toReturn( available );
  } );

  it( 'can take you to the dark world if Agahnim is taken out...with nothing?!?', () => {
    state.dungeons![DungeonId.CastleTower] = {
      chestsOpened: 2,
      isBossDefeated: true,
      smallKeysFound: 2,
    };

    Selector( makeGetAccessibility() ).expect( state, NodeId.DARK_D4_OUTER ).toReturn( available );
  } );

  it( 'has a barrier that can be broken with a hammer in swordless mode.', () => {
    state.settings!.swords = Swords.Swordless;
    state.inventory![InventoryId.Hammer] = 1;
  } );
} );
