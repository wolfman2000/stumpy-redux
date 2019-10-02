import React from 'react';
import { useSelector } from 'react-redux';

import entranceLocations from '../../api/traversal/locations';
import NodeId from '../../api/traversal/nodes/node-id';

import { StumpyState } from '../../store/reducers';
import { isInverted } from '../../store/selectors/settings';
import { getLightWorldNodes } from '../../store/selectors/traversals';

import lwInverted from '../../assets/light-inverted.png';
import lwOriginal from '../../assets/light-original.png';

import Location from './location';

import './world.css';

const LightWorld: React.FC = ( {
  children,
} ) => {
  const inverted = useSelector<StumpyState, boolean>(
    isInverted,
  );

  const mapImage = () => inverted ? lwInverted : lwOriginal;

  const style = {
    backgroundImage: `url(${mapImage()})`,
  };

  const allLocations = ( node: NodeId ) => {
    return (
      <Location
        key={node}
        node={node}
        location={entranceLocations.get( node )!}
      />
    );
  };

  const nodes = useSelector<StumpyState, NodeId[]>(
    getLightWorldNodes,
  );

  const getLocations = () => {
    if ( !nodes ) {
      return <React.Fragment />;
    }
    return nodes.map( allLocations );
  };

  return (
    <React.Fragment>
      <section style={style}>
        {getLocations()}
      </section>
    </React.Fragment>
  ); // <div>Temp</div>;
};

export default LightWorld;
