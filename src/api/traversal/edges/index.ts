import { entranceEdges } from './entrances';
import { lightCaveEdges } from './light-caves';
import lightWorldEdges from './light-world';
import { menuEdges } from './save';
import { whirlpoolEdges } from './whirlpools';

const fallbackEdges = menuEdges
  .concat( entranceEdges )
  .concat( whirlpoolEdges )
  .concat( lightWorldEdges )
  .concat( lightCaveEdges );

export { fallbackEdges };
