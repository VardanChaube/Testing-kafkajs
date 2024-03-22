import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";


export class CreateMarksDto {

    @IsOptional()
    @IsNumber()
    English: number;

    @IsOptional()
    @IsNumber()
    Hindi: number;

    @IsOptional()
    @IsNumber()
    Maths: number;

    @IsOptional()
    @IsNumber()
    Science: number;

    @IsOptional()
    @IsNumber()
    SocialScience: number;

}