// tslint:disable-next-line: no-implicit-dependencies
import { Reducer } from 'redux-testkit';

import {
  doNothing,
  dungeonSetBigKey,
  dungeonSetBossDead,
  dungeonSetBossId,
  dungeonSetChestsOpened,
  dungeonSetMedallion,
  dungeonSetReward,
  dungeonSetSmallKey,
} from '../actions';

import { dungeonReducer } from './dungeons';

import { fallbackDungeonMaps } from '../../api/dungeon/';
import {
  IBigKeyDungeon,
  IBossDungeon,
  IChangingBossDungeon,
  IMedallionDungeon,
  ISmallKeyDungeon,
} from '../../api/dungeon/dungeon';
import { DungeonId } from '../../api/dungeon/dungeon-id';
import { Medallion } from '../../api/dungeon/medallion';

describe( 'The dungeon reducer', () => {
  it( 'should not affect the state if a different action is passed in.', () => {
    Reducer( dungeonReducer ).expect( doNothing() ).toReturnState( fallbackDungeonMaps );
  } );

  it( 'should not update the big key value for a dungeon with no big key.', () => {
    Reducer( dungeonReducer ).expect( dungeonSetBigKey( {
      key: 0,
      value: true,
    } ) ).toReturnState( fallbackDungeonMaps );
  } );

  it( 'should update the big key value for a dungeon that has a big key.', () => {
    const payload = {
      key: 2,
      value: true,
    };

    const result = dungeonReducer( undefined, dungeonSetBigKey( payload ) );

    expect( ( result[2] as IBigKeyDungeon ).hasBigKey ).toBeTruthy();
  } );

  it( 'should not update the boss defeated value for a dungeon with no boss.', () => {
    const payload = {
      key: 0,
      value: true,
    };

    Reducer( dungeonReducer )
      .withState( fallbackDungeonMaps )
      .expect( dungeonSetBossDead( payload ) )
      .toReturnState( fallbackDungeonMaps );
  } );

  it( 'should update the boss defeated value for a dungeon that has a boss.', () => {
    const payload = {
      key: 2,
      value: true,
    };

    const result = dungeonReducer( undefined, dungeonSetBossDead( payload ) );

    expect( ( result[2] as IBossDungeon ).isBossDefeated ).toBeTruthy();
  } );

  it( 'should not update the boss ID value for a dungeon with no boss.', () => {
    const payload = {
      key: 0,
      value: 6,
    };

    Reducer( dungeonReducer )
      .withState( fallbackDungeonMaps )
      .expect( dungeonSetBossId( payload ) )
      .toReturnState( fallbackDungeonMaps );
  } );

  it( 'should update the boss ID value for a dungeon that has a boss.', () => {
    const payload = {
      key: 2,
      value: 6,
    };

    const result = dungeonReducer( undefined, dungeonSetBossId( payload ) );

    expect( ( result[2] as IChangingBossDungeon ).bossId ).toBe( 6 );
  } );

  it( 'should not update the boss reward value for a dungeon with no boss.', () => {
    const payload = {
      key: 0,
      value: 2,
    };

    Reducer( dungeonReducer )
      .withState( fallbackDungeonMaps )
      .expect( dungeonSetReward( payload ) )
      .toReturnState( fallbackDungeonMaps );
  } );

  it( 'should update the boss reward value for a dungeon that has a boss.', () => {
    const payload = {
      key: 2,
      value: 2,
    };

    const result = dungeonReducer( undefined, dungeonSetReward( payload ) );

    expect( ( result[2] as IChangingBossDungeon ).reward ).toBe( 2 );
  } );

  it( 'should not update the small key value for a dungeon with no small keys.', () => {
    const payload = {
      key: 2,
      value: 1,
    };

    Reducer( dungeonReducer )
      .withState( fallbackDungeonMaps )
      .expect( dungeonSetSmallKey( payload ) )
      .toReturnState( fallbackDungeonMaps );
  } );

  it( 'should update the small key value for a dungeon that has small keys.', () => {
    const payload = {
      key: 3,
      value: 1,
    };

    const result = dungeonReducer( undefined, dungeonSetSmallKey( payload ) );

    expect( ( result[3] as ISmallKeyDungeon ).smallKeysFound ).toBe( 1 );
  } );

  it( 'should not update the medallion value for a dungeon with no medallion entrance.', () => {
    const payload = {
      key: DungeonId.ThievesTown,
      value: Medallion.Quake,
    };

    Reducer( dungeonReducer )
      .withState( fallbackDungeonMaps )
      .expect( dungeonSetMedallion( payload ) )
      .toReturnState( fallbackDungeonMaps );
  } );

  it( 'should update the boss reward value for a dungeon that has a boss.', () => {
    const payload = {
      key: DungeonId.MiseryMire,
      value: Medallion.Quake,
    };

    const result = dungeonReducer( undefined, dungeonSetMedallion( payload ) );

    expect( ( result[DungeonId.MiseryMire] as IMedallionDungeon ).medallion ).toBe( Medallion.Quake );
  } );

  it( 'should update the chests opened value for any dungeon.', () => {
    const payload = {
      key: DungeonId.MiseryMire,
      value: 1,
    };

    const result = dungeonReducer( undefined, dungeonSetChestsOpened( payload ) );

    expect( ( result[DungeonId.MiseryMire] ).chestsOpened ).toBe( 1 );
  } );
} );
