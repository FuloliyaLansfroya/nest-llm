import { Module } from '@nestjs/common';
import { AppController, IndexController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, IndexController],
  providers: [AppService],
})
export class AppModule {}
