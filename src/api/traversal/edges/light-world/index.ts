import { lightCaveEdges } from './caves';
import dungeonEdges from './dungeons';
import { entranceEdges } from './entrances';
import { lightMirrorEdges } from './mirror';
import { lightOverworldEdges } from './overworld';

export default lightMirrorEdges
  .concat( lightOverworldEdges )
  .concat( lightCaveEdges )
  .concat( entranceEdges )
  .concat( dungeonEdges );
