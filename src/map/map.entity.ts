import { Effect } from 'src/effect/effect.entity';
import { MapTile } from 'src/map-tile/map-tile.entity';

export class Map {
  id: number;
  tiles: MapTile[][];
  name: string;
  description: string;
  activeEffects: Effect[];
  createdAt: Date;
  updatedAt: Date;
}
