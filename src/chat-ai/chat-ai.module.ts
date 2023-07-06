import { Module } from '@nestjs/common';
import { ChatAiController } from './chat-ai.controller';
import { ChatAiService } from './chat-ai.service';

@Module({
  controllers: [ChatAiController],
  providers: [ChatAiService]
})
export class ChatAiModule {}
