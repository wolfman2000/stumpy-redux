import { Reducer } from 'redux-testkit';

import { decrementInventory, doNothing, incrementInventory, setInventory } from '../actions';

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
    };

    const result = inventoryReducer( undefined, incrementInventory( payload ) );

    expect( result[InventoryId.Shovel].current ).toEqual( 1 );
  } );

  it( 'should reset the shovel to unclaimed if two increment commands are passed.', () => {
    const payload = {
      key: InventoryId.Shovel,
    };

    const firstGo = inventoryReducer( undefined, incrementInventory( payload ) );

    const secondGo = inventoryReducer( firstGo, incrementInventory( payload ) );

    expect( secondGo[InventoryId.Shovel].current ).toEqual( 0 );
  });

  it( 'should update the shovel upon receiving a decrement command.', () => {
    const payload = {
      key: InventoryId.Shovel,
    };

    const result = inventoryReducer( undefined, decrementInventory( payload ) );

    expect( result[InventoryId.Shovel].current ).toEqual( 1 );
  } );

  it( 'should reset the shovel to unclaimed if two decrement commands are passed.', () => {
    const payload = {
      key: InventoryId.Shovel,
    };

    const firstGo = inventoryReducer( undefined, decrementInventory( payload ) );

    const secondGo = inventoryReducer( firstGo, decrementInventory( payload ) );

    expect( secondGo[InventoryId.Shovel].current ).toEqual( 0 );
  } );

  it( 'should set the shovel arbitrarily if a value is passed in.', () => {
    const payload = {
      key: InventoryId.Shovel,
      value: 3,
    };

    const firstGo = inventoryReducer( undefined, setInventory( payload ) );

    const secondGo = inventoryReducer( firstGo, incrementInventory( payload ) );

    expect( firstGo[InventoryId.Shovel].current ).toEqual( 3 );
    expect( secondGo[InventoryId.Shovel].current ).toEqual( 0 );
  } );
} );
