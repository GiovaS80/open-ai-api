import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatAiService } from './chat-ai.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';
import { SetSelectedModel } from './model/sect-selected-model';

@Controller('chat-ai')
export class ChatAiController {
    constructor(private readonly service: ChatAiService) { }

    @Post("/message")
    getModelAnswer(@Body() data: GetAiModelAnswer) {
        return this.service.getModelAnswer(data.question)
    }//end getModelAnswer

    @Get("/list-model")
    listModels() {
        return this.service.listModels()
    }//end listModels

    @Post("/set-model")
    setModel(@Body() data: SetSelectedModel) {
        return this.service.setModelId(data.modelId)
    }//end setModel

}//end class ChatAiController
