import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { IChangingBossDungeon, MedallionDungeon, ZeldaDungeon } from '../api/dungeon/dungeon';
import NodeId from '../api/traversal/nodes/node-id';

import { StumpyState } from '../store/reducers';
import { makeGetDungeon } from '../store/selectors/dungeons';
import { makeGetAccessibility } from '../store/selectors/traversals';

import AvailabilityLogic from '../api/traversal/availabilities/availability-logic';
import { unavailable, available } from '../api/traversal/availabilities';
import Availability from '../api/traversal/availabilities/availability';

interface IDungeonProps {
  dungeonId: number;
  treasureNodes: NodeId[];
}

interface IStrictDungeonprops {
  dungeon: ZeldaDungeon;
}

const MedallionData: React.FC<IStrictDungeonprops> = ( {
  children,
  dungeon,
} ) => {
  const medDungeon = ( dungeon as MedallionDungeon );
  if ( !medDungeon || medDungeon.medallion === undefined ) {
    return null;
  }

  return <div>Medallion here.</div>;
};

const SingleDungeonCheckup: React.FC<IDungeonProps> = ( {
  children,
  dungeonId,
  treasureNodes,
} ) => {

  const dungeonCheck = useSelector<StumpyState, ZeldaDungeon | null>(
    ( state ) => makeGetDungeon()( state, dungeonId ),
  );

  const dungeonGood = useMemo(
    makeGetDungeon,
    [ dungeonId ],
  );

  const dungeon = useSelector(
    ( state: StumpyState ) => dungeonGood( state, dungeonId ),
  );

  const nodesGood = useMemo(
    makeGetAccessibility,
    treasureNodes,
  );

  const availability = useSelector(
    ( state: StumpyState ) => {
      return treasureNodes.map( ( n ) => nodesGood( state, n ) );
    },
  );

  if ( !dungeon ) {
    return <div>No dungeon.</div>;
  }

  const MedInfo = () => {
    const medDungeon = dungeon as MedallionDungeon;
    if ( !medDungeon || medDungeon.medallion === undefined ) {
      return null;
    }
    return <div>Medallion here.</div>;
  };

  const AvailabilityInfo = () => {
    const isUnavailable = ( e: AvailabilityLogic ) => e === unavailable;
    if ( availability.every( isUnavailable ) ) {
      return <div>Nothing available.</div>;
    }

    if ( availability.every( ( e ) => e === available ) ) {
      return <div>All available.</div>;
    }

    const someUnavailable = availability.some( isUnavailable );
    if ( someUnavailable ) {
      return <div>It really depends.</div>;
    }

    if ( availability.some( ( e ) => e.availability === Availability.Possible ) ) {
      return <div>Maybe doable?</div>;
    }
    if ( availability.some( ( e ) => e.availability === Availability.Visible ) ) {
      return <div>Something is visible.</div>;
    }
    return <div>All available here.</div>;
  };

  const boss = ( dungeon as IChangingBossDungeon )!.bossId;

  return (
    <div>
      <MedInfo />
      <MedallionData dungeon={dungeon} />
      <AvailabilityInfo />
    </div>
  );
};

export default SingleDungeonCheckup;
