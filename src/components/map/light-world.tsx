import React from 'react';
import { useSelector } from 'react-redux';

import NodeId from '../../api/traversal/nodes/node-id';

import { StumpyState } from '../../store/reducers';
import { isInverted } from '../../store/selectors/settings';

import lwInverted from '../../assets/light-inverted.png';
import lwOriginal from '../../assets/light-original.png';

import Location from './location';

import './world.css';

interface IWorldProps {
  nodes?: NodeId[];
}

const LightWorld: React.FC<IWorldProps> = ( {
  children,
  nodes,
} ) => {
  const inverted = useSelector<StumpyState, boolean>(
    isInverted,
  );

  const mapImage = () => inverted ? lwInverted : lwOriginal;

  const style = {
    backgroundImage: `url(${mapImage()})`,
  };

  const allLocations = ( node: NodeId ) => {
    return <Location key={node} nodeId={node} />;
  };

  const getLocations = () => {
    const nodes = [ NodeId.LIGHT_LINKS_HOUSE_ENTRANCE, NodeId.LIGHT_WELL_ENTRANCE ];

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
