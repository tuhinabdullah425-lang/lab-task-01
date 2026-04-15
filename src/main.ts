import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // remove unknown fields
      forbidNonWhitelisted: true, // throw error for extra fields
      transform: true,            // auto convert types
    }),
  );

  await app.listen(3000);
}
bootstrap();