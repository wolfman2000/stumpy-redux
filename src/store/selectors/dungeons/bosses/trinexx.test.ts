// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import { fallbackDungeonMaps } from '../../../../api/dungeon';
import { DungeonId } from '../../../../api/dungeon/dungeon-id';
import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

import { makeCanDefeatBoss } from '.';

describe( 'The boss Trinexx', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      dungeons: fallbackDungeonMaps,
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TurtleRock ).toReturn( false );
  } );

  it( 'cannot be beaten with fire alone.', () => {
    state.inventory![InventoryId.FireRod] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TurtleRock ).toReturn( false );
  } );

  it( 'cannot be beaten with ice alone.', () => {
    state.inventory![InventoryId.IceRod] = 1;

    Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TurtleRock ).toReturn( false );
  } );

  describe( '', () => {
    beforeEach( () => {
      state.inventory![InventoryId.FireRod] = 1;
      state.inventory![InventoryId.IceRod] = 1;
    } );

    it( 'needs more than both elemental rods.', () => {
      Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TurtleRock ).toReturn( false );
    } );

    describe( '', () => {
      beforeEach( () => {
        state.inventory![InventoryId.Sword] = 2;
      } );

      it( 'can be taken out with any melee weapon when not restricted.', () => {
        Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TurtleRock ).toReturn( true );
      } );

      describe( '', () => {
        beforeEach( () => {
          state.settings!.itemPlacement = ItemPlacement.Restricted;
        } );

        it( 'cannot be taken out by master sword alone when restricted.', () => {
          Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TurtleRock ).toReturn( false );
        } );

        it( 'can be taken out with the tempered sword while restricted.', () => {
          state.inventory![InventoryId.Sword] = 3;
          Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TurtleRock ).toReturn( true );
        } );

        it( 'can be taken out with the master sword & extra magic while restricted.', () => {
          state.inventory![InventoryId.Bottle] = 1;
          Selector( makeCanDefeatBoss() ).expect( state, DungeonId.TurtleRock ).toReturn( true );
        } );
      } );
    } );
  } );
} );
