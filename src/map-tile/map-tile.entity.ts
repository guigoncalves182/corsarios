import { Effect } from 'src/effect/effect.entity';
import { EMapTileType } from './enums/map-tile-type.enum';

export class MapTile {
  players: any;
  type: EMapTileType;
  activeEffects: Effect[];
}
