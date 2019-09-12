// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatArrghus } from '.';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The boss Arrghus', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( canDefeatArrghus ).expect( state ).toReturn( false );
  } );

  describe( '', () => {
    beforeEach( () => {
      state.inventory![InventoryId.Hookshot] = 1;
      state.settings!.itemPlacement = ItemPlacement.Advanced;
    } );

    it( 'cannot be beaten with hookshot alone.', () => {
      Selector( canDefeatArrghus ).expect( state ).toReturn( false );
    } );

    it( 'can be beaten (expectedly) with the hookshot & Master Sword.', () => {
      state.inventory![InventoryId.Sword] = 3;
      state.settings!.itemPlacement = ItemPlacement.Restricted;

      Selector( canDefeatArrghus ).expect( state ).toReturn( true );
    } );

    it( 'can be beaten with the hookshot and the bow.', () => {
      state.inventory![InventoryId.Bow] = 1;

      Selector( canDefeatArrghus ).expect( state ).toReturn( true );
    } );

    it( 'can be beaten with the hookshot and the ice rod.', () => {
      state.inventory![InventoryId.IceRod] = 1;

      Selector( canDefeatArrghus ).expect( state ).toReturn( true );
    } );
  } );
} );
