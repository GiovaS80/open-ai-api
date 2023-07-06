import { Body, Controller, Post } from '@nestjs/common';
import { ChatAiService } from './chat-ai.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';

@Controller('chat-ai')
export class ChatAiController {
    constructor(private readonly service:ChatAiService){}

    @Post("/message")
    getModelAnswer(@Body() data:GetAiModelAnswer){
        return this.service.getModelAnswer(data.question)
    }//end getModelAnswer
}//end class ChatAiController
