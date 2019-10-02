import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Availability from '../../api/traversal/availabilities/availability';
import AvailabilityLogic from '../../api/traversal/availabilities/availability-logic';
import entranceLocations from '../../api/traversal/locations';
import CssLocation from '../../api/traversal/nodes/css-location';
import EntranceType from '../../api/traversal/nodes/entrance-type';
import NodeId from '../../api/traversal/nodes/node-id';

import { StumpyState } from '../../store/reducers';
import { makeGetAccessibility } from '../../store/selectors/traversals';

import './location.css';

interface ILocationProps {
  node: NodeId;
  location: CssLocation;
}

const Location: React.FC<ILocationProps> = ( {
  children,
  node,
  location,
} ) => {

  const memoedAvailability = useMemo(
    makeGetAccessibility,
    location.treasureNodes,
  );

  const localAvailability = ( state: StumpyState ) => {
    // tslint:disable-next-line: no-unused-expression
    node = node;
    return location.treasureNodes.map( ( n ) => memoedAvailability( state, n ) );
  };

  const availabilityLogics = useSelector<StumpyState, AvailabilityLogic[]>(
    localAvailability,
  );

  const renderShape = () => {
    // TODO: Add event handler on the rendered shape.
    switch ( location.entranceType ) {
      case EntranceType.Single:
        return (
          <rect
            width='100%'
            height='100%'
          />
        );
      case EntranceType.Outside:
        return (
          <circle
            cx='50%'
            cy='50%'
            r='40%'
            width='100%'
            height='100%'
          />
        );
      case EntranceType.PitEntrance:
        return (
          <polygon
            points='5,5 95,5 50,95'
            width='100%'
            height='100%'
          />
        );
      case EntranceType.PitExit:
        return (
          <polygon
            points='5,95 95,95 50,5'
            width='100%'
            height='100%'
          />
        );
      case EntranceType.Multiple:
        return (
          <polygon
            points='50,5 95,50 50,95 5,50'
            width='100%'
            height='100%'
          />
        );
      default:
        return;
    }
  };

  const getStyle = (): React.CSSProperties => {
    return {
      left: location.left + '%',
      top: location.top + '%',
    };
  };

  const areAllAvailable = ( a: AvailabilityLogic ) => a.availability === Availability.Available;

  const areAllAvailableOrPossible = ( a: AvailabilityLogic ) => {
    return a.availability === Availability.Available ||
      a.availability === Availability.Possible;
  };

  const areNotUnavailable = ( a: AvailabilityLogic ) => a.availability !== Availability.Unavailable;

  const getClasses = (): string => {
    const names = ['location'];

    if ( availabilityLogics.some( ( a ) => a.usesGlitches ) ) {
      names.push( 'glitches' );
    }

    if ( availabilityLogics.every( areAllAvailable ) ) {
      names.push( 'available' );
    } else if ( availabilityLogics.some( areAllAvailableOrPossible ) ) {
      names.push( 'possible' );
    } else if ( availabilityLogics.some( areNotUnavailable ) ) {
      names.push( 'visible' );
    } else {
      names.push( 'unavailable' );
    }

    return names.join( ' ' );
  };

  // TODO: Replace with a visibility state check.
  if ( false ) {
    return ( <React.Fragment /> );
  }

  return (
    <React.Fragment>
      <div id={`node_${node}`} className={getClasses()} style={getStyle()} >
        <svg viewBox='0 0 100 100'>
          {renderShape()}
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Location;
