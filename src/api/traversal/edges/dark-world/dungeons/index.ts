import ganonsTowerEdges from './ganons-tower';
import icePalaceEdges from './ice-palace';
import miseryMireEdges from './misery-mire';
import palaceOfDarknessEdges from './palace-of-darkness';
import skullWoodsEdges from './skull-woods';
import swampPalaceEdges from './swamp-palace';
import thievesTownEdges from './thieves-town';
import turtleRockEdges from './turtle-rock';

export default palaceOfDarknessEdges
  .concat( swampPalaceEdges )
  .concat( skullWoodsEdges )
  .concat( thievesTownEdges )
  .concat( icePalaceEdges )
  .concat( miseryMireEdges )
  .concat( turtleRockEdges )
  .concat( ganonsTowerEdges );
