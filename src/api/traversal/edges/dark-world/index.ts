import { darkCaveEdges } from './caves';
import { darkEntranceEdges } from './entrances';
import { darkMirrorEdges } from './mirror';
import { darkOverworldEdges } from './overworld';

export default darkCaveEdges
  .concat( darkEntranceEdges )
  .concat( darkMirrorEdges )
  .concat( darkOverworldEdges );
