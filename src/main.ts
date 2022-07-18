import { Logger } from '@nestjs/common';

if (process.env.IS_TS_NODE) {
  Logger.log('Registering module-alias');
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
