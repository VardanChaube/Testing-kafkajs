import { IsEmpty, IsNotEmpty, IsNumber } from "class-validator";
import { StudentDetail } from "../../studentdetail/student-details.entity";


export class CreateMarksDto {

    @IsEmpty({ message: 'You cannot provide this field.' })
    id: number;

    @IsNotEmpty({ message: 'you cannot provide this id' })
    studentDetailsId: number;

    @IsNotEmpty()
    @IsNumber()
    English: number;

    @IsNotEmpty()
    @IsNumber()
    Hindi: number;

    @IsNotEmpty()
    @IsNumber()
    Maths: number;

    @IsNotEmpty()
    @IsNumber()
    Science: number;

    @IsNotEmpty()
    @IsNumber()
    SocialScience: number;

}