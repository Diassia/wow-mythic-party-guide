import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { BattleNetModule } from './battleNet.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
