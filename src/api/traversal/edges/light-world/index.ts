import { lightCaveEdges } from './caves';
import { entranceEdges } from './entrances';
import { lightMirrorEdges } from './mirror';
import { lightOverworldEdges } from './overworld';

export default lightMirrorEdges
  .concat( lightOverworldEdges )
  .concat( lightCaveEdges )
  .concat( entranceEdges );
