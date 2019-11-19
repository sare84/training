import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoController } from './info/info.controller';
import { InfoService } from './info/info.service';

@Module({
  imports: [],
  controllers: [AppController, InfoController],
  providers: [AppService, InfoService],
})
export class AppModule {}
