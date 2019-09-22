import castleTowerEdges from './castle-tower';
import desertPalaceEdges from './desert-palace';
import easternPalaceEdges from './eastern-palace';
import hyruleCastleEdges from './hyrule-castle';
import towerOfHeraEdges from './tower-of-hera';

export default hyruleCastleEdges
  .concat( easternPalaceEdges )
  .concat( desertPalaceEdges )
  .concat( towerOfHeraEdges )
  .concat( castleTowerEdges );
