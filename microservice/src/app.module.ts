
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisStreamsClientModule } from './external/redis-streams-transport';

@Module({
  imports: [
    RedisStreamsClientModule.register({
      url: 'redis://localhost:6379',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
