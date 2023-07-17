import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class GetAiModelAnswer {

    @ApiProperty({
        description: 'your name',
        type: 'string',
    })
    @IsString()
    @IsNotEmpty()
    question: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    modelId: string

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    temperature: number

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    maxTokens:number
    
}//end class GetAiModelAnswer