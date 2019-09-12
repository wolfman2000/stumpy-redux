// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatVitreous } from '.';
import ItemPool from '../../../../api/settings/difficulty/item-pool';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The boss Vitreous', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  describe( '(in restricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Restricted;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( canDefeatVitreous ).expect( state ).toReturn( false );
    } );

    it( 'can be beaten with the master sword.', () => {
      state.inventory![InventoryId.Sword] = 2;

      Selector( canDefeatVitreous ).expect( state ).toReturn( true );
    } );

    it( 'can be beaten with the bow.', () => {
      state.inventory![InventoryId.Bow] = 1;

      Selector( canDefeatVitreous ).expect( state ).toReturn( true );
    } );
  } );

  describe( '(in unrestricted settings)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Advanced;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( canDefeatVitreous ).expect( state ).toReturn( false );
    } );

    it( 'can be beaten with the hammer.', () => {
      state.inventory![InventoryId.Hammer] = 1;

      Selector( canDefeatVitreous ).expect( state ).toReturn( true );
    } );

    it( 'can be beaten with bombs in normal difficulty pools only.', () => {
      state.inventory![InventoryId.Bomb] = 1;
      state.settings!.itemPool = ItemPool.Normal;

      Selector( canDefeatVitreous ).expect( state ).toReturn( true );
    } );

    it( 'cannot be beaten with bombs in hard difficulty pools.', () => {
      state.inventory![InventoryId.Bomb] = 1;
      state.settings!.itemPool = ItemPool.Hard;

      Selector( canDefeatVitreous ).expect( state ).toReturn( false );
    } );
  } );
} );
