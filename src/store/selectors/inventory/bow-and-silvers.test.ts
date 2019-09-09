// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasBow, hasBowAndSilvers, hasSilverArrows } from './bow-and-silvers';

describe( 'The bow and silver arrow related selectors', () => {
  it( 'can see if we have the bow by itself.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bow] = 1;
    state.inventory![InventoryId.SilverArrows] = 0;

    Selector( hasBow ).expect( state ).toReturn( true );
    Selector( hasSilverArrows ).expect( state ).toReturn( false );
    Selector( hasBowAndSilvers ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have the silver arrows by itself.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bow] = 0;
    state.inventory![InventoryId.SilverArrows] = 1;

    Selector( hasBow ).expect( state ).toReturn( false );
    Selector( hasSilverArrows ).expect( state ).toReturn( true );
    Selector( hasBowAndSilvers ).expect( state ).toReturn( false );
  } );

  it( 'can see if we have the both bow and silver arrows.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Bow] = 1;
    state.inventory![InventoryId.SilverArrows] = 1;

    Selector( hasBow ).expect( state ).toReturn( true );
    Selector( hasSilverArrows ).expect( state ).toReturn( true );
    Selector( hasBowAndSilvers ).expect( state ).toReturn( true );
  } );
} );
