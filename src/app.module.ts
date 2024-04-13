import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapModule } from './map/map.module';
import { CardModule } from './card/card.module';
import { EffectModule } from './effect/effect.module';
import { AttributeModule } from './attribute/attribute.module';

import { MapTileModule } from './map-tile/map-tile.module';
import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';
import { DiceModule } from './dice/dice.module';

@Module({
  imports: [
    MapModule,
    CardModule,
    EffectModule,
    AttributeModule,
    MapTileModule,
    GameModule,
    PlayerModule,
    DiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
