// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatGanon } from '.';
import Swords from '../../../../api/settings/difficulty/swords';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The final boss Ganon', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: {...fallbackSettings},
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( canDefeatGanon ).expect( state ).toReturn( false );
  } );

  describe( '', () => {
    beforeEach( () => {
      state.inventory![InventoryId.Lantern] = 1;
    } );

    it( 'cannot be beaten with just a fire source for the torches, though it helps.', () => {
      Selector( canDefeatGanon ).expect( state ).toReturn( false );
    } );

    it( 'can be taken out with multiple spin attacks assuming the pressure is kept up.', () => {
      state.inventory![InventoryId.Sword] = 2;

      Selector( canDefeatGanon ).expect( state ).toReturn( true );
    } );

    describe( '', () => {
      beforeEach( () => {
        state.settings!.swords = Swords.Swordless;
      } );

      it( 'can be taken out with silver arrows and hammer when in a swordless mode.', () => {
        state.inventory![InventoryId.Hammer] = 1;
        state.inventory![InventoryId.Bow] = 1;
        state.inventory![InventoryId.SilverArrows] = 1;

        Selector( canDefeatGanon ).expect( state ).toReturn( true );
      } );
    } );

    describe( '', () => {
      beforeEach( () => {
        state.settings!.itemPlacement = ItemPlacement.Basic;
        state.settings!.swords = Swords.Randomized;
      } );

      it( 'cannot be taken out with tempered sword alone (allegedly).', () => {
        state.inventory![InventoryId.Sword] = 3;

        Selector( canDefeatGanon ).expect( state ).toReturn( false );
      } );

      it( 'cannot be taken out with bow & silvers alone.', () => {
        state.inventory![InventoryId.Bow] = 1;
        state.inventory![InventoryId.SilverArrows] = 1;

        Selector( canDefeatGanon ).expect( state ).toReturn( false );
      } );

      it( 'can be taken out with tempered sword and silver arrows when restricted.', () => {
        state.inventory![InventoryId.Bow] = 1;
        state.inventory![InventoryId.SilverArrows] = 1;
        state.inventory![InventoryId.Sword] = 3;

        Selector( canDefeatGanon ).expect( state ).toReturn( true );
      } );
    } );
  } );
} );
