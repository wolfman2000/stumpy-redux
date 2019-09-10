// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatAgahnim } from '.';

describe( 'The boss Agahnim', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( canDefeatAgahnim ).expect( state ).toReturn( false );
  } );

  it( 'can be beaten if we have a sword to reflect the projectiles.', () => {
    state.inventory![InventoryId.Sword] = 1;

    Selector( canDefeatAgahnim ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten if we have a bug net to reflect the projectiles.', () => {
    state.inventory![InventoryId.Net] = 1;

    Selector( canDefeatAgahnim ).expect( state ).toReturn( true );
  } );

  it( 'can be beaten if we have a hammer to reflect the projectiles.', () => {
    state.inventory![InventoryId.Hammer] = 1;

    Selector( canDefeatAgahnim ).expect( state ).toReturn( true );
  } );
} );
