// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatBlind } from '.';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The boss Blind', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  describe( '(on restricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Restricted;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( canDefeatBlind ).expect( state ).toReturn( false );
    } );

    it( 'cannot be beaten with sword alone.', () => {
      state.inventory![InventoryId.Sword] = 1;

      Selector( canDefeatBlind ).expect( state ).toReturn( false );
    } );

    it( 'cannot be beaten with byrna alone.', () => {
      state.inventory![InventoryId.Byrna] = 1;

      Selector( canDefeatBlind ).expect( state ).toReturn( false );
    } );

    it( 'can be beaten with both sword and cape.', () => {
      state.inventory![InventoryId.Cape] = 1;
      state.inventory![InventoryId.Sword] = 1;

      Selector( canDefeatBlind ).expect( state ).toReturn( true );
    } );
  } );

  describe( '(on unrestricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Advanced;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( canDefeatBlind ).expect( state ).toReturn( false );
    } );

    it( 'can be beaten with sword alone.', () => {
      state.inventory![InventoryId.Sword] = 1;

      Selector( canDefeatBlind ).expect( state ).toReturn( true );
    } );

    it( 'can be beaten with byrna alone.', () => {
      state.inventory![InventoryId.Byrna] = 1;

      Selector( canDefeatBlind ).expect( state ).toReturn( true );
    } );
  } );
} );
