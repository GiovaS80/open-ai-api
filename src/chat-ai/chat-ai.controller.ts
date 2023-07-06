import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatAiService } from './chat-ai.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';

@Controller('chat-ai')
export class ChatAiController {
    constructor(private readonly service: ChatAiService) { }

    @Post("/message")
    getModelAnswer(@Body() data: GetAiModelAnswer) {
        return this.service.getModelAnswer(data.question)
    }//end getModelAnswer

    @Get("/model")
    listModels() {
        return this.service.listModels()
    }//end listModels

}//end class ChatAiController
