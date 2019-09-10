// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatKholdstare } from '.';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The boss Kholdstare', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( canDefeatKholdstare ).expect( state ).toReturn( false );
  } );

  it( 'cannot be beaten with bombos alone.', () => {
    state.inventory![InventoryId.Bombos] = 1;

    Selector( canDefeatKholdstare ).expect( state ).toReturn( false );
  } );

  it( 'cannot be beaten with a primary weapon alone.', () => {
    state.inventory![InventoryId.Sword] = 4;

    Selector( canDefeatKholdstare ).expect( state ).toReturn( false );
  } );

  it( 'can be beaten with bombos and a sword when not restricted.', () => {
    state.inventory![InventoryId.Bombos] = 1;
    state.inventory![InventoryId.Sword] = 4;

    Selector( canDefeatKholdstare ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten with just a fire rod when not restricted (and when paying attention to magic).', () => {
    state.inventory![InventoryId.FireRod] = 1;

    Selector( canDefeatKholdstare ).expect( state ).toReturn( true );
  } );

  describe( '(in restricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Restricted;
    } );

    it( 'needs more than the fire rod by itself to take out.', () => {
      state.inventory![InventoryId.FireRod] = 1;

      Selector( canDefeatKholdstare ).expect( state ).toReturn( false );
    } );

    it( 'can be defeated with fire rod and master sword.', () => {
      state.inventory![InventoryId.FireRod] = 1;
      state.inventory![InventoryId.Sword] = 2;

      Selector( canDefeatKholdstare ).expect( state ).toReturn( true );
    } );

    it( 'can be defeated with fire rod and three magic bars.', () => {
      state.inventory![InventoryId.FireRod] = 1;
      state.inventory![InventoryId.Bottle] = 2;

      Selector( canDefeatKholdstare ).expect( state ).toReturn( true );
    } );

    it( 'can be defeated with fire rod, bombos, and three magic bars.', () => {
      state.inventory![InventoryId.FireRod] = 1;
      state.inventory![InventoryId.Bombos] = 1;
      state.inventory![InventoryId.Bottle] = 1;

      Selector( canDefeatKholdstare ).expect( state ).toReturn( true );
    } );
  } );
} );
