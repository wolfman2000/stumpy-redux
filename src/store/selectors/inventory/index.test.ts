// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import { StumpyState } from '../../reducers';

import InventoryId from '../../../api/inventory/inventory-id';
import { fallbackSettings } from '../../../api/settings';
import ItemFunctionality from '../../../api/settings/difficulty/item-functionality';

import { getAvailableMagicBars } from '.';

describe( 'The magic capacity', () => {
  let state: Partial<StumpyState>;

  beforeEach( () => {
    state = {
      inventory: {},
      settings: fallbackSettings,
    };
  } );

  it( 'is just one bar with no bottles or magic enhancements.', () => {
    Selector( getAvailableMagicBars ).expect( state ).toReturn( 1 );
  } );

  it( 'is two bars with half magic, but no bottles.', () => {
    state.inventory![InventoryId.Magic] = 1;

    Selector( getAvailableMagicBars ).expect( state ).toReturn( 2 );
  } );

  describe( 'on normal difficulty', () => {
    beforeEach( () => {
      state.settings!.itemFunctionality = ItemFunctionality.Normal;
    } );

    describe( 'and no half magic', () => {
      beforeEach( () => {
        state.inventory![InventoryId.Magic] = 0;
      } );

      it( 'is two bars with one bottle.', () => {
        state.inventory![InventoryId.Bottle] = 1;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 2 );
      } );

      it( 'is three bars with two bottles.', () => {
        state.inventory![InventoryId.Bottle] = 2;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 3 );
      } );

      it( 'is four bars with three bottles.', () => {
        state.inventory![InventoryId.Bottle] = 3;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 4 );
      } );

      it( 'is five bars with four bottles.', () => {
        state.inventory![InventoryId.Bottle] = 4;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 5 );
      } );
    } );

    describe( 'and half magic', () => {
      beforeEach( () => {
        state.inventory![InventoryId.Magic] = 1;
      } );

      it( 'is four bars with one bottle.', () => {
        state.inventory![InventoryId.Bottle] = 1;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 4 );
      } );

      it( 'is six bars with two bottles.', () => {
        state.inventory![InventoryId.Bottle] = 2;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 6 );
      } );

      it( 'is eight bars with three bottles.', () => {
        state.inventory![InventoryId.Bottle] = 3;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 8 );
      } );

      it( 'is ten bars with four bottles.', () => {
        state.inventory![InventoryId.Bottle] = 4;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 10 );
      } );
    } );
  } );

  describe( 'on hard difficulty', () => {
    beforeEach( () => {
      state.settings!.itemFunctionality = ItemFunctionality.Hard;
    } );

    describe( 'and no half magic', () => {
      beforeEach( () => {
        state.inventory![InventoryId.Magic] = 0;
      } );

      it( 'is one and a half bars with one bottle.', () => {
        state.inventory![InventoryId.Bottle] = 1;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 1.5 );
      } );

      it( 'is two bars with two bottles.', () => {
        state.inventory![InventoryId.Bottle] = 2;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 2 );
      } );

      it( 'is two and a half bars with three bottles.', () => {
        state.inventory![InventoryId.Bottle] = 3;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 2.5 );
      } );

      it( 'is three bars with four bottles.', () => {
        state.inventory![InventoryId.Bottle] = 4;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 3 );
      } );
    } );

    describe( 'and half magic', () => {
      beforeEach( () => {
        state.inventory![InventoryId.Magic] = 1;
      } );

      it( 'is three bars with one bottle.', () => {
        state.inventory![InventoryId.Bottle] = 1;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 3 );
      } );

      it( 'is four bars with two bottles.', () => {
        state.inventory![InventoryId.Bottle] = 2;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 4 );
      } );

      it( 'is five bars with three bottles.', () => {
        state.inventory![InventoryId.Bottle] = 3;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 5 );
      } );

      it( 'is six bars with four bottles.', () => {
        state.inventory![InventoryId.Bottle] = 4;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 6 );
      } );
    } );
  } );

  describe( 'on expert difficulty', () => {
    beforeEach( () => {
      state.settings!.itemFunctionality = ItemFunctionality.Expert;
    } );

    describe( 'and no half magic', () => {
      beforeEach( () => {
        state.inventory![InventoryId.Magic] = 0;
      } );

      it( 'is one and a quarter bars with one bottle.', () => {
        state.inventory![InventoryId.Bottle] = 1;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 1.25 );
      } );

      it( 'is one and a half with two bottles.', () => {
        state.inventory![InventoryId.Bottle] = 2;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 1.5 );
      } );

      it( 'is one and three quarters bars with three bottles.', () => {
        state.inventory![InventoryId.Bottle] = 3;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 1.75 );
      } );

      it( 'is two bars with four bottles.', () => {
        state.inventory![InventoryId.Bottle] = 4;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 2 );
      } );
    } );

    describe( 'and half magic', () => {
      beforeEach( () => {
        state.inventory![InventoryId.Magic] = 1;
      } );

      it( 'is two and a half bars with one bottle.', () => {
        state.inventory![InventoryId.Bottle] = 1;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 2.5 );
      } );

      it( 'is three bars with two bottles.', () => {
        state.inventory![InventoryId.Bottle] = 2;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 3 );
      } );

      it( 'is three and a half bars with three bottles.', () => {
        state.inventory![InventoryId.Bottle] = 3;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 3.5 );
      } );

      it( 'is four bars with four bottles.', () => {
        state.inventory![InventoryId.Bottle] = 4;

        Selector( getAvailableMagicBars ).expect( state ).toReturn( 4 );
      } );
    } );
  } );
} );
