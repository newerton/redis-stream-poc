
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CustomStrategy } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RedisStreamStrategy } from './external/redis-streams-transport';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.createMicroservice<CustomStrategy>(AppModule, {
    strategy: new RedisStreamStrategy({
      consumerGroup: 'example-group',
      consumer: 'example-consumer',
    }),
  });

  await app.listen();
  logger.log(`Microservice is listening on port ${3001}`);
}
bootstrap();
