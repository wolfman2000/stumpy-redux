import React from 'react';
import { useSelector } from 'react-redux';

import NodeId from '../../api/traversal/nodes/node-id';

import { StumpyState } from '../../store/reducers';
import { isInverted } from '../../store/selectors/settings';

import dwInverted from '../../assets/dark-inverted.png';
import dwOriginal from '../../assets/dark-original.png';

import Location from './location';

import './world.css';

interface IWorldProps {
  nodes?: NodeId[];
}

const DarkWorld: React.FC<IWorldProps> = ( {
  children,
  nodes,
} ) => {
  const inverted = useSelector<StumpyState, boolean>(
    isInverted,
  );

  const mapImage = () => inverted ? dwInverted : dwOriginal;

  const style = {
    backgroundImage: `url(${mapImage()})`,
  };

  const allLocations = ( node: NodeId ) => {
    return <Location key={node} nodeId={node} />;
  };

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

export default DarkWorld;
