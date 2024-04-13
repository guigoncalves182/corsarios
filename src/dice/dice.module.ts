import { Module } from '@nestjs/common';
import { DiceService } from './dice.service';

@Module({
  providers: [DiceService],
})
export class DiceModule {}
