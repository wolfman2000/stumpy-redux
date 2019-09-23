import { darkCaveEdges } from './caves';
import dungeonEdges from './dungeons';
import { darkEntranceEdges } from './entrances';
import { darkMirrorEdges } from './mirror';
import { darkOverworldEdges } from './overworld';

export default darkCaveEdges
  .concat( darkEntranceEdges )
  .concat( darkMirrorEdges )
  .concat( darkOverworldEdges )
  .concat( dungeonEdges );
