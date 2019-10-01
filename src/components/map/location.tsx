import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Availability from '../../api/traversal/availabilities/availability';
import AvailabilityLogic from '../../api/traversal/availabilities/availability-logic';
import entranceLocations from '../../api/traversal/locations';
import EntranceType from '../../api/traversal/nodes/entrance-type';
import NodeId from '../../api/traversal/nodes/node-id';

import { StumpyState } from '../../store/reducers';
import { makeGetAccessibility } from '../../store/selectors/traversals';

import './location.css';

interface ILocationProps {
  nodeId: NodeId;
}

const Location: React.FC<ILocationProps> = ( {
  children,
  nodeId,
} ) => {

  const memoedAvailability = useMemo(
    makeGetAccessibility,
    [ nodeId ],
  );

  const availabilityLogic = useSelector<StumpyState, AvailabilityLogic>(
    ( state: StumpyState ) => memoedAvailability( state, nodeId ),
  );

  const getLocationData = () => {
    return entranceLocations.get( nodeId )!;
  };

  const renderShape = () => {
    const location = getLocationData();
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
    const location = getLocationData();
    return {
      left: location.left + '%',
      top: location.top + '%',
    };
  };

  const getClasses = (): string => {
    const names = ['location'];

    if ( availabilityLogic.usesGlitches ) {
      names.push( 'glitches' );
    }

    switch ( availabilityLogic.availability ) {
      case Availability.Available:
        names.push( 'available' );
        break;
      case Availability.Possible:
        names.push( 'possible' );
        break;
      case Availability.Visible:
        names.push( 'visible' );
        break;
      case Availability.Unavailable:
        names.push( 'unavailable' );
        break;
    }

    return names.join( ' ' );
  };

  // TODO: Replace with a visibility state check.
  if ( false ) {
    return ( <React.Fragment /> );
  }

  return (
    <React.Fragment>
      <div className={getClasses()} style={getStyle()} >
        <svg viewBox='0 0 100 100'>
          {renderShape()}
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Location;
