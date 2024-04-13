import { EEffectType } from './enum/effect-type.enum';

export class Effect {
  title: string;
  description: string;
  type: EEffectType;
  value: number;
  attribute: string;
  ispercent: boolean;
}
