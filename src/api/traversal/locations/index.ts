import CssLocation from '../nodes/css-location';
import EntranceType from '../nodes/entrance-type';
import NodeConnectionId from '../nodes/node-connection-id';
import NodeId from '../nodes/node-id';

const makeSingleEntranceLocation = ( left: number, top: number ): CssLocation => {
  return {
    entranceType: EntranceType.Single,
    left,
    top,
    visibility: NodeConnectionId.IsEntrance,
  };
};

const makeSingleAlwaysLocation = ( left: number, top: number ): CssLocation => {
  return {
    entranceType: EntranceType.Single,
    left,
    top,
    visibility: NodeConnectionId.Always,
  };
};

const makeMultipleAlwaysLocation = ( left: number, top: number ): CssLocation => {
  return {
    entranceType: EntranceType.Multiple,
    left,
    top,
    visibility: NodeConnectionId.Always,
  };
};

const makePitEntranceAlwaysLocation = ( left: number, top: number ): CssLocation => {
  return {
    entranceType: EntranceType.PitEntrance,
    left,
    top,
    visibility: NodeConnectionId.Always,
  };
};

const entranceLocations = new Map<NodeId, CssLocation>( [
  [
    NodeId.LIGHT_KINGS_TOMB_ENTRANCE,
    makeSingleAlwaysLocation( 61.6, 29.6 ),
  ],
  [
    NodeId.LIGHT_SWAMP_ITEM,
    makeSingleAlwaysLocation( 46.8, 93.4 ),
  ],
  [
    NodeId.LIGHT_LINKS_HOUSE_ENTRANCE,
    makeSingleAlwaysLocation( 54.8, 67.9 ),
  ],
  [
    NodeId.LIGHT_SPIRAL_CAVE_ENTRANCE,
    makeMultipleAlwaysLocation( 85.2, 9.3 ),
  ],
  [
    NodeId.LIGHT_TAVERN_BACK_ENTRANCE,
    makeSingleAlwaysLocation( 16.2, 57.8 ),
  ],
  [
    NodeId.LIGHT_CUCCO_HOUSE_ENTRANCE,
    makeSingleAlwaysLocation( 8.8, 54.2 ),
  ],
  [
    NodeId.LIGHT_AGINAH_ENTRANCE,
    makeSingleAlwaysLocation( 20, 82.6 ),
  ],
  [
    NodeId.LIGHT_TAVERN_BACK_ENTRANCE,
    makeSingleAlwaysLocation( 16.2, 57.8 ),
  ],
  [
    NodeId.LIGHT_SAHASRAHLA_ENTRANCE,
    makeSingleAlwaysLocation( 81.4, 41.4 ),
  ],
  [
    NodeId.LIGHT_WELL_ENTRANCE,
    makePitEntranceAlwaysLocation( 3, 41 ),
  ],
] );

export default entranceLocations;
