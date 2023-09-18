import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Global pipe, don't repeat yourself
  app.useGlobalPipes(
    new ValidationPipe({
      // Whitelist solo deja data establecida en DTO
      whitelist: true,
      // Tira error si mandan data que no esta en DTO
      forbidNonWhitelisted: true,
    })
  )

  await app.listen(3000);
}
bootstrap();
