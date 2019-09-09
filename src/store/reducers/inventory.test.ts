import { Reducer } from 'redux-testkit';

import { doNothing, setInventory } from '../actions';

import { inventoryReducer } from './inventory';

import { fallbackInventory } from '../../api/inventory';
import InventoryId from '../../api/inventory/inventory-id';

describe( 'The inventory reducer', () => {
  it( 'should not affect the state if a different action is passed in.', () => {
    Reducer( inventoryReducer ).expect( doNothing() ).toReturnState( fallbackInventory );
  } );

  it( 'should update the shovel upon receiving an increment command.', () => {
    const payload = {
      key: InventoryId.Shovel,
      value: 1,
    };

    const result = inventoryReducer( undefined, setInventory( payload ) );

    expect( result[InventoryId.Shovel] ).toEqual( 1 );
  } );

  it( 'should reset the shovel to unclaimed if two increment commands are passed.', () => {
    const firstGo = inventoryReducer( undefined, setInventory( {
      key: InventoryId.Shovel,
      value: 1,
    } ) );

    const secondGo = inventoryReducer( firstGo, setInventory( {
      key: InventoryId.Shovel,
      value: 0,
    } ) );

    expect( secondGo[InventoryId.Shovel] ).toEqual( 0 );
  } );

  it( 'should update the shovel upon receiving a decrement command.', () => {
    const payload = {
      key: InventoryId.Shovel,
      value: 1,
    };

    const result = inventoryReducer( undefined, setInventory( payload ) );

    expect( result[InventoryId.Shovel] ).toEqual( 1 );
  } );

  it( 'should reset the shovel to unclaimed if two decrement commands are passed.', () => {
    const payload = {
      key: InventoryId.Shovel,
    };

    const firstGo = inventoryReducer( undefined, setInventory( {
      key: InventoryId.Shovel,
      value: 1,
    } ) );

    const secondGo = inventoryReducer( firstGo, setInventory( {
      key: InventoryId.Shovel,
      value: 0,
    } ) );

    expect( secondGo[InventoryId.Shovel] ).toEqual( 0 );
  } );

  it( 'should set the shovel arbitrarily if a value is passed in.', () => {
    const payload = {
      key: InventoryId.Shovel,
      value: 3,
    };

    const firstGo = inventoryReducer( undefined, setInventory( payload ) );

    const secondGo = inventoryReducer( firstGo, setInventory( {
      key: InventoryId.Shovel,
      value: 0,
    } ) );

    expect( firstGo[InventoryId.Shovel] ).toEqual( 3 );
    expect( secondGo[InventoryId.Shovel] ).toEqual( 0 );
  } );
} );
