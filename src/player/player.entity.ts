import { Attribute } from 'src/attribute/attributes.entity';
import { Card } from 'src/card/card.entitiy';

export class Player {
  id: number;
  baseAttributes: Attribute;
  currentAttributes: Attribute;
  handCards: Card[];
}
