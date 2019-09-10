// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatMothula } from '.';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The boss Mothula', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  describe( '(in the restricted set)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Restricted;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( canDefeatMothula ).expect( state ).toReturn( false );
    } );

    it( 'can be beaten with the master sword.', () => {
      state.inventory![InventoryId.Sword] = 2;

      Selector( canDefeatMothula ).expect( state ).toReturn( true );
    } );

    it( 'cannot be beaten with a fire rod alone.', () => {
      state.inventory![InventoryId.FireRod] = 1;

      Selector( canDefeatMothula ).expect( state ).toReturn( false );
    } );

    it( 'can be beaten with a fire rod and 1/2 magic.', () => {
      state.inventory![InventoryId.FireRod] = 1;
      state.inventory![InventoryId.Magic] = 1;

      Selector( canDefeatMothula ).expect( state ).toReturn( true );
    } );
  } );

  describe( '(in the unrestricted set)', () => {
    beforeEach( () => {
      state.settings!.itemPlacement = ItemPlacement.Advanced;
    } );

    it( 'cannot be beaten if there is no equipment on hand.', () => {
      Selector( canDefeatMothula ).expect( state ).toReturn( false );
    } );

    it( 'can be beaten with a sword on hand.', () => {
      state.inventory![InventoryId.Sword] = 1;

      Selector( canDefeatMothula ).expect( state ).toReturn( true );
    } );

    it( 'can be beaten with a fire rod on hand.', () => {
      state.inventory![InventoryId.FireRod] = 1;

      Selector( canDefeatMothula ).expect( state ).toReturn( true );
    } );

    it( 'can be beaten with a cane of byrna on hand.', () => {
      state.inventory![InventoryId.Byrna] = 1;

      Selector( canDefeatMothula ).expect( state ).toReturn( true );
    } );
  } );
} );
