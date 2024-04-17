/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { BackendType, CommonTypes } from '@andres-monorepo/types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  const commonVariable: CommonTypes = {
    value: 'this is a common variable',
  };

  const backendVariable: BackendType = {
    value: 'this is a backend variable',
  };

  console.log('doing minor change');
  console.log({ commonVariable, backendVariable });
}

bootstrap();
