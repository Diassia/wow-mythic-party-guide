import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BattleNetController } from './battleNet.controller';

@Module({
  imports: [
    // HttpModule.register({
    //   baseURL: 'eu.api.blizzard.com',
    // }),
    HttpModule,
  ],
  providers: [BattleNetController],
  controllers: [],
})
export class BattleNetModule {}
