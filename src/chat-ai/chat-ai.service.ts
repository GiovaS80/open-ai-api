import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi, CreateCompletionRequest } from "openai";

const DEFAULT_MODEL_ID = "text-davinci-003"
const DEFAULT_TEMPERATURE = 0.9

@Injectable()
export class ChatAiService {
    private readonly openAiApi:OpenAIApi
    constructor(){
        const configuration = new Configuration({
            organization: process.env.ORGANIZATION_ID,
            apiKey: process.env.OPENAI_API_KEY,
        });

        this.openAiApi = new OpenAIApi(configuration);
    }//end constructor

    async getModelAnswer(question:string,temperature?:number){
        try {
            const params:CreateCompletionRequest = {
                prompt:question,
                model:DEFAULT_MODEL_ID,
                temperature:temperature!=undefined?temperature:DEFAULT_TEMPERATURE
            }
            const response = await this.openAiApi.createCompletion(params)
            
            const {data} = response
            if(data.choices.length){return data.choices}

            return response.data
        } catch (error) {
            
        }
    }//end getModelAnswer

}//end class ChatAiService
