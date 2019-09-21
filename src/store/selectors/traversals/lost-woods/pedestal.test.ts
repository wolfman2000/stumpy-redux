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
import NodeId from '../../../../api/traversal/nodes/node-id';

import { available, unavailable, visible } from '../../../../api/traversal/availabilities';

import { Reward } from '../../../../api/dungeon/reward';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The Master Sword Pedestal', () => {
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

  it( 'starts off as inaccessible.', () => {
    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_MASTER_SWORD_PEDESTAL )
      .toReturn( unavailable );
  } );

  it( 'tells us its contents with the book.', () => {
    state.inventory![InventoryId.Book] = 1;

    Selector( makeGetAccessibility() )
      .expect( state, NodeId.LIGHT_MASTER_SWORD_PEDESTAL )
      .toReturn( visible );
  } );

  describe( 'when the three pendants are available', () => {
    beforeEach( () => {
      state.dungeons![DungeonId.EasternPalace] = {
        bossId: DungeonId.EasternPalace,
        chestsOpened: 0,
        hasBigKey: false,
        isBossDefeated: true,
        reward: Reward.GreenPendant,
      };
      state.dungeons![DungeonId.DesertPalace] = {
        bossId: DungeonId.DesertPalace,
        chestsOpened: 0,
        hasBigKey: false,
        isBossDefeated: true,
        reward: Reward.Pendant,
      };
      state.dungeons![DungeonId.TowerOfHera] = {
        bossId: DungeonId.TowerOfHera,
        chestsOpened: 0,
        hasBigKey: false,
        isBossDefeated: true,
        reward: Reward.Pendant,
      };
    } );

    it( 'is available to take in Advanced placement mode.', () => {
      // state.inventory![InventoryId.Book] = 1;

      Selector( makeGetAccessibility() )
        .expect( state, NodeId.LIGHT_MASTER_SWORD_PEDESTAL )
        .toReturn( available );
    } );

    it( 'is NOT available logically to take in Basic placement mode with no book.', () => {
      state.settings!.itemPlacement = ItemPlacement.Basic;
      // state.inventory![InventoryId.Book] = 1;

      Selector( makeGetAccessibility() )
        .expect( state, NodeId.LIGHT_MASTER_SWORD_PEDESTAL )
        .toReturn( unavailable );
    } );

    it( 'is available logically to take in Basic placement mode with the book.', () => {
      state.settings!.itemPlacement = ItemPlacement.Basic;
      state.inventory![InventoryId.Book] = 1;

      Selector( makeGetAccessibility() )
        .expect( state, NodeId.LIGHT_MASTER_SWORD_PEDESTAL )
        .toReturn( available );
    } );
  } );
} );
