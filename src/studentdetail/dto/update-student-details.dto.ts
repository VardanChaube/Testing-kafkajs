import { IsEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateStudentDetailsDto {

    @IsEmpty({ message: 'You cannot provide this field.' })
    id: number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    class: string;

    @IsOptional()
    @IsString()
    city: string;


}