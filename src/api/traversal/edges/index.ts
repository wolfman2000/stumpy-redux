import darkWorldEdges from './dark-world';
import lightWorldEdges from './light-world';
import { menuEdges } from './save';
import { whirlpoolEdges } from './whirlpools';

const fallbackEdges = menuEdges
  .concat( whirlpoolEdges )
  .concat( lightWorldEdges )
  .concat( darkWorldEdges );

export { fallbackEdges };
