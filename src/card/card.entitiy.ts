import { Effect } from 'src/effect/effect.entity';
import { ECardType } from './enums/card-type.enum';

export class Card {
  id: number;
  title: string;
  description: string;
  type: ECardType;
  effects: Effect[];
  created_at: Date;
  updated_at: Date;
}
