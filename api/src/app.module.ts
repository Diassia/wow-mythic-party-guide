import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BattleNetController } from './battlenet.controller';
import { BattleNetModule } from './battleNet.module';
import { BattleNetService } from './battleNet.service';

@Module({
  imports: [BattleNetModule, HttpModule],
  controllers: [AppController, BattleNetController],
  providers: [AppService, BattleNetService],
})
export class AppModule {}
