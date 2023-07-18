import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatAiModule } from './chat-ai/chat-ai.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ChatAiModule,ConfigModule.forRoot()],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
