import "reflect-metadata"
import { Cqrs } from '@/mycena-store/mycena-store.unittest';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  Cqrs.setAppModule(AppModule, app);
}
bootstrap();
