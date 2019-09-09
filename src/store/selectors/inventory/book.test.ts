// tslint:disable-next-line: no-implicit-dependencies
import { Selector } from 'redux-testkit';

import InventoryId from '../../../api/inventory/inventory-id';

import { StumpyState } from '../../reducers';

import { hasBook, nextBook, prevBook } from './book';

describe( 'The book based selectors', () => {
  it( 'can see if we have the book.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Book] = 0;

    Selector( hasBook ).expect( state ).toReturn( false );
  } );

  it( 'can determine the next valid value for the book from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Book] = 0;

    Selector( nextBook ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the next valid value for the book from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Book] = 1;

    Selector( nextBook ).expect( state ).toReturn( 0 );
  } );

  it( 'can determine the previous valid value for the book from not having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Book] = 0;

    Selector( prevBook ).expect( state ).toReturn( 1 );
  } );

  it( 'can determine the previous valid value for the book from having one.', () => {
    const state: Partial<StumpyState> = {
      inventory: {},
    };

    state.inventory![InventoryId.Book] = 1;

    Selector( prevBook ).expect( state ).toReturn( 0 );
  } );
} );
