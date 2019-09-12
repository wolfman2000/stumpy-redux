// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatTrinexx } from '.';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The boss Trinexx', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( canDefeatTrinexx ).expect( state ).toReturn( false );
  } );

  it( 'cannot be beaten with fire alone.', () => {
    state.inventory![InventoryId.FireRod] = 1;

    Selector( canDefeatTrinexx ).expect( state ).toReturn( false );
  } );

  it( 'cannot be beaten with ice alone.', () => {
    state.inventory![InventoryId.IceRod] = 1;

    Selector( canDefeatTrinexx ).expect( state ).toReturn( false );
  } );

  describe( '', () => {
    beforeEach( () => {
      state.inventory![InventoryId.FireRod] = 1;
      state.inventory![InventoryId.IceRod] = 1;
    } );

    it( 'needs more than both elemental rods.', () => {
      Selector( canDefeatTrinexx ).expect( state ).toReturn( false );
    } );

    describe( '', () => {
      beforeEach( () => {
        state.inventory![InventoryId.Sword] = 2;
      } );

      it( 'can be taken out with any melee weapon when not restricted.', () => {
        Selector( canDefeatTrinexx ).expect( state ).toReturn( true );
      } );

      describe( '', () => {
        beforeEach( () => {
          state.settings!.itemPlacement = ItemPlacement.Restricted;
        } );

        it( 'cannot be taken out by master sword alone when restricted.', () => {
          Selector( canDefeatTrinexx ).expect( state ).toReturn( false );
        } );

        it( 'can be taken out with the tempered sword while restricted.', () => {
          state.inventory![InventoryId.Sword] = 3;
          Selector( canDefeatTrinexx ).expect( state ).toReturn( true );
        } );

        it( 'can be taken out with the master sword & extra magic while restricted.', () => {
          state.inventory![InventoryId.Bottle] = 1;
          Selector( canDefeatTrinexx ).expect( state ).toReturn( true );
        } );
      } );
    } );
  } );
} );
