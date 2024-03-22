import { IsEmpty, IsNotEmpty, IsString } from "class-validator";


export class StudentDetailsDto {

    @IsEmpty({ message: 'You cannot provide this field.' })
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    class: string;

    @IsNotEmpty()
    @IsString()
    city: string;


}