import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class GetAiModelAnswer {

    @ApiProperty({
        example: 'What is your name',
        description: 'required',
        required: true,
        type: 'string',
    })
    @IsString()
    @IsNotEmpty()
    question: string

    @ApiProperty({
        example: 'text-davinci-003',
        description: 'NOT required',
        required: false,
        type: 'string',
    })
    @IsString()
    @IsOptional()
    modelId: string

    @ApiProperty({
        example: '0.9',
        description: 'NOT required',
        required: false,
        type: 'number',
    })
    @IsNumber()
    @IsOptional()
    temperature: number

    @ApiProperty({
        example: '2048',
        description: 'NOT required',
        required: false,
        type: 'number',
    })
    @IsNumber()
    @IsOptional()
    maxTokens:number
    
}//end class GetAiModelAnswer