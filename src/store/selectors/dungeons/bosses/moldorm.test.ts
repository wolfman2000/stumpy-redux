// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../../reducers';

import InventoryId from '../../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../../api/settings';

import { canDefeatMoldorm } from '.';

describe( 'The boss Moldorm', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'cannot be beaten if there is no equipment on hand.', () => {
    Selector( canDefeatMoldorm ).expect( state ).toReturn( false );
  } );

  it( 'can be beaten with the golden sword.', () => {
    state.inventory![InventoryId.Sword] = 4;

    Selector( canDefeatMoldorm ).expect( state ).toReturn( true );
  } );
} );
