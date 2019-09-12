// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatHelmasaurKing } from '.';
import ItemPlacement from '../../../../api/settings/logic/item-placement';

describe( 'The boss Helmasaur King', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( canDefeatHelmasaurKing ).expect( state ).toReturn( false );
  } );

  it( 'cannot be beaten with a sword alone.', () => {
    state.inventory![InventoryId.Sword] = 3;

    Selector( canDefeatHelmasaurKing ).expect( state ).toReturn( false );
  } );

  it( 'cannot be beaten with bombs alone.', () => {
    state.inventory![InventoryId.Bomb] = 1;

    Selector( canDefeatHelmasaurKing ).expect( state ).toReturn( false );
  } );

  it( 'can be beaten with a hammer alone.', () => {
    state.inventory![InventoryId.Hammer] = 1;

    Selector( canDefeatHelmasaurKing ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten with a hammer and a sword.', () => {
    state.inventory![InventoryId.Hammer] = 1;
    state.inventory![InventoryId.Sword] = 1;

    Selector( canDefeatHelmasaurKing ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten with a hammer and a bow.', () => {
    state.inventory![InventoryId.Hammer] = 1;
    state.inventory![InventoryId.Bow] = 1;

    Selector( canDefeatHelmasaurKing ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten (expectedly) with a hammer and Master Sword.', () => {
    state.inventory![InventoryId.Hammer] = 1;
    state.inventory![InventoryId.Sword] = 2;
    state.settings!.itemPlacement = ItemPlacement.Restricted;

    Selector( canDefeatHelmasaurKing ).expect( state ).toReturn( true );
  } );
} );
