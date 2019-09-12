// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';
import ItemPool from '../../../../api/settings/difficulty/item-pool';

import { canDefeatArmosKnights } from '.';

describe( 'The boss Armos Knights', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( canDefeatArmosKnights ).expect( state ).toReturn( false );
  } );

  it( 'can be beaten with just bombs...on the normal item pool difficulty', () => {
    state.inventory![InventoryId.Bomb] = 1;
    Selector( canDefeatArmosKnights ).expect( state ).toReturn( true );
  } );

  it( 'cannot be beaten with just bombs on higher item pool difficulties', () => {
    state.inventory![InventoryId.Bomb] = 1;
    state.settings!.itemPool = ItemPool.Hard;
    Selector( canDefeatArmosKnights ).expect( state ).toReturn( false );
  } );

  it( 'can be beaten with the cane of byrna.', () => {
    state.inventory![InventoryId.Byrna] = 1;
    Selector( canDefeatArmosKnights ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten with the bow and arrows.', () => {
    state.inventory![InventoryId.Bow] = 1;
    Selector( canDefeatArmosKnights ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten with the ice rod.', () => {
    state.inventory![InventoryId.IceRod] = 1;
    Selector( canDefeatArmosKnights ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten with the red boomerang.', () => {
    state.inventory![InventoryId.RedBoomerang] = 1;
    Selector( canDefeatArmosKnights ).expect( state ).toReturn( true );
  } );
} );
