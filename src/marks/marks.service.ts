import { Injectable } from '@nestjs/common';
import { Marks } from './marks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarksDto } from './dtos/create-marks.dto';

@Injectable()
export class MarksService {
    constructor(
        @InjectRepository(Marks)
        private readonly repo: Repository<Marks>,
    ) { }

    async findAll(): Promise<Marks[]> {
        return await this.repo.find();
    }

    async create(marks: CreateMarksDto): Promise<Marks> {

        const data = {
            English: marks.English,
            Hindi: marks.Hindi,
            Maths: marks.Maths,
            Science: marks.Science,
            SocialScience: marks.SocialScience,
            studentDetailId: marks.studentDetailsId
        }

        console.log('data ', data);


        const marksObj = await this.repo.create({
            ...data
        });

        console.log(marksObj);

        return await this.repo.save(marksObj);

    }
}
